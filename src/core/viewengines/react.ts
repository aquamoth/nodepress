// import * as React from "react";
// import { Request } from "express";
import { renderToString } from "react-dom/server";
import { /*ViewEngine,*/ View, ViewResult } from "../types/viewengine";
// import Router from "../router";
// import { PluginResult } from "../types/pluginresult";
import RequestPipeline from "../requestpipeline";

export default class ReactViewEngine /*implements ViewEngine*/ {

    private readonly pipeline: RequestPipeline;

    constructor(pipeline: RequestPipeline) {
        this.pipeline = pipeline;
    }

    public async render(view: View, model: {}): Promise<ViewResult> {
        console.log("react viewengine rendering view");
        let viewResult = view(model, this.pipeline);

        if (viewResult.layout) { //TODO: while()!
            console.log("react viewengine wrapping component in", viewResult.layout);
            const layout = await this.pipeline.loadLayout(viewResult.layout);
            // console.log("react viewengine calling layout for the component");
            const layoutResult: ViewResult = await layout(viewResult.component, this.pipeline);
            // console.log("react viewengine received layoutResult", layoutResult);
            viewResult = layoutResult;
        }

        return viewResult;
    }

    public async toString(viewResult: ViewResult) {
        const docType = viewResult.docType || "";
        const component = await viewResult.component;
        return docType + renderToString(component);
    }

    // public async renderModule(moduleResult: ModuleResult): Promise<string> {
    //     console.warn("React viewEngine renderModule() from moduleResult");
    //     return await this.router.renderModule(name, parameters, this.request, route);
    // }

    // private async renderInternal(actionResult: ModuleResult, viewHelper: ViewHelper): Promise<{page: Promise<JSX.Element>; docType: string}> {
    // }
}
