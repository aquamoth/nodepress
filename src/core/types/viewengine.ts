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

export type View = (model: {}) => ViewResult;

export interface ViewResult {
    component: JSX.Element;
    layout: string;
}

export type Layout = (component: JSX.Element) => JSX.Element;