// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import RequestPipeline from "@core/requestpipeline";

export default (model: {}, pipeline: RequestPipeline) => ({
    layout: "layout",
    component: (<>
        <h1>Test View!</h1>
        <p>This is a template that implements React render engine.</p>
    </>)
});
