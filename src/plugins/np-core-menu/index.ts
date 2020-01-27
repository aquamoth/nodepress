import { PluginResult } from "../../core/types/pluginresult";
import Plugin from "../../core/plugin";
import {Menu, MenuItem, MenuProps } from "../../plugins/np-core-menu/models";

export default class MenuPlugin extends Plugin
{
    public execute(model: MenuProps): Promise<PluginResult> {
        console.log("np-core-menu.execute()", model);

        if (model.name === "wporg-header-menu"){

            const viewModel = { id: model.name } as Menu;
            return Promise.resolve({ view: "index", model: viewModel });
    
        }
        else {
            return Promise.resolve(undefined);
        }
    }
}