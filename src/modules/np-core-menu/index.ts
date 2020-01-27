import { PluginResult } from "../../core/types/pluginresult";
import Plugin from "../../core/plugin";

export default class Menu extends Plugin
{
    public Index(model: {}): PluginResult {
        console.log("np-core-menu.Index()", model);
        return { view: "index", model };
    }
}