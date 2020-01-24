import { Request } from "express";
import { ActionResult } from "./viewengine";

export default class Component {
    public request: Request;

    protected View(model: object, view: string): ActionResult {
        return {
            model,
            template: "np2020",
            view
        };
    }
}