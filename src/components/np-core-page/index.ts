import Component from "../../core/component";
//import { Request, Response } from "express";
import { ActionResult } from "../../core/types/viewengine";
//const pkg = require("../../../package.json");

export default class Page extends Component
{
    public Index(model: {page: number}): ActionResult {
        console.log("np-core-page.Index()", model);


        switch (model.page) {
            case 251: 
                break; //homepage
            case 858: 
                break; //support
            case 689: 
                break; //news
        }

        return this.View(model, "index");
    }

    public AdminBar(model: {}): ActionResult {
        console.log("np-core-page.AdminBar()", model);
        
        if(!model)
            model = { showSecondary: false };

        return this.View(model, "adminbar");
    }
}