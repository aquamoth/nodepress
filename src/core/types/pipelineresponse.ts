export interface PipelineResponse {
    statusCode: number;
    reasonPhrase?: string;
    headers?: {[name: string]: string};
    content: string;
}

// interface RequestPipeline {
//     process(): Promise<PipelineResponse>;
//     loadLayout(layoutName: string): Promise<Layout>;
//     renderModule(name: string, parameters: {}): Promise<string>;
//     renderPartial(viewName: string, model?: {}): Promise<JSX.Element>;

//     publicPath(path: string): string;
//     templatePath(path: string): string;
// }

