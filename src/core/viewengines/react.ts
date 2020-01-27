// import * as React from "react";
// import { Request } from "express";
import { renderToString } from "react-dom/server";
import { /*ViewEngine,*/ View } from "../types/viewengine";
// import Router from "../router";
// import { PluginResult } from "../types/pluginresult";
import RequestPipeline from "../requestpipeline";

export default class ReactViewEngine /*implements ViewEngine*/ {

    private readonly pipeline: RequestPipeline;

    constructor(pipeline: RequestPipeline) {
        this.pipeline = pipeline;
    }

    public async render(view: View, model: {}): Promise<{docType: string; page: JSX.Element}> {

        console.log("react viewengine rendering view");
        const viewResult = view(model, this.pipeline);

        if (viewResult.layout) {
            console.log("react viewengine asking pipeline to load layout", viewResult.layout);
            const layout = await this.pipeline.loadLayout(viewResult.layout);

            console.log("react viewengine calling layout for the component");
            const layoutResult = await layout(viewResult.component, this.pipeline);
            console.log("react viewengine received layoutResult", layoutResult);

            const docType = layoutResult.docType || "";//TODO: layout.docType as string || "";
            const page = await layoutResult.component;
            return {docType, page};
        }
        else {
            console.log("react viewengine returning component ViewResult");
            const docType  = viewResult.docType;
            const page = await viewResult.component;
            return {docType, page};
        }
    }

    public async toString(docType: string, page: JSX.Element) {
        return docType + renderToString(page);
    }

    // public async renderModule(moduleResult: ModuleResult): Promise<string> {
    //     console.warn("React viewEngine renderModule() from moduleResult");
    //     return await this.router.renderModule(name, parameters, this.request, route);
    // }

    // private async renderInternal(actionResult: ModuleResult, viewHelper: ViewHelper): Promise<{page: Promise<JSX.Element>; docType: string}> {
    // }
}
