// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import { ViewHelper } from "@core/types/viewengine";

export const docType = "<!DOCTYPE html>";

export default async (component: Promise<JSX.Element>, { publicPath, templatePath, partial }: ViewHelper) => (
    <html dir="ltr" lang="sv-SE">
        <head>
            <script type="text/javascript" async src="https://www.google-analytics.com/analytics.js"></script>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>np2020</title>
            <meta name="referrer" content="always" />
            <link rel="shortcut icon" href="//s.w.org/favicon.ico?2" type="image/x-icon" />
            <link rel="stylesheet" id="dashicons-css" href={publicPath("css/dashicons.min.css")} type="text/css" media="all" />
            <link rel="stylesheet" id="admin-bar-css" href={publicPath("css/admin-bar.min.css")} type="text/css" media="all" />
            <link rel="stylesheet" id="wp-block-library-css" href={publicPath("css/dist/block-library/style.min.css")} type="text/css" media="all" />
            <link rel="stylesheet" id="open-sans-css" href="https://fonts.googleapis.com/css?family=Open+Sans%3A300italic%2C400italic%2C600italic%2C300%2C400%2C600&amp;subset=latin%2Clatin-ext&amp;display=fallback&amp;ver=5.4-alpha-47108" type="text/css" media="all" />
            <link rel='stylesheet' id='wporg-themes-css' href={templatePath("css/style.css")} type='text/css' media='all' />
        </head>

        <body id="wordpress-org" className="repopackage-template-default single single-repopackage postid-25021 admin-bar no-customize-support modal-open">
            <div id="wporg-header">
                <div className="wrapper">
                    <a className="skip-link screen-reader-text" href="#themes">Gå till innehållet</a>	
                    <h1><a href="https://sv.wordpress.org/">WordPress.org</a></h1>
                    <h2 className="rosetta"><a href="https://sv.wordpress.org/">Svenska</a></h2>				    
                    <div style={{clear:"both"}}></div>
                    <button id="mobile-menu-button" aria-expanded="false"><span className="screen-reader-text">Toggle Menu</span></button>
                    <ul id="wporg-header-menu" className="menu nav-menu"><li id="menu-item-251" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-251"><a href="https://sv.wordpress.org/">Hem</a></li>
                        <li id="menu-item-587" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item menu-item-587"><a href="https://sv.wordpress.org/themes/">Teman</a></li>
                        <li id="menu-item-591" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-591"><a href="https://sv.wordpress.org/plugins/">Tillägg</a></li>
                        <li id="menu-item-858" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-858"><a href="https://sv.wordpress.org/support/">Support</a></li>
                        <li id="menu-item-989" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-989"><a href="https://sv.wordpress.org/engagera-dig/">Engagera dig!</a></li>
                        <li id="menu-item-689" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-689"><a href="https://sv.wordpress.org/news/">Blogg</a></li>
                        <li id="menu-item-1210" className="menu-item menu-item-type-post_type menu-item-object-page button button-primary download menu-item-1210"><a href="https://sv.wordpress.org/download/">Skaffa WordPress</a></li>
                        <li id="menu-item-1127" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1127"><a href="https://sv.wordpress.org/about/">Om oss: Vårt uppdrag</a></li>
                    </ul>
                    <div style={{clear: "both"}}></div>
                </div>
            </div>





            <div id="app">{await component}</div>

            {/* <script src="/app.bundle.js"></script> */}

            {await partial("adminbar")}
        </body>
    </html>
);