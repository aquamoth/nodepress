import {Request, Response} from "express";

export interface ViewEngineConstructor {
    new (templateName: string): ViewEngine;
}

export interface ViewEngine {
    render(actionResult: ActionResult): Promise<string>;
}

export interface ActionResult {
    model: object;
    template: string;
    layout: string;
}

export type Action = (route: Route) => ActionResult;
