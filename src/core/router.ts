import { Request, Response } from "express";
import { Component, Database } from "./types";
import ViewEngine from "./viewengines/react";

type ComponentClass = { new(): Component };

export default class Router {
    private components: {[name: string]: ComponentClass};
    
    constructor(db: Database) {
        console.log("Router.ctor");        
        
        const componentNames = ["np-core-page"]; //TODO: Load from database

        this.importComponents(componentNames).then(()=>{
            console.log("Router constructed");        
        });
    }

    private async importComponents(componentNames: string[]){

        this.components = {};
        
        for (const name of componentNames){
            try {
                console.log("Importing component", name);
                const module = await import("../components/" + name);
                const componentClass = module.default as ComponentClass;
                this.components[name] = componentClass;
            } catch (error) {
                console.warn("Could not import component", name);
            }
        }
    }

    public async middleware (req: Request, res: Response, next: Function) {
        console.log("Router middleware called for", req.url);

        const viewEngine = new ViewEngine("np2020");
        const html = await viewEngine.render();
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);


/*
        const route = this.buildRoute(req.url);
        console.log("Searching for component", route.component);
        
        if (this.components.hasOwnProperty(route.component)){
            console.log(`Searching component ${route.component} for action ${route.action}`);
            const componentClass = this.components[route.component];
            const component = new componentClass();
            const action = (component as any)[route.action] as Function;

            if (action){
                console.log("Calling action in route", route);
                action.call(component, req, res);
                //component.call(route.action, parameters);
                //res.send(route);

                console.log("Calling next middleware");
                next();
                return;
            }
        }

        console.warn("Router could not find the requested component", route);
*/
        next();
    }

    private buildRoute(url: string) {
        return {
            component: "np-core-page",
            action: "WhoKnowsMe",
            parameters: { page: 123 }
        };
    }
}