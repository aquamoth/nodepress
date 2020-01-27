import { Request, Response } from "express";
import Component from "./component";
import Database from "./database";
import RequestPipeline from "./requestpipeline";
import Plugin from "./plugin";
import { PluginResult } from "./types/pluginresult";

type Constructor<T> = { new(): T };
type Dictionary<T> = {[name: string]: { new(): T }};

export default class Router {
    private components: Dictionary<Component>;// {[name: string]: ComponentClass};
    private plugins: Dictionary<Plugin>;// {[name: string]: ModuleClass};
    
    constructor(db: Database) {
        console.log("Router.ctor");        
        
        const componentNames = ["np-core-page"]; //TODO: Load from database
        const pluginNames = ["np-core-menu"]; //TODO: Load from database

        const componentTask = this.importComponents(componentNames);
        const pluginTask = this.importPlugins(pluginNames);

        Promise.all([componentTask, pluginTask])
            .then(()=>{
                console.log("Router is ready.");        
            });
    }

    private async importComponents(componentNames: string[]){
        this.components = {};
        
        for (const name of componentNames){
            try {
                console.log("Importing component", name);
                const module = await import("../components/" + name);
                const componentClass = module.default as Constructor<Component>;
                this.components[name] = componentClass;
            } catch (error) {
                console.error("Could not import component", name, error);
            }
        }
    }

    private async importPlugins(pluginNames: string[]){
        this.plugins = {};
        
        for (const name of pluginNames){
            try {
                console.log("Importing plugin", name);
                const plugin = await import(`../plugins/${name}/index`);
                const pluginClass = plugin.default as Constructor<Plugin>;
                this.plugins[name] = pluginClass;
            } catch (error) {
                console.error("Could not import plugin", name, error);
            }
        }
    }

    public async middleware (req: Request, res: Response, next: Function) {
        console.log("Router middleware called for", req.url);

        const pipeline = new RequestPipeline(this, req);
        const response = await pipeline.process();

        if (response) {
            res.writeHead(response.statusCode, response.reasonPhrase, response.headers);
            res.end(response.content);
        }
        else {
            next();
        }
    }


    public buildRoute(url: string): Route {

        //TODO: Properly decode url to Route!

        if (url !== "/")
            return null;

        return {
            component: "np-core-page",
            action: "Index",
            parameters: { page: 123 }
        };
    }

    public initializeComponent(componentName: string): Component {
        if (!this.components.hasOwnProperty(componentName))
            return null;

        const componentClass = this.components[componentName];
        const component = new componentClass();
        return component;
    }

    public initializePlugin(name: string): Plugin {
        if (!this.plugins.hasOwnProperty(name))
            return null;

        const pluginClass = this.plugins[name];
        const plugin = new pluginClass();
        return plugin;
    }
}
