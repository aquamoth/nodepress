import * as React from "react";
import { Request } from "express";
import { renderToString } from "react-dom/server";
import { ViewEngine, View } from "@core/types/viewengine";
import Router from "@core/router";
import { PluginResult } from "@core/types/pluginresult";
import RequestPipeline from "@core/requestpipeline";

export default class ReactViewEngine /*implements ViewEngine*/ {

    private readonly pipeline: RequestPipeline;

    constructor(pipeline: RequestPipeline) {
        this.pipeline = pipeline;
    }

    public async render(view: View, model: {}): Promise<{docType: string; page: JSX.Element}> {

        const viewResult = view(model, this.pipeline);

        if (viewResult.layout) {
            const layout = await this.pipeline.loadLayout(viewResult.layout);

            const page = await layout(viewResult.component, this.pipeline);
            const docType = "";//TODO: layout.docType as string || "";
            return {docType, page};
        }
        else {
            const page = await viewResult.component;
            const docType  = viewResult.docType;
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
