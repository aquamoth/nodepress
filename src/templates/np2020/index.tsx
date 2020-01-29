// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import RequestPipeline from "../../core/requestpipeline";
import { ViewResult } from "../../core/types/viewengine";

interface PageInfo {
    title: string; 
    description: string;
    content: string;
}

export default async (model: PageInfo, pipeline: RequestPipeline) => ({
    layout: "layout",
    component: Promise.resolve(<>
        {await pipeline.renderPartial("hero", model)}
        <main id="main" className="site-main " role="main" dangerouslySetInnerHTML={{__html: model.content}} />
    </>)
}) as ViewResult;
