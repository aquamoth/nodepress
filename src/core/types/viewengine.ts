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

export type Action = (model: {}) => ActionResult;

export type ViewHelper = {
    publicPath: (path: string) => string;
    templatePath: (path: string) => string;
    action: (route: Route) => Promise<string>;
    partial: (view: string, model?: {}) => Promise<JSX.Element>;
}

export type View = (model: {}, helper: ViewHelper) => ViewResult;

export interface ViewResult {
    component: Promise<JSX.Element>;
    layout: string;
}

export type Layout = (component: Promise<JSX.Element>, helper: ViewHelper) => Promise<JSX.Element>;
