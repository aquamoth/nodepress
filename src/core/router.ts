import { Request, Response } from "express";
import { Component, Database, Action } from "./types";
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

    public async renderAction(req: Request, route: Route): Promise<string> {
        if (!route) {
            console.warn("renderAction() ignores undefined route.");
            return Promise.resolve(undefined);
        }

        //console.log("Searching for component", route.component);
        const action = this.findAction(req, route);
        if (!action) {
            console.warn("renderAction() ignores route to invalid action.");
            return Promise.resolve(undefined);
        }

        console.log("renderAction() calling action", route.component, route.action);
        const actionResult = action(route);

        console.log("renderAction() calling viewEngine.render()");
        const viewEngine = new ViewEngine(this, actionResult.template);
        return await viewEngine.render(actionResult);
   }

    public async middleware (req: Request, res: Response, next: Function) {
        console.log("Router middleware called for", req.url);

        const route = this.buildRoute(req.url);
        const html = await this.renderAction(req, route);

        if (html !== undefined){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        }
        else {
            next();
        }
    }

    private buildRoute(url: string): Route {

        //TODO: Properly decode url to Route!

        if (url !== "/")
            return null;

        return {
            component: "np-core-page",
            action: "Index",
            parameters: { page: 123 }
        };
    }

    private findAction(request: Request, route: Route): Action {
        if (!this.components.hasOwnProperty(route.component))
            return null;

        //console.log(`Searching component ${route.component} for action ${route.action}`);
        const componentClass = this.components[route.component];
        const component = new componentClass();
        component.request = request;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const action = (component as any)[route.action].bind(component) as Action;
        return action;
    }
}
