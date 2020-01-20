export interface ViewEngineConstructor {
    new (templateName: string): ViewEngine;
}

export interface ViewEngine{
    render(): Promise<string>;
}
