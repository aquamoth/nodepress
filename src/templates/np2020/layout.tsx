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

                    <link rel="pingback" href="https://sv.wordpress.org/xmlrpc.php" /><link rel='dns-prefetch' href='//s.w.org' />
                    <link rel='dns-prefetch' href='//www.googletagmanager.com' />
                    <link rel='dns-prefetch' href='//fonts.googleapis.com' />
                    <link rel='dns-prefetch' href='//fonts.gstatic.com' />
                    <link rel="alternate" type="application/rss+xml" title="Svenska &raquo; flöde" href="https://sv.wordpress.org/feed/" />
                    <link rel="alternate" type="application/rss+xml" title="Svenska &raquo; kommentarsflöde" href="https://sv.wordpress.org/comments/feed/" />

                    <style type="text/css" dangerouslySetInnerHTML={{__html: `
                        img.wp-smiley,
                        img.emoji {
                            display: inline !important;
                            border: none !important;
                            box-shadow: none !important;
                            height: 1em !important;
                            width: 1em !important;
                            margin: 0 .07em !important;
                            vertical-align: -0.1em !important;
                            background: none !important;
                            padding: 0 !important;
                        }
                    `}} />

                    <link rel="stylesheet" id="wp-block-library-css" href={pipeline.publicPath("css/dist/block-library/style.min.css")} type="text/css" media="all" />
                    <link rel="stylesheet" id="dashicons-css" href={pipeline.publicPath("css/dashicons.min.css")} type="text/css" media="all" />
                    <link rel="stylesheet" id="open-sans-css" href="https://fonts.googleapis.com/css?family=Open+Sans%3A300italic%2C400italic%2C600italic%2C300%2C400%2C600&amp;subset=latin%2Clatin-ext&amp;display=fallback&amp;ver=5.4-alpha-47108" type="text/css" media="all" />
                    <link rel='stylesheet' id='wporg-style-css'  href='https://s.w.org/wp-content/themes/pub/wporg-main/css/style.css?ver=20191220' type='text/css' media='all' />
                    <link rel='https://api.w.org/' href='https://sv.wordpress.org/wp-json/' />
                    <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://sv.wordpress.org/xmlrpc.php?rsd" />
                    <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://sv.wordpress.org/wp-includes/wlwmanifest.xml" /> 
                    <meta name="generator" content="nodepress 0.1-alpha-0000" />
                    <link rel="canonical" href={pipeline.canonicalUrl()} />
                    <link rel='shortlink' href={pipeline.canonicalUrl()} />
                    <link rel="alternate" type="application/json+oembed" href="https://sv.wordpress.org/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fsv.wordpress.org%2F" />
                    <link rel="alternate" type="text/xml+oembed" href="https://sv.wordpress.org/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fsv.wordpress.org%2F&#038;format=xml" />

                    <link rel="alternate" href="https://af.wordpress.org/" hrefLang="af-za" />
                    <link rel="alternate" href="https://am.wordpress.org/" hrefLang="am-et" />
                    <link rel="alternate" href="https://arg.wordpress.org/" hrefLang="an-es" />
                    <link rel="alternate" href="https://ar.wordpress.org/" hrefLang="ar" />
                    <link rel="alternate" href="https://pirate.wordpress.org/" hrefLang="art" />
                    <link rel="alternate" href="https://as.wordpress.org/" hrefLang="as-in" />
                    <link rel="alternate" href="https://az.wordpress.org/" hrefLang="az-az" />
                    <link rel="alternate" href="https://az-tr.wordpress.org/" hrefLang="az-tr" />
                    <link rel="alternate" href="https://bal.wordpress.org/" hrefLang="bal" />
                    <link rel="alternate" href="https://bel.wordpress.org/" hrefLang="be-by" />
                    <link rel="alternate" href="https://bg.wordpress.org/" hrefLang="bg-bg" />
                    <link rel="alternate" href="https://bho.wordpress.org/" hrefLang="bho" />
                    <link rel="alternate" href="https://bn.wordpress.org/" hrefLang="bn-bd" />
                    <link rel="alternate" href="https://bn-in.wordpress.org/" hrefLang="bn-in" />
                    <link rel="alternate" href="https://bo.wordpress.org/" hrefLang="bo" />
                    <link rel="alternate" href="https://bre.wordpress.org/" hrefLang="br-fr" />
                    <link rel="alternate" href="https://brx.wordpress.org/" hrefLang="brx" />
                    <link rel="alternate" href="https://bs.wordpress.org/" hrefLang="bs-ba" />
                    <link rel="alternate" href="https://ca.wordpress.org/" hrefLang="ca" />
                    <link rel="alternate" href="https://ceb.wordpress.org/" hrefLang="ceb" />
                    <link rel="alternate" href="https://co.wordpress.org/" hrefLang="co-it" />
                    <link rel="alternate" href="https://cs.wordpress.org/" hrefLang="cs-cz" />
                    <link rel="alternate" href="https://cy.wordpress.org/" hrefLang="cy-gb" />
                    <link rel="alternate" href="https://da.wordpress.org/" hrefLang="da-dk" />
                    <link rel="alternate" href="https://de-ch.wordpress.org/" hrefLang="de-ch" />
                    <link rel="alternate" href="https://de.wordpress.org/" hrefLang="de-de" />
                    <link rel="alternate" href="https://de-at.wordpress.org/" hrefLang="de-de" />
                    <link rel="alternate" href="https://dv.wordpress.org/" hrefLang="dv-mv" />
                    <link rel="alternate" href="https://dzo.wordpress.org/" hrefLang="dz-bt" />
                    <link rel="alternate" href="https://el.wordpress.org/" hrefLang="el-gr" />
                    <link rel="alternate" href="https://wordpress.org/" hrefLang="en" />
                    <link rel="alternate" href="https://en-au.wordpress.org/" hrefLang="en-au" />
                    <link rel="alternate" href="https://en-ca.wordpress.org/" hrefLang="en-ca" />
                    <link rel="alternate" href="https://en-gb.wordpress.org/" hrefLang="en-gb" />
                    <link rel="alternate" href="https://en-nz.wordpress.org/" hrefLang="en-nz" />
                    <link rel="alternate" href="https://en-za.wordpress.org/" hrefLang="en-za" />
                    <link rel="alternate" href="https://eo.wordpress.org/" hrefLang="eo" />
                    <link rel="alternate" href="https://es-ar.wordpress.org/" hrefLang="es-ar" />
                    <link rel="alternate" href="https://cl.wordpress.org/" hrefLang="es-cl" />
                    <link rel="alternate" href="https://es-co.wordpress.org/" hrefLang="es-co" />
                    <link rel="alternate" href="https://es-cr.wordpress.org/" hrefLang="es-cr" />
                    <link rel="alternate" href="https://es-do.wordpress.org/" hrefLang="es-do" />
                    <link rel="alternate" href="https://es.wordpress.org/" hrefLang="es-es" />
                    <link rel="alternate" href="https://es-gt.wordpress.org/" hrefLang="es-gt" />
                    <link rel="alternate" href="https://es-hn.wordpress.org/" hrefLang="es-hn" />
                    <link rel="alternate" href="https://es-mx.wordpress.org/" hrefLang="es-mx" />
                    <link rel="alternate" href="https://pe.wordpress.org/" hrefLang="es-pe" />
                    <link rel="alternate" href="https://es-pr.wordpress.org/" hrefLang="es-pr" />
                    <link rel="alternate" href="https://es-uy.wordpress.org/" hrefLang="es-uy" />
                    <link rel="alternate" href="https://ve.wordpress.org/" hrefLang="es-ve" />
                    <link rel="alternate" href="https://et.wordpress.org/" hrefLang="et-ee" />
                    <link rel="alternate" href="https://eu.wordpress.org/" hrefLang="eu-es" />
                    <link rel="alternate" href="https://fa.wordpress.org/" hrefLang="fa" />
                    <link rel="alternate" href="https://fa-af.wordpress.org/" hrefLang="fa" />
                    <link rel="alternate" href="https://fi.wordpress.org/" hrefLang="fi-fi" />
                    <link rel="alternate" href="https://fao.wordpress.org/" hrefLang="fo-fo" />
                    <link rel="alternate" href="https://fr-be.wordpress.org/" hrefLang="fr-be" />
                    <link rel="alternate" href="https://fr-ca.wordpress.org/" hrefLang="fr-ca" />
                    <link rel="alternate" href="https://fr.wordpress.org/" hrefLang="fr-fr" />
                    <link rel="alternate" href="https://fy.wordpress.org/" hrefLang="fy-nl" />
                    <link rel="alternate" href="https://ga.wordpress.org/" hrefLang="ga-ie" />
                    <link rel="alternate" href="https://gax.wordpress.org/" hrefLang="gax" />
                    <link rel="alternate" href="https://gd.wordpress.org/" hrefLang="gd-gb" />
                    <link rel="alternate" href="https://gl.wordpress.org/" hrefLang="gl-es" />
                    <link rel="alternate" href="https://gu.wordpress.org/" hrefLang="gu" />
                    <link rel="alternate" href="https://hau.wordpress.org/" hrefLang="ha-ng" />
                    <link rel="alternate" href="https://he.wordpress.org/" hrefLang="he-il" />
                    <link rel="alternate" href="https://hi.wordpress.org/" hrefLang="hi-in" />
                    <link rel="alternate" href="https://hr.wordpress.org/" hrefLang="hr-hr" />
                    <link rel="alternate" href="https://hsb.wordpress.org/" hrefLang="hsb" />
                    <link rel="alternate" href="https://hat.wordpress.org/" hrefLang="ht-ht" />
                    <link rel="alternate" href="https://hu.wordpress.org/" hrefLang="hu-hu" />
                    <link rel="alternate" href="https://hy.wordpress.org/" hrefLang="hy-am" />
                    <link rel="alternate" href="https://id.wordpress.org/" hrefLang="id-id" />
                    <link rel="alternate" href="https://ibo.wordpress.org/" hrefLang="ig-ng" />
                    <link rel="alternate" href="https://is.wordpress.org/" hrefLang="is-is" />
                    <link rel="alternate" href="https://it.wordpress.org/" hrefLang="it-it" />
                    <link rel="alternate" href="https://ja.wordpress.org/" hrefLang="ja-jp" />
                    <link rel="alternate" href="https://jv.wordpress.org/" hrefLang="jv-id" />
                    <link rel="alternate" href="https://ka.wordpress.org/" hrefLang="ka-ge" />
                    <link rel="alternate" href="https://kaa.wordpress.org/" hrefLang="kaa" />
                    <link rel="alternate" href="https://kk.wordpress.org/" hrefLang="kk-kz" />
                    <link rel="alternate" href="https://kal.wordpress.org/" hrefLang="kl-gl" />
                    <link rel="alternate" href="https://km.wordpress.org/" hrefLang="km-kh" />
                    <link rel="alternate" href="https://kn.wordpress.org/" hrefLang="kn-in" />
                    <link rel="alternate" href="https://ko.wordpress.org/" hrefLang="ko-kr" />
                    <link rel="alternate" href="https://ku.wordpress.org/" hrefLang="ku-iq" />
                    <link rel="alternate" href="https://kmr.wordpress.org/" hrefLang="ku-tr" />
                    <link rel="alternate" href="https://cor.wordpress.org/" hrefLang="kw-gb" />
                    <link rel="alternate" href="https://kir.wordpress.org/" hrefLang="ky-kg" />
                    <link rel="alternate" href="https://ltz.wordpress.org/" hrefLang="lb-lu" />
                    <link rel="alternate" href="https://lug.wordpress.org/" hrefLang="lg-ug" />
                    <link rel="alternate" href="https://lij.wordpress.org/" hrefLang="lij" />
                    <link rel="alternate" href="https://lin.wordpress.org/" hrefLang="ln-cd" />
                    <link rel="alternate" href="https://lo.wordpress.org/" hrefLang="lo-la" />
                    <link rel="alternate" href="https://lt.wordpress.org/" hrefLang="lt-lt" />
                    <link rel="alternate" href="https://lv.wordpress.org/" hrefLang="lv-lv" />
                    <link rel="alternate" href="https://mfe.wordpress.org/" hrefLang="mfe" />
                    <link rel="alternate" href="https://mg.wordpress.org/" hrefLang="mg-mg" />
                    <link rel="alternate" href="https://mri.wordpress.org/" hrefLang="mi-nz" />
                    <link rel="alternate" href="https://mk.wordpress.org/" hrefLang="mk-mk" />
                    <link rel="alternate" href="https://ml.wordpress.org/" hrefLang="ml-in" />
                    <link rel="alternate" href="https://khk.wordpress.org/" hrefLang="mn-mn" />
                    <link rel="alternate" href="https://mr.wordpress.org/" hrefLang="mr" />
                    <link rel="alternate" href="https://ms.wordpress.org/" hrefLang="ms" />
                    <link rel="alternate" href="https://mlt.wordpress.org/" hrefLang="mt-mt" />
                    <link rel="alternate" href="https://mya.wordpress.org/" hrefLang="my-mm" />
                    <link rel="alternate" href="https://nb.wordpress.org/" hrefLang="nb-no" />
                    <link rel="alternate" href="https://ne.wordpress.org/" hrefLang="ne-np" />
                    <link rel="alternate" href="https://nl-be.wordpress.org/" hrefLang="nl-be" />
                    <link rel="alternate" href="https://nl.wordpress.org/" hrefLang="nl-nl" />
                    <link rel="alternate" href="https://nn.wordpress.org/" hrefLang="nn-no" />
                    <link rel="alternate" href="https://nqo.wordpress.org/" hrefLang="nqo" />
                    <link rel="alternate" href="https://oci.wordpress.org/" hrefLang="oc-fr" />
                    <link rel="alternate" href="https://ory.wordpress.org/" hrefLang="or-in" />
                    <link rel="alternate" href="https://os.wordpress.org/" hrefLang="os" />
                    <link rel="alternate" href="https://pan.wordpress.org/" hrefLang="pa-in" />
                    <link rel="alternate" href="https://pap.wordpress.org/" hrefLang="pap" />
                    <link rel="alternate" href="https://pcm.wordpress.org/" hrefLang="pcm" />
                    <link rel="alternate" href="https://pl.wordpress.org/" hrefLang="pl-pl" />
                    <link rel="alternate" href="https://ps.wordpress.org/" hrefLang="ps-af" />
                    <link rel="alternate" href="https://pt-ao.wordpress.org/" hrefLang="pt-ao" />
                    <link rel="alternate" href="https://br.wordpress.org/" hrefLang="pt-br" />
                    <link rel="alternate" href="https://pt.wordpress.org/" hrefLang="pt-pt" />
                    <link rel="alternate" href="https://roh.wordpress.org/" hrefLang="rm" />
                    <link rel="alternate" href="https://ro.wordpress.org/" hrefLang="ro-ro" />
                    <link rel="alternate" href="https://ru.wordpress.org/" hrefLang="ru-ru" />
                    <link rel="alternate" href="https://kin.wordpress.org/" hrefLang="rw-rw" />
                    <link rel="alternate" href="https://sa.wordpress.org/" hrefLang="sa-in" />
                    <link rel="alternate" href="https://snd.wordpress.org/" hrefLang="sd-pk" />
                    <link rel="alternate" href="https://si.wordpress.org/" hrefLang="si-lk" />
                    <link rel="alternate" href="https://sk.wordpress.org/" hrefLang="sk-sk" />
                    <link rel="alternate" href="https://sl.wordpress.org/" hrefLang="sl-si" />
                    <link rel="alternate" href="https://sna.wordpress.org/" hrefLang="sn-zw" />
                    <link rel="alternate" href="https://so.wordpress.org/" hrefLang="so-so" />
                    <link rel="alternate" href="https://sq.wordpress.org/" hrefLang="sq-al" />
                    <link rel="alternate" href="https://sq-xk.wordpress.org/" hrefLang="sq-xk" />
                    <link rel="alternate" href="https://sr.wordpress.org/" hrefLang="sr-rs" />
                    <link rel="alternate" href="https://ssw.wordpress.org/" hrefLang="ss-sz" />
                    <link rel="alternate" href="https://su.wordpress.org/" hrefLang="su-id" />
                    <link rel="alternate" href="https://sv.wordpress.org/" hrefLang="sv-se" />
                    <link rel="alternate" href="https://sw.wordpress.org/" hrefLang="sw" />
                    <link rel="alternate" href="https://syr.wordpress.org/" hrefLang="syr" />
                    <link rel="alternate" href="https://ta.wordpress.org/" hrefLang="ta-in" />
                    <link rel="alternate" href="https://ta-lk.wordpress.org/" hrefLang="ta-lk" />
                    <link rel="alternate" href="https://te.wordpress.org/" hrefLang="te" />
                    <link rel="alternate" href="https://tg.wordpress.org/" hrefLang="tg" />
                    <link rel="alternate" href="https://th.wordpress.org/" hrefLang="th" />
                    <link rel="alternate" href="https://tir.wordpress.org/" hrefLang="ti-er" />
                    <link rel="alternate" href="https://tuk.wordpress.org/" hrefLang="tk-tm" />
                    <link rel="alternate" href="https://tl.wordpress.org/" hrefLang="tl-ph" />
                    <link rel="alternate" href="https://tr.wordpress.org/" hrefLang="tr-tr" />
                    <link rel="alternate" href="https://tt.wordpress.org/" hrefLang="tt-ru" />
                    <link rel="alternate" href="https://ug.wordpress.org/" hrefLang="ug-cn" />
                    <link rel="alternate" href="https://uk.wordpress.org/" hrefLang="uk-ua" />
                    <link rel="alternate" href="https://ur.wordpress.org/" hrefLang="ur-pk" />
                    <link rel="alternate" href="https://uz.wordpress.org/" hrefLang="uz-uz" />
                    <link rel="alternate" href="https://vi.wordpress.org/" hrefLang="vi-vn" />
                    <link rel="alternate" href="https://wordpress.org/" hrefLang="x-default" />
                    <link rel="alternate" href="https://xho.wordpress.org/" hrefLang="xh-za" />
                    <link rel="alternate" href="https://yor.wordpress.org/" hrefLang="yo-ng" />
                    <link rel="alternate" href="https://cn.wordpress.org/" hrefLang="zh-cn" />
                    <link rel="alternate" href="https://zh-hk.wordpress.org/" hrefLang="zh-hk" />
                    <link rel="alternate" href="https://zh-sg.wordpress.org/" hrefLang="zh-sg" />
                    <link rel="alternate" href="https://tw.wordpress.org/" hrefLang="zh-tw" />
                    <link rel="alternate" href="https://zul.wordpress.org/" hrefLang="zu-za" />

                    {/*<!-- Jetpack Open Graph Tags -->*/}
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Bloggningsverktyg, publiceringsplattform och CMS - WordPress.org Svenska" />
                    <meta property="og:description" content="Programvara med öppen källkod som du kan använda för att enkelt skapa en vacker webbplats, blogg eller app." />
                    <meta name="description" content="Programvara med öppen källkod som du kan använda för att enkelt skapa en vacker webbplats, blogg eller app." />
                    <meta property="og:url" content="https://sv.wordpress.org/" />
                    <meta property="og:site_name" content="WordPress.org Svenska" />
                    <meta property="og:image" content="https://s.w.org/images/home/screen-themes.png?3" />
                    <meta property="og:locale" content="sv_SE" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:creator" content="@WordPress" />
                    {/*<!-- End Jetpack Open Graph Tags -->*/}

                    <script dangerouslySetInnerHTML={{__html: `
                        document.cookie='devicePixelRatio='+((window.devicePixelRatio === undefined) ? 1 : window.devicePixelRatio)+'; path=/';
                    `}} />

{/* more css here */}



                    <link rel="shortcut icon" href="//s.w.org/favicon.ico?2" type="image/x-icon" />
                    <link rel="stylesheet" id="admin-bar-css" href={pipeline.publicPath("css/admin-bar.min.css")} type="text/css" media="all" />
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
                </body>
            </html>
        )
    } as ViewResult;
}

export default MyLayout as Layout;
