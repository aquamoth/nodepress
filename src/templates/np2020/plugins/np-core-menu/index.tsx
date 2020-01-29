// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import RequestPipeline from "../../../../core/requestpipeline";
import { Menu, MenuItem } from "../../../../plugins/np-core-menu/models";

function classNameFor(item: MenuItem, currentUrl: string) {

    const classNames = [
        "menu-item",
        "menu-item-type-" + item.type,
        "menu-item-object-" + item.type        
    ];

    if (item.url === currentUrl)
        classNames.push("current-menu-item");

    if (item.className)
        classNames.push(item.className);

    classNames.push("menu-item-" + item.id);

    return classNames.join(" ");
}

function listItemFor(item: MenuItem, currentUrl: string) {
    const id = "menu-item-" + item.id;
    const className = classNameFor(item, currentUrl);

    return (<li key={id} id={id} className={className}><a href={item.url}>{item.text}</a></li>);
}

export default function(model: Menu, pipeline: RequestPipeline) { 
    const currentUrl = pipeline.canonicalUrl();
    return ({
        component: (<>
            <button id="mobile-menu-button" aria-expanded="false"><span className="screen-reader-text">Toggle Menu</span></button>
            <ul id={model.id} className="menu nav-menu">
                {model.items.map(item => listItemFor(item, currentUrl))}
            </ul>
        </>)
    });
}
