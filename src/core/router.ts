import {Express, Router as ExpressRouter} from "express";
import Database from "./types/database";

export default class Router {
    constructor(db: Database) {
        console.log("Router constructed");        
    }

    public initialize(app: Express) {
        console.log("Loading Page component");
        
        import("../components/np-core-page").then(Page => {
            
            console.log("Adding routes to Page component");
            const page = new Page.default();


            const router = ExpressRouter();
            router.get("/", page.Index);
            router.get("/who-knows", page.WhoKnowsMe);

            app.use("/", router);
        });
    }
}