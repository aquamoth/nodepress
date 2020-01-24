// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";

export const docType = "<!DOCTYPE html>";

export default (component: React.Component) => (
    <html>
        <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>React App</title>
        </head>

        <body style={{backgroundColor:"#a0f0f0"}}>
            <h1>Layout title</h1>
            <div id="app">{component}</div>

            {/* <script src="/app.bundle.js"></script> */}
        </body>
    </html>
);