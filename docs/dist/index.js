/*!
 * 
 *  maishu-jueying v3.3.28
 *  
 *  Copyright (C) maishu All rights reserved.
 *  
 *  组件设计器 
 *   
 *  作者: 麦舒
 *  日期: 2018/5/30
 *  
 *  个人博客：   http://www.cnblogs.com/ansiboy/
 *  GITHUB:     https://github.com/ansiboy/jueying
 *  QQ 讨论组：  119038574 
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("maishu-dilu"), require("maishu-jueying-core"), require("maishu-toolkit"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["maishu-dilu", "maishu-jueying-core", "maishu-toolkit", "react"], factory);
	else if(typeof exports === 'object')
		exports["jueying"] = factory(require("maishu-dilu"), require("maishu-jueying-core"), require("maishu-toolkit"), require("react"));
	else
		root["jueying"] = factory(root["maishu-dilu"], root["maishu-jueying-core"], root["maishu-toolkit"], root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_maishu_dilu__, __WEBPACK_EXTERNAL_MODULE_maishu_jueying_core__, __WEBPACK_EXTERNAL_MODULE_maishu_toolkit__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out/common.js":
/*!***********************!*\
  !*** ./out/common.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Callback = exports.guid = exports.groupDisplayNames = exports.proptDisplayNames = exports.constants = void 0;
exports.constants = {
    componentsDir: 'components',
    connectorElementClassName: 'component-container',
    componentTypeName: 'data-component-name',
    componentData: 'component-data',
    componentPosition: "component-position"
};
exports.proptDisplayNames = {};
exports.groupDisplayNames = {};
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
exports.guid = guid;
class Callback {
    constructor() {
        this.funcs = new Array();
    }
    add(func) {
        this.funcs.push(func);
    }
    remove(func) {
        this.funcs = this.funcs.filter(o => o != func);
    }
    fire(args) {
        this.funcs.forEach(o => o(args));
    }
    static create() {
        return new Callback();
    }
}
exports.Callback = Callback;
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./out/component-data-maintain.js":
/*!****************************************!*\
  !*** ./out/component-data-maintain.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PageDataMaintain = exports.ComponentDataContext = void 0;
const React = __webpack_require__(/*! react */ "react");
const errors_1 = __webpack_require__(/*! ./errors */ "./out/errors.js");
const maishu_toolkit_1 = __webpack_require__(/*! maishu-toolkit */ "maishu-toolkit");
exports.ComponentDataContext = React.createContext({ designer: null });
/**
 * 组件数据处理，负责对对组件数据进行处理维护。
 */
class PageDataMaintain extends React.Component {
    // private components: { [typeName: string]: { [id: string]: React.Component } } = {};
    constructor(props) {
        super(props);
        let pageData = this.props.pageData;
        this.initPageData(pageData);
        this.state = { pageData: pageData };
    }
    initPageData(pageData) {
        if (pageData == null) {
            return;
        }
        // pageData.children = pageData.children || [];
        console.assert(pageData.children != null, "PageData children is null.");
        pageData.children.forEach(c => {
            this.initComponent(c, pageData);
        });
        // this.setComponetRefProp(pageData);
    }
    /**
     * 对组件及其子控件进行命名
     * @param componentData
     */
    initComponent(componentData, pageData) {
        let namedComponents = {};
        pageData.children.forEach(c => {
            if (c.name) {
                namedComponents[c.name] = c;
            }
        });
        if (!componentData.name) {
            let num = 0;
            let name;
            do {
                num = num + 1;
                name = `${componentData.type}${num}`;
            } while (namedComponents[name]);
            namedComponents[name] = componentData;
            componentData.name = name;
        }
        if (!componentData.id)
            componentData.id = maishu_toolkit_1.guid();
    }
    // allComponents(): React.Component[] {
    //     let r: React.Component[] = [];
    //     for (let key in this.components) {
    //         let ids = Object.getOwnPropertyNames(this.components[key]);
    //         r.push(...ids.map(id => this.components[key][id]));
    //     }
    //     return r;
    // }
    /** 页面数据 */
    get pageData() {
        return this.state.pageData;
    }
    /** 获取已选择了的组件编号 */
    get selectedComponentIds() {
        return this.selectedComponents.map(o => o.id);
    }
    /** 获取已选择了的组件 */
    get selectedComponents() {
        let arr = this.pageData.children.filter(o => o.selected);
        return arr;
    }
    get element() {
        return this._element;
    }
    updateComponentProp(componentId, propName, value) {
        return this.updateComponentProps([{ componentId, propName, value }]);
    }
    updateComponentProps(componentProps) {
        let componentDatas = [];
        for (let i = 0; i < componentProps.length; i++) {
            let { componentId, propName, value } = componentProps[i];
            let componentData = this.findComponentData(componentId);
            if (componentData == null)
                continue;
            let navPropsNames = propName.split(".");
            console.assert(componentData != null);
            console.assert(navPropsNames != null, 'props is null');
            componentData.props = componentData.props || {};
            let obj = componentData.props;
            for (let i = 0; i < navPropsNames.length - 1; i++) {
                obj = obj[navPropsNames[i]] = obj[navPropsNames[i]] || {};
            }
            obj[navPropsNames[navPropsNames.length - 1]] = value;
            componentDatas.push(componentData);
        }
        this.setState({ pageData: this.pageData });
    }
    /**
     * 添加控件
     * @param componentData 控件数据
     * @param componentIndex 新添加组件在子组件中的次序
     */
    appendComponent(componentData, componentIndex) {
        let parentId = componentData.parentId;
        if (!parentId)
            throw new Error('ParentId field of component data is null.');
        if (!componentData)
            throw errors_1.Errors.argumentNull('childComponent');
        let pageData = this.pageData;
        this.initComponent(componentData, pageData);
        // let parentControl = this.findComponentData(parentId) as ComponentData;
        // if (parentControl == null && componentData.parentId != pageData.id)
        //     throw new Error('Parent is not exists')
        if (componentIndex == null) {
            pageData.children.push(componentData);
        }
        else {
            pageData.children.splice(componentIndex, 0, componentData);
        }
        this.selectComponents(componentData.id);
    }
    /**
     * 选择指定的控件
     * @param control 指定的控件
     */
    selectComponent(componentIds) {
        this.selectComponents(componentIds);
        //====================================================
        // 设置焦点，以便获取键盘事件
        if (this._element)
            this._element.focus();
        //====================================================
    }
    /**
     * 选择指定的控件，一个或多个。已经选择的控件取消选择。
     * @param control 指定的控件
     */
    selectComponents(componentIds) {
        if (typeof componentIds == 'string')
            componentIds = [componentIds];
        this.pageData.children.forEach(c => {
            c.selected = false;
        });
        this.pageData.children.filter(o => componentIds.indexOf(o.id) >= 0).forEach(c => {
            c.selected = true;
        });
        this.setState({ pageData: this.pageData });
    }
    /** 移除控件 */
    removeComponent(...componentIds) {
        this.removeComponents(componentIds);
    }
    removeComponents(componentIds) {
        let pageData = this.pageData;
        if (!pageData || !pageData.children || pageData.children.length == 0)
            return;
        for (let i = 0; i < componentIds.length; i++) {
            this.removeComponentFrom(componentIds[i], pageData);
        }
        this.setState({ pageData: pageData });
    }
    /**
     * 移动控件到另外一个控件容器
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param childComponentIndex 组件位置
     */
    moveComponent(componentId, parentId, childComponentIndex) {
        let component = this.findComponentData(componentId);
        if (component == null)
            throw new Error(`Cannt find component by id ${componentId}`);
        console.assert(component != null, `Cannt find component by id ${componentId}`);
        component.parentId = parentId;
        let pageData = this.pageData;
        console.assert(pageData.children != null);
        this.removeComponentFrom(componentId, pageData);
        this.appendComponent(component, childComponentIndex);
    }
    removeComponentFrom(componentId, pageData) {
        let child = pageData.children.filter(o => o.id == componentId)[0];
        if (child == null)
            throw new Error(`Component '${componentId}' is not exists.`);
        let stack = [child];
        let componentsToRemove = [componentId];
        while (stack.length > 0) {
            let item = stack.pop();
            let children = pageData.children.filter(o => o.parentId == item.id);
            if (children.length > 0) {
                stack.push(...children);
                componentsToRemove.push(...children.map(o => o.id));
            }
        }
        pageData.children = pageData.children.filter(o => componentsToRemove.indexOf(o.id) < 0);
    }
    static travelComponentData(pageData, filter) {
        let stack = new Array();
        stack.push(pageData);
        let r = [];
        filter = filter || (() => true);
        while (stack.length > 0) {
            let item = stack.shift();
            if (filter(item)) {
                r.push(item);
            }
            //===============================================
            // 子元素有可能为字符串, 过滤出对象
            let children = (item.children || []).filter(o => typeof o == 'object');
            //===============================================
            stack.push(...children);
        }
        return r;
    }
    /**
     * 通过组件编号获取组件的数据
     * @param componentId 组件编号
     */
    findComponentData(componentId) {
        let pageData = this.state.pageData;
        if (!pageData)
            throw errors_1.Errors.pageDataIsNull();
        let componentData = pageData.children.filter(o => o.id == componentId)[0];
        return componentData;
    }
    onKeyDown(e) {
        const DELETE_KEY_CODE = 46;
        if (e.keyCode == DELETE_KEY_CODE) {
            if (this.selectedComponents.length == 0)
                return;
            this.removeComponents(this.selectedComponentIds);
        }
    }
    render() {
        return React.createElement("div", { tabIndex: 0, ref: e => this._element = this._element || e, onKeyDown: e => this.onKeyDown(e), className: this.props.className, style: this.props.style },
            React.createElement(exports.ComponentDataContext.Provider, { value: { designer: this } }, this.props.children));
    }
}
exports.PageDataMaintain = PageDataMaintain;
//# sourceMappingURL=component-data-maintain.js.map

/***/ }),

/***/ "./out/component.js":
/*!**************************!*\
  !*** ./out/component.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
const property_editor_1 = __webpack_require__(/*! ./property-editor */ "./out/property-editor.js");
const maishu_jueying_core_1 = __webpack_require__(/*! maishu-jueying-core */ "maishu-jueying-core");
// type CreateElementContext = { components: React.Component[], componentTypes: string[] };
// let defaultGroup: GroupedEditor["group"] = { prop: "", displayName: "" };
class Component {
    static getPropEditors(componentData) {
        let componentType = componentData.type;
        let result = [];
        let propEditorInfo = this.componentPropEditors[componentType] || [];
        for (let i = 0; i < propEditorInfo.length; i++) {
            let propName = propEditorInfo[i].propName;
            let display = Component.componentPropEditorDisplay[`${componentType}.${propName}`];
            if (display != null && display(componentData) == false)
                continue;
            result.push(propEditorInfo[i]);
        }
        return result;
    }
    static getPropEditor(controlClassName, propName) {
        return this.getPropEditorByArray(controlClassName, propName);
    }
    /** 通过属性数组获取属性的编辑器 */
    static getPropEditorByArray(controlClassName, propNames) {
        let classEditors = this.componentPropEditors[controlClassName] || [];
        let editor = classEditors.filter(o => o.propName == propNames)[0];
        return editor;
    }
    static setPropEditor(options) {
        let { componentType, editorType, display: editorDisplay, group, propName, displayName, defaultValue, validation, } = options;
        group = group || property_editor_1.defaultGroupName;
        propName = propName || "";
        displayName = displayName || propName;
        // 属性可能为导航属性,例如 style.width
        let propNames = propName.split('.');
        let className = typeof componentType == 'string' ? componentType : componentType.prototype.typename || componentType.name;
        Component.componentPropEditorDisplay[`${className}.${propName}`] = editorDisplay;
        let classProps = Component.componentPropEditors[className] = Component.componentPropEditors[className] || [];
        for (let i = 0; i < classProps.length; i++) {
            let propName1 = classProps[i].propName;
            let propName2 = propNames.join('.');
            if (propName1 == propName2) {
                classProps[i].editorType = editorType;
                return;
            }
        }
        classProps.push({
            propName, displayName,
            editorType: editorType,
            group, defaultValue, validation
        });
    }
    static register(typeName, componentType) {
        return maishu_jueying_core_1.registerComponent(typeName, componentType);
    }
}
exports.Component = Component;
//==========================================
// 用于创建 React 的 React.Fragment 
Component.Fragment = "";
//==========================================
Component.componentPropEditors = {};
Component.componentPropEditorDisplay = {};
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./out/editor-panel.js":
/*!*****************************!*\
  !*** ./out/editor-panel.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorPanel = void 0;
const React = __webpack_require__(/*! react */ "react");
const property_editor_1 = __webpack_require__(/*! ./property-editor */ "./out/property-editor.js");
const style_1 = __webpack_require__(/*! ./style */ "./out/style.js");
class EditorPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { componentDatas: [] };
    }
    /** 对输入进行验证 */
    validateInputs() {
        return this.editor.validator.checkAsync();
    }
    render() {
        let { empty } = this.props;
        empty = empty || React.createElement("div", { className: "empty" }, "\u6682\u65E0\u53EF\u7528\u7684\u5C5E\u6027");
        return React.createElement("div", { className: `${style_1.classNames.editorPanel} ${this.props.className || ""}`, ref: (e) => this.element = e || this.element },
            React.createElement(property_editor_1.PropertyEditor, { ref: e => this.editor = e || this.editor, empty: empty, customRender: this.props.customRender }));
    }
}
exports.EditorPanel = EditorPanel;
//# sourceMappingURL=editor-panel.js.map

/***/ }),

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = void 0;
class Errors {
    static placeHolderIdNull() {
        let msg = `Place holder property id cannt be null or empty.`;
        return new Error(msg);
    }
    static fileNotExists(fileName) {
        return new Error(`File '${fileName}' is not exists.`);
    }
    static argumentNull(argumentName) {
        return new Error(`Argument ${argumentName} is null or empty.`);
    }
    static argumentRangeError(argumentName) {
        return new Error(`Argument ${argumentName} range error.`);
    }
    static pageDataIsNull() {
        return new Error(`Page data is null.`);
    }
    static toolbarRequiredKey() {
        return new Error(`Toolbar has not a key prop.`);
    }
    static loadPluginFail(pluginId) {
        return new Error(`Load plugin '${pluginId}' fail.`);
    }
    static idRequired() {
        return new Error(`Property id is required.`);
    }
    static canntFindMasterPage(componentId) {
        return new Error(`Can not find master page for component container ${componentId}.`);
    }
    static propCanntNull(componentName, property) {
        let msg = `${componentName} property ${property} cannt be null or empty.`;
        return new Error(msg);
    }
    static argumentFieldCanntNull(fieldName, argumentName) {
        let msg = `${fieldName} of argument ${argumentName} cannt be null or empty.`;
        return new Error(msg);
    }
}
exports.Errors = Errors;
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentDataContext = exports.PageDataMaintain = exports.classNames = exports.TextInput = exports.PropEditor = exports.DesignerContext = exports.PageDesigner = exports.EditorPanel = exports.Component = exports.groupDisplayNames = void 0;
var common_1 = __webpack_require__(/*! ./common */ "./out/common.js");
Object.defineProperty(exports, "groupDisplayNames", { enumerable: true, get: function () { return common_1.groupDisplayNames; } });
var component_1 = __webpack_require__(/*! ./component */ "./out/component.js");
Object.defineProperty(exports, "Component", { enumerable: true, get: function () { return component_1.Component; } });
var editor_panel_1 = __webpack_require__(/*! ./editor-panel */ "./out/editor-panel.js");
Object.defineProperty(exports, "EditorPanel", { enumerable: true, get: function () { return editor_panel_1.EditorPanel; } });
var page_designer_1 = __webpack_require__(/*! ./page-designer */ "./out/page-designer.js");
Object.defineProperty(exports, "PageDesigner", { enumerable: true, get: function () { return page_designer_1.PageDesigner; } });
Object.defineProperty(exports, "DesignerContext", { enumerable: true, get: function () { return page_designer_1.DesignerContext; } });
var prop_editor_1 = __webpack_require__(/*! ./prop-editor */ "./out/prop-editor.js");
Object.defineProperty(exports, "PropEditor", { enumerable: true, get: function () { return prop_editor_1.PropEditor; } });
Object.defineProperty(exports, "TextInput", { enumerable: true, get: function () { return prop_editor_1.TextInput; } });
var style_1 = __webpack_require__(/*! ./style */ "./out/style.js");
Object.defineProperty(exports, "classNames", { enumerable: true, get: function () { return style_1.classNames; } });
var component_data_maintain_1 = __webpack_require__(/*! ./component-data-maintain */ "./out/component-data-maintain.js");
Object.defineProperty(exports, "PageDataMaintain", { enumerable: true, get: function () { return component_data_maintain_1.PageDataMaintain; } });
Object.defineProperty(exports, "ComponentDataContext", { enumerable: true, get: function () { return component_data_maintain_1.ComponentDataContext; } });
// export { ComponentDataHandler } from "./component-data-handler";
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./out/page-designer.js":
/*!******************************!*\
  !*** ./out/page-designer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import * as React from "react";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignerContext = exports.PageDesigner = void 0;
const component_data_maintain_1 = __webpack_require__(/*! ./component-data-maintain */ "./out/component-data-maintain.js");
class PageDesigner extends component_data_maintain_1.PageDataMaintain {
}
exports.PageDesigner = PageDesigner;
exports.DesignerContext = component_data_maintain_1.ComponentDataContext;
//# sourceMappingURL=page-designer.js.map

/***/ }),

/***/ "./out/prop-editor.js":
/*!****************************!*\
  !*** ./out/prop-editor.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = exports.PropEditor = void 0;
const React = __webpack_require__(/*! react */ "react");
class PropEditor extends React.Component {
    constructor(props) {
        super(props);
    }
    static textInput() {
        return TextInput;
    }
}
exports.PropEditor = PropEditor;
class TextInput extends PropEditor {
    render() {
        let { value } = this.props;
        return React.createElement("input", { className: 'form-control', value: value || '', onChange: e => {
                // this.setState({ value: e.target.value })
                this.props.updateComponentProp(e.target.value);
            } });
    }
}
exports.TextInput = TextInput;
//# sourceMappingURL=prop-editor.js.map

/***/ }),

/***/ "./out/property-editor.js":
/*!********************************!*\
  !*** ./out/property-editor.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = exports.PropertyEditor = exports.defaultGroupName = void 0;
const React = __webpack_require__(/*! react */ "react");
const component_1 = __webpack_require__(/*! ./component */ "./out/component.js");
const errors_1 = __webpack_require__(/*! ./errors */ "./out/errors.js");
const page_designer_1 = __webpack_require__(/*! ./page-designer */ "./out/page-designer.js");
const common_1 = __webpack_require__(/*! ./common */ "./out/common.js");
const maishu_dilu_1 = __webpack_require__(/*! maishu-dilu */ "maishu-dilu");
exports.defaultGroupName = "";
class PropertyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getEditors(designer) {
        if (designer == null) {
            return [];
        }
        // 各个控件相同的编辑器
        let commonPropEditorInfos = [];
        let selectedComponents = designer.selectedComponents;
        for (let i = 0; i < selectedComponents.length; i++) {
            let componentData = selectedComponents[i];
            let propEditorInfos = component_1.Component.getPropEditors(componentData);
            if (i == 0) {
                commonPropEditorInfos = propEditorInfos || [];
            }
            else {
                let items = [];
                commonPropEditorInfos.forEach(propInfo1 => {
                    propEditorInfos.forEach(propInfo2 => {
                        let propName1 = propInfo1.propName; //propInfo1.propNames.join('.')
                        let propName2 = propInfo2.propName; //propInfo2.propNames.join('.')
                        if (propInfo1.editorType == propInfo2.editorType && propName1 == propName2) {
                            items.push(propInfo1);
                        }
                    });
                });
                commonPropEditorInfos = items;
            }
        }
        // 各个控件相同的属性值
        let commonFlatProps = {};
        for (let i = 0; i < selectedComponents.length; i++) {
            let control = selectedComponents[i];
            let controlProps = Object.assign({}, control.props);
            delete controlProps.children;
            if (i == 0) {
                commonFlatProps = controlProps;
            }
            else {
                let obj = {};
                for (let key in commonFlatProps) {
                    if (commonFlatProps[key] == controlProps[key])
                        obj[key] = controlProps[key];
                }
                commonFlatProps = obj;
            }
        }
        let editors = [];
        for (let i = 0; i < commonPropEditorInfos.length; i++) {
            let propEditorInfo = commonPropEditorInfos[i];
            let propName = propEditorInfo.propName;
            ;
            let editorType = propEditorInfo.editorType;
            let value = this.propValue(propName, commonFlatProps);
            if (value == null)
                value = propEditorInfo.defaultValue;
            let editorProps = {
                value: value,
                editComponents: selectedComponents,
                updateComponentProp: (value) => {
                    let componentProps = selectedComponents.map(o => ({
                        componentId: o.id, propName: propEditorInfo.propName, value
                    }));
                    if (this._validator == null) {
                        this._validateFields = commonPropEditorInfos.filter(o => o.validation != null)
                            .map(o => Object.assign(o.validation, { name: o.propName }));
                        this._validator = new maishu_dilu_1.FormValidator(this.element, ...this._validateFields);
                    }
                    if (this._validateFields.filter(o => o.name == propEditorInfo.propName).length > 0)
                        this._validator.checkElement(propEditorInfo.propName);
                    designer.updateComponentProps(componentProps);
                }
            };
            let editor = React.createElement(editorType, editorProps);
            editors.push({ prop: propEditorInfo.propName, displayName: propEditorInfo.displayName, editor, group: propEditorInfo.group });
        }
        return editors;
    }
    propValue(propName, props) {
        if (!propName)
            throw errors_1.Errors.argumentNull("propName");
        if (!props)
            throw errors_1.Errors.argumentNull("props");
        let navPropsNames = propName.split(".");
        let obj = props;
        for (let i = 0; i < navPropsNames.length; i++) {
            obj = obj[navPropsNames[i]];
            if (obj == null)
                return null;
        }
        return obj;
    }
    render() {
        return React.createElement(page_designer_1.DesignerContext.Consumer, null, args => {
            let designer = args.designer;
            if (designer == null)
                return null;
            let editors = this.getEditors(designer);
            if (editors.length == 0) {
                let empty = this.props.empty;
                return React.createElement("div", { className: "text-center" }, empty);
            }
            if (this.props.customRender) {
                let items = editors.map(o => Object.assign({ displayName: o.displayName }, o));
                let r = this.props.customRender(designer.selectedComponents, items);
                if (r != null) {
                    return React.createElement("div", { ref: e => this._element = e || this._element }, r);
                }
            }
            let groupEditorsArray = [];
            for (let i = 0; i < editors.length; i++) {
                let group = editors[i].group || exports.defaultGroupName;
                let groupEditors = groupEditorsArray.filter(o => o.group == group)[0];
                if (groupEditors == null) {
                    groupEditors = { group: editors[i].group, editors: [] };
                    groupEditorsArray.push(groupEditors);
                }
                groupEditors.editors.push({ prop: editors[i].prop, displayName: editors[i].displayName, editor: editors[i].editor });
            }
            return groupEditorsArray.map((g) => React.createElement("div", { key: g.group, className: "panel panel-default", ref: e => this._element = e || this._element },
                g.group ? React.createElement("div", { className: "panel-heading" }, common_1.groupDisplayNames[g.group] || g.group) : null,
                React.createElement("div", { className: "panel-body" }, g.editors.map((o, i) => React.createElement("div", { key: o.prop, className: "form-group clearfix" },
                    React.createElement("label", null, o.displayName),
                    React.createElement("div", { className: "control" },
                        React.createElement(ErrorBoundary, null, o.editor)))))));
        });
    }
    get element() {
        return this._element;
    }
    get validator() {
        return this._validator;
    }
}
exports.PropertyEditor = PropertyEditor;
PropertyEditor.contextType = page_designer_1.DesignerContext;
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ error });
        // You can also log the error to an error reporting service
        //   logErrorToMyService(error, info);
    }
    render() {
        let { error } = this.state || {};
        if (error) {
            return React.createElement("div", { className: "error" },
                React.createElement("div", null, error.message),
                React.createElement("div", null, error.stack));
        }
        return this.props.children;
    }
}
exports.ErrorBoundary = ErrorBoundary;
//# sourceMappingURL=property-editor.js.map

/***/ }),

/***/ "./out/style.js":
/*!**********************!*\
  !*** ./out/style.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.removeClassName = exports.appendClassName = exports.classNames = void 0;
const errors_1 = __webpack_require__(/*! ./errors */ "./out/errors.js");
exports.classNames = {
    componentSelected: `component-selected`,
    emptyTemplates: `empty-templates`,
    loadingTemplates: `loading-templates`,
    templateSelected: `template-selected`,
    templateDialog: `template-dialog`,
    emptyDocument: `empty-document`,
    component: 'component',
    componentWrapper: 'component-wrapper',
    componentPanel: 'component-panel',
    componentIcon: 'component-icon',
    placeholder: 'placeholder',
    editorPanel: 'editor-panel',
    designer: 'designer',
    moveDown: 'move-down',
};
let templateDialog = {
    nameHeight: 40,
    fontSize: 22
};
let element = document.createElement('style');
element.type = 'text/css';
element.setAttribute("data-name", "jueying");
element.innerHTML = `
            .${exports.classNames.componentSelected} {
                border: solid 1px #337ab7!important;
            }
            .${exports.classNames.componentSelected} > :first-child {
                border-color: blue;
              }
              .${exports.classNames.componentSelected} .resize_handle {
                position: absolute;
                height: 6px;
                width: 6px;
                border: 1px solid #89B;
                background: #9AC;
              }
              .${exports.classNames.componentSelected} .move_handle {
                height: 12px;
                width: 12px;
                top: 6px;
                left: 8px;
                border: solid 1px black;
                position: relative;
                margin-top: -12px;
              }
              .${exports.classNames.componentSelected} .NW,
              .${exports.classNames.componentSelected} .NN,
              .${exports.classNames.componentSelected} .NE {
                top: -4px;
              }
              .${exports.classNames.componentSelected} .NE,
              .${exports.classNames.componentSelected} .EE,
              .${exports.classNames.componentSelected} .SE {
                right: -4px;
              }
              .${exports.classNames.componentSelected} .SW,
              .${exports.classNames.componentSelected}.SS,
              .${exports.classNames.componentSelected} .SE {
                bottom: -4px;
              }
              .${exports.classNames.componentSelected} .NW,
              .${exports.classNames.componentSelected} .WW,
              .${exports.classNames.componentSelected} .SW {
                left: -4px;
              }
              .${exports.classNames.componentSelected} .SE,
              .${exports.classNames.componentSelected} .NW {
                cursor: nw-resize;
              }
              .${exports.classNames.componentSelected} .SW,
              .${exports.classNames.componentSelected} .NE {
                cursor: ne-resize;
              }
              .${exports.classNames.componentSelected} .NN,
              .${exports.classNames.componentSelected} .SS {
                cursor: n-resize;
                left: 50%;
                margin-left: -4px;
              }
              .${exports.classNames.componentSelected} .EE,
              .${exports.classNames.componentSelected} .WW {
                cursor: e-resize;
                top: 50%;
                margin-top: -4px;
              }
            .${exports.classNames.emptyTemplates} {
                padding:50px 0;
                text-align: center;
            }
            .${exports.classNames.loadingTemplates} {
                padding:50px 0;
                text-align: center;
            }
            .${exports.classNames.templateSelected} .page-view {
                border: solid 1px #337ab7!important;
            }
            .${exports.classNames.templateDialog} .name {
                margin-top: -${templateDialog.nameHeight}px;
                height: ${templateDialog.nameHeight}px;
                font-size: ${templateDialog.fontSize}px;
                text-align: center;
                padding-top: 6px;
                background-color: black;
                opacity: 0.5;
            }
            .${exports.classNames.templateDialog} .name span {
                color: white;
            }
            .${exports.classNames.emptyDocument} {
                text-align: center;
                padding: 100px 0;
            }
            .${exports.classNames.component} > .NW,
            .${exports.classNames.component} > .NN,
            .${exports.classNames.component} > .NE,
            .${exports.classNames.component} > .EE,
            .${exports.classNames.component} > .SE,
            .${exports.classNames.component} > .SW,
            .${exports.classNames.component} > .SS,
            .${exports.classNames.component} > .WW {
                display: none;
            }
            .${exports.classNames.componentSelected}.component > .NW,
            .${exports.classNames.componentSelected}.component > .NN,
            .${exports.classNames.componentSelected}.component > .NE,
            .${exports.classNames.componentSelected}.component > .EE,
            .${exports.classNames.componentSelected}.component > .SE,
            .${exports.classNames.componentSelected}.component > .SW,
            .${exports.classNames.componentSelected}.component > .SS,
            .${exports.classNames.componentSelected}.component > .WW {
                display: block;
            }
            .${exports.classNames.placeholder} {
                min-height: 40px;
                width: 100%;
            }
            .${exports.classNames.placeholder}.active,
            .${exports.classNames.componentWrapper}.active,
            .${exports.classNames.componentWrapper}.${exports.classNames.componentSelected}.active {
                border: 1px solid green;
            }
            .${exports.classNames.editorPanel} {
                width: 300px;
                background: white;
                color: black;
                margin: 0;
                font-size: 14px;
                z-index: 100;
                overflow: auto;
            }
            .${exports.classNames.editorPanel} label {
                width: 80px;
                float: left;
                padding: 4px;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .${exports.classNames.editorPanel} .control {
                padding-left: 90px;
            }
            .${exports.classNames.editorPanel} .empty {
                padding-top: 200px;
                text-align: center;
            }
            .${exports.classNames.designer} .error,
            .${exports.classNames.editorPanel} .error {
                color: red;
            }
            .${exports.classNames.componentPanel} {
                background: white;
                color: black;
                font-size: 14px;
                z-index: 100;
                list-style: none;
                padding: 0;
                text-align: center
            }
            .${exports.classNames.componentPanel} .panel-heading {
                text-align: center;
            }
            .${exports.classNames.componentPanel} li {
                text-align: center;
                padding: 8px;
            }
            .${exports.classNames.componentWrapper}.${exports.classNames.moveDown} {
         
            }
        `;
if (document.head != null) {
    document.head.appendChild(element);
}
function appendClassName(element, addonClassName) {
    if (element == null)
        throw errors_1.Errors.argumentNull('element');
    if (!addonClassName)
        throw errors_1.Errors.argumentNull('addonClassName');
    let sourceClassName;
    if (typeof element == 'string')
        sourceClassName = element;
    else
        sourceClassName = element.className;
    sourceClassName = sourceClassName || '';
    console.assert(addonClassName != null);
    if (sourceClassName.indexOf(addonClassName) >= 0)
        return sourceClassName;
    let className = `${sourceClassName} ${addonClassName}`;
    if (typeof element != 'string')
        element.className = className;
    return className;
}
exports.appendClassName = appendClassName;
function removeClassName(element, targetClassName) {
    let sourceClassName;
    if (typeof element == 'string')
        sourceClassName = element;
    else
        sourceClassName = element.className || '';
    if (sourceClassName.indexOf(targetClassName) < 0)
        return sourceClassName;
    sourceClassName = sourceClassName || '';
    sourceClassName = sourceClassName.replace(new RegExp(targetClassName, 'g'), '');
    sourceClassName = sourceClassName.trim();
    if (typeof element != 'string')
        element.className = sourceClassName;
    return sourceClassName;
}
exports.removeClassName = removeClassName;
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "maishu-dilu":
/*!******************************!*\
  !*** external "maishu-dilu" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_maishu_dilu__;

/***/ }),

/***/ "maishu-jueying-core":
/*!**************************************!*\
  !*** external "maishu-jueying-core" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_maishu_jueying_core__;

/***/ }),

/***/ "maishu-toolkit":
/*!*********************************!*\
  !*** external "maishu-toolkit" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_maishu_toolkit__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map