// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";

function render(model: {}) {
    return (<>
        <h1>Test</h1>
        <p>This is a template that implements React render engine</p>
    </>);
}

export default (model: {}) => ({
    layout: "layout",
    component: render(model)
});
