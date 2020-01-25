import { renderToString } from "react-dom/server";
import { ViewEngine, ActionResult, View, Layout, ViewHelper } from "@core/types/viewengine";
import Router from "@core/router";

export default class ReactViewEngine implements ViewEngine {
    private readonly router: Router;
    private readonly path: string;

    constructor(router: Router, templateName: string) {
        this.router = router;
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
                return await this.router.renderAction(null, route);
            }
        };



        const view = await this.loadView(actionResult.view);
        const viewResult = view(actionResult.model, viewHelper);

        if (viewResult.layout) {
            console.log("Loading layout: " + viewResult.layout);
            const layoutFile = await import(this.path + "/" + viewResult.layout);
            const docType = layoutFile.docType as string || "";
            const layout = layoutFile.default as Layout;

            const page = await layout(viewResult.component, viewHelper);
            return docType + renderToString(page);
        }
        else {
            console.log("Displaying partial component");
            const componentString = renderToString(viewResult.component);
            return componentString;
        }
    }
}
