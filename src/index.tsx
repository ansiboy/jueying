import './jquery';
import '../lib/jquery.event.drag-2.2';
import '../lib/jquery.event.drag.live-2.2';
import '../lib/jquery.event.drop-2.2';
import '../lib/jquery.event.drop.live-2.2';


export { proptDisplayNames as strings, proptDisplayNames } from "./common";
export { Component, DesignerContext, MasterPage, MasterPageContext, ComponentProps } from "./component";
export { ComponentPanel } from "./component-panel";
export { EditorPanel, EditorPanelProps } from "./editor-panel";
export { ComponentDefine, ComponentData } from "./models";
export { PageDesigner } from "./page-designer";
export { PropEditor, PropEditorState, TextInput, DropDownItem, } from "./prop-editor";
export { PropertyEditorInfo } from "./property-editor";
export { classNames } from "./style";

// (function (factory) {
//     if (typeof module === "object" && typeof module.exports === "object") {
//         var v = factory(require, exports);
//         if (v !== undefined) module.exports = v;
//     }
//     else if (typeof define === "function" && define.amd) {
//         define(["require", "exports"], factory);
//     }
// })(function (require, exports) {





