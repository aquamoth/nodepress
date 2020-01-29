// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import RequestPipeline from "../../core/requestpipeline";
import { ViewResult } from "../../core/types/viewengine";

export default async (model: {}, pipeline: RequestPipeline) => ({
    component: Promise.resolve(<>
        <div id="wporg-footer">
            <div className="wrapper">
                <ul>
                    <li><a href="//sv.wordpress.org/about/" title="En introduktion till WordPress-projektet">Om</a></li>
                    <li><a href="//sv.wordpress.org/news/" title="Nyheter och uppdateringar">Blogg</a></li>
                    <li><a href="//wordpress.org/hosting/" title="Rekommenderade webbhotell">Webbhotell</a></li>
                    <li><a href="https://wordpressfoundation.org/donate/" title="Donera till WordPress-stiftelsen">Donera</a></li>
                </ul>

                <ul>
                    <li><a href="//sv.wordpress.org/support/" title="Forum, dokumentation och andra resurser">Support</a></li>
                    <li><a href="//developer.wordpress.org" title="Resurser för WordPress-utvecklare">Utvecklare</a></li>
                    <li><a href="//make.wordpress.org/" title="Ge tillbaka till WordPress genom kod, support, översättning och mer">Bli involverad</a></li>
                </ul>

                <ul>
                    <li><a href="//wordpress.org/showcase/" title="Några av de bästa WordPress-webbplatserna på nätet">Presentation</a></li>
                    <li><a href="//sv.wordpress.org/plugins/" title="Lägg till extra funktionalitet till WordPress">Tillägg</a></li>
                    <li><a href="//sv.wordpress.org/themes/" title="Gör WordPress vackert">Teman</a></li>
                </ul>

                <ul>
                    <li><a href="//central.wordcamp.org/" title="Hitta ett WordPress-evenemang nära dig">WordCamp</a></li>
                    <li><a href="//wordpress.tv/" title="Videoklipp, handledningar och WordCamp-sessioner">WordPress.TV</a></li>
                    <li><a href="//buddypress.org/" title="En uppsättning tillägg som omvandlar WordPress till ett socialt nätverk">BuddyPress</a></li>
                    <li><a href="//bbpress.org/" title="Snabba och smarta forum byggda på WordPress">bbPress</a></li>
                </ul>

                <ul>
                    <li><a href="//wordpress.com/?ref=wporg-footer" title="WordPress-webbhotell utan krångel">WordPress.com</a></li>
                    <li><a href="//ma.tt/" title="Medgrundare av WordPress, ett exempel på vad WordPress kan göra">Matt</a></li>
                    <li><a href="//sv.wordpress.org/about/privacy/" title="WordPress.org integritetspolicy">Integritet</a></li>
                    <li><a href="https://publiccode.eu/" target="_blank">Public Code</a></li>
                </ul>

                <ul>
                    <li><span className="dashicons dashicons-twitter"></span><a href="https://twitter.com/WordPress" title="Följ @WordPress på Twitter">@WordPress</a></li>
                    <li><span className="dashicons dashicons-facebook"></span><a href="https://www.facebook.com/WordPress/" title="Gilla WordPress på Facebook">WordPress</a></li>
                </ul>
            </div>

                <p className="cip">Kod är poesi.</p>
        </div>
</>)
}) as ViewResult;
