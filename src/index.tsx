import { constants } from "./common";
import { DesignComponent } from "./design";

export { PageDesigner, DesignerContext, DesignComponentContext } from "./designer";
export type { PageDesignerProps, PageDesignerState, DesignerContextValue, } from "./designer";
export { classNames } from "./style";
export type { ComponentsConfig } from "./components-config";
export { ComponentDiagram, ComponentPanel, DesignComponent } from "./design";
export { EditorGroup, EditorPanel } from "./editor";
export type { EditorPanelProps, PropertyEditorInfo, PropertyEditorProps, PropertyEditor } from "./editor";
export { ComponentStatus, ComponentData, Component, PageDataParser, } from "./runtime";
export type { PageData, ComponentProps, ComponentTypes, ComponentClass } from "./runtime";
export { PageDataHelper, childrenNodeToArray } from "./utility";

let g: any = typeof window === "undefined" ? global : window;
g[constants.componentFactoryName] = DesignComponent.createElement;




