import { Request } from "express";
import { ActionResult } from "./viewengine";

export default class Component {
    public request: Request;

    protected View(model: object): ActionResult {
        return {
            model,
            template: "np2020",
            layout: ""
        };
    }
}