import { PluginResult } from "../../core/types/pluginresult";
import Plugin from "../../core/plugin";
import {Menu, MenuItem, MenuProps } from "../../plugins/np-core-menu/models";

export default class MenuPlugin extends Plugin
{
    public execute(model: MenuProps): Promise<PluginResult> {
        console.log("np-core-menu.execute()", model);

        if (model.name === "wporg-header-menu"){

            const currentUrl = "/"; //TODO: convert this.route to "standard" url

            const items = [
                {id:251, type: "custom", className: "menu-item-home", url: "/", text: "Hem"},
                {id:587, type: "post_type", url: "/themes/", text: "Teman"},
                {id:591, type: "post_type", url: "/plugins/", text: "Tillägg"},
                {id:858, type: "custom", url: "/support/", text: "Support"},
                {id:989, type: "post_type", url: "/engagera-dig/", text: "Engagera dig!"},
                {id:689, type: "custom", url: "/news/", text: "Blogg"},
                {id:1210, type: "post_type", className: "button button-primary download", url: "/download/", text: "Skaffa WordPress"},
                {id:1127, type: "post_type", url: "/about/", text: "Om oss: Vårt uppdrag"}
            ];

            const viewModel = { 
                id: model.name,
                currentUrl,
                items
            } as Menu;

            return Promise.resolve({ view: "index", model: viewModel });    
        }
        else {
            return Promise.resolve(undefined);
        }
    }
}