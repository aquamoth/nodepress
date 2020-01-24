import { Component } from "../../core/types";
import { Request, Response } from "express";
import { ActionResult } from "@core/types/viewengine";
//const pkg = require("../../../package.json");

export default class Page extends Component
{
    public Index(route: Route): ActionResult {
        const model = {};
        return this.View(model, "index");
    }
}