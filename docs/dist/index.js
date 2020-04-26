/*!
 * 
 *  maishu-jueying v3.0.19
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
		module.exports = factory(require("maishu-jueying-core"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["maishu-jueying-core", "react"], factory);
	else if(typeof exports === 'object')
		exports["jueying"] = factory(require("maishu-jueying-core"), require("react"));
	else
		root["jueying"] = factory(root["maishu-jueying-core"], root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_maishu_jueying_core__, __WEBPACK_EXTERNAL_MODULE_react__) {
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

/***/ "./node_modules/maishu-toolkit/out/callback.js":
/*!*****************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/callback.js ***!
  \*****************************************************/
/*! exports provided: Callback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callback", function() { return Callback; });
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


/***/ }),

/***/ "./node_modules/maishu-toolkit/out/data.js":
/*!*************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/data.js ***!
  \*************************************************/
/*! exports provided: DataSource, DataSourceSelectArguments, ArrayDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceSelectArguments", function() { return DataSourceSelectArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function() { return ArrayDataSource; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./node_modules/maishu-toolkit/out/errors.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callback */ "./node_modules/maishu-toolkit/out/callback.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let errors = Object.assign(_errors__WEBPACK_IMPORTED_MODULE_0__["errors"], {
    dataSourceCanntInsert() {
        return new Error("DataSource can not insert.");
    },
    dataSourceCanntDelete() {
        return new Error("DataSource can not delete.");
    },
    dataSourceCanntUpdate() {
        return new Error("DataSource can not update.");
    },
    primaryKeyNull(key) {
        let msg = `Primary key named '${key}' value is null.`;
        return new Error(msg);
    }
});
class DataSource {
    constructor(args) {
        this.inserting = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks1<DataSource<T>, T, number>();
        this.inserted = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
        this.deleting = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks<DataSource<T>, T>();
        this.deleted = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks<DataSource<T>, T>();
        this.updating = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
        this.updated = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
        this.selecting = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"]();
        this.selected = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks<DataSource<T>, DataSourceSelectResult<T>>();
        this.error = new _callback__WEBPACK_IMPORTED_MODULE_1__["Callback"](); //callbacks<this, DataSourceError>();
        this.args = args;
        this.primaryKeys = args.primaryKeys || [];
    }
    ; //callbacks<DataSource<T>, DataSourceSelectArguments>();
    get canDelete() {
        return this.args.delete != null && this.primaryKeys.length > 0;
    }
    get canInsert() {
        return this.args.insert != null && this.primaryKeys.length > 0;
    }
    get canUpdate() {
        return this.args.update != null && this.primaryKeys.length > 0;
    }
    executeInsert(item, args) {
        return this.args.insert(item, args);
    }
    executeDelete(item, args) {
        return this.args.delete(item, args);
    }
    executeUpdate(item, args) {
        return this.args.update(item, args);
    }
    executeSelect(args) {
        args = args || {};
        return this.args.select(args);
    }
    insert(item, args, index) {
        if (!this.canInsert)
            throw errors.dataSourceCanntInsert();
        if (!item)
            throw errors.argumentNull("item");
        if (typeof args == 'number') {
            index = args;
            args = null;
        }
        this.inserting.fire({ sender: this, dataItem: item, index });
        return this.executeInsert(item, args).then((data) => {
            Object.assign(item, data);
            this.inserted.fire({ sender: this, dataItem: item, index });
            return data;
        }).catch(exc => {
            this.processError(exc, 'insert');
            throw exc;
        });
    }
    delete(item, args) {
        if (!this.canDelete)
            throw errors.dataSourceCanntDelete();
        if (!item)
            throw errors.argumentNull("item");
        this.checkPrimaryKeys(item);
        this.deleting.fire({ sender: this, dataItem: item });
        return this.executeDelete(item, args).then((data) => {
            this.deleted.fire({ sender: this, dataItem: item });
            return data;
        }).catch(exc => {
            this.processError(exc, 'delete');
            throw exc;
        });
    }
    update(item, args) {
        if (!this.canUpdate)
            throw errors.dataSourceCanntUpdate();
        if (!item)
            throw errors.argumentNull("item");
        this.checkPrimaryKeys(item);
        this.updating.fire({ sender: this, dataItem: item });
        return this.executeUpdate(item, args).then((data) => {
            Object.assign(item, data);
            this.updated.fire({ sender: this, dataItem: item });
            return data;
        }).catch((exc) => {
            this.processError(exc, 'update');
            throw exc;
        });
    }
    isSameItem(theItem, otherItem) {
        if (theItem == null)
            throw errors.argumentNull('theItem');
        if (otherItem == null)
            throw errors.argumentNull('otherItem');
        if (this.primaryKeys.length == 0)
            return theItem == otherItem;
        this.checkPrimaryKeys(theItem);
        this.checkPrimaryKeys(otherItem);
        for (let pk of this.primaryKeys) {
            if (theItem[pk] != otherItem[pk])
                return false;
        }
        return true;
    }
    checkPrimaryKeys(item) {
        for (let key in item) {
            if (item[key] == null && this.primaryKeys.indexOf(key) >= 0)
                throw errors.primaryKeyNull(key);
        }
    }
    select(args) {
        args = args || {};
        // fireCallback(this.selecting, this, args);
        this.selecting.fire({ sender: this, selectArguments: args });
        return this.executeSelect(args).then((data) => {
            let dataItems;
            let totalRowCount;
            if (Array.isArray(data)) {
                dataItems = data;
                totalRowCount = data.length;
            }
            else if (data.dataItems !== undefined && data.totalRowCount !== undefined) {
                dataItems = data.dataItems;
                totalRowCount = data.totalRowCount;
            }
            else {
                throw errors.queryResultTypeError();
            }
            this.selected.fire({ sender: this, selectResult: { totalRowCount, dataItems } });
            return { totalRowCount, dataItems };
        }).catch(exc => {
            this.processError(exc, 'select');
            throw exc;
        });
    }
    processError(exc, method) {
        exc.method = method;
        this.error.fire({ sender: this, error: exc });
        if (!exc.handled)
            throw exc;
    }
}
class DataSourceSelectArguments {
    constructor() {
        this.startRowIndex = 0;
        this.maximumRows = 2147483647;
    }
}
class ArrayDataSource extends DataSource {
    constructor(items) {
        super({
            select(args) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (args.sortExpression) {
                    }
                    let dataItems = items.slice(args.startRowIndex, args.startRowIndex + args.maximumRows);
                    let result = { dataItems, totalRowCount: items.length };
                    return result;
                });
            }
        });
    }
}
// }


/***/ }),

/***/ "./node_modules/maishu-toolkit/out/errors.js":
/*!***************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/errors.js ***!
  \***************************************************/
/*! exports provided: Errors, errors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return Errors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return errors; });
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
    queryResultTypeError() {
        let msg = 'Type of the query result is expected as Array or DataSourceSelectResult.';
        return new Error(msg);
    }
}
let errors = new Errors();


/***/ }),

/***/ "./node_modules/maishu-toolkit/out/guid.js":
/*!*************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/guid.js ***!
  \*************************************************/
/*! exports provided: guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return guid; });
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}


/***/ }),

/***/ "./node_modules/maishu-toolkit/out/index.js":
/*!**************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/index.js ***!
  \**************************************************/
/*! exports provided: guid, pathContact, Errors, errors, Callback, DataSource, DataSourceSelectArguments, parseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid */ "./node_modules/maishu-toolkit/out/guid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return _guid__WEBPACK_IMPORTED_MODULE_0__["guid"]; });

/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path */ "./node_modules/maishu-toolkit/out/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pathContact", function() { return _path__WEBPACK_IMPORTED_MODULE_1__["pathContact"]; });

/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "./node_modules/maishu-toolkit/out/errors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return _errors__WEBPACK_IMPORTED_MODULE_2__["Errors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return _errors__WEBPACK_IMPORTED_MODULE_2__["errors"]; });

/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./callback */ "./node_modules/maishu-toolkit/out/callback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callback", function() { return _callback__WEBPACK_IMPORTED_MODULE_3__["Callback"]; });

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./node_modules/maishu-toolkit/out/data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return _data__WEBPACK_IMPORTED_MODULE_4__["DataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceSelectArguments", function() { return _data__WEBPACK_IMPORTED_MODULE_4__["DataSourceSelectArguments"]; });

/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./url */ "./node_modules/maishu-toolkit/out/url.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return _url__WEBPACK_IMPORTED_MODULE_5__["parseUrl"]; });









/***/ }),

/***/ "./node_modules/maishu-toolkit/out/path.js":
/*!*************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/path.js ***!
  \*************************************************/
/*! exports provided: pathContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathContact", function() { return pathContact; });
/** 连接多个路径 */
function pathContact(...paths) {
    paths = paths || [];
    if (paths.length == 0)
        return "";
    if (paths.length == 1) {
        return paths[0];
    }
    let str = paths.join("");
    // 将一个或多个的 / 变为一个 /，例如：/shop/test// 转换为 /shop/test/
    str = str.replace(/\/+/g, '/');
    return str;
}


/***/ }),

/***/ "./node_modules/maishu-toolkit/out/url.js":
/*!************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/url.js ***!
  \************************************************/
/*! exports provided: parseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return parseUrl; });
function parseUrl(url) {
    let i = url.indexOf("?");
    if (i < 0)
        return {};
    let query = url.substr(i + 1);
    return pareeUrlQuery(query);
}
function pareeUrlQuery(query) {
    let match, pl = /\+/g, // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g, decode = function (s) {
        return decodeURIComponent(s.replace(pl, " "));
    };
    let urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);
    return urlParams;
}


/***/ }),

/***/ "./out/common.js":
/*!***********************!*\
  !*** ./out/common.js ***!
  \***********************/
/*! exports provided: constants, proptDisplayNames, groupDisplayNames, guid, Callback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proptDisplayNames", function() { return proptDisplayNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupDisplayNames", function() { return groupDisplayNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return guid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callback", function() { return Callback; });
let constants = {
    componentsDir: 'components',
    connectorElementClassName: 'component-container',
    componentTypeName: 'data-component-name',
    componentData: 'component-data',
    componentPosition: "component-position"
};
let proptDisplayNames = {};
let groupDisplayNames = {};
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
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
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./out/component.js":
/*!**************************!*\
  !*** ./out/component.js ***!
  \**************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _property_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property-editor */ "./out/property-editor.js");
/* harmony import */ var maishu_jueying_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! maishu-jueying-core */ "maishu-jueying-core");
/* harmony import */ var maishu_jueying_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(maishu_jueying_core__WEBPACK_IMPORTED_MODULE_1__);


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
        let { componentType, editorType, display: editorDisplay, group, propName, displayName } = options;
        group = group || _property_editor__WEBPACK_IMPORTED_MODULE_0__["defaultGroupName"];
        propName = propName || "";
        displayName = displayName || propName;
        // 属性可能为导航属性,例如 style.width
        let propNames = propName.split('.');
        let className = typeof componentType == 'string' ? componentType : componentType.prototype.typename || componentType.name;
        Component.componentPropEditorDisplay[`${className}.${propName}`] = editorDisplay;
        let classProps = Component.componentPropEditors[className] = Component.componentPropEditors[className] || [];
        for (let i = 0; i < classProps.length; i++) {
            let propName1 = classProps[i].propName; //classProps[i].propNames.join('.')
            let propName2 = propNames.join('.');
            if (propName1 == propName2) {
                classProps[i].editorType = editorType;
                return;
            }
        }
        classProps.push({ propName, displayName, editorType: editorType, group });
    }
    // static componentTypes = {} as { [key: string]: React.ComponentClass<any> | string }
    static register(typeName, componentType) {
        // if (componentType == null && typeof componentName == 'function') {
        //     componentType = componentName;
        //     componentName = (componentType as React.ComponentClass<any>).name;
        //     (componentType as any)['componentName'] = componentName;
        // }
        // if (!componentName)
        //     throw Errors.argumentNull('componentName');
        // if (!componentType)
        //     throw Errors.argumentNull('componentType');
        return Object(maishu_jueying_core__WEBPACK_IMPORTED_MODULE_1__["registerComponent"])(typeName, componentType);
    }
}
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
/*! exports provided: EditorPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorPanel", function() { return EditorPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _property_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-editor */ "./out/property-editor.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./out/style.js");



class EditorPanel extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = { componentDatas: [] };
    }
    render() {
        let { empty } = this.props;
        empty = empty || react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "empty" }, "\u6682\u65E0\u53EF\u7528\u7684\u5C5E\u6027");
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: `${_style__WEBPACK_IMPORTED_MODULE_2__["classNames"].editorPanel} ${this.props.className || ""}`, ref: (e) => this.element = e || this.element },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_property_editor__WEBPACK_IMPORTED_MODULE_1__["PropertyEditor"], { ref: e => this.editor = e || this.editor, empty: empty, customRender: this.props.customRender }));
    }
}
//# sourceMappingURL=editor-panel.js.map

/***/ }),

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! exports provided: Errors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return Errors; });
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
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! exports provided: groupDisplayNames, Component, EditorPanel, PageDesigner, DesignerContext, PropEditor, TextInput, classNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./out/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupDisplayNames", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["groupDisplayNames"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./out/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony import */ var _editor_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-panel */ "./out/editor-panel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorPanel", function() { return _editor_panel__WEBPACK_IMPORTED_MODULE_2__["EditorPanel"]; });

/* harmony import */ var _page_designer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-designer */ "./out/page-designer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageDesigner", function() { return _page_designer__WEBPACK_IMPORTED_MODULE_3__["PageDesigner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DesignerContext", function() { return _page_designer__WEBPACK_IMPORTED_MODULE_3__["DesignerContext"]; });

/* harmony import */ var _prop_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prop-editor */ "./out/prop-editor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropEditor", function() { return _prop_editor__WEBPACK_IMPORTED_MODULE_4__["PropEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return _prop_editor__WEBPACK_IMPORTED_MODULE_4__["TextInput"]; });

/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./out/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classNames", function() { return _style__WEBPACK_IMPORTED_MODULE_5__["classNames"]; });

// import './jquery';
// import '../lib/jquery.event.drag-2.2';
// import '../lib/jquery.event.drag.live-2.2';
// import '../lib/jquery.event.drop-2.2';
// import '../lib/jquery.event.drop.live-2.2';


// export { ComponentPanel } from "./component-panel";




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./out/page-designer.js":
/*!******************************!*\
  !*** ./out/page-designer.js ***!
  \******************************/
/*! exports provided: DesignerContext, PageDesigner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignerContext", function() { return DesignerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDesigner", function() { return PageDesigner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./out/errors.js");
/* harmony import */ var maishu_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! maishu-toolkit */ "./node_modules/maishu-toolkit/out/index.js");



let DesignerContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({ designer: null });
class PageDesigner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.components = {};
        let pageData = this.props.pageData;
        this.initPageData(pageData);
        this.state = { pageData };
    }
    setComponetRefProp(pageData) {
        //=========================================================
        // 记录当前 pageData 控件 ID
        let componentIds = {};
        //=========================================================
        PageDesigner.travelComponentData(pageData).forEach(item => {
            console.assert(item.props != null && item.id != null);
            componentIds[item.type] = componentIds[item.type] || [];
            componentIds[item.type].push(item.id);
            let itemRef = item.props.ref;
            item.props.ref = (e) => {
                if (e != null) {
                    this.components[item.type] = this.components[item.type] || {};
                    this.components[item.type][item.id] = e;
                }
                if (typeof itemRef == "function")
                    itemRef(e);
            };
        });
    }
    initPageData(pageData) {
        if (pageData == null) {
            return;
        }
        pageData.children = pageData.children || [];
        // PageDesigner.nameComponent(pageData);
        this.fillComponent(pageData);
        this.setComponetRefProp(pageData);
    }
    /**
    * 对组件及其子控件进行命名
    * @param component
    */
    fillComponent(component) {
        let namedComponents = {};
        if (!component.name) {
            let num = 0;
            let name;
            do {
                num = num + 1;
                name = `${component.type}${num}`;
            } while (namedComponents[name]);
            namedComponents[name] = component;
            component.name = name;
        }
        if (!component.id)
            component.id = Object(maishu_toolkit__WEBPACK_IMPORTED_MODULE_2__["guid"])();
        component.children = component.children || [];
        if (!component.children || component.children.length == 0) {
            return;
        }
        component.children.forEach(child => {
            if (typeof child == "string")
                return true;
            this.fillComponent(child);
        });
    }
    allComponents() {
        let r = [];
        for (let key in this.components) {
            let ids = Object.getOwnPropertyNames(this.components[key]);
            r.push(...ids.map(id => this.components[key][id]));
        }
        return r;
    }
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
        let arr = new Array();
        let stack = new Array();
        stack.push(this.pageData);
        while (stack.length > 0) {
            let item = stack.pop();
            if (item.props != null && item.selected == true)
                arr.push(item);
            (item.children || []).forEach(child => {
                if (typeof child == "string")
                    return true;
                stack.push(child);
            });
        }
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
     * @param parentId 父控件编号
     * @param componentData 控件数据
     * @param componentIndex 新添加组件在子组件中的次序
     */
    appendComponent(parentId, componentData, componentIndex) {
        if (!parentId)
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].argumentNull('parentId');
        if (!componentData)
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].argumentNull('childComponent');
        this.initPageData(componentData);
        let parentControl = this.findComponentData(parentId);
        if (parentControl == null)
            throw new Error('Parent is not exists');
        console.assert(parentControl != null);
        parentControl.children = parentControl.children || [];
        if (componentIndex != null) {
            parentControl.children.splice(componentIndex, 0, componentData);
        }
        else {
            parentControl.children.push(componentData);
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
     * 选择指定的控件，一个或多个
     * @param control 指定的控件
     */
    selectComponents(componentIds) {
        if (typeof componentIds == 'string')
            componentIds = [componentIds];
        var stack = [];
        stack.push(this.pageData);
        while (stack.length > 0) {
            let item = stack.pop();
            let isSelectedControl = componentIds.indexOf(item.id) >= 0;
            item.selected = isSelectedControl;
            (item.children || []).forEach(child => {
                if (typeof child == "string")
                    return true;
                stack.push(child);
            });
        }
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
        let children = pageData.children;
        componentIds.forEach(controlId => {
            this.removeComponentFrom(controlId, children);
        });
        this.setState({ pageData });
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
        let pageData = this.pageData;
        console.assert(pageData.children != null);
        let children = pageData.children;
        this.removeComponentFrom(componentId, children);
        this.appendComponent(parentId, component, childComponentIndex);
    }
    removeComponentFrom(controlId, collection) {
        let controlIndex = null;
        collection = collection || [];
        for (let i = 0; i < collection.length; i++) {
            let child = collection[i];
            if (typeof child == "string")
                continue;
            if (controlId == child.id) {
                controlIndex = i;
                break;
            }
        }
        if (controlIndex == null) {
            for (let i = 0; i < collection.length; i++) {
                let o = collection[i];
                if (typeof o == "string")
                    continue;
                let children = o.children || [];
                children.forEach(child => {
                    if (typeof child == "string")
                        return true;
                    let isRemoved = this.removeComponentFrom(controlId, children);
                    if (isRemoved) {
                        return true;
                    }
                });
            }
            return false;
        }
        if (controlIndex == 0) {
            collection.shift();
        }
        else if (controlIndex == collection.length - 1) {
            collection.pop();
        }
        else {
            collection.splice(controlIndex, 1);
        }
        return true;
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
            throw _errors__WEBPACK_IMPORTED_MODULE_1__["Errors"].pageDataIsNull();
        let componentDatas = PageDesigner.travelComponentData(pageData, (item) => item.id == componentId);
        return componentDatas[0];
    }
    onKeyDown(e) {
        const DELETE_KEY_CODE = 46;
        if (e.keyCode == DELETE_KEY_CODE) {
            if (this.selectedComponents.length == 0)
                return;
            this.removeComponents(this.selectedComponentIds);
        }
    }
    /**
     * 通过组件名称获取组件实例
     * @param typeName 组件名称
     */
    findComponetsByTypeName(typeName) {
        this.components[typeName];
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { tabIndex: 0, ref: e => this._element = this._element || e, onKeyDown: e => this.onKeyDown(e), className: this.props.className, style: this.props.style },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DesignerContext.Provider, { value: { designer: this } }, this.props.children));
    }
}
//# sourceMappingURL=page-designer.js.map

/***/ }),

/***/ "./out/prop-editor.js":
/*!****************************!*\
  !*** ./out/prop-editor.js ***!
  \****************************/
/*! exports provided: PropEditor, TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropEditor", function() { return PropEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class PropEditor extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
    }
    static dropdown(items, valueType) {
        return dropdown(items, valueType);
    }
    static textInput() {
        return TextInput;
    }
}
class TextInput extends PropEditor {
    render() {
        let { value } = this.props;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: 'form-control', value: value || '', onChange: e => {
                // this.setState({ value: e.target.value })
                this.props.updateComponentProp(e.target.value);
            } });
    }
}
function dropdown(items, valueType) {
    let itemsPromise;
    let textValues = [];
    if (valueType == null && Array.isArray(items)) {
        valueType = items.length > 0 && typeof items[0] == "number" ? "number" : "string";
        for (let i = 0; i < items.length; i++) {
            textValues[i] = { text: items[i], value: items[i] };
        }
    }
    else if (valueType == null) {
        valueType = "string";
        let propNames = Object.getOwnPropertyNames(items);
        for (let i = 0; i < propNames.length; i++) {
            textValues[i] = { text: items[propNames[i]], value: propNames[i] };
        }
    }
    else if (Array.isArray(items)) {
        textValues = items;
    }
    else {
        itemsPromise = items;
    }
    class Dropdown extends PropEditor {
        constructor(props) {
            super(props);
            this.state = {};
        }
        componentDidMount() {
            return __awaiter(this, void 0, void 0, function* () {
                if (itemsPromise) {
                    let items = yield itemsPromise;
                    this.setState({ items });
                }
            });
        }
        render() {
            let { items } = this.state;
            let { value } = this.props;
            items = items || textValues;
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: 'form-control', value: value == null ? "" : value, onChange: e => {
                    let textValue = e.target.value;
                    if (valueType == "number") {
                        let integerRegex = /^\d+$/;
                        let floatRegex = /^[+-]?\d+(\.\d+)?$/;
                        if (integerRegex.test(textValue))
                            value = parseInt(textValue);
                        else if (floatRegex.test(textValue))
                            value = parseFloat(textValue);
                        else
                            value = null;
                    }
                    else {
                        value = textValue;
                    }
                    this.props.updateComponentProp(value);
                } }, items.map(o => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { key: o.value, value: o.value }, o.text)));
        }
    }
    return Dropdown;
}
//# sourceMappingURL=prop-editor.js.map

/***/ }),

/***/ "./out/property-editor.js":
/*!********************************!*\
  !*** ./out/property-editor.js ***!
  \********************************/
/*! exports provided: defaultGroupName, PropertyEditor, ErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGroupName", function() { return defaultGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyEditor", function() { return PropertyEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return ErrorBoundary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./out/component.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "./out/errors.js");
/* harmony import */ var _page_designer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-designer */ "./out/page-designer.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ "./out/common.js");





let defaultGroupName = "";
class PropertyEditor extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this._element = null;
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
            let propEditorInfos = _component__WEBPACK_IMPORTED_MODULE_1__["Component"].getPropEditors(componentData);
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
            // controlProps = this.flatProps(controlProps)
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
            let editorProps = {
                value: value,
                editComponents: selectedComponents,
                updateComponentProp: (value) => {
                    let componentProps = selectedComponents.map(o => ({
                        componentId: o.id, propName: propEditorInfo.propName, value
                    }));
                    designer.updateComponentProps(componentProps);
                }
            };
            let editor = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](editorType, editorProps);
            editors.push({ prop: propEditorInfo.propName, displayName: propEditorInfo.displayName, editor, group: propEditorInfo.group });
        }
        return editors;
    }
    propValue(propName, props) {
        if (!propName)
            throw _errors__WEBPACK_IMPORTED_MODULE_2__["Errors"].argumentNull("propName");
        if (!props)
            throw _errors__WEBPACK_IMPORTED_MODULE_2__["Errors"].argumentNull("props");
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
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_page_designer__WEBPACK_IMPORTED_MODULE_3__["DesignerContext"].Consumer, null, args => {
            let designer = args.designer;
            if (designer == null)
                return null;
            let editors = this.getEditors(designer);
            if (editors.length == 0) {
                let empty = this.props.empty;
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-center" }, empty);
            }
            if (this.props.customRender) {
                let items = editors.map(o => Object.assign({ displayName: o.displayName }, o));
                let r = this.props.customRender(designer.selectedComponents, items);
                if (r != null) {
                    return r;
                }
            }
            let groupEditorsArray = [];
            for (let i = 0; i < editors.length; i++) {
                let group = editors[i].group || defaultGroupName;
                let groupEditors = groupEditorsArray.filter(o => o.group == group)[0];
                if (groupEditors == null) {
                    groupEditors = { group: editors[i].group, editors: [] };
                    groupEditorsArray.push(groupEditors);
                }
                groupEditors.editors.push({ prop: editors[i].prop, displayName: editors[i].displayName, editor: editors[i].editor });
            }
            return groupEditorsArray.map((g) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: g.group, className: "panel panel-default" },
                g.group ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "panel-heading" }, _common__WEBPACK_IMPORTED_MODULE_4__["groupDisplayNames"][g.group] || g.group) : null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "panel-body" }, g.editors.map((o, i) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: o.prop, className: "form-group clearfix" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, o.displayName),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "control" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ErrorBoundary, null, o.editor)))))));
        });
    }
    get element() {
        return this._element;
    }
}
PropertyEditor.contextType = _page_designer__WEBPACK_IMPORTED_MODULE_3__["DesignerContext"];
class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "error" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, error.message),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, error.stack));
        }
        return this.props.children;
    }
}
//# sourceMappingURL=property-editor.js.map

/***/ }),

/***/ "./out/style.js":
/*!**********************!*\
  !*** ./out/style.js ***!
  \**********************/
/*! exports provided: classNames, appendClassName, removeClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNames", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendClassName", function() { return appendClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClassName", function() { return removeClassName; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./out/errors.js");

let classNames = {
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
            .${classNames.componentSelected} {
                border: solid 1px #337ab7!important;
            }
            .${classNames.componentSelected} > :first-child {
                border-color: blue;
              }
              .${classNames.componentSelected} .resize_handle {
                position: absolute;
                height: 6px;
                width: 6px;
                border: 1px solid #89B;
                background: #9AC;
              }
              .${classNames.componentSelected} .move_handle {
                height: 12px;
                width: 12px;
                top: 6px;
                left: 8px;
                border: solid 1px black;
                position: relative;
                margin-top: -12px;
              }
              .${classNames.componentSelected} .NW,
              .${classNames.componentSelected} .NN,
              .${classNames.componentSelected} .NE {
                top: -4px;
              }
              .${classNames.componentSelected} .NE,
              .${classNames.componentSelected} .EE,
              .${classNames.componentSelected} .SE {
                right: -4px;
              }
              .${classNames.componentSelected} .SW,
              .${classNames.componentSelected}.SS,
              .${classNames.componentSelected} .SE {
                bottom: -4px;
              }
              .${classNames.componentSelected} .NW,
              .${classNames.componentSelected} .WW,
              .${classNames.componentSelected} .SW {
                left: -4px;
              }
              .${classNames.componentSelected} .SE,
              .${classNames.componentSelected} .NW {
                cursor: nw-resize;
              }
              .${classNames.componentSelected} .SW,
              .${classNames.componentSelected} .NE {
                cursor: ne-resize;
              }
              .${classNames.componentSelected} .NN,
              .${classNames.componentSelected} .SS {
                cursor: n-resize;
                left: 50%;
                margin-left: -4px;
              }
              .${classNames.componentSelected} .EE,
              .${classNames.componentSelected} .WW {
                cursor: e-resize;
                top: 50%;
                margin-top: -4px;
              }
            .${classNames.emptyTemplates} {
                padding:50px 0;
                text-align: center;
            }
            .${classNames.loadingTemplates} {
                padding:50px 0;
                text-align: center;
            }
            .${classNames.templateSelected} .page-view {
                border: solid 1px #337ab7!important;
            }
            .${classNames.templateDialog} .name {
                margin-top: -${templateDialog.nameHeight}px;
                height: ${templateDialog.nameHeight}px;
                font-size: ${templateDialog.fontSize}px;
                text-align: center;
                padding-top: 6px;
                background-color: black;
                opacity: 0.5;
            }
            .${classNames.templateDialog} .name span {
                color: white;
            }
            .${classNames.emptyDocument} {
                text-align: center;
                padding: 100px 0;
            }
            .${classNames.component} > .NW,
            .${classNames.component} > .NN,
            .${classNames.component} > .NE,
            .${classNames.component} > .EE,
            .${classNames.component} > .SE,
            .${classNames.component} > .SW,
            .${classNames.component} > .SS,
            .${classNames.component} > .WW {
                display: none;
            }
            .${classNames.componentSelected}.component > .NW,
            .${classNames.componentSelected}.component > .NN,
            .${classNames.componentSelected}.component > .NE,
            .${classNames.componentSelected}.component > .EE,
            .${classNames.componentSelected}.component > .SE,
            .${classNames.componentSelected}.component > .SW,
            .${classNames.componentSelected}.component > .SS,
            .${classNames.componentSelected}.component > .WW {
                display: block;
            }
            .${classNames.placeholder} {
                min-height: 40px;
                width: 100%;
            }
            .${classNames.placeholder}.active,
            .${classNames.componentWrapper}.active,
            .${classNames.componentWrapper}.${classNames.componentSelected}.active {
                border: 1px solid green;
            }
            .${classNames.editorPanel} {
                width: 300px;
                background: white;
                color: black;
                margin: 0;
                font-size: 14px;
                z-index: 100;
                overflow: auto;
            }
            .${classNames.editorPanel} label {
                width: 80px;
                float: left;
                padding: 4px;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .${classNames.editorPanel} .control {
                padding-left: 90px;
            }
            .${classNames.editorPanel} .empty {
                padding-top: 200px;
                text-align: center;
            }
            .${classNames.designer} .error,
            .${classNames.editorPanel} .error {
                color: red;
            }
            .${classNames.componentPanel} {
                background: white;
                color: black;
                font-size: 14px;
                z-index: 100;
                list-style: none;
                padding: 0;
                text-align: center
            }
            .${classNames.componentPanel} .panel-heading {
                text-align: center;
            }
            .${classNames.componentPanel} li {
                text-align: center;
                padding: 8px;
            }
            .${classNames.componentWrapper}.${classNames.moveDown} {
         
            }
        `;
if (document.head != null) {
    document.head.appendChild(element);
}
function appendClassName(element, addonClassName) {
    if (element == null)
        throw _errors__WEBPACK_IMPORTED_MODULE_0__["Errors"].argumentNull('element');
    if (!addonClassName)
        throw _errors__WEBPACK_IMPORTED_MODULE_0__["Errors"].argumentNull('addonClassName');
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
//# sourceMappingURL=style.js.map

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