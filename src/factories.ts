import React from "react";
import { constants } from "./common";
import { DesignComponent } from "./design/design-component";

let g: any = typeof window === "undefined" ? global : window;
g[constants.designComponentFactoryName] = g[constants.designComponentFactoryName] || DesignComponent.createElement;
g[constants.componentFactoryName] = g[constants.componentFactoryName] || DesignComponent.createElement;//React.createElement;

export class Factories {
    static get designComponentFactory(): typeof DesignComponent["createElement"] {
        return g[constants.designComponentFactoryName];
    }
    static set designComponentFactory(value: typeof DesignComponent["createElement"]) {
        g[constants.designComponentFactoryName] = value;
    }
    static get componentFactory(): typeof DesignComponent["createElement"] {
        return g[constants.componentFactoryName];
    }
    static set componentFactory(value: typeof DesignComponent["createElement"]) {
        g[constants.componentFactoryName] = value;
    }
}