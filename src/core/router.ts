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

    public async middleware (req: Request, res: Response, next: Function) {
        console.log("Router middleware called for", req.url);

        const route = this.buildRoute(req.url);
        console.log("Searching for component", route.component);

        const action = this.findAction(req, route);

        if (action){
            console.log("Calling action in route", route);
            const actionResult = action(route);

            const viewEngine = new ViewEngine(actionResult.template);
            const html = await viewEngine.render(actionResult);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(html);
        }
        else {
            console.warn("Router could not find the requested component", route);
            next();
        }
    }

    private buildRoute(url: string): Route {
        //TODO: Properly decode url to Route!
        return {
            component: "np-core-page",
            action: "Index",
            parameters: { page: 123 }
        };
    }

    private findAction(request: Request, route: Route): Action {
        if (!this.components.hasOwnProperty(route.component))
            return null;

        console.log(`Searching component ${route.component} for action ${route.action}`);
        const componentClass = this.components[route.component];
        const component = new componentClass();
        component.request = request;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const action = (component as any)[route.action].bind(component) as Action;
        return action;
    }
}
