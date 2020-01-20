import { Component } from "../../core/types";
import { Request, Response } from "express";
//const pkg = require("../../../package.json");

export default class Page extends Component
{
    // public get router() {
    //     const router = Router();
    //     return router;
    // }

    public Index(req: Request, res: Response) {
        res.json({
            message: "Welcome to routed skeleton.",
  //          version: pkg.version,
        });
    }

    public WhoKnowsMe(req: Request, res: Response) {
        res.send("Yes, who really knows me?!!");
    }
}