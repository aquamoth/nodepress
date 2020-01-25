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
    view: string;
}

export type Action = (route: Route) => ActionResult;

export type ViewHelper = {
    publicPath: (path: string) => string;
    templatePath: (path: string) => string;
}

export type View = (model: {}, helper: ViewHelper) => ViewResult;

export interface ViewResult {
    component: JSX.Element;
    layout: string;
}

export type Layout = (component: JSX.Element, helper: ViewHelper) => JSX.Element;
