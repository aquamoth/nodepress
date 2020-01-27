import * as express from "express";
import * as dotenv from "dotenv";

import Database from "./core/database";
import Router from "./core/router";

// import * as bodyParser from 'body-parser';


dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static("dist/public"));
app.use("/templates", express.static("dist/templates"));

//register components with routes
const db = new Database();
const router = new Router(db);
app.use(router.middleware.bind(router));



const plugin = (req: express.Request, res: express.Response, next: Function)=>{
  console.log("plugin called");
  next();
};


app.use(plugin);

app.listen(app.get("port"), () => {
  console.log(("App is running at http://localhost:%d in %s mode"),
    app.get("port"), app.get("env"));
  console.log("Press CTRL-C to stop\n");
});

module.exports = app;