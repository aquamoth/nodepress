// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import RequestPipeline from "../../core/requestpipeline";
import { ViewResult } from "../../core/types/viewengine";

interface PageInfo {
    title: string; 
    description: string;
}

export default async (model: PageInfo, pipeline: RequestPipeline) => ({
    component: Promise.resolve(<>
        <header id="masthead" className="site-header home" role="banner">
			<div className="site-branding">
                <h1 className="site-title"><a href={pipeline.canonicalUrl()} rel="home">{model.title}</a></h1>
                <p className="site-description">{model.description}</p>
                <form role="search" method="get" className="search-form" action="https://sv.wordpress.org/support/search/">
                    <label htmlFor="s" className="screen-reader-text">Sök efter:</label>
                    <input type="hidden" name="action" value="bbp-search-request" onChange={()=>null}/>
                    <input type="search" id="s" className="search-field" placeholder="Sök i forumen" value="" name="bbp_search" onChange={()=>null} />
                    <button className="button button-primary button-search"><i className="dashicons dashicons-search"></i><span className="screen-reader-text">Sök i forumen</span></button>
                </form>
            </div>
		</header>
    </>)
}) as ViewResult;
