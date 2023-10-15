import React from "react";
import { constants } from "./common";
import { DesignComponent } from "./design/design-component";

let g: any = typeof window === "undefined" ? global : window;
g[constants.designComponentFactoryName] = g[constants.designComponentFactoryName] || DesignComponent.createElement;
g[constants.componentFactoryName] = g[constants.componentFactoryName] || React.createElement;