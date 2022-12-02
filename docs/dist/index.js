/*!
 * 
 *  maishu-jueying v4.0.3
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
		module.exports = factory(require("maishu-dilu"), require("maishu-jueying-core"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["maishu-dilu", "maishu-jueying-core", "react"], factory);
	else if(typeof exports === 'object')
		exports["jueying"] = factory(require("maishu-dilu"), require("maishu-jueying-core"), require("react"));
	else
		root["jueying"] = factory(root["maishu-dilu"], root["maishu-jueying-core"], root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_maishu_dilu__, __WEBPACK_EXTERNAL_MODULE_maishu_jueying_core__, __WEBPACK_EXTERNAL_MODULE_react__) {
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

/***/ "./node_modules/maishu-jueying-core/out/components/component-placeholder.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/components/component-placeholder.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentPlaceHolder = void 0;
const React = __webpack_require__(/*! react */ "react");
const page_data_parser_1 = __webpack_require__(/*! ./page-data-parser */ "./node_modules/maishu-jueying-core/out/components/page-data-parser.js");
const errors_1 = __webpack_require__(/*! ../errors */ "./node_modules/maishu-jueying-core/out/errors.js");
const parse_component_data_1 = __webpack_require__(/*! ../parse-component-data */ "./node_modules/maishu-jueying-core/out/parse-component-data.js");
class ComponentPlaceHolder extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(page_data_parser_1.PageDataParserContext.Consumer, null, args => {
            if (!args)
                throw errors_1.errors.nullPageDataParserArguments();
            let children = args.pageData.children.filter(o => o.parentId && o.parentId == this.props.id);
            let childComponents = children.map(c => (0, parse_component_data_1.parseComponentData)(c, args.componentTypes, args.elementFactory));
            return childComponents;
        });
    }
}
exports.ComponentPlaceHolder = ComponentPlaceHolder;
ComponentPlaceHolder.typeName = "PlaceHolder";
//# sourceMappingURL=component-placeholder.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/components/page-data-parser.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/components/page-data-parser.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PageDataParser = exports.PageDataParserContext = void 0;
const errors_1 = __webpack_require__(/*! ../errors */ "./node_modules/maishu-jueying-core/out/errors.js");
const React = __webpack_require__(/*! react */ "react");
const parse_component_data_1 = __webpack_require__(/*! ../parse-component-data */ "./node_modules/maishu-jueying-core/out/parse-component-data.js");
exports.PageDataParserContext = React.createContext(null);
class PageDataParser extends React.Component {
    constructor(props) {
        super(props);
        if (!props)
            throw errors_1.errors.argumentNull("props");
        if (!props.pageData)
            throw errors_1.errors.argumentFieldNull("pageData", "props");
        if (!props.elementFactory)
            throw errors_1.errors.argumentFieldNull("elementFactory", "props");
        this.state = { pageData: props.pageData, componentTypes: props.componentTypes };
    }
    static getDerivedStateFromProps(props, state) {
        return { pageData: props.pageData, componentTypes: props.componentTypes };
    }
    render() {
        let { pageData } = this.state;
        let { elementFactory, componentTypes } = this.props;
        let children = pageData.children.filter(o => !o.parentId);
        let childComponents = children.map(o => {
            return (0, parse_component_data_1.parseComponentData)(o, componentTypes, elementFactory);
        });
        return React.createElement(exports.PageDataParserContext.Provider, { value: { pageData, elementFactory, componentTypes } }, childComponents);
    }
}
exports.PageDataParser = PageDataParser;
//# sourceMappingURL=page-data-parser.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/errors.js":
/*!********************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/errors.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = void 0;
const errors_1 = __webpack_require__(/*! maishu-toolkit/out/errors */ "./node_modules/maishu-toolkit/out/errors.js");
const page_data_parser_1 = __webpack_require__(/*! ./components/page-data-parser */ "./node_modules/maishu-jueying-core/out/components/page-data-parser.js");
class MyErrors extends errors_1.Errors {
    pathFieldRequired(name) {
        let msg = `Path field of '${name}' component config can not be null or empty.`;
        return new Error(msg);
    }
    canntFindModule(name, path) {
        let msg = `Can not find component '${name}' in the module, module path is: '${path}'.`;
        return new Error(msg);
    }
    componentTypeNotExists(name) {
        let msg = `Component '${name}' not exists.`;
        return new Error(msg);
    }
    argumentNull(name) {
        let msg = `Argument '${name}' can not be null or empty.`;
        return new Error(msg);
    }
    propsFileNull(fieldName) {
        let msg = `Field '${fieldName}' of props is null.`;
        let error = new Error(msg);
        let name = "propsFileNull";
        error.name = name;
        return error;
    }
    nullPageDataParserArguments() {
        let obj = { PageDataParser: page_data_parser_1.PageDataParser };
        let typeName = "PageDataParser";
        let msg = `PageDataParser arguments is null. Is this component child of ${typeName}?`;
        let error = new Error(msg);
        let name = "nullPageDataParserArguments";
        error.name = name;
        return error;
    }
}
exports.errors = new MyErrors();
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/parse-component-data.js":
/*!**********************************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/parse-component-data.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseComponentData = void 0;
const errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/maishu-jueying-core/out/errors.js");
const register_1 = __webpack_require__(/*! ./register */ "./node_modules/maishu-jueying-core/out/register.js");
function parseComponentData(componentData, componentTypes, createElement) {
    if (!componentData)
        throw errors_1.errors.argumentNull("componentData");
    if (!componentTypes)
        throw errors_1.errors.argumentNull("componentTypes");
    if (!componentData.type)
        throw errors_1.errors.argumentFieldNull("type", "componentData");
    let isHtmlComponent = componentData.type.toLowerCase() == componentData.type;
    let type = isHtmlComponent ? componentData.type : (componentTypes[componentData.type] || register_1.componentTypes[componentData.type]);
    if (type == null) {
        throw errors_1.errors.componentTypeNotExists(componentData.type);
    }
    let children = [];
    let childComponentInfos = componentData.children || [];
    if (childComponentInfos.length > 0) {
        children = childComponentInfos.map(c => {
            if (typeof c == "string")
                return c;
            return parseComponentData(c, componentTypes, createElement);
        });
    }
    let props = Object.assign({}, componentData.props);
    props.key = props.key || componentData.id;
    props.id = componentData.id;
    return createElement(type, props, children);
}
exports.parseComponentData = parseComponentData;
//# sourceMappingURL=parse-component-data.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/register.js":
/*!**********************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/register.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.registerComponent = exports.componentTypes = void 0;
const component_placeholder_1 = __webpack_require__(/*! ./components/component-placeholder */ "./node_modules/maishu-jueying-core/out/components/component-placeholder.js");
const errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/maishu-jueying-core/out/errors.js");
exports.componentTypes = {};
function registerComponent(componentName, componentType) {
    if (componentType == null && typeof componentName == 'function') {
        componentType = componentName;
        componentName = componentType.name;
        componentType['componentName'] = componentName;
    }
    if (!componentName)
        throw errors_1.errors.argumentNull('componentName');
    if (!componentType)
        throw errors_1.errors.argumentNull('componentType');
    exports.componentTypes[componentName] = componentType;
}
exports.registerComponent = registerComponent;
exports.componentTypes[component_placeholder_1.ComponentPlaceHolder.typeName] = component_placeholder_1.ComponentPlaceHolder;
//# sourceMappingURL=register.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/types.js":
/*!*******************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/types.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentStatus = void 0;
var ComponentStatus;
(function (ComponentStatus) {
    ComponentStatus[ComponentStatus["default"] = 0] = "default";
    /** 已选中 */
    ComponentStatus[ComponentStatus["selected"] = 1] = "selected";
    /** 禁用 */
    ComponentStatus[ComponentStatus["disabled"] = 2] = "disabled";
    /** 不允许删除 */
    ComponentStatus[ComponentStatus["asset"] = 4] = "asset";
})(ComponentStatus = exports.ComponentStatus || (exports.ComponentStatus = {}));
// export type ChildComponentProps = { parentId: string };
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/maishu-toolkit/out/errors.js":
/*!***************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/errors.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = exports.Errors = void 0;
class Errors {
    argumentNull(argumentName) {
        let error = new Error(`Argument ${argumentName} cannt be null or emtpy.`);
        let name = "argumentNull";
        error.name = name;
        return error;
    }
    routeDataFieldNull(fieldName) {
        let msg = `The ${fieldName} field of route data cannt be null.`;
        let error = new Error(msg);
        let name = "routeDataFieldNull";
        error.name = name;
        return error;
    }
    argumentFieldNull(fieldName, argumentName) {
        let msg = `The ${fieldName} field of ${argumentName} cannt be null.`;
        let error = new Error(msg);
        let name = "argumentFieldNull";
        error.name = name;
        return error;
    }
    argumentTypeIncorrect(argumentName, expectedType) {
        let msg = `Argument ${argumentName} type error, expected type is ${expectedType}.`;
        let error = new Error(msg);
        let name = "argumentTypeIncorrect";
        error.name = name;
        return error;
    }
    pathStartsHttp(path) {
        let msg = `Path ${path} start with http or https.`;
        let error = new Error(msg);
        let name = "pathStartsHttp";
        error.name = name;
        return error;
    }
}
exports.Errors = Errors;
exports.errors = new Errors();


/***/ }),

/***/ "./node_modules/maishu-toolkit/out/guid.js":
/*!*************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/guid.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.guid = void 0;
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


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./out/common.js":
/*!***********************!*\
  !*** ./out/common.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.elementFactoryName = exports.isCustomComponent = exports.groupDisplayNames = exports.proptDisplayNames = exports.constants = void 0;
const maishu_jueying_core_1 = __webpack_require__(/*! maishu-jueying-core */ "maishu-jueying-core");
exports.constants = {
    componentsDir: 'components',
    connectorElementClassName: 'component-container',
    componentTypeName: 'data-component-name',
    componentData: 'component-data',
    componentPosition: "component-position"
};
exports.proptDisplayNames = {};
exports.groupDisplayNames = {};
function isCustomComponent(componentData) {
    // 全小写为 HTML 元素，不需要加载
    if (componentData.type.toLocaleLowerCase() == componentData.type)
        return false;
    if (maishu_jueying_core_1.componentTypes[componentData.type])
        return false;
    return true;
}
exports.isCustomComponent = isCustomComponent;
exports.elementFactoryName = "h";
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./out/component/component.js":
/*!************************************!*\
  !*** ./out/component/component.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
const property_editor_1 = __webpack_require__(/*! ../design/property-editor */ "./out/design/property-editor.js");
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
    /**
     * 获取指定组件的属性编辑器
     * @param controlClassName 指定组件的类名
     * @param propName 组件的属性名称
     * */
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
            propName, displayName, editorType: editorType,
            group, defaultValue, validation
        });
    }
    static register(typeName, componentType) {
        return (0, maishu_jueying_core_1.registerComponent)(typeName, componentType);
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

/***/ "./out/component/components.js":
/*!*************************************!*\
  !*** ./out/component/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoadingComponent = exports.createInfoComponent = void 0;
const React = __webpack_require__(/*! react */ "react");
const strings_1 = __webpack_require__(/*! ../strings */ "./out/strings.js");
function createInfoComponent(text) {
    return class InfoComponent extends React.Component {
        render() {
            return React.createElement("div", { className: "text-center", style: { paddingTop: 20, paddingBottom: 20 } }, text);
        }
    };
}
exports.createInfoComponent = createInfoComponent;
function createLoadingComponent() {
    return class FakeComponent extends React.Component {
        render() {
            return React.createElement("div", { key: this.props.id, style: { padding: "50px 0 50px 0", textAlign: "center" } }, strings_1.strings.componentLoading);
        }
    };
}
exports.createLoadingComponent = createLoadingComponent;
//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./out/component/create-element.js":
/*!*****************************************!*\
  !*** ./out/component/create-element.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const design_component_context_1 = __webpack_require__(/*! ./design-component-context */ "./out/component/design-component-context.js");
const design_behavior_1 = __webpack_require__(/*! ../design/design-behavior */ "./out/design/design-behavior.js");
const common_1 = __webpack_require__(/*! ../common */ "./out/common.js");
const createElement = (type, props, ...children) => {
    let props1 = {};
    if (props)
        props1 = { key: props.id || props.key };
    return React.createElement(design_component_context_1.DesignComponentContext.Consumer, props1, ((args) => {
        let isDesigntime = args != null;
        if (!isDesigntime) {
            return React.createElement(type, props, ...children);
        }
        let designBehavior = typeof args.componentConfig.design == "number" ? args.componentConfig.design : design_behavior_1.DesignBehavior.default;
        let disableClick = (designBehavior & design_behavior_1.DesignBehavior.disableClick) == design_behavior_1.DesignBehavior.disableClick;
        if (disableClick) {
            delete props.onClick;
        }
        return React.createElement(type, props, ...children);
    }));
};
if (typeof window === "undefined") {
    global[common_1.elementFactoryName] = createElement;
}
else {
    window[common_1.elementFactoryName] = createElement;
}
//# sourceMappingURL=create-element.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./out/component/design-component-context.js":
/*!***************************************************!*\
  !*** ./out/component/design-component-context.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignComponentContext = void 0;
const React = __webpack_require__(/*! react */ "react");
exports.DesignComponentContext = React.createContext(null);
//# sourceMappingURL=design-component-context.js.map

/***/ }),

/***/ "./out/deep-equal.js":
/*!***************************!*\
  !*** ./out/deep-equal.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.deepEqual = void 0;
function deepEqual(x, y) {
    if (x === y) {
        return true;
    }
    if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length) {
            return false;
        }
        for (var prop in x) {
            if (y.hasOwnProperty(prop)) {
                if (!deepEqual(x[prop], y[prop])) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        return true;
    }
    return false;
}
exports.deepEqual = deepEqual;
//# sourceMappingURL=deep-equal.js.map

/***/ }),

/***/ "./out/design/component-diagram.js":
/*!*****************************************!*\
  !*** ./out/design/component-diagram.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentDiagram = void 0;
const errors_1 = __webpack_require__(/*! ../errors */ "./out/errors.js");
const types_1 = __webpack_require__(/*! maishu-jueying-core/out/types */ "./node_modules/maishu-jueying-core/out/types.js");
const parse_component_data_1 = __webpack_require__(/*! maishu-jueying-core/out/parse-component-data */ "./node_modules/maishu-jueying-core/out/parse-component-data.js");
const React = __webpack_require__(/*! react */ "react");
const page_designer_1 = __webpack_require__(/*! ./page-designer */ "./out/design/page-designer.js");
const strings_1 = __webpack_require__(/*! ../strings */ "./out/strings.js");
const style_1 = __webpack_require__(/*! ../style */ "./out/style.js");
const page_data_travel_1 = __webpack_require__(/*! ../page-data-travel */ "./out/page-data-travel.js");
const design_component_context_1 = __webpack_require__(/*! ../component/design-component-context */ "./out/component/design-component-context.js");
class ComponentDiagram extends React.Component {
    constructor(props) {
        super(props);
        if (!props)
            throw errors_1.errors.argumentNull("props");
        this.state = {};
    }
    selectComponent(designer, componentId) {
        if (!componentId) {
            designer.selectComponent([]);
            return;
        }
        designer.selectComponent(componentId);
    }
    static createComponent(type, props, children) {
        let p = props;
        if (!p.id)
            throw errors_1.errors.argumentFieldNull("id", "props");
        return React.createElement(page_designer_1.DesignerContext.Consumer, null, ((args) => {
            if (!args)
                throw errors_1.errors.designerContextArgumentNull();
            let componentData = page_data_travel_1.PageDataTravel.findComponent(args.designer.pageData, p.id); //args.designer.pageData.children.filter(o => o.id == p.id)[0]
            if (!componentData)
                throw new Error(`Can not find component data by '${p.id}' in the page data.`);
            let componentConfig = args.designer.props.componentsConfig[componentData.type];
            if (!componentConfig)
                return React.createElement(type, props, children);
            let value = {
                componentData, componentConfig
            };
            return React.createElement(design_component_context_1.DesignComponentContext.Provider, { value }, React.createElement(type, props, children));
        }));
    }
    render() {
        return React.createElement("ul", null,
            React.createElement(page_designer_1.DesignerContext.Consumer, null, args => {
                if (!args)
                    throw errors_1.errors.designerContextArgumentNull();
                let designer = args.designer;
                let componentDatas = designer.pageData.children || [];
                if (componentDatas.length == 0)
                    return React.createElement("li", null, strings_1.strings.emptyCompoenntPanel);
                let componentTypes = args.designer.componentTypes;
                return React.createElement(React.Fragment, null, componentDatas.map(c => {
                    let status = c.status || types_1.ComponentStatus.default;
                    let selected = (status & types_1.ComponentStatus.selected) == types_1.ComponentStatus.selected;
                    return React.createElement("li", { key: c.id, className: selected ? style_1.classNames.selected : "", onClick: e => {
                            e.preventDefault();
                            e.stopPropagation();
                            this.selectComponent(args.designer, c.id);
                        } }, (0, parse_component_data_1.parseComponentData)(c, componentTypes, ComponentDiagram.createComponent));
                }));
            }));
    }
}
exports.ComponentDiagram = ComponentDiagram;
//# sourceMappingURL=component-diagram.js.map

/***/ }),

/***/ "./out/design/design-behavior.js":
/*!***************************************!*\
  !*** ./out/design/design-behavior.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignBehavior = void 0;
var DesignBehavior;
(function (DesignBehavior) {
    DesignBehavior[DesignBehavior["default"] = 1] = "default";
    DesignBehavior[DesignBehavior["disableClick"] = 1] = "disableClick";
})(DesignBehavior = exports.DesignBehavior || (exports.DesignBehavior = {}));
//# sourceMappingURL=design-behavior.js.map

/***/ }),

/***/ "./out/design/editor-panel.js":
/*!************************************!*\
  !*** ./out/design/editor-panel.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorPanel = void 0;
const React = __webpack_require__(/*! react */ "react");
const property_editor_1 = __webpack_require__(/*! ./property-editor */ "./out/design/property-editor.js");
const style_1 = __webpack_require__(/*! ../style */ "./out/style.js");
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

/***/ "./out/design/page-designer.js":
/*!*************************************!*\
  !*** ./out/design/page-designer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PageDesigner = exports.DesignerContext = void 0;
const React = __webpack_require__(/*! react */ "react");
const maishu_jueying_core_1 = __webpack_require__(/*! maishu-jueying-core */ "maishu-jueying-core");
const errors_1 = __webpack_require__(/*! ../errors */ "./out/errors.js");
const guid_1 = __webpack_require__(/*! maishu-toolkit/out/guid */ "./node_modules/maishu-toolkit/out/guid.js");
const components_1 = __webpack_require__(/*! ../component/components */ "./out/component/components.js");
const page_data_travel_1 = __webpack_require__(/*! ../page-data-travel */ "./out/page-data-travel.js");
const component_1 = __webpack_require__(/*! ../component/component */ "./out/component/component.js");
const deep_equal_1 = __webpack_require__(/*! ../deep-equal */ "./out/deep-equal.js");
const common_1 = __webpack_require__(/*! ../common */ "./out/common.js");
exports.DesignerContext = React.createContext(null);
/**
 * 组件数据处理，负责对对组件数据进行处理维护。
 */
class PageDesigner extends React.Component {
    constructor(props) {
        super(props);
        // private _elementFactory: ElementFactory = createDesignElement as any //React.createElement
        this._prePageData = null;
        if (!props)
            throw errors_1.errors.argumentNull("props");
        if (!props.componentsConfig)
            throw errors_1.errors.argumentFieldCanntNull("componentsConfig", "props");
        this.checkComponentsConfig(props.componentsConfig);
        let pageData = this.props.pageData;
        let componentTypes = {};
        this.initPageData(pageData, componentTypes);
        this.state = { pageData, componentTypes, componentEditors: {} };
    }
    /** 检查组件配置 */
    checkComponentsConfig(componentsConfig) {
        // TODO: 检查组件配置
    }
    initPageData(pageData, componentTypes) {
        if (pageData == null)
            throw errors_1.errors.argumentNull("pageData");
        console.assert(pageData.children != null, "PageData children is null.");
        let travel = new page_data_travel_1.PageDataTravel(pageData);
        travel.each((c) => {
            if (typeof c == "string" || !(0, common_1.isCustomComponent)(c) || componentTypes[c.type])
                return;
            componentTypes[c.type] = (0, components_1.createLoadingComponent)();
        });
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
            componentData.id = (0, guid_1.guid)();
    }
    /** 页面数据 */
    get pageData() {
        return this.state.pageData;
    }
    // get elementFactory(): ElementFactory {
    //     return this._elementFactory
    // }
    get componentTypes() {
        return this.state.componentTypes;
    }
    get prePageData() {
        return this._prePageData;
    }
    set prePageData(value) {
        this._prePageData = value;
    }
    /** 获取已选择了的组件编号 */
    get selectedComponentIds() {
        return this.selectedComponents.map(o => o.id);
    }
    /** 获取已选择了的组件 */
    get selectedComponents() {
        let arr = this.pageData.children.filter(o => ((o.status || maishu_jueying_core_1.ComponentStatus.default) & maishu_jueying_core_1.ComponentStatus.selected) == maishu_jueying_core_1.ComponentStatus.selected);
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
            throw errors_1.errors.argumentNull('childComponent');
        let pageData = this.pageData;
        this.initComponent(componentData, pageData);
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
     * @param componentIds 指定的控件编号
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
     * @param componentIds 指定的控件 ID
     */
    selectComponents(componentIds) {
        if (typeof componentIds == 'string')
            componentIds = [componentIds];
        this.pageData.children.forEach(c => {
            // c.selected = false;
            c.status = c.status || maishu_jueying_core_1.ComponentStatus.default;
            c.status = c.status & (~maishu_jueying_core_1.ComponentStatus.selected);
        });
        this.pageData.children.filter(o => componentIds.indexOf(o.id) >= 0).forEach(c => {
            // c.selected = true;
            c.status = c.status || maishu_jueying_core_1.ComponentStatus.default;
            c.status = c.status | maishu_jueying_core_1.ComponentStatus.selected;
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
                // status 为 ComponentStatus.asset 不要删除
                componentsToRemove.push(...children.filter(o => o.status == null || (o.status & maishu_jueying_core_1.ComponentStatus.asset) != maishu_jueying_core_1.ComponentStatus.asset).map(o => o.id));
            }
        }
        pageData.children = pageData.children.filter(o => componentsToRemove.indexOf(o.id) < 0);
    }
    /**
     * 通过组件编号获取组件的数据
     * @param componentId 组件编号
     */
    findComponentData(componentId) {
        let pageData = this.state.pageData;
        if (!pageData)
            throw errors_1.errors.pageDataIsNull();
        let componentData = pageData.children.filter(o => o.id == componentId)[0];
        return componentData;
    }
    async loadEditorTypes(pageData) {
        let componentsToLoad = [];
        let travel = new page_data_travel_1.PageDataTravel(pageData);
        travel.each((c) => {
            if (typeof c == "string" || !(0, common_1.isCustomComponent)(c))
                return;
            componentsToLoad.push(c.type);
        });
        let componentsConfig = this.props.componentsConfig;
        let promises = componentsToLoad.map(typeName => componentsConfig[typeName]).filter(o => o).map(o => o.editor);
        await Promise.all(promises);
        let componentDatas = pageData.children.filter(o => typeof o != "string").map(c => c);
        let editors = this.state.componentEditors;
        for (let c of componentDatas) {
            editors[c.type] = editors[c.type] || {};
            let propEditors = component_1.Component.getPropEditors(c);
            for (let e of propEditors) {
                editors[c.type][e.propName] = e.editorType;
            }
        }
        this.setState({ componentEditors: editors });
    }
    loadComponentTypes(pageData) {
        let componentTypes = {};
        let componentsConfig = this.props.componentsConfig;
        let componentsToLoad = [];
        let travel = new page_data_travel_1.PageDataTravel(pageData);
        travel.each((c) => {
            if (typeof c == "string" || componentsToLoad.indexOf(c.type) >= 0 || !(0, common_1.isCustomComponent)(c))
                return;
            componentsToLoad.push(c.type);
        });
        return PageDesigner.loadComponentTypes(componentsToLoad, componentsConfig).then(loadedComponentTypes => {
            Object.assign(componentTypes, loadedComponentTypes);
            this.setState({ componentTypes });
        });
    }
    static async loadComponentTypes(componentsToLoad, componentsConfig) {
        let promises = [];
        let componentTypes = {};
        for (let i = 0; i < componentsToLoad.length; i++) {
            let typeName = componentsToLoad[i];
            if (!typeName) {
                let errorText = `Component '${typeName}' has not a config.`;
                componentTypes[typeName] = (0, components_1.createInfoComponent)(errorText);
                continue;
            }
            if (maishu_jueying_core_1.componentTypes[typeName]) {
                promises.push(Promise.resolve(maishu_jueying_core_1.componentTypes[typeName]));
                continue;
            }
            let p = new Promise(function (resolve, reject) {
                if (!componentsConfig[typeName]) {
                    let errorText = `Component '${typeName}' is not exists.`;
                    componentTypes[typeName] = (0, components_1.createInfoComponent)(errorText);
                    resolve({});
                    return;
                }
                if (!(componentsConfig[typeName].type instanceof Promise)) {
                    let errorText = `Component '${typeName}' type is invalid.`;
                    componentTypes[typeName] = (0, components_1.createInfoComponent)(errorText);
                    resolve({});
                    return;
                }
                componentsConfig[typeName].type.then(p => {
                    if (!p.default) {
                        let errorText = `Component '${typeName}' module has not export default member.`;
                        componentTypes[typeName] = (0, components_1.createInfoComponent)(errorText);
                    }
                    else {
                        componentTypes[typeName] = p.default;
                    }
                    resolve({});
                }).catch(err => {
                    reject(err);
                });
            });
            promises.push(p);
        }
        await Promise.all(promises);
        return componentTypes;
    }
    onKeyDown(e) {
        const DELETE_KEY_CODE = 46;
        if (e.keyCode == DELETE_KEY_CODE) {
            if (this.selectedComponents.length == 0)
                return;
            this.removeComponents(this.selectedComponentIds);
        }
    }
    async onPageDataChanged(pageData) {
        this.loadComponentTypes(pageData);
        this.loadEditorTypes(pageData);
    }
    static getDerivedStateFromProps(props, state) {
        return { pageData: props.pageData };
    }
    render() {
        let pageData = this.state.pageData;
        let equal = (0, deep_equal_1.deepEqual)(this.prePageData, pageData);
        if (!equal) {
            this.prePageData = JSON.parse(JSON.stringify(pageData));
            this.onPageDataChanged(pageData);
        }
        return React.createElement("div", { tabIndex: 0, ref: e => this._element = this._element || e, onKeyDown: e => this.onKeyDown(e), className: this.props.className, style: this.props.style },
            React.createElement(exports.DesignerContext.Provider, { value: { designer: this } }, this.props.children));
    }
}
exports.PageDesigner = PageDesigner;
//# sourceMappingURL=page-designer.js.map

/***/ }),

/***/ "./out/design/property-editor.js":
/*!***************************************!*\
  !*** ./out/design/property-editor.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = exports.PropertyEditor = exports.defaultGroupName = void 0;
const React = __webpack_require__(/*! react */ "react");
const component_1 = __webpack_require__(/*! ../component/component */ "./out/component/component.js");
// import { PropEditorProps } from "./prop-editor";
const errors_1 = __webpack_require__(/*! ../errors */ "./out/errors.js");
const page_designer_1 = __webpack_require__(/*! ./page-designer */ "./out/design/page-designer.js");
const common_1 = __webpack_require__(/*! ../common */ "./out/common.js");
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
                        let propName1 = propInfo1.propName;
                        let propName2 = propInfo2.propName;
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
                            .map(o => Object.assign(o.validation, { name: o.propName, rules: [] }));
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
            throw errors_1.errors.argumentNull("propName");
        if (!props)
            throw errors_1.errors.argumentNull("props");
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
            if (!args)
                throw errors_1.errors.designerContextArgumentNull();
            let designer = args.designer;
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

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = void 0;
const errors_1 = __webpack_require__(/*! maishu-toolkit/out/errors */ "./node_modules/maishu-toolkit/out/errors.js");
class Errors extends errors_1.Errors {
    placeHolderIdNull() {
        let msg = `Place holder property id cannt be null or empty.`;
        return new Error(msg);
    }
    fileNotExists(fileName) {
        return new Error(`File '${fileName}' is not exists.`);
    }
    argumentNull(argumentName) {
        return new Error(`Argument ${argumentName} is null or empty.`);
    }
    argumentRangeError(argumentName) {
        return new Error(`Argument ${argumentName} range error.`);
    }
    pageDataIsNull() {
        return new Error(`Page data is null.`);
    }
    toolbarRequiredKey() {
        return new Error(`Toolbar has not a key prop.`);
    }
    loadPluginFail(pluginId) {
        return new Error(`Load plugin '${pluginId}' fail.`);
    }
    idRequired() {
        return new Error(`Property id is required.`);
    }
    canntFindMasterPage(componentId) {
        return new Error(`Can not find master page for component container ${componentId}.`);
    }
    propCanntNull(componentName, property) {
        let msg = `${componentName} property ${property} cannt be null or empty.`;
        return new Error(msg);
    }
    argumentFieldCanntNull(fieldName, argumentName) {
        let msg = `${fieldName} of argument ${argumentName} cannt be null or empty.`;
        return new Error(msg);
    }
    designerContextArgumentNull() {
        let msg = `Designer cottext argument null.`;
        let error = new Error(msg);
        error.name = exports.errors.designerContextArgumentNull.name;
        return error;
    }
}
exports.errors = new Errors();
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
exports.ComponentDiagram = exports.classNames = exports.DesignerContext = exports.PageDesigner = exports.EditorPanel = exports.Component = exports.groupDisplayNames = void 0;
var common_1 = __webpack_require__(/*! ./common */ "./out/common.js");
Object.defineProperty(exports, "groupDisplayNames", { enumerable: true, get: function () { return common_1.groupDisplayNames; } });
var component_1 = __webpack_require__(/*! ./component/component */ "./out/component/component.js");
Object.defineProperty(exports, "Component", { enumerable: true, get: function () { return component_1.Component; } });
var editor_panel_1 = __webpack_require__(/*! ./design/editor-panel */ "./out/design/editor-panel.js");
Object.defineProperty(exports, "EditorPanel", { enumerable: true, get: function () { return editor_panel_1.EditorPanel; } });
var page_designer_1 = __webpack_require__(/*! ./design/page-designer */ "./out/design/page-designer.js");
Object.defineProperty(exports, "PageDesigner", { enumerable: true, get: function () { return page_designer_1.PageDesigner; } });
Object.defineProperty(exports, "DesignerContext", { enumerable: true, get: function () { return page_designer_1.DesignerContext; } });
var style_1 = __webpack_require__(/*! ./style */ "./out/style.js");
Object.defineProperty(exports, "classNames", { enumerable: true, get: function () { return style_1.classNames; } });
var component_diagram_1 = __webpack_require__(/*! ./design/component-diagram */ "./out/design/component-diagram.js");
Object.defineProperty(exports, "ComponentDiagram", { enumerable: true, get: function () { return component_diagram_1.ComponentDiagram; } });
__webpack_require__(/*! ./component/create-element */ "./out/component/create-element.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./out/page-data-travel.js":
/*!*********************************!*\
  !*** ./out/page-data-travel.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PageDataTravel = void 0;
const errors_1 = __webpack_require__(/*! ./errors */ "./out/errors.js");
/** 页面数据（PageData）遍历器，遍历 PageData 里的组件 */
class PageDataTravel {
    constructor(pageData) {
        this.pageData = pageData;
    }
    each(callback) {
        let stack = [...(this.pageData.children || [])];
        let componentData = stack.pop();
        while (componentData != null) {
            callback(componentData);
            if (typeof componentData != "string") {
                let children = componentData.children || [];
                stack.push(...children);
            }
            componentData = stack.pop();
        }
    }
    static findComponent(pageData, componentId) {
        if (!pageData)
            throw errors_1.errors.argumentNull("pageData");
        if (!componentId)
            throw errors_1.errors.argumentNull("componentId");
        let travel = new PageDataTravel(pageData);
        let r;
        travel.each(function (c) {
            if (typeof c == "string" || r)
                return;
            if (componentId == c.id)
                r = c;
        });
        return r;
    }
}
exports.PageDataTravel = PageDataTravel;
//# sourceMappingURL=page-data-travel.js.map

/***/ }),

/***/ "./out/strings.js":
/*!************************!*\
  !*** ./out/strings.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.strings = void 0;
exports.strings = {
    emptyCompoenntPanel: "暂无可用组件",
    emptyDiagram: "请拖放组件到此处",
    componentLoading: "组件正在加载中...",
};
//# sourceMappingURL=strings.js.map

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
    empty: "empty",
    selected: "selected",
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
        throw errors_1.errors.argumentNull('element');
    if (!addonClassName)
        throw errors_1.errors.argumentNull('addonClassName');
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