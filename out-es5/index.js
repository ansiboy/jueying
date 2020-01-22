"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./jquery");

require("../lib/jquery.event.drag-2.2");

require("../lib/jquery.event.drag.live-2.2");

require("../lib/jquery.event.drop-2.2");

require("../lib/jquery.event.drop.live-2.2");

var common_1 = require("./common");

exports.strings = common_1.proptDisplayNames;
exports.proptDisplayNames = common_1.proptDisplayNames;

var component_1 = require("./component");

exports.Component = component_1.Component;
exports.DesignerContext = component_1.DesignerContext;
exports.MasterPage = component_1.MasterPage;
exports.MasterPageContext = component_1.MasterPageContext;
exports.PlaceHolder = component_1.PlaceHolder;
exports.PageView = component_1.PageView;

var component_panel_1 = require("./component-panel");

exports.ComponentPanel = component_panel_1.ComponentPanel;

var editor_panel_1 = require("./editor-panel");

exports.EditorPanel = editor_panel_1.EditorPanel;

var page_designer_1 = require("./page-designer");

exports.PageDesigner = page_designer_1.PageDesigner;

var prop_editor_1 = require("./prop-editor");

exports.PropEditor = prop_editor_1.PropEditor;
exports.TextInput = prop_editor_1.TextInput;

var style_1 = require("./style");

exports.classNames = style_1.classNames; // (function (factory) {
//     if (typeof module === "object" && typeof module.exports === "object") {
//         var v = factory(require, exports);
//         if (v !== undefined) module.exports = v;
//     }
//     else if (typeof define === "function" && define.amd) {
//         define(["require", "exports"], factory);
//     }
// })(function (require, exports) {
//# sourceMappingURL=index.js.map
