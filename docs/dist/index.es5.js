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
/******/ 	return __webpack_require__(__webpack_require__.s = "./out-es5/index.js");
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

/***/ "./out-es5/common.js":
/*!***************************!*\
  !*** ./out-es5/common.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementFactoryName = exports.isCustomComponent = exports.groupDisplayNames = exports.proptDisplayNames = exports.constants = void 0;
var maishu_jueying_core_1 = __webpack_require__(/*! maishu-jueying-core */ "maishu-jueying-core");
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
  if (componentData.type.toLocaleLowerCase() == componentData.type) return false;
  if (maishu_jueying_core_1.componentTypes[componentData.type]) return false;
  return true;
}
exports.isCustomComponent = isCustomComponent;
exports.elementFactoryName = "h";
//# sourceMappingURL=common.js.map


/***/ }),

/***/ "./out-es5/component/component.js":
/*!****************************************!*\
  !*** ./out-es5/component/component.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;
var property_editor_1 = __webpack_require__(/*! ../design/property-editor */ "./out-es5/design/property-editor.js");
var maishu_jueying_core_1 = __webpack_require__(/*! maishu-jueying-core */ "maishu-jueying-core");
// type CreateElementContext = { components: React.Component[], componentTypes: string[] };
// let defaultGroup: GroupedEditor["group"] = { prop: "", displayName: "" };
var Component = /*#__PURE__*/function () {
  function Component() {
    _classCallCheck(this, Component);
  }
  _createClass(Component, null, [{
    key: "getPropEditors",
    value: function getPropEditors(componentData) {
      var componentType = componentData.type;
      var result = [];
      var propEditorInfo = this.componentPropEditors[componentType] || [];
      for (var i = 0; i < propEditorInfo.length; i++) {
        var propName = propEditorInfo[i].propName;
        var display = Component.componentPropEditorDisplay["".concat(componentType, ".").concat(propName)];
        if (display != null && display(componentData) == false) continue;
        result.push(propEditorInfo[i]);
      }
      return result;
    }
    /**
     * 获取指定组件的属性编辑器
     * @param controlClassName 指定组件的类名
     * @param propName 组件的属性名称
     * */
  }, {
    key: "getPropEditor",
    value: function getPropEditor(controlClassName, propName) {
      return this.getPropEditorByArray(controlClassName, propName);
    }
    /** 通过属性数组获取属性的编辑器 */
  }, {
    key: "getPropEditorByArray",
    value: function getPropEditorByArray(controlClassName, propNames) {
      var classEditors = this.componentPropEditors[controlClassName] || [];
      var editor = classEditors.filter(function (o) {
        return o.propName == propNames;
      })[0];
      return editor;
    }
  }, {
    key: "setPropEditor",
    value: function setPropEditor(options) {
      var componentType = options.componentType,
        editorType = options.editorType,
        editorDisplay = options.display,
        group = options.group,
        propName = options.propName,
        displayName = options.displayName,
        defaultValue = options.defaultValue,
        validation = options.validation;
      group = group || property_editor_1.defaultGroupName;
      propName = propName || "";
      displayName = displayName || propName;
      // 属性可能为导航属性,例如 style.width
      var propNames = propName.split('.');
      var className = typeof componentType == 'string' ? componentType : componentType.prototype.typename || componentType.name;
      Component.componentPropEditorDisplay["".concat(className, ".").concat(propName)] = editorDisplay;
      var classProps = Component.componentPropEditors[className] = Component.componentPropEditors[className] || [];
      for (var i = 0; i < classProps.length; i++) {
        var propName1 = classProps[i].propName;
        var propName2 = propNames.join('.');
        if (propName1 == propName2) {
          classProps[i].editorType = editorType;
          return;
        }
      }
      classProps.push({
        propName: propName,
        displayName: displayName,
        editorType: editorType,
        group: group,
        defaultValue: defaultValue,
        validation: validation
      });
    }
  }, {
    key: "register",
    value: function register(typeName, componentType) {
      return (0, maishu_jueying_core_1.registerComponent)(typeName, componentType);
    }
  }]);
  return Component;
}();
exports.Component = Component;
//==========================================
// 用于创建 React 的 React.Fragment 
Component.Fragment = "";
//==========================================
Component.componentPropEditors = {};
Component.componentPropEditorDisplay = {};
//# sourceMappingURL=component.js.map


/***/ }),

/***/ "./out-es5/component/components.js":
/*!*****************************************!*\
  !*** ./out-es5/component/components.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLoadingComponent = exports.createInfoComponent = void 0;
var React = __webpack_require__(/*! react */ "react");
var strings_1 = __webpack_require__(/*! ../strings */ "./out-es5/strings.js");
function createInfoComponent(text) {
  return /*#__PURE__*/function (_React$Component) {
    _inherits(InfoComponent, _React$Component);
    var _super = _createSuper(InfoComponent);
    function InfoComponent() {
      _classCallCheck(this, InfoComponent);
      return _super.apply(this, arguments);
    }
    _createClass(InfoComponent, [{
      key: "render",
      value: function render() {
        return React.createElement("div", {
          className: "text-center",
          style: {
            paddingTop: 20,
            paddingBottom: 20
          }
        }, text);
      }
    }]);
    return InfoComponent;
  }(React.Component);
}
exports.createInfoComponent = createInfoComponent;
function createLoadingComponent() {
  return /*#__PURE__*/function (_React$Component2) {
    _inherits(FakeComponent, _React$Component2);
    var _super2 = _createSuper(FakeComponent);
    function FakeComponent() {
      _classCallCheck(this, FakeComponent);
      return _super2.apply(this, arguments);
    }
    _createClass(FakeComponent, [{
      key: "render",
      value: function render() {
        return React.createElement("div", {
          key: this.props.id,
          style: {
            padding: "50px 0 50px 0",
            textAlign: "center"
          }
        }, strings_1.strings.componentLoading);
      }
    }]);
    return FakeComponent;
  }(React.Component);
}
exports.createLoadingComponent = createLoadingComponent;
//# sourceMappingURL=components.js.map


/***/ }),

/***/ "./out-es5/component/create-element.js":
/*!*********************************************!*\
  !*** ./out-es5/component/create-element.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = __webpack_require__(/*! react */ "react");
var design_component_context_1 = __webpack_require__(/*! ./design-component-context */ "./out-es5/component/design-component-context.js");
var design_behavior_1 = __webpack_require__(/*! ../design/design-behavior */ "./out-es5/design/design-behavior.js");
var common_1 = __webpack_require__(/*! ../common */ "./out-es5/common.js");
var createElement = function createElement(type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  var props1 = {};
  if (props) props1 = {
    key: props.id || props.key
  };
  return React.createElement(design_component_context_1.DesignComponentContext.Consumer, props1, function (args) {
    var isDesigntime = args != null;
    if (!isDesigntime) {
      return React.createElement.apply(React, [type, props].concat(children));
    }
    var designBehavior = typeof args.componentConfig.design == "number" ? args.componentConfig.design : design_behavior_1.DesignBehavior.default;
    var disableClick = (designBehavior & design_behavior_1.DesignBehavior.disableClick) == design_behavior_1.DesignBehavior.disableClick;
    if (disableClick) {
      delete props.onClick;
    }
    return React.createElement.apply(React, [type, props].concat(children));
  });
};
if (typeof window === "undefined") {
  global[common_1.elementFactoryName] = createElement;
} else {
  window[common_1.elementFactoryName] = createElement;
}
//# sourceMappingURL=create-element.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./out-es5/component/design-component-context.js":
/*!*******************************************************!*\
  !*** ./out-es5/component/design-component-context.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DesignComponentContext = void 0;
var React = __webpack_require__(/*! react */ "react");
exports.DesignComponentContext = React.createContext(null);
//# sourceMappingURL=design-component-context.js.map


/***/ }),

/***/ "./out-es5/deep-equal.js":
/*!*******************************!*\
  !*** ./out-es5/deep-equal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepEqual = void 0;
function deepEqual(x, y) {
  if (x === y) {
    return true;
  }
  if (_typeof(x) == "object" && x != null && _typeof(y) == "object" && y != null) {
    if (Object.keys(x).length != Object.keys(y).length) {
      return false;
    }
    for (var prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop])) {
          return false;
        }
      } else {
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

/***/ "./out-es5/design/component-diagram.js":
/*!*********************************************!*\
  !*** ./out-es5/design/component-diagram.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentDiagram = void 0;
var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");
var types_1 = __webpack_require__(/*! maishu-jueying-core/out/types */ "./node_modules/maishu-jueying-core/out/types.js");
var parse_component_data_1 = __webpack_require__(/*! maishu-jueying-core/out/parse-component-data */ "./node_modules/maishu-jueying-core/out/parse-component-data.js");
var React = __webpack_require__(/*! react */ "react");
var page_designer_1 = __webpack_require__(/*! ./page-designer */ "./out-es5/design/page-designer.js");
var strings_1 = __webpack_require__(/*! ../strings */ "./out-es5/strings.js");
var style_1 = __webpack_require__(/*! ../style */ "./out-es5/style.js");
var page_data_travel_1 = __webpack_require__(/*! ../page-data-travel */ "./out-es5/page-data-travel.js");
var design_component_context_1 = __webpack_require__(/*! ../component/design-component-context */ "./out-es5/component/design-component-context.js");
var ComponentDiagram = /*#__PURE__*/function (_React$Component) {
  _inherits(ComponentDiagram, _React$Component);
  var _super = _createSuper(ComponentDiagram);
  function ComponentDiagram(props) {
    var _this;
    _classCallCheck(this, ComponentDiagram);
    _this = _super.call(this, props);
    if (!props) throw errors_1.errors.argumentNull("props");
    _this.state = {};
    return _this;
  }
  _createClass(ComponentDiagram, [{
    key: "selectComponent",
    value: function selectComponent(designer, componentId) {
      if (!componentId) {
        designer.selectComponent([]);
        return;
      }
      designer.selectComponent(componentId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return React.createElement("ul", null, React.createElement(page_designer_1.DesignerContext.Consumer, null, function (args) {
        if (!args) throw errors_1.errors.designerContextArgumentNull();
        var designer = args.designer;
        var componentDatas = designer.pageData.children || [];
        if (componentDatas.length == 0) return React.createElement("li", null, strings_1.strings.emptyCompoenntPanel);
        var componentTypes = args.designer.componentTypes;
        return React.createElement(React.Fragment, null, componentDatas.map(function (c) {
          var status = c.status || types_1.ComponentStatus.default;
          var selected = (status & types_1.ComponentStatus.selected) == types_1.ComponentStatus.selected;
          return React.createElement("li", {
            key: c.id,
            className: selected ? style_1.classNames.selected : "",
            onClick: function onClick(e) {
              e.preventDefault();
              e.stopPropagation();
              _this2.selectComponent(args.designer, c.id);
            }
          }, (0, parse_component_data_1.parseComponentData)(c, componentTypes, ComponentDiagram.createComponent));
        }));
      }));
    }
  }], [{
    key: "createComponent",
    value: function createComponent(type, props, children) {
      var p = props;
      if (!p.id) throw errors_1.errors.argumentFieldNull("id", "props");
      return React.createElement(page_designer_1.DesignerContext.Consumer, null, function (args) {
        if (!args) throw errors_1.errors.designerContextArgumentNull();
        var componentData = page_data_travel_1.PageDataTravel.findComponent(args.designer.pageData, p.id); //args.designer.pageData.children.filter(o => o.id == p.id)[0]
        if (!componentData) throw new Error("Can not find component data by '".concat(p.id, "' in the page data."));
        var componentConfig = args.designer.props.componentsConfig[componentData.type];
        if (!componentConfig) return React.createElement(type, props, children);
        var value = {
          componentData: componentData,
          componentConfig: componentConfig
        };
        return React.createElement(design_component_context_1.DesignComponentContext.Provider, {
          value: value
        }, React.createElement(type, props, children));
      });
    }
  }]);
  return ComponentDiagram;
}(React.Component);
exports.ComponentDiagram = ComponentDiagram;
//# sourceMappingURL=component-diagram.js.map


/***/ }),

/***/ "./out-es5/design/design-behavior.js":
/*!*******************************************!*\
  !*** ./out-es5/design/design-behavior.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DesignBehavior = void 0;
var DesignBehavior;
(function (DesignBehavior) {
  DesignBehavior[DesignBehavior["default"] = 1] = "default";
  DesignBehavior[DesignBehavior["disableClick"] = 1] = "disableClick";
})(DesignBehavior = exports.DesignBehavior || (exports.DesignBehavior = {}));
//# sourceMappingURL=design-behavior.js.map


/***/ }),

/***/ "./out-es5/design/editor-panel.js":
/*!****************************************!*\
  !*** ./out-es5/design/editor-panel.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorPanel = void 0;
var React = __webpack_require__(/*! react */ "react");
var property_editor_1 = __webpack_require__(/*! ./property-editor */ "./out-es5/design/property-editor.js");
var style_1 = __webpack_require__(/*! ../style */ "./out-es5/style.js");
var EditorPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(EditorPanel, _React$Component);
  var _super = _createSuper(EditorPanel);
  function EditorPanel(props) {
    var _this;
    _classCallCheck(this, EditorPanel);
    _this = _super.call(this, props);
    _this.state = {
      componentDatas: []
    };
    return _this;
  }
  /** 对输入进行验证 */
  _createClass(EditorPanel, [{
    key: "validateInputs",
    value: function validateInputs() {
      return this.editor.validator.checkAsync();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var empty = this.props.empty;
      empty = empty || React.createElement("div", {
        className: "empty"
      }, "\u6682\u65E0\u53EF\u7528\u7684\u5C5E\u6027");
      return React.createElement("div", {
        className: "".concat(style_1.classNames.editorPanel, " ").concat(this.props.className || ""),
        ref: function ref(e) {
          return _this2.element = e || _this2.element;
        }
      }, React.createElement(property_editor_1.PropertyEditor, {
        ref: function ref(e) {
          return _this2.editor = e || _this2.editor;
        },
        empty: empty,
        customRender: this.props.customRender
      }));
    }
  }]);
  return EditorPanel;
}(React.Component);
exports.EditorPanel = EditorPanel;
//# sourceMappingURL=editor-panel.js.map


/***/ }),

/***/ "./out-es5/design/page-designer.js":
/*!*****************************************!*\
  !*** ./out-es5/design/page-designer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageDesigner = exports.DesignerContext = void 0;
var React = __webpack_require__(/*! react */ "react");
var maishu_jueying_core_1 = __webpack_require__(/*! maishu-jueying-core */ "maishu-jueying-core");
var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");
var guid_1 = __webpack_require__(/*! maishu-toolkit/out/guid */ "./node_modules/maishu-toolkit/out/guid.js");
var components_1 = __webpack_require__(/*! ../component/components */ "./out-es5/component/components.js");
var page_data_travel_1 = __webpack_require__(/*! ../page-data-travel */ "./out-es5/page-data-travel.js");
var component_1 = __webpack_require__(/*! ../component/component */ "./out-es5/component/component.js");
var deep_equal_1 = __webpack_require__(/*! ../deep-equal */ "./out-es5/deep-equal.js");
var common_1 = __webpack_require__(/*! ../common */ "./out-es5/common.js");
exports.DesignerContext = React.createContext(null);
/**
 * 组件数据处理，负责对对组件数据进行处理维护。
 */
var PageDesigner = /*#__PURE__*/function (_React$Component) {
  _inherits(PageDesigner, _React$Component);
  var _super = _createSuper(PageDesigner);
  function PageDesigner(props) {
    var _this;
    _classCallCheck(this, PageDesigner);
    _this = _super.call(this, props);
    // private _elementFactory: ElementFactory = createDesignElement as any //React.createElement
    _this._prePageData = null;
    if (!props) throw errors_1.errors.argumentNull("props");
    if (!props.componentsConfig) throw errors_1.errors.argumentFieldCanntNull("componentsConfig", "props");
    _this.checkComponentsConfig(props.componentsConfig);
    var pageData = _this.props.pageData;
    var componentTypes = {};
    _this.initPageData(pageData, componentTypes);
    _this.state = {
      pageData: pageData,
      componentTypes: componentTypes,
      componentEditors: {}
    };
    return _this;
  }
  /** 检查组件配置 */
  _createClass(PageDesigner, [{
    key: "checkComponentsConfig",
    value: function checkComponentsConfig(componentsConfig) {
      // TODO: 检查组件配置
    }
  }, {
    key: "initPageData",
    value: function initPageData(pageData, componentTypes) {
      if (pageData == null) throw errors_1.errors.argumentNull("pageData");
      console.assert(pageData.children != null, "PageData children is null.");
      var travel = new page_data_travel_1.PageDataTravel(pageData);
      travel.each(function (c) {
        if (typeof c == "string" || !(0, common_1.isCustomComponent)(c) || componentTypes[c.type]) return;
        componentTypes[c.type] = (0, components_1.createLoadingComponent)();
      });
    }
    /**
     * 对组件及其子控件进行命名
     * @param componentData
     */
  }, {
    key: "initComponent",
    value: function initComponent(componentData, pageData) {
      var namedComponents = {};
      pageData.children.forEach(function (c) {
        if (c.name) {
          namedComponents[c.name] = c;
        }
      });
      if (!componentData.name) {
        var num = 0;
        var name;
        do {
          num = num + 1;
          name = "".concat(componentData.type).concat(num);
        } while (namedComponents[name]);
        namedComponents[name] = componentData;
        componentData.name = name;
      }
      if (!componentData.id) componentData.id = (0, guid_1.guid)();
    }
    /** 页面数据 */
  }, {
    key: "pageData",
    get: function get() {
      return this.state.pageData;
    }
    // get elementFactory(): ElementFactory {
    //     return this._elementFactory
    // }
  }, {
    key: "componentTypes",
    get: function get() {
      return this.state.componentTypes;
    }
  }, {
    key: "prePageData",
    get: function get() {
      return this._prePageData;
    },
    set: function set(value) {
      this._prePageData = value;
    }
    /** 获取已选择了的组件编号 */
  }, {
    key: "selectedComponentIds",
    get: function get() {
      return this.selectedComponents.map(function (o) {
        return o.id;
      });
    }
    /** 获取已选择了的组件 */
  }, {
    key: "selectedComponents",
    get: function get() {
      var arr = this.pageData.children.filter(function (o) {
        return ((o.status || maishu_jueying_core_1.ComponentStatus.default) & maishu_jueying_core_1.ComponentStatus.selected) == maishu_jueying_core_1.ComponentStatus.selected;
      });
      return arr;
    }
  }, {
    key: "element",
    get: function get() {
      return this._element;
    }
  }, {
    key: "updateComponentProp",
    value: function updateComponentProp(componentId, propName, value) {
      return this.updateComponentProps([{
        componentId: componentId,
        propName: propName,
        value: value
      }]);
    }
  }, {
    key: "updateComponentProps",
    value: function updateComponentProps(componentProps) {
      var componentDatas = [];
      for (var i = 0; i < componentProps.length; i++) {
        var _componentProps$i = componentProps[i],
          componentId = _componentProps$i.componentId,
          propName = _componentProps$i.propName,
          value = _componentProps$i.value;
        var componentData = this.findComponentData(componentId);
        if (componentData == null) continue;
        var navPropsNames = propName.split(".");
        console.assert(componentData != null);
        console.assert(navPropsNames != null, 'props is null');
        componentData.props = componentData.props || {};
        var obj = componentData.props;
        for (var _i = 0; _i < navPropsNames.length - 1; _i++) {
          obj = obj[navPropsNames[_i]] = obj[navPropsNames[_i]] || {};
        }
        obj[navPropsNames[navPropsNames.length - 1]] = value;
        componentDatas.push(componentData);
      }
      this.setState({
        pageData: this.pageData
      });
    }
    /**
     * 添加控件
     * @param componentData 控件数据
     * @param componentIndex 新添加组件在子组件中的次序
     */
  }, {
    key: "appendComponent",
    value: function appendComponent(componentData, componentIndex) {
      var parentId = componentData.parentId;
      if (!parentId) throw new Error('ParentId field of component data is null.');
      if (!componentData) throw errors_1.errors.argumentNull('childComponent');
      var pageData = this.pageData;
      this.initComponent(componentData, pageData);
      if (componentIndex == null) {
        pageData.children.push(componentData);
      } else {
        pageData.children.splice(componentIndex, 0, componentData);
      }
      this.selectComponents(componentData.id);
    }
    /**
     * 选择指定的控件
     * @param componentIds 指定的控件编号
     */
  }, {
    key: "selectComponent",
    value: function selectComponent(componentIds) {
      this.selectComponents(componentIds);
      //====================================================
      // 设置焦点，以便获取键盘事件
      if (this._element) this._element.focus();
      //====================================================
    }
    /**
     * 选择指定的控件，一个或多个。已经选择的控件取消选择。
     * @param componentIds 指定的控件 ID
     */
  }, {
    key: "selectComponents",
    value: function selectComponents(componentIds) {
      if (typeof componentIds == 'string') componentIds = [componentIds];
      this.pageData.children.forEach(function (c) {
        // c.selected = false;
        c.status = c.status || maishu_jueying_core_1.ComponentStatus.default;
        c.status = c.status & ~maishu_jueying_core_1.ComponentStatus.selected;
      });
      this.pageData.children.filter(function (o) {
        return componentIds.indexOf(o.id) >= 0;
      }).forEach(function (c) {
        // c.selected = true;
        c.status = c.status || maishu_jueying_core_1.ComponentStatus.default;
        c.status = c.status | maishu_jueying_core_1.ComponentStatus.selected;
      });
      this.setState({
        pageData: this.pageData
      });
    }
    /** 移除控件 */
  }, {
    key: "removeComponent",
    value: function removeComponent() {
      for (var _len = arguments.length, componentIds = new Array(_len), _key = 0; _key < _len; _key++) {
        componentIds[_key] = arguments[_key];
      }
      this.removeComponents(componentIds);
    }
  }, {
    key: "removeComponents",
    value: function removeComponents(componentIds) {
      var pageData = this.pageData;
      if (!pageData || !pageData.children || pageData.children.length == 0) return;
      for (var i = 0; i < componentIds.length; i++) {
        this.removeComponentFrom(componentIds[i], pageData);
      }
      this.setState({
        pageData: pageData
      });
    }
    /**
     * 移动控件到另外一个控件容器
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param childComponentIndex 组件位置
     */
  }, {
    key: "moveComponent",
    value: function moveComponent(componentId, parentId, childComponentIndex) {
      var component = this.findComponentData(componentId);
      if (component == null) throw new Error("Cannt find component by id ".concat(componentId));
      console.assert(component != null, "Cannt find component by id ".concat(componentId));
      component.parentId = parentId;
      var pageData = this.pageData;
      console.assert(pageData.children != null);
      this.removeComponentFrom(componentId, pageData);
      this.appendComponent(component, childComponentIndex);
    }
  }, {
    key: "removeComponentFrom",
    value: function removeComponentFrom(componentId, pageData) {
      var child = pageData.children.filter(function (o) {
        return o.id == componentId;
      })[0];
      if (child == null) throw new Error("Component '".concat(componentId, "' is not exists."));
      var stack = [child];
      var componentsToRemove = [componentId];
      var _loop = function _loop() {
        var item = stack.pop();
        var children = pageData.children.filter(function (o) {
          return o.parentId == item.id;
        });
        if (children.length > 0) {
          stack.push.apply(stack, _toConsumableArray(children));
          // status 为 ComponentStatus.asset 不要删除
          componentsToRemove.push.apply(componentsToRemove, _toConsumableArray(children.filter(function (o) {
            return o.status == null || (o.status & maishu_jueying_core_1.ComponentStatus.asset) != maishu_jueying_core_1.ComponentStatus.asset;
          }).map(function (o) {
            return o.id;
          })));
        }
      };
      while (stack.length > 0) {
        _loop();
      }
      pageData.children = pageData.children.filter(function (o) {
        return componentsToRemove.indexOf(o.id) < 0;
      });
    }
    /**
     * 通过组件编号获取组件的数据
     * @param componentId 组件编号
     */
  }, {
    key: "findComponentData",
    value: function findComponentData(componentId) {
      var pageData = this.state.pageData;
      if (!pageData) throw errors_1.errors.pageDataIsNull();
      var componentData = pageData.children.filter(function (o) {
        return o.id == componentId;
      })[0];
      return componentData;
    }
  }, {
    key: "loadEditorTypes",
    value: function () {
      var _loadEditorTypes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(pageData) {
        var componentsToLoad, travel, componentsConfig, promises, componentDatas, editors, _iterator, _step, c, propEditors, _iterator2, _step2, e;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                componentsToLoad = [];
                travel = new page_data_travel_1.PageDataTravel(pageData);
                travel.each(function (c) {
                  if (typeof c == "string" || !(0, common_1.isCustomComponent)(c)) return;
                  componentsToLoad.push(c.type);
                });
                componentsConfig = this.props.componentsConfig;
                promises = componentsToLoad.map(function (typeName) {
                  return componentsConfig[typeName];
                }).filter(function (o) {
                  return o;
                }).map(function (o) {
                  return o.editor;
                });
                _context.next = 7;
                return Promise.all(promises);
              case 7:
                componentDatas = pageData.children.filter(function (o) {
                  return typeof o != "string";
                }).map(function (c) {
                  return c;
                });
                editors = this.state.componentEditors;
                _iterator = _createForOfIteratorHelper(componentDatas);
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    c = _step.value;
                    editors[c.type] = editors[c.type] || {};
                    propEditors = component_1.Component.getPropEditors(c);
                    _iterator2 = _createForOfIteratorHelper(propEditors);
                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        e = _step2.value;
                        editors[c.type][e.propName] = e.editorType;
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                this.setState({
                  componentEditors: editors
                });
              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function loadEditorTypes(_x) {
        return _loadEditorTypes.apply(this, arguments);
      }
      return loadEditorTypes;
    }()
  }, {
    key: "loadComponentTypes",
    value: function loadComponentTypes(pageData) {
      var _this2 = this;
      var componentTypes = {};
      var componentsConfig = this.props.componentsConfig;
      var componentsToLoad = [];
      var travel = new page_data_travel_1.PageDataTravel(pageData);
      travel.each(function (c) {
        if (typeof c == "string" || componentsToLoad.indexOf(c.type) >= 0 || !(0, common_1.isCustomComponent)(c)) return;
        componentsToLoad.push(c.type);
      });
      return PageDesigner.loadComponentTypes(componentsToLoad, componentsConfig).then(function (loadedComponentTypes) {
        Object.assign(componentTypes, loadedComponentTypes);
        _this2.setState({
          componentTypes: componentTypes
        });
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var DELETE_KEY_CODE = 46;
      if (e.keyCode == DELETE_KEY_CODE) {
        if (this.selectedComponents.length == 0) return;
        this.removeComponents(this.selectedComponentIds);
      }
    }
  }, {
    key: "onPageDataChanged",
    value: function () {
      var _onPageDataChanged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pageData) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.loadComponentTypes(pageData);
                this.loadEditorTypes(pageData);
              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function onPageDataChanged(_x2) {
        return _onPageDataChanged.apply(this, arguments);
      }
      return onPageDataChanged;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var pageData = this.state.pageData;
      var equal = (0, deep_equal_1.deepEqual)(this.prePageData, pageData);
      if (!equal) {
        this.prePageData = JSON.parse(JSON.stringify(pageData));
        this.onPageDataChanged(pageData);
      }
      return React.createElement("div", {
        tabIndex: 0,
        ref: function ref(e) {
          return _this3._element = _this3._element || e;
        },
        onKeyDown: function onKeyDown(e) {
          return _this3.onKeyDown(e);
        },
        className: this.props.className,
        style: this.props.style
      }, React.createElement(exports.DesignerContext.Provider, {
        value: {
          designer: this
        }
      }, this.props.children));
    }
  }], [{
    key: "loadComponentTypes",
    value: function () {
      var _loadComponentTypes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(componentsToLoad, componentsConfig) {
        var promises, componentTypes, _loop2, i, _ret;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                promises = [];
                componentTypes = {};
                _loop2 = function _loop2(i) {
                  var typeName = componentsToLoad[i];
                  if (!typeName) {
                    var errorText = "Component '".concat(typeName, "' has not a config.");
                    componentTypes[typeName] = (0, components_1.createInfoComponent)(errorText);
                    return "continue";
                  }
                  if (maishu_jueying_core_1.componentTypes[typeName]) {
                    promises.push(Promise.resolve(maishu_jueying_core_1.componentTypes[typeName]));
                    return "continue";
                  }
                  var p = new Promise(function (resolve, reject) {
                    if (!componentsConfig[typeName]) {
                      var _errorText = "Component '".concat(typeName, "' is not exists.");
                      componentTypes[typeName] = (0, components_1.createInfoComponent)(_errorText);
                      resolve({});
                      return;
                    }
                    if (!(componentsConfig[typeName].type instanceof Promise)) {
                      var _errorText2 = "Component '".concat(typeName, "' type is invalid.");
                      componentTypes[typeName] = (0, components_1.createInfoComponent)(_errorText2);
                      resolve({});
                      return;
                    }
                    componentsConfig[typeName].type.then(function (p) {
                      if (!p.default) {
                        var _errorText3 = "Component '".concat(typeName, "' module has not export default member.");
                        componentTypes[typeName] = (0, components_1.createInfoComponent)(_errorText3);
                      } else {
                        componentTypes[typeName] = p.default;
                      }
                      resolve({});
                    }).catch(function (err) {
                      reject(err);
                    });
                  });
                  promises.push(p);
                };
                i = 0;
              case 4:
                if (!(i < componentsToLoad.length)) {
                  _context3.next = 11;
                  break;
                }
                _ret = _loop2(i);
                if (!(_ret === "continue")) {
                  _context3.next = 8;
                  break;
                }
                return _context3.abrupt("continue", 8);
              case 8:
                i++;
                _context3.next = 4;
                break;
              case 11:
                _context3.next = 13;
                return Promise.all(promises);
              case 13:
                return _context3.abrupt("return", componentTypes);
              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function loadComponentTypes(_x3, _x4) {
        return _loadComponentTypes.apply(this, arguments);
      }
      return loadComponentTypes;
    }()
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      return {
        pageData: props.pageData
      };
    }
  }]);
  return PageDesigner;
}(React.Component);
exports.PageDesigner = PageDesigner;
//# sourceMappingURL=page-designer.js.map


/***/ }),

/***/ "./out-es5/design/property-editor.js":
/*!*******************************************!*\
  !*** ./out-es5/design/property-editor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorBoundary = exports.PropertyEditor = exports.defaultGroupName = void 0;
var React = __webpack_require__(/*! react */ "react");
var component_1 = __webpack_require__(/*! ../component/component */ "./out-es5/component/component.js");
// import { PropEditorProps } from "./prop-editor";
var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");
var page_designer_1 = __webpack_require__(/*! ./page-designer */ "./out-es5/design/page-designer.js");
var common_1 = __webpack_require__(/*! ../common */ "./out-es5/common.js");
var maishu_dilu_1 = __webpack_require__(/*! maishu-dilu */ "maishu-dilu");
exports.defaultGroupName = "";
var PropertyEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(PropertyEditor, _React$Component);
  var _super = _createSuper(PropertyEditor);
  function PropertyEditor(props) {
    var _this;
    _classCallCheck(this, PropertyEditor);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  _createClass(PropertyEditor, [{
    key: "getEditors",
    value: function getEditors(designer) {
      var _this2 = this;
      if (designer == null) {
        return [];
      }
      // 各个控件相同的编辑器
      var commonPropEditorInfos = [];
      var selectedComponents = designer.selectedComponents;
      var _loop = function _loop(i) {
        var componentData = selectedComponents[i];
        var propEditorInfos = component_1.Component.getPropEditors(componentData);
        if (i == 0) {
          commonPropEditorInfos = propEditorInfos || [];
        } else {
          var items = [];
          commonPropEditorInfos.forEach(function (propInfo1) {
            propEditorInfos.forEach(function (propInfo2) {
              var propName1 = propInfo1.propName;
              var propName2 = propInfo2.propName;
              if (propInfo1.editorType == propInfo2.editorType && propName1 == propName2) {
                items.push(propInfo1);
              }
            });
          });
          commonPropEditorInfos = items;
        }
      };
      for (var i = 0; i < selectedComponents.length; i++) {
        _loop(i);
      }
      // 各个控件相同的属性值
      var commonFlatProps = {};
      for (var _i = 0; _i < selectedComponents.length; _i++) {
        var control = selectedComponents[_i];
        var controlProps = Object.assign({}, control.props);
        delete controlProps.children;
        if (_i == 0) {
          commonFlatProps = controlProps;
        } else {
          var obj = {};
          for (var key in commonFlatProps) {
            if (commonFlatProps[key] == controlProps[key]) obj[key] = controlProps[key];
          }
          commonFlatProps = obj;
        }
      }
      var editors = [];
      var _loop2 = function _loop2(_i2) {
        var propEditorInfo = commonPropEditorInfos[_i2];
        var propName = propEditorInfo.propName;
        ;
        var editorType = propEditorInfo.editorType;
        var value = _this2.propValue(propName, commonFlatProps);
        if (value == null) value = propEditorInfo.defaultValue;
        var editorProps = {
          value: value,
          editComponents: selectedComponents,
          updateComponentProp: function updateComponentProp(value) {
            var componentProps = selectedComponents.map(function (o) {
              return {
                componentId: o.id,
                propName: propEditorInfo.propName,
                value: value
              };
            });
            if (_this2._validator == null) {
              _this2._validateFields = commonPropEditorInfos.filter(function (o) {
                return o.validation != null;
              }).map(function (o) {
                return Object.assign(o.validation, {
                  name: o.propName,
                  rules: []
                });
              });
              _this2._validator = _construct(maishu_dilu_1.FormValidator, [_this2.element].concat(_toConsumableArray(_this2._validateFields)));
            }
            if (_this2._validateFields.filter(function (o) {
              return o.name == propEditorInfo.propName;
            }).length > 0) _this2._validator.checkElement(propEditorInfo.propName);
            designer.updateComponentProps(componentProps);
          }
        };
        var editor = React.createElement(editorType, editorProps);
        editors.push({
          prop: propEditorInfo.propName,
          displayName: propEditorInfo.displayName,
          editor: editor,
          group: propEditorInfo.group
        });
      };
      for (var _i2 = 0; _i2 < commonPropEditorInfos.length; _i2++) {
        _loop2(_i2);
      }
      return editors;
    }
  }, {
    key: "propValue",
    value: function propValue(propName, props) {
      if (!propName) throw errors_1.errors.argumentNull("propName");
      if (!props) throw errors_1.errors.argumentNull("props");
      var navPropsNames = propName.split(".");
      var obj = props;
      for (var i = 0; i < navPropsNames.length; i++) {
        obj = obj[navPropsNames[i]];
        if (obj == null) return null;
      }
      return obj;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      return React.createElement(page_designer_1.DesignerContext.Consumer, null, function (args) {
        if (!args) throw errors_1.errors.designerContextArgumentNull();
        var designer = args.designer;
        var editors = _this3.getEditors(designer);
        if (editors.length == 0) {
          var empty = _this3.props.empty;
          return React.createElement("div", {
            className: "text-center"
          }, empty);
        }
        if (_this3.props.customRender) {
          var items = editors.map(function (o) {
            return Object.assign({
              displayName: o.displayName
            }, o);
          });
          var r = _this3.props.customRender(designer.selectedComponents, items);
          if (r != null) {
            return React.createElement("div", {
              ref: function ref(e) {
                return _this3._element = e || _this3._element;
              }
            }, r);
          }
        }
        var groupEditorsArray = [];
        var _loop3 = function _loop3(i) {
          var group = editors[i].group || exports.defaultGroupName;
          var groupEditors = groupEditorsArray.filter(function (o) {
            return o.group == group;
          })[0];
          if (groupEditors == null) {
            groupEditors = {
              group: editors[i].group,
              editors: []
            };
            groupEditorsArray.push(groupEditors);
          }
          groupEditors.editors.push({
            prop: editors[i].prop,
            displayName: editors[i].displayName,
            editor: editors[i].editor
          });
        };
        for (var i = 0; i < editors.length; i++) {
          _loop3(i);
        }
        return groupEditorsArray.map(function (g) {
          return React.createElement("div", {
            key: g.group,
            className: "panel panel-default",
            ref: function ref(e) {
              return _this3._element = e || _this3._element;
            }
          }, g.group ? React.createElement("div", {
            className: "panel-heading"
          }, common_1.groupDisplayNames[g.group] || g.group) : null, React.createElement("div", {
            className: "panel-body"
          }, g.editors.map(function (o, i) {
            return React.createElement("div", {
              key: o.prop,
              className: "form-group clearfix"
            }, React.createElement("label", null, o.displayName), React.createElement("div", {
              className: "control"
            }, React.createElement(ErrorBoundary, null, o.editor)));
          })));
        });
      });
    }
  }, {
    key: "element",
    get: function get() {
      return this._element;
    }
  }, {
    key: "validator",
    get: function get() {
      return this._validator;
    }
  }]);
  return PropertyEditor;
}(React.Component);
exports.PropertyEditor = PropertyEditor;
PropertyEditor.contextType = page_designer_1.DesignerContext;
var ErrorBoundary = /*#__PURE__*/function (_React$Component2) {
  _inherits(ErrorBoundary, _React$Component2);
  var _super2 = _createSuper(ErrorBoundary);
  function ErrorBoundary(props) {
    var _this4;
    _classCallCheck(this, ErrorBoundary);
    _this4 = _super2.call(this, props);
    _this4.state = {};
    return _this4;
  }
  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({
        error: error
      });
      // You can also log the error to an error reporting service
      //   logErrorToMyService(error, info);
    }
  }, {
    key: "render",
    value: function render() {
      var _ref = this.state || {},
        error = _ref.error;
      if (error) {
        return React.createElement("div", {
          className: "error"
        }, React.createElement("div", null, error.message), React.createElement("div", null, error.stack));
      }
      return this.props.children;
    }
  }]);
  return ErrorBoundary;
}(React.Component);
exports.ErrorBoundary = ErrorBoundary;
//# sourceMappingURL=property-editor.js.map


/***/ }),

/***/ "./out-es5/errors.js":
/*!***************************!*\
  !*** ./out-es5/errors.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errors = void 0;
var errors_1 = __webpack_require__(/*! maishu-toolkit/out/errors */ "./node_modules/maishu-toolkit/out/errors.js");
var Errors = /*#__PURE__*/function (_errors_1$Errors) {
  _inherits(Errors, _errors_1$Errors);
  var _super = _createSuper(Errors);
  function Errors() {
    _classCallCheck(this, Errors);
    return _super.apply(this, arguments);
  }
  _createClass(Errors, [{
    key: "placeHolderIdNull",
    value: function placeHolderIdNull() {
      var msg = "Place holder property id cannt be null or empty.";
      return new Error(msg);
    }
  }, {
    key: "fileNotExists",
    value: function fileNotExists(fileName) {
      return new Error("File '".concat(fileName, "' is not exists."));
    }
  }, {
    key: "argumentNull",
    value: function argumentNull(argumentName) {
      return new Error("Argument ".concat(argumentName, " is null or empty."));
    }
  }, {
    key: "argumentRangeError",
    value: function argumentRangeError(argumentName) {
      return new Error("Argument ".concat(argumentName, " range error."));
    }
  }, {
    key: "pageDataIsNull",
    value: function pageDataIsNull() {
      return new Error("Page data is null.");
    }
  }, {
    key: "toolbarRequiredKey",
    value: function toolbarRequiredKey() {
      return new Error("Toolbar has not a key prop.");
    }
  }, {
    key: "loadPluginFail",
    value: function loadPluginFail(pluginId) {
      return new Error("Load plugin '".concat(pluginId, "' fail."));
    }
  }, {
    key: "idRequired",
    value: function idRequired() {
      return new Error("Property id is required.");
    }
  }, {
    key: "canntFindMasterPage",
    value: function canntFindMasterPage(componentId) {
      return new Error("Can not find master page for component container ".concat(componentId, "."));
    }
  }, {
    key: "propCanntNull",
    value: function propCanntNull(componentName, property) {
      var msg = "".concat(componentName, " property ").concat(property, " cannt be null or empty.");
      return new Error(msg);
    }
  }, {
    key: "argumentFieldCanntNull",
    value: function argumentFieldCanntNull(fieldName, argumentName) {
      var msg = "".concat(fieldName, " of argument ").concat(argumentName, " cannt be null or empty.");
      return new Error(msg);
    }
  }, {
    key: "designerContextArgumentNull",
    value: function designerContextArgumentNull() {
      var msg = "Designer cottext argument null.";
      var error = new Error(msg);
      error.name = exports.errors.designerContextArgumentNull.name;
      return error;
    }
  }]);
  return Errors;
}(errors_1.Errors);
exports.errors = new Errors();
//# sourceMappingURL=errors.js.map


/***/ }),

/***/ "./out-es5/index.js":
/*!**************************!*\
  !*** ./out-es5/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentDiagram = exports.classNames = exports.DesignerContext = exports.PageDesigner = exports.EditorPanel = exports.Component = exports.groupDisplayNames = void 0;
var common_1 = __webpack_require__(/*! ./common */ "./out-es5/common.js");
Object.defineProperty(exports, "groupDisplayNames", {
  enumerable: true,
  get: function get() {
    return common_1.groupDisplayNames;
  }
});
var component_1 = __webpack_require__(/*! ./component/component */ "./out-es5/component/component.js");
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function get() {
    return component_1.Component;
  }
});
var editor_panel_1 = __webpack_require__(/*! ./design/editor-panel */ "./out-es5/design/editor-panel.js");
Object.defineProperty(exports, "EditorPanel", {
  enumerable: true,
  get: function get() {
    return editor_panel_1.EditorPanel;
  }
});
var page_designer_1 = __webpack_require__(/*! ./design/page-designer */ "./out-es5/design/page-designer.js");
Object.defineProperty(exports, "PageDesigner", {
  enumerable: true,
  get: function get() {
    return page_designer_1.PageDesigner;
  }
});
Object.defineProperty(exports, "DesignerContext", {
  enumerable: true,
  get: function get() {
    return page_designer_1.DesignerContext;
  }
});
var style_1 = __webpack_require__(/*! ./style */ "./out-es5/style.js");
Object.defineProperty(exports, "classNames", {
  enumerable: true,
  get: function get() {
    return style_1.classNames;
  }
});
var component_diagram_1 = __webpack_require__(/*! ./design/component-diagram */ "./out-es5/design/component-diagram.js");
Object.defineProperty(exports, "ComponentDiagram", {
  enumerable: true,
  get: function get() {
    return component_diagram_1.ComponentDiagram;
  }
});
__webpack_require__(/*! ./component/create-element */ "./out-es5/component/create-element.js");
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./out-es5/page-data-travel.js":
/*!*************************************!*\
  !*** ./out-es5/page-data-travel.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageDataTravel = void 0;
var errors_1 = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");
/** 页面数据（PageData）遍历器，遍历 PageData 里的组件 */
var PageDataTravel = /*#__PURE__*/function () {
  function PageDataTravel(pageData) {
    _classCallCheck(this, PageDataTravel);
    this.pageData = pageData;
  }
  _createClass(PageDataTravel, [{
    key: "each",
    value: function each(callback) {
      var stack = _toConsumableArray(this.pageData.children || []);
      var componentData = stack.pop();
      while (componentData != null) {
        callback(componentData);
        if (typeof componentData != "string") {
          var children = componentData.children || [];
          stack.push.apply(stack, _toConsumableArray(children));
        }
        componentData = stack.pop();
      }
    }
  }], [{
    key: "findComponent",
    value: function findComponent(pageData, componentId) {
      if (!pageData) throw errors_1.errors.argumentNull("pageData");
      if (!componentId) throw errors_1.errors.argumentNull("componentId");
      var travel = new PageDataTravel(pageData);
      var r;
      travel.each(function (c) {
        if (typeof c == "string" || r) return;
        if (componentId == c.id) r = c;
      });
      return r;
    }
  }]);
  return PageDataTravel;
}();
exports.PageDataTravel = PageDataTravel;
//# sourceMappingURL=page-data-travel.js.map


/***/ }),

/***/ "./out-es5/strings.js":
/*!****************************!*\
  !*** ./out-es5/strings.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = void 0;
exports.strings = {
  emptyCompoenntPanel: "暂无可用组件",
  emptyDiagram: "请拖放组件到此处",
  componentLoading: "组件正在加载中..."
};
//# sourceMappingURL=strings.js.map


/***/ }),

/***/ "./out-es5/style.js":
/*!**************************!*\
  !*** ./out-es5/style.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeClassName = exports.appendClassName = exports.classNames = void 0;
var errors_1 = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");
exports.classNames = {
  componentSelected: "component-selected",
  emptyTemplates: "empty-templates",
  loadingTemplates: "loading-templates",
  templateSelected: "template-selected",
  templateDialog: "template-dialog",
  emptyDocument: "empty-document",
  empty: "empty",
  selected: "selected",
  component: 'component',
  componentWrapper: 'component-wrapper',
  componentPanel: 'component-panel',
  componentIcon: 'component-icon',
  placeholder: 'placeholder',
  editorPanel: 'editor-panel',
  designer: 'designer',
  moveDown: 'move-down'
};
var templateDialog = {
  nameHeight: 40,
  fontSize: 22
};
var element = document.createElement('style');
element.type = 'text/css';
element.setAttribute("data-name", "jueying");
element.innerHTML = "\n            .".concat(exports.classNames.componentSelected, " {\n                border: solid 1px #337ab7!important;\n            }\n            .").concat(exports.classNames.componentSelected, " > :first-child {\n                border-color: blue;\n              }\n              .").concat(exports.classNames.componentSelected, " .resize_handle {\n                position: absolute;\n                height: 6px;\n                width: 6px;\n                border: 1px solid #89B;\n                background: #9AC;\n              }\n              .").concat(exports.classNames.componentSelected, " .move_handle {\n                height: 12px;\n                width: 12px;\n                top: 6px;\n                left: 8px;\n                border: solid 1px black;\n                position: relative;\n                margin-top: -12px;\n              }\n              .").concat(exports.classNames.componentSelected, " .NW,\n              .").concat(exports.classNames.componentSelected, " .NN,\n              .").concat(exports.classNames.componentSelected, " .NE {\n                top: -4px;\n              }\n              .").concat(exports.classNames.componentSelected, " .NE,\n              .").concat(exports.classNames.componentSelected, " .EE,\n              .").concat(exports.classNames.componentSelected, " .SE {\n                right: -4px;\n              }\n              .").concat(exports.classNames.componentSelected, " .SW,\n              .").concat(exports.classNames.componentSelected, ".SS,\n              .").concat(exports.classNames.componentSelected, " .SE {\n                bottom: -4px;\n              }\n              .").concat(exports.classNames.componentSelected, " .NW,\n              .").concat(exports.classNames.componentSelected, " .WW,\n              .").concat(exports.classNames.componentSelected, " .SW {\n                left: -4px;\n              }\n              .").concat(exports.classNames.componentSelected, " .SE,\n              .").concat(exports.classNames.componentSelected, " .NW {\n                cursor: nw-resize;\n              }\n              .").concat(exports.classNames.componentSelected, " .SW,\n              .").concat(exports.classNames.componentSelected, " .NE {\n                cursor: ne-resize;\n              }\n              .").concat(exports.classNames.componentSelected, " .NN,\n              .").concat(exports.classNames.componentSelected, " .SS {\n                cursor: n-resize;\n                left: 50%;\n                margin-left: -4px;\n              }\n              .").concat(exports.classNames.componentSelected, " .EE,\n              .").concat(exports.classNames.componentSelected, " .WW {\n                cursor: e-resize;\n                top: 50%;\n                margin-top: -4px;\n              }\n            .").concat(exports.classNames.emptyTemplates, " {\n                padding:50px 0;\n                text-align: center;\n            }\n            .").concat(exports.classNames.loadingTemplates, " {\n                padding:50px 0;\n                text-align: center;\n            }\n            .").concat(exports.classNames.templateSelected, " .page-view {\n                border: solid 1px #337ab7!important;\n            }\n            .").concat(exports.classNames.templateDialog, " .name {\n                margin-top: -").concat(templateDialog.nameHeight, "px;\n                height: ").concat(templateDialog.nameHeight, "px;\n                font-size: ").concat(templateDialog.fontSize, "px;\n                text-align: center;\n                padding-top: 6px;\n                background-color: black;\n                opacity: 0.5;\n            }\n            .").concat(exports.classNames.templateDialog, " .name span {\n                color: white;\n            }\n            .").concat(exports.classNames.emptyDocument, " {\n                text-align: center;\n                padding: 100px 0;\n            }\n            .").concat(exports.classNames.component, " > .NW,\n            .").concat(exports.classNames.component, " > .NN,\n            .").concat(exports.classNames.component, " > .NE,\n            .").concat(exports.classNames.component, " > .EE,\n            .").concat(exports.classNames.component, " > .SE,\n            .").concat(exports.classNames.component, " > .SW,\n            .").concat(exports.classNames.component, " > .SS,\n            .").concat(exports.classNames.component, " > .WW {\n                display: none;\n            }\n            .").concat(exports.classNames.componentSelected, ".component > .NW,\n            .").concat(exports.classNames.componentSelected, ".component > .NN,\n            .").concat(exports.classNames.componentSelected, ".component > .NE,\n            .").concat(exports.classNames.componentSelected, ".component > .EE,\n            .").concat(exports.classNames.componentSelected, ".component > .SE,\n            .").concat(exports.classNames.componentSelected, ".component > .SW,\n            .").concat(exports.classNames.componentSelected, ".component > .SS,\n            .").concat(exports.classNames.componentSelected, ".component > .WW {\n                display: block;\n            }\n            .").concat(exports.classNames.placeholder, " {\n                min-height: 40px;\n                width: 100%;\n            }\n            .").concat(exports.classNames.placeholder, ".active,\n            .").concat(exports.classNames.componentWrapper, ".active,\n            .").concat(exports.classNames.componentWrapper, ".").concat(exports.classNames.componentSelected, ".active {\n                border: 1px solid green;\n            }\n            .").concat(exports.classNames.editorPanel, " {\n                width: 300px;\n                background: white;\n                color: black;\n                margin: 0;\n                font-size: 14px;\n                z-index: 100;\n                overflow: auto;\n            }\n            .").concat(exports.classNames.editorPanel, " label {\n                width: 80px;\n                float: left;\n                padding: 4px;\n                text-overflow: ellipsis;\n                overflow: hidden;\n            }\n            .").concat(exports.classNames.editorPanel, " .control {\n                padding-left: 90px;\n            }\n            .").concat(exports.classNames.editorPanel, " .empty {\n                padding-top: 200px;\n                text-align: center;\n            }\n            .").concat(exports.classNames.designer, " .error,\n            .").concat(exports.classNames.editorPanel, " .error {\n                color: red;\n            }\n            .").concat(exports.classNames.componentPanel, " {\n                background: white;\n                color: black;\n                font-size: 14px;\n                z-index: 100;\n                list-style: none;\n                padding: 0;\n                text-align: center\n            }\n            .").concat(exports.classNames.componentPanel, " .panel-heading {\n                text-align: center;\n            }\n            .").concat(exports.classNames.componentPanel, " li {\n                text-align: center;\n                padding: 8px;\n            }\n            .").concat(exports.classNames.componentWrapper, ".").concat(exports.classNames.moveDown, " {\n         \n            }\n        ");
if (document.head != null) {
  document.head.appendChild(element);
}
function appendClassName(element, addonClassName) {
  if (element == null) throw errors_1.errors.argumentNull('element');
  if (!addonClassName) throw errors_1.errors.argumentNull('addonClassName');
  var sourceClassName;
  if (typeof element == 'string') sourceClassName = element;else sourceClassName = element.className;
  sourceClassName = sourceClassName || '';
  console.assert(addonClassName != null);
  if (sourceClassName.indexOf(addonClassName) >= 0) return sourceClassName;
  var className = "".concat(sourceClassName, " ").concat(addonClassName);
  if (typeof element != 'string') element.className = className;
  return className;
}
exports.appendClassName = appendClassName;
function removeClassName(element, targetClassName) {
  var sourceClassName;
  if (typeof element == 'string') sourceClassName = element;else sourceClassName = element.className || '';
  if (sourceClassName.indexOf(targetClassName) < 0) return sourceClassName;
  sourceClassName = sourceClassName || '';
  sourceClassName = sourceClassName.replace(new RegExp(targetClassName, 'g'), '');
  sourceClassName = sourceClassName.trim();
  if (typeof element != 'string') element.className = sourceClassName;
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
//# sourceMappingURL=index.es5.js.map