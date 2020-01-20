import { renderToString } from "react-dom/server";
import { ViewEngine } from "@core/types/viewengine";

export default class ReactViewEngine implements ViewEngine {
    private readonly path: string;

    constructor(templateName: string) {
        this.path = `../../templates/${templateName}`;
    }

    public async render() {
        const templateFile = await import(this.path + "/index");
        const jsx = templateFile.default();

        const reactDom = renderToString(jsx);

        return this.template(reactDom);
    }

    private template(reactDom: string) {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                <meta name="viewport" content="width=device-width, initial-scale=1">
    
                <title>React App</title>
    
            </head>
    
            <body>
                <div id="app">${reactDom}</div>
    
                <script src="/app.bundle.js"></script>
             </body>
            </html>
        `;
    }
}
