import RequestPipeline from "@core/requestpipeline";
import { PluginResult } from "./pluginresult";

// export interface ViewEngineConstructor {
//     new (templateName: string): ViewEngine;
// }

export interface ViewEngine {
    render(view: View, model: {}): Promise<string>;
}

export interface ActionResult extends PluginResult {
    template: string;
}

export type Action = (model: {}) => ActionResult;

export type View = (model: {}, pipeline: RequestPipeline) => ViewResult;

export interface ViewResult {
    component: Promise<JSX.Element>;
    layout?: string;
    docType?: string;
}

export type Layout = (component: Promise<JSX.Element>, pipeline: RequestPipeline) => Promise<JSX.Element>;
