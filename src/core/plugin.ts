import { Request } from "express";
import { PluginResult } from "./types/pluginresult";

export default class Plugin {
    public request: Request;
    public route: Route;
    
    public execute(model: {}): Promise<PluginResult> {
        throw Error("Abstract method must be overridden.");
    }
}
