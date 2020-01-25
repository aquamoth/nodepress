import { Request } from "express";
import { renderToString } from "react-dom/server";
import { ViewEngine, ActionResult, View, Layout, ViewHelper } from "@core/types/viewengine";
import Router from "@core/router";

export default class ReactViewEngine implements ViewEngine {
    private readonly router: Router;
    private readonly request: Request;
    private readonly path: string;

    constructor(router: Router, request: Request, templateName: string) {
        this.router = router;
        this.request = request;
        this.path = `../../templates/${templateName}`;
    }

    private async loadView(filename: string) {
        const viewFile = await import(this.path + "/" + filename);
        return viewFile.default as View;
    }

    public async render(actionResult: ActionResult): Promise<string> {

        const viewHelper: ViewHelper = {
            publicPath: (path: string) => `/public/${path}`,
            templatePath: (path: string) => `/templates/${actionResult.template}/${path}`,
            action: async (route: Route) => {
                console.warn("React viewEngine requested to execute route", route);
                return await this.router.renderAction(this.request, route);
            },
            partial: async (view: string, model?: {}) => {
                console.warn("React viewEngine requested partial", view, model);
                const partialResult = await this.renderInternal({ view, model, template: actionResult.template}, viewHelper);
                return partialResult.page;
            }
        };

        const internal = await this.renderInternal(actionResult, viewHelper);
        return internal.docType + renderToString(await internal.page);
    }

    private async renderInternal(actionResult: ActionResult, viewHelper: ViewHelper): Promise<{page: Promise<JSX.Element>; docType: string}> {
        console.log("renderInternal() loading view: " + actionResult.view);
        const view = await this.loadView(actionResult.view);
        const viewResult = view(actionResult.model, viewHelper);

        let docType = "";
        let page = viewResult.component;

        if (viewResult.layout) {
            console.log("renderInternal() loading layout: " + viewResult.layout);
            const layoutFile = await import(this.path + "/" + viewResult.layout);
            const layout = layoutFile.default as Layout;

            docType = layoutFile.docType as string || "";
            page = layout(page, viewHelper);
        }

        return { docType, page };
    }
}
