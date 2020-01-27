import { PluginResult } from "../../core/types/pluginresult";
import Plugin from "../../core/plugin";

export default class Menu extends Plugin
{
    public execute(model: {}): Promise<PluginResult> {
        console.log("np-core-menu.Index()", model);
        return Promise.resolve({ view: "index", model });
    }
}