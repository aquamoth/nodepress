// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import RequestPipeline from "../../core/requestpipeline";
import { ViewResult } from "../../core/types/viewengine";

export default async (model: {}, pipeline: RequestPipeline) => ({
    component: Promise.resolve(<>
        <div id="wporg-header">
            <div className="wrapper">
                <a className="skip-link screen-reader-text" href="#themes">Gå till innehållet</a>	
                <h1><a href="https://sv.wordpress.org/">WordPress.org</a></h1>
                <h2 className="rosetta"><a href="https://sv.wordpress.org/">Svenska</a></h2>				    
                <div style={{clear:"both"}}></div>
                {await pipeline.renderPlugin("np-core-menu", {name: "wporg-header-menu"})}
                <div style={{clear: "both"}}></div>
            </div>
        </div>
    </>)
}) as ViewResult;
