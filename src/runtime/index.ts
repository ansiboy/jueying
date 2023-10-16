export { parsePageData } from "./parse-component-data"
export { PageDataParser, PageDataParserContext } from "./page-data-parser"
export { PageData, ComponentData, ComponentStatus, ComponentTypes, ElementFactory, ComponentProps } from "./types"
export { Component } from "./component";
export { ComponentClass } from "./types";

import ReactDOM from "react-dom";
import { constants } from "../common";
import "./components/component-placeholder";
import "./components/page";
import "./components/text";
import React from "react";

let g: any = typeof window === "undefined" ? global : window;
g[constants.componentFactoryName] = React.createElement;