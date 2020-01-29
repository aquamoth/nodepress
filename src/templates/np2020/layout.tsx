// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import RequestPipeline from "../../core/requestpipeline";
import { Layout, ViewResult } from "../../core/types/viewengine";

async function MyLayout(component: Promise<JSX.Element>, pipeline: RequestPipeline) {
    return {
        docType: "<!DOCTYPE html>",
        component: Promise.resolve(
            <html dir="ltr" lang="sv-SE">
                <head>
                    <script type="text/javascript" async src="https://www.google-analytics.com/analytics.js"></script>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>np2020</title>
                    <meta name="referrer" content="always" />
                    <link rel="shortcut icon" href="//s.w.org/favicon.ico?2" type="image/x-icon" />
                    <link rel="stylesheet" id="dashicons-css" href={pipeline.publicPath("css/dashicons.min.css")} type="text/css" media="all" />
                    <link rel="stylesheet" id="admin-bar-css" href={pipeline.publicPath("css/admin-bar.min.css")} type="text/css" media="all" />
                    <link rel="stylesheet" id="wp-block-library-css" href={pipeline.publicPath("css/dist/block-library/style.min.css")} type="text/css" media="all" />
                    <link rel="stylesheet" id="open-sans-css" href="https://fonts.googleapis.com/css?family=Open+Sans%3A300italic%2C400italic%2C600italic%2C300%2C400%2C600&amp;subset=latin%2Clatin-ext&amp;display=fallback&amp;ver=5.4-alpha-47108" type="text/css" media="all" />
                    <link rel='stylesheet' id='wporg-themes-css' href={pipeline.templatePath("css/style.css")} type='text/css' media='all' />

                    <style dangerouslySetInnerHTML={{__html: `
                        @media screen and (max-width: 782px) {
                            #wpadminbar li#wp-admin-bar-log-in,
                            #wpadminbar li#wp-admin-bar-register {
                                display: block;
                            }

                            #wpadminbar li#wp-admin-bar-log-in a,
                            #wpadminbar li#wp-admin-bar-register a {
                                padding: 0 8px;
                            }
                        }
                    `}} />
                    <style type="text/css" media="print" dangerouslySetInnerHTML={{__html: `
                        #wpadminbar { display:none; }
                    `}} />
                    <style type="text/css" media="screen" dangerouslySetInnerHTML={{__html: `
                        html { margin-top: 32px !important; }
                        * html body { margin-top: 32px !important; }
                        @media screen and ( max-width: 782px ) {
                            html { margin-top: 46px !important; }
                            * html body { margin-top: 46px !important; }
                        }
                    `}} />
                </head>

                <body id="wordpress-org" className="repopackage-template-default single single-repopackage postid-25021 admin-bar no-customize-support modal-open">
                    {await pipeline.renderPartial("header")}


                    {await component}


                    {await pipeline.renderPartial("footer")}
                    {await pipeline.renderPartial("adminbar", {showSecondary: true})}

                    {/* <script src="/app.bundle.js"></script> */}
                </body>
            </html>
        )
    } as ViewResult;
}

export default MyLayout as Layout;
