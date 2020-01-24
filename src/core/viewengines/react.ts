import { renderToString } from "react-dom/server";
import { ViewEngine, ActionResult, View, Layout } from "@core/types/viewengine";

export default class ReactViewEngine implements ViewEngine {
    private readonly path: string;

    constructor(templateName: string) {
        this.path = `../../templates/${templateName}`;
    }

    private async loadView(filename: string) {
        const viewFile = await import(this.path + "/" + filename);
        return viewFile.default as View;
    }

    public async render(actionResult: ActionResult) {
        const view = await this.loadView(actionResult.view);
        const viewResult = view(actionResult.model);

        if (viewResult.layout) {
            console.log("Loading layout: " + viewResult.layout);
            const layoutFile = await import(this.path + "/" + viewResult.layout);
            const layout = layoutFile.default as Layout;
            const docType = layoutFile.docType as string || "";
            const page = layout(viewResult.component);
            return docType + renderToString(page);
        }
        else {
            console.log("Displaying partial component");
            const componentString = renderToString(viewResult.component);
            return componentString;
        }
    }
}
