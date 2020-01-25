import { Component } from "../../core/types";
import { Request, Response } from "express";
import { ActionResult } from "@core/types/viewengine";
//const pkg = require("../../../package.json");

export default class Page extends Component
{
    public Index(model: {}): ActionResult {
        console.log("np-core-page.Index()", model);
        return this.View(model, "index");
    }

    public AdminBar(model: {}): ActionResult {
        console.log("np-core-page.AdminBar()", model);
        return this.View(model, "adminbar");
    }
}