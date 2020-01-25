// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import { ViewHelper } from "@core/types/viewengine";

export default (model: {}, viewHelper: ViewHelper) => ({
    component: (<>
        <div id="wpadminbar" className="nojq">
            <a className="screen-reader-shortcut" href="#wp-toolbar" tabIndex={1}>Hoppa till verktygsfältet</a>
            <div className="quicklinks" id="wp-toolbar" role="navigation" aria-label="Verktygsfält">
                <ul id="wp-admin-bar-root-default" className="ab-top-menu">
                    <li id="wp-admin-bar-wp-logo" className="menupop">
                        <a className="ab-item" aria-haspopup="true" href="https://wordpress.org/about/">
                            <span className="ab-icon"></span>
                            <span className="screen-reader-text">Om WordPress</span>
                        </a>
                        <div className="ab-sub-wrapper">
                            <ul id="wp-admin-bar-wp-logo-default" className="ab-submenu">
                                <li id="wp-admin-bar-about"><a className="ab-item" href="https://wordpress.org/about/">Om WordPress</a></li>
                            </ul>
                            <ul id="wp-admin-bar-wp-logo-external" className="ab-sub-secondary ab-submenu">
                                <li id="wp-admin-bar-wporg"><a className="ab-item" href="https://wordpress.org/">WordPress.org</a></li>
                                <li id="wp-admin-bar-documentation"><a className="ab-item" href="https://codex.wordpress.org/">Dokumentation</a></li>
                                <li id="wp-admin-bar-support-forums"><a className="ab-item" href="https://sv.wordpress.org/support/">Support</a></li>
                                <li id="wp-admin-bar-feedback"><a className="ab-item" href="https://wordpress.org/support/forum/requests-and-feedback">Feedback</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                
                <ul id="wp-admin-bar-top-secondary" className="ab-top-secondary ab-top-menu">
                    <li id="wp-admin-bar-search" className="admin-bar-search">
                        <div className="ab-item ab-empty-item" tabIndex={-1}>
                            <form action="https://sv.wordpress.org/themes/" method="get" id="adminbarsearch">
                                <input className="adminbar-input" name="s" id="adminbar-search" type="text" value="" maxLength={150} />
                                <label htmlFor="adminbar-search" className="screen-reader-text">Sök</label>
                                <input type="submit" className="adminbar-button" value="Sök" />
                            </form>
                        </div>
                    </li>
                    <li id="wp-admin-bar-log-in"><a className="ab-item" href="https://login.wordpress.org/?locale=sv_SE">Logga in</a></li>
                    <li id="wp-admin-bar-register"><a className="ab-item" href="https://login.wordpress.org/register?locale=sv_SE">Registrera</a></li>
                </ul>			
            </div>
        </div>
    </>)
});
