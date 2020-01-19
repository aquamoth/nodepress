import { Component } from "../../core/types";
import { Request, Response, Router } from "express";
let pkg = require('../../../package.json');

export default class Page extends Component
{
    public get router() {
        var router = Router();
        return router;
    }

    public Index(req: Request, res: Response) {
        res.json({
            message: 'Welcome to routed skeleton.',
            version: pkg.version,
        });
    }

    public WhoKnowsMe(req: Request, res: Response) {
        res.send('Yes, who really knows me?!!');
    }
}