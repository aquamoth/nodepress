// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import { ViewHelper } from "@core/types/viewengine";

export default (model: {}, viewHelper: ViewHelper) => ({
    layout: "layout",
    component: (<>
        <h1>Test View!</h1>
        <p>This is a template that implements React render engine.</p>
    </>)
});
