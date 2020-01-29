import { Request } from "express";
import Router from "./router";
import { Action } from "./types/viewengine";
import ReactViewEngine from "./viewengines/react";
import { Layout, View } from "./types/viewengine";
import { PipelineResponse } from "./types/pipelineresponse";

export default class RequestPipelineClass /*implements RequestPipeline*/ {
    private static TEMPLATES_PATH = "../templates";

    private readonly router: Router;
    private readonly request: Request;

    private route: Route;
    private templateName: string;


    constructor(router: Router, request: Request) {
        this.router = router;
        this.request = request;
    }

    public async process(): Promise<PipelineResponse> {
        //TODO: Authenticate

        this.route = this.router.buildRoute(this.request.url);
        if (!this.route) {
            console.warn("RequestPipeline can not route the request.");
            return Promise.resolve(undefined);
        }

        //TODO: Authorize

        
        const html = await this.renderAction();
        console.log("RequestPipeline received html", html.length);

        if (html !== undefined){
            return {
                content: html,
                statusCode: 200,
                headers: { "Content-Type": "text/html" }
            } as PipelineResponse;
        }
        else {
            return undefined;
        }
    }    

    protected async renderAction(): Promise<string> {
        console.log("RequestPipeline.renderAction()");
        const route = this.route;

        //console.log("Searching for component", route.component);
        const component = this.router.initializeComponent(route.component);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const action = (component as any)[route.action].bind(component) as Action;
        if (!action) {
            console.warn("renderAction() ignores route to invalid action.");
            return Promise.resolve(undefined);
        }
        console.log("renderAction() calling action", route.component, route.action);
        component.request = this.request;
        const actionResult = action(route.parameters);
        console.log("renderAction executed action", actionResult);

        this.templateName = actionResult.template;

        console.log("renderInternal() loading view: " + actionResult.view);
        const view = await this.loadView(actionResult.view);

        console.log("renderAction() calling viewEngine.render()");
        const viewEngine = new ReactViewEngine(this); //TODO: Support alternative view engines
        const viewResult = await viewEngine.render(view, actionResult.model);
        const html = await viewEngine.toString(viewResult);
        console.log("renderAction() returning html; size=", html.length);
        return html;
    }

    private async loadView(viewName: string) {
        console.log("RequestPipeline loading view: " + viewName);
        const path = `${RequestPipelineClass.TEMPLATES_PATH}/${this.templateName}/${viewName}`;
        const viewFile = await import(path);
        const view = viewFile.default as View;
        return view;
    }

    public async loadLayout(layoutName: string) {
        const path = `${RequestPipelineClass.TEMPLATES_PATH}/${this.templateName}/${layoutName}`;
        console.log("RequestPipeline loading layout", path);
        const layoutFile = await import(path);
        const layout = layoutFile.default as Layout;
        return layout;
    }

    public async renderPlugin(name: string, parameters: {}) {
        console.log("RequestPipeline rendering plugin", name);
        const plugin = this.router.initializePlugin(name);
        if (!plugin) {
            console.warn("RequestPipeline ignores missing plugin.");
            return Promise.resolve(undefined);
        }

        console.log("RequestPipeline executing plugin", parameters);
        plugin.request = this.request;
        plugin.route = this.route;
        const pluginResult = await plugin.execute(parameters);
        if (!pluginResult) {
            console.warn("Plugin did not return a valid result. Not rendering it!");
            return undefined;
        }

        const viewName = `plugins/${name}/${pluginResult.view}`;
        const model = pluginResult.model;
        return await this.renderPartial(viewName, model);
    }

    public async renderPartial(viewName: string, model?: {}) {
        //console.warn("RequestPipeline renderPartial()", viewName, model);
        const view = await this.loadView(viewName);

        //console.log("RequestPipeline calling viewEngine.render()");
        const viewEngine = new ReactViewEngine(this); //TODO: Support alternative view engines
        const viewResult = await viewEngine.render(view, model);
        return await viewResult.component;
    }


    public publicPath(path: string) { return `/public/${path}`; }
    public templatePath(path: string) { return `/templates/${this.templateName}/${path}`; }

    public canonicalUrl(): string {

        //TODO: Hard coded "lookup" from the menu database
        if(this.route.component === "np-core-page"){
            if(this.route.action === "Index"){
                switch(this.route.parameters["page"]){
                    case 251: return "/";
                    case 858: return "/support/";
                    case 689: return "/news/";
                }
            }
        }

        //Fallback canonical url for pages without menu item
        const url = `/?component=${this.route.component}&action=${this.route.action}`;
        if (!this.route.parameters) 
            return url;
        const parameters = Object.keys(this.route.parameters).map(key => key + "=" + this.route.parameters[key]);
        const canonicalUrl = url + "&" + parameters.join("&");
        
        console.log("canonicalUrl()", this.route, canonicalUrl);
        return canonicalUrl;
    }
}
