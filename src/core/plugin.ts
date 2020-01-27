import { Request } from "express";
import { PluginResult } from "./types/pluginresult";

export default class Plugin {
    public request: Request;
    public route: Route;
    
    execute: (model: {}) => Promise<PluginResult>;
}
