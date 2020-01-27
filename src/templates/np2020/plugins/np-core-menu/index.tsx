// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import RequestPipeline from "../../../../core/requestpipeline";

export default (model: {}, pipeline: RequestPipeline) => ({
    component: (<>
        <button id="mobile-menu-button" aria-expanded="false"><span className="screen-reader-text">Toggle Menu</span></button>
        <ul id="wporg-header-menu" className="menu nav-menu">
            <li id="menu-item-251" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-251"><a href="https://sv.wordpress.org/">Hem</a></li>
            <li id="menu-item-587" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item menu-item-587"><a href="https://sv.wordpress.org/themes/">Teman</a></li>
            <li id="menu-item-591" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-591"><a href="https://sv.wordpress.org/plugins/">Tillägg</a></li>
            <li id="menu-item-858" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-858"><a href="https://sv.wordpress.org/support/">Support</a></li>
            <li id="menu-item-989" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-989"><a href="https://sv.wordpress.org/engagera-dig/">Engagera dig!</a></li>
            <li id="menu-item-689" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-689"><a href="https://sv.wordpress.org/news/">Blogg</a></li>
            <li id="menu-item-1210" className="menu-item menu-item-type-post_type menu-item-object-page button button-primary download menu-item-1210"><a href="https://sv.wordpress.org/download/">Skaffa WordPress</a></li>
            <li id="menu-item-1127" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1127"><a href="https://sv.wordpress.org/about/">Om oss: Vårt uppdrag</a></li>
        </ul>
    </>)
});
