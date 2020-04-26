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
/******/ 	return __webpack_require__(__webpack_require__.s = "./out-es5/index.js");
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
exports.guid = guid;
exports.Callback = exports.groupDisplayNames = exports.proptDisplayNames = exports.constants = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var constants = {
  componentsDir: 'components',
  connectorElementClassName: 'component-container',
  componentTypeName: 'data-component-name',
  componentData: 'component-data',
  componentPosition: "component-position"
};
exports.constants = constants;
var proptDisplayNames = {};
exports.proptDisplayNames = proptDisplayNames;
var groupDisplayNames = {};
exports.groupDisplayNames = groupDisplayNames;

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var Callback =
/*#__PURE__*/
function () {
  function Callback() {
    _classCallCheck(this, Callback);

    this.funcs = new Array();
  }

  _createClass(Callback, [{
    key: "add",
    value: function add(func) {
      this.funcs.push(func);
    }
  }, {
    key: "remove",
    value: function remove(func) {
      this.funcs = this.funcs.filter(function (o) {
        return o != func;
      });
    }
  }, {
    key: "fire",
    value: function fire(args) {
      this.funcs.forEach(function (o) {
        return o(args);
      });
    }
  }], [{
    key: "create",
    value: function create() {
      return new Callback();
    }
  }]);

  return Callback;
}();

exports.Callback = Callback;
//# sourceMappingURL=common.js.map


/***/ }),

/***/ "./out-es5/component.js":
/*!******************************!*\
  !*** ./out-es5/component.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var _propertyEditor = __webpack_require__(/*! ./property-editor */ "./out-es5/property-editor.js");

var _maishuJueyingCore = __webpack_require__(/*! maishu-jueying-core */ "maishu-jueying-core");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// type CreateElementContext = { components: React.Component[], componentTypes: string[] };
// let defaultGroup: GroupedEditor["group"] = { prop: "", displayName: "" };
var Component =
/*#__PURE__*/
function () {
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
          displayName = options.displayName;
      group = group || _propertyEditor.defaultGroupName;
      propName = propName || "";
      displayName = displayName || propName; // 属性可能为导航属性,例如 style.width

      var propNames = propName.split('.');
      var className = typeof componentType == 'string' ? componentType : componentType.prototype.typename || componentType.name;
      Component.componentPropEditorDisplay["".concat(className, ".").concat(propName)] = editorDisplay;
      var classProps = Component.componentPropEditors[className] = Component.componentPropEditors[className] || [];

      for (var i = 0; i < classProps.length; i++) {
        var propName1 = classProps[i].propName; //classProps[i].propNames.join('.')

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
        group: group
      });
    } // static componentTypes = {} as { [key: string]: React.ComponentClass<any> | string }

  }, {
    key: "register",
    value: function register(typeName, componentType) {
      // if (componentType == null && typeof componentName == 'function') {
      //     componentType = componentName;
      //     componentName = (componentType as React.ComponentClass<any>).name;
      //     (componentType as any)['componentName'] = componentName;
      // }
      // if (!componentName)
      //     throw Errors.argumentNull('componentName');
      // if (!componentType)
      //     throw Errors.argumentNull('componentType');
      return (0, _maishuJueyingCore.registerComponent)(typeName, componentType);
    }
  }]);

  return Component;
}(); //==========================================
// 用于创建 React 的 React.Fragment 


exports.Component = Component;
Component.Fragment = ""; //==========================================

Component.componentPropEditors = {};
Component.componentPropEditorDisplay = {};
//# sourceMappingURL=component.js.map


/***/ }),

/***/ "./out-es5/editor-panel.js":
/*!*********************************!*\
  !*** ./out-es5/editor-panel.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorPanel = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propertyEditor = __webpack_require__(/*! ./property-editor */ "./out-es5/property-editor.js");

var _style = __webpack_require__(/*! ./style */ "./out-es5/style.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EditorPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditorPanel, _React$Component);

  function EditorPanel(props) {
    var _this;

    _classCallCheck(this, EditorPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditorPanel).call(this, props));
    _this.state = {
      componentDatas: []
    };
    return _this;
  }

  _createClass(EditorPanel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var empty = this.props.empty;
      empty = empty || React.createElement("div", {
        className: "empty"
      }, "\u6682\u65E0\u53EF\u7528\u7684\u5C5E\u6027");
      return React.createElement("div", {
        className: "".concat(_style.classNames.editorPanel, " ").concat(this.props.className || ""),
        ref: function ref(e) {
          return _this2.element = e || _this2.element;
        }
      }, React.createElement(_propertyEditor.PropertyEditor, {
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

/***/ "./out-es5/errors.js":
/*!***************************!*\
  !*** ./out-es5/errors.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Errors = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors =
/*#__PURE__*/
function () {
  function Errors() {
    _classCallCheck(this, Errors);
  }

  _createClass(Errors, null, [{
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
  }]);

  return Errors;
}();

exports.Errors = Errors;
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
Object.defineProperty(exports, "groupDisplayNames", {
  enumerable: true,
  get: function get() {
    return _common.groupDisplayNames;
  }
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function get() {
    return _component.Component;
  }
});
Object.defineProperty(exports, "EditorPanel", {
  enumerable: true,
  get: function get() {
    return _editorPanel.EditorPanel;
  }
});
Object.defineProperty(exports, "PageDesigner", {
  enumerable: true,
  get: function get() {
    return _pageDesigner.PageDesigner;
  }
});
Object.defineProperty(exports, "DesignerContext", {
  enumerable: true,
  get: function get() {
    return _pageDesigner.DesignerContext;
  }
});
Object.defineProperty(exports, "PropEditor", {
  enumerable: true,
  get: function get() {
    return _propEditor.PropEditor;
  }
});
Object.defineProperty(exports, "TextInput", {
  enumerable: true,
  get: function get() {
    return _propEditor.TextInput;
  }
});
Object.defineProperty(exports, "classNames", {
  enumerable: true,
  get: function get() {
    return _style.classNames;
  }
});

var _common = __webpack_require__(/*! ./common */ "./out-es5/common.js");

var _component = __webpack_require__(/*! ./component */ "./out-es5/component.js");

var _editorPanel = __webpack_require__(/*! ./editor-panel */ "./out-es5/editor-panel.js");

var _pageDesigner = __webpack_require__(/*! ./page-designer */ "./out-es5/page-designer.js");

var _propEditor = __webpack_require__(/*! ./prop-editor */ "./out-es5/prop-editor.js");

var _style = __webpack_require__(/*! ./style */ "./out-es5/style.js");
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./out-es5/page-designer.js":
/*!**********************************!*\
  !*** ./out-es5/page-designer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageDesigner = exports.DesignerContext = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _errors = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

var _maishuToolkit = __webpack_require__(/*! maishu-toolkit */ "./node_modules/maishu-toolkit/out/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DesignerContext = React.createContext({
  designer: null
});
exports.DesignerContext = DesignerContext;

var PageDesigner =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageDesigner, _React$Component);

  function PageDesigner(props) {
    var _this;

    _classCallCheck(this, PageDesigner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageDesigner).call(this, props));
    _this.components = {};
    var pageData = _this.props.pageData;

    _this.initPageData(pageData);

    _this.state = {
      pageData: pageData
    };
    return _this;
  }

  _createClass(PageDesigner, [{
    key: "setComponetRefProp",
    value: function setComponetRefProp(pageData) {
      var _this2 = this;

      //=========================================================
      // 记录当前 pageData 控件 ID
      var componentIds = {}; //=========================================================

      PageDesigner.travelComponentData(pageData).forEach(function (item) {
        console.assert(item.props != null && item.id != null);
        componentIds[item.type] = componentIds[item.type] || [];
        componentIds[item.type].push(item.id);
        var itemRef = item.props.ref;

        item.props.ref = function (e) {
          if (e != null) {
            _this2.components[item.type] = _this2.components[item.type] || {};
            _this2.components[item.type][item.id] = e;
          }

          if (typeof itemRef == "function") itemRef(e);
        };
      });
    }
  }, {
    key: "initPageData",
    value: function initPageData(pageData) {
      if (pageData == null) {
        return;
      }

      pageData.children = pageData.children || []; // PageDesigner.nameComponent(pageData);

      this.fillComponent(pageData);
      this.setComponetRefProp(pageData);
    }
    /**
    * 对组件及其子控件进行命名
    * @param component
    */

  }, {
    key: "fillComponent",
    value: function fillComponent(component) {
      var _this3 = this;

      var namedComponents = {};

      if (!component.name) {
        var num = 0;
        var name;

        do {
          num = num + 1;
          name = "".concat(component.type).concat(num);
        } while (namedComponents[name]);

        namedComponents[name] = component;
        component.name = name;
      }

      if (!component.id) component.id = (0, _maishuToolkit.guid)();
      component.children = component.children || [];

      if (!component.children || component.children.length == 0) {
        return;
      }

      component.children.forEach(function (child) {
        if (typeof child == "string") return true;

        _this3.fillComponent(child);
      });
    }
  }, {
    key: "allComponents",
    value: function allComponents() {
      var _this4 = this;

      var r = [];

      var _loop = function _loop(key) {
        var ids = Object.getOwnPropertyNames(_this4.components[key]);
        r.push.apply(r, _toConsumableArray(ids.map(function (id) {
          return _this4.components[key][id];
        })));
      };

      for (var key in this.components) {
        _loop(key);
      }

      return r;
    }
    /** 页面数据 */

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
     * @param parentId 父控件编号
     * @param componentData 控件数据
     * @param componentIndex 新添加组件在子组件中的次序
     */

  }, {
    key: "appendComponent",
    value: function appendComponent(parentId, componentData, componentIndex) {
      if (!parentId) throw _errors.Errors.argumentNull('parentId');
      if (!componentData) throw _errors.Errors.argumentNull('childComponent');
      this.initPageData(componentData);
      var parentControl = this.findComponentData(parentId);
      if (parentControl == null) throw new Error('Parent is not exists');
      console.assert(parentControl != null);
      parentControl.children = parentControl.children || [];

      if (componentIndex != null) {
        parentControl.children.splice(componentIndex, 0, componentData);
      } else {
        parentControl.children.push(componentData);
      }

      this.selectComponents(componentData.id);
    }
    /**
     * 选择指定的控件
     * @param control 指定的控件
     */

  }, {
    key: "selectComponent",
    value: function selectComponent(componentIds) {
      this.selectComponents(componentIds); //====================================================
      // 设置焦点，以便获取键盘事件

      if (this._element) this._element.focus(); //====================================================
    }
    /**
     * 选择指定的控件，一个或多个
     * @param control 指定的控件
     */

  }, {
    key: "selectComponents",
    value: function selectComponents(componentIds) {
      if (typeof componentIds == 'string') componentIds = [componentIds];
      var stack = [];
      stack.push(this.pageData);

      while (stack.length > 0) {
        var item = stack.pop();
        var isSelectedControl = componentIds.indexOf(item.id) >= 0;
        item.selected = isSelectedControl;
        (item.children || []).forEach(function (child) {
          if (typeof child == "string") return true;
          stack.push(child);
        });
      }

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
      var _this5 = this;

      var pageData = this.pageData;
      if (!pageData || !pageData.children || pageData.children.length == 0) return;
      var children = pageData.children;
      componentIds.forEach(function (controlId) {
        _this5.removeComponentFrom(controlId, children);
      });
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
      var pageData = this.pageData;
      console.assert(pageData.children != null);
      var children = pageData.children;
      this.removeComponentFrom(componentId, children);
      this.appendComponent(parentId, component, childComponentIndex);
    }
  }, {
    key: "removeComponentFrom",
    value: function removeComponentFrom(controlId, collection) {
      var _this6 = this;

      var controlIndex = null;
      collection = collection || [];

      for (var i = 0; i < collection.length; i++) {
        var child = collection[i];
        if (typeof child == "string") continue;

        if (controlId == child.id) {
          controlIndex = i;
          break;
        }
      }

      if (controlIndex == null) {
        var _loop2 = function _loop2(_i2) {
          var o = collection[_i2];
          if (typeof o == "string") return "continue";
          var children = o.children || [];
          children.forEach(function (child) {
            if (typeof child == "string") return true;

            var isRemoved = _this6.removeComponentFrom(controlId, children);

            if (isRemoved) {
              return true;
            }
          });
        };

        for (var _i2 = 0; _i2 < collection.length; _i2++) {
          var _ret = _loop2(_i2);

          if (_ret === "continue") continue;
        }

        return false;
      }

      if (controlIndex == 0) {
        collection.shift();
      } else if (controlIndex == collection.length - 1) {
        collection.pop();
      } else {
        collection.splice(controlIndex, 1);
      }

      return true;
    }
  }, {
    key: "findComponentData",

    /**
     * 通过组件编号获取组件的数据
     * @param componentId 组件编号
     */
    value: function findComponentData(componentId) {
      var pageData = this.state.pageData;
      if (!pageData) throw _errors.Errors.pageDataIsNull();
      var componentDatas = PageDesigner.travelComponentData(pageData, function (item) {
        return item.id == componentId;
      });
      return componentDatas[0];
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
    /**
     * 通过组件名称获取组件实例
     * @param typeName 组件名称
     */

  }, {
    key: "findComponetsByTypeName",
    value: function findComponetsByTypeName(typeName) {
      this.components[typeName];
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      return React.createElement("div", {
        tabIndex: 0,
        ref: function ref(e) {
          return _this7._element = _this7._element || e;
        },
        onKeyDown: function onKeyDown(e) {
          return _this7.onKeyDown(e);
        },
        className: this.props.className,
        style: this.props.style
      }, React.createElement(DesignerContext.Provider, {
        value: {
          designer: this
        }
      }, this.props.children));
    }
  }, {
    key: "pageData",
    get: function get() {
      return this.state.pageData;
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
      var arr = new Array();
      var stack = new Array();
      stack.push(this.pageData);

      while (stack.length > 0) {
        var item = stack.pop();
        if (item.props != null && item.selected == true) arr.push(item);
        (item.children || []).forEach(function (child) {
          if (typeof child == "string") return true;
          stack.push(child);
        });
      }

      return arr;
    }
  }, {
    key: "element",
    get: function get() {
      return this._element;
    }
  }], [{
    key: "travelComponentData",
    value: function travelComponentData(pageData, filter) {
      var stack = new Array();
      stack.push(pageData);
      var r = [];

      filter = filter || function () {
        return true;
      };

      while (stack.length > 0) {
        var item = stack.shift();

        if (filter(item)) {
          r.push(item);
        } //===============================================
        // 子元素有可能为字符串, 过滤出对象


        var children = (item.children || []).filter(function (o) {
          return _typeof(o) == 'object';
        }); //===============================================

        stack.push.apply(stack, _toConsumableArray(children));
      }

      return r;
    }
  }]);

  return PageDesigner;
}(React.Component);

exports.PageDesigner = PageDesigner;
//# sourceMappingURL=page-designer.js.map


/***/ }),

/***/ "./out-es5/prop-editor.js":
/*!********************************!*\
  !*** ./out-es5/prop-editor.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = exports.PropEditor = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var PropEditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PropEditor, _React$Component);

  function PropEditor(props) {
    _classCallCheck(this, PropEditor);

    return _possibleConstructorReturn(this, _getPrototypeOf(PropEditor).call(this, props));
  }

  _createClass(PropEditor, null, [{
    key: "dropdown",
    value: function dropdown(items, valueType) {
      return _dropdown(items, valueType);
    }
  }, {
    key: "textInput",
    value: function textInput() {
      return TextInput;
    }
  }]);

  return PropEditor;
}(React.Component);

exports.PropEditor = PropEditor;

var TextInput =
/*#__PURE__*/
function (_PropEditor) {
  _inherits(TextInput, _PropEditor);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextInput).apply(this, arguments));
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      var _this = this;

      var value = this.props.value;
      return React.createElement("input", {
        className: 'form-control',
        value: value || '',
        onChange: function onChange(e) {
          // this.setState({ value: e.target.value })
          _this.props.updateComponentProp(e.target.value);
        }
      });
    }
  }]);

  return TextInput;
}(PropEditor);

exports.TextInput = TextInput;

function _dropdown(items, valueType) {
  var itemsPromise;
  var textValues = [];

  if (valueType == null && Array.isArray(items)) {
    valueType = items.length > 0 && typeof items[0] == "number" ? "number" : "string";

    for (var i = 0; i < items.length; i++) {
      textValues[i] = {
        text: items[i],
        value: items[i]
      };
    }
  } else if (valueType == null) {
    valueType = "string";
    var propNames = Object.getOwnPropertyNames(items);

    for (var _i = 0; _i < propNames.length; _i++) {
      textValues[_i] = {
        text: items[propNames[_i]],
        value: propNames[_i]
      };
    }
  } else if (Array.isArray(items)) {
    textValues = items;
  } else {
    itemsPromise = items;
  }

  var Dropdown =
  /*#__PURE__*/
  function (_PropEditor2) {
    _inherits(Dropdown, _PropEditor2);

    function Dropdown(props) {
      var _this2;

      _classCallCheck(this, Dropdown);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
      _this2.state = {};
      return _this2;
    }

    _createClass(Dropdown, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        return __awaiter(this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var _items;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!itemsPromise) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 3;
                  return itemsPromise;

                case 3:
                  _items = _context.sent;
                  this.setState({
                    items: _items
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var items = this.state.items;
        var value = this.props.value;
        items = items || textValues;
        return React.createElement("select", {
          className: 'form-control',
          value: value == null ? "" : value,
          onChange: function onChange(e) {
            var textValue = e.target.value;

            if (valueType == "number") {
              var integerRegex = /^\d+$/;
              var floatRegex = /^[+-]?\d+(\.\d+)?$/;
              if (integerRegex.test(textValue)) value = parseInt(textValue);else if (floatRegex.test(textValue)) value = parseFloat(textValue);else value = null;
            } else {
              value = textValue;
            }

            _this3.props.updateComponentProp(value);
          }
        }, items.map(function (o) {
          return React.createElement("option", {
            key: o.value,
            value: o.value
          }, o.text);
        }));
      }
    }]);

    return Dropdown;
  }(PropEditor);

  return Dropdown;
}
//# sourceMappingURL=prop-editor.js.map


/***/ }),

/***/ "./out-es5/property-editor.js":
/*!************************************!*\
  !*** ./out-es5/property-editor.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorBoundary = exports.PropertyEditor = exports.defaultGroupName = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _component = __webpack_require__(/*! ./component */ "./out-es5/component.js");

var _errors = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

var _pageDesigner = __webpack_require__(/*! ./page-designer */ "./out-es5/page-designer.js");

var _common = __webpack_require__(/*! ./common */ "./out-es5/common.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var defaultGroupName = "";
exports.defaultGroupName = defaultGroupName;

var PropertyEditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PropertyEditor, _React$Component);

  function PropertyEditor(props) {
    var _this;

    _classCallCheck(this, PropertyEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyEditor).call(this, props));
    _this._element = null;
    _this.state = {};
    return _this;
  }

  _createClass(PropertyEditor, [{
    key: "getEditors",
    value: function getEditors(designer) {
      var _this2 = this;

      if (designer == null) {
        return [];
      } // 各个控件相同的编辑器


      var commonPropEditorInfos = [];
      var selectedComponents = designer.selectedComponents;

      var _loop = function _loop(i) {
        var componentData = selectedComponents[i];

        var propEditorInfos = _component.Component.getPropEditors(componentData);

        if (i == 0) {
          commonPropEditorInfos = propEditorInfos || [];
        } else {
          var items = [];
          commonPropEditorInfos.forEach(function (propInfo1) {
            propEditorInfos.forEach(function (propInfo2) {
              var propName1 = propInfo1.propName; //propInfo1.propNames.join('.')

              var propName2 = propInfo2.propName; //propInfo2.propNames.join('.')

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
      } // 各个控件相同的属性值


      var commonFlatProps = {};

      for (var i = 0; i < selectedComponents.length; i++) {
        var control = selectedComponents[i];
        var controlProps = Object.assign({}, control.props);
        delete controlProps.children; // controlProps = this.flatProps(controlProps)

        if (i == 0) {
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

      var _loop2 = function _loop2(_i) {
        var propEditorInfo = commonPropEditorInfos[_i];
        var propName = propEditorInfo.propName;
        ;
        var editorType = propEditorInfo.editorType;

        var value = _this2.propValue(propName, commonFlatProps);

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

      for (var _i = 0; _i < commonPropEditorInfos.length; _i++) {
        _loop2(_i);
      }

      return editors;
    }
  }, {
    key: "propValue",
    value: function propValue(propName, props) {
      if (!propName) throw _errors.Errors.argumentNull("propName");
      if (!props) throw _errors.Errors.argumentNull("props");
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

      return React.createElement(_pageDesigner.DesignerContext.Consumer, null, function (args) {
        var designer = args.designer;
        if (designer == null) return null;

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
            return r;
          }
        }

        var groupEditorsArray = [];

        var _loop3 = function _loop3(i) {
          var group = editors[i].group || defaultGroupName;
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
            className: "panel panel-default"
          }, g.group ? React.createElement("div", {
            className: "panel-heading"
          }, _common.groupDisplayNames[g.group] || g.group) : null, React.createElement("div", {
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
  }]);

  return PropertyEditor;
}(React.Component);

exports.PropertyEditor = PropertyEditor;
PropertyEditor.contextType = _pageDesigner.DesignerContext;

var ErrorBoundary =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ErrorBoundary, _React$Component2);

  function ErrorBoundary(props) {
    var _this4;

    _classCallCheck(this, ErrorBoundary);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));
    _this4.state = {};
    return _this4;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({
        error: error
      }); // You can also log the error to an error reporting service
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
exports.appendClassName = appendClassName;
exports.removeClassName = removeClassName;
exports.classNames = void 0;

var _errors = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

var classNames = {
  componentSelected: "component-selected",
  emptyTemplates: "empty-templates",
  loadingTemplates: "loading-templates",
  templateSelected: "template-selected",
  templateDialog: "template-dialog",
  emptyDocument: "empty-document",
  component: 'component',
  componentWrapper: 'component-wrapper',
  componentPanel: 'component-panel',
  componentIcon: 'component-icon',
  placeholder: 'placeholder',
  editorPanel: 'editor-panel',
  designer: 'designer',
  moveDown: 'move-down'
};
exports.classNames = classNames;
var templateDialog = {
  nameHeight: 40,
  fontSize: 22
};
var element = document.createElement('style');
element.type = 'text/css';
element.setAttribute("data-name", "jueying");
element.innerHTML = "\n            .".concat(classNames.componentSelected, " {\n                border: solid 1px #337ab7!important;\n            }\n            .").concat(classNames.componentSelected, " > :first-child {\n                border-color: blue;\n              }\n              .").concat(classNames.componentSelected, " .resize_handle {\n                position: absolute;\n                height: 6px;\n                width: 6px;\n                border: 1px solid #89B;\n                background: #9AC;\n              }\n              .").concat(classNames.componentSelected, " .move_handle {\n                height: 12px;\n                width: 12px;\n                top: 6px;\n                left: 8px;\n                border: solid 1px black;\n                position: relative;\n                margin-top: -12px;\n              }\n              .").concat(classNames.componentSelected, " .NW,\n              .").concat(classNames.componentSelected, " .NN,\n              .").concat(classNames.componentSelected, " .NE {\n                top: -4px;\n              }\n              .").concat(classNames.componentSelected, " .NE,\n              .").concat(classNames.componentSelected, " .EE,\n              .").concat(classNames.componentSelected, " .SE {\n                right: -4px;\n              }\n              .").concat(classNames.componentSelected, " .SW,\n              .").concat(classNames.componentSelected, ".SS,\n              .").concat(classNames.componentSelected, " .SE {\n                bottom: -4px;\n              }\n              .").concat(classNames.componentSelected, " .NW,\n              .").concat(classNames.componentSelected, " .WW,\n              .").concat(classNames.componentSelected, " .SW {\n                left: -4px;\n              }\n              .").concat(classNames.componentSelected, " .SE,\n              .").concat(classNames.componentSelected, " .NW {\n                cursor: nw-resize;\n              }\n              .").concat(classNames.componentSelected, " .SW,\n              .").concat(classNames.componentSelected, " .NE {\n                cursor: ne-resize;\n              }\n              .").concat(classNames.componentSelected, " .NN,\n              .").concat(classNames.componentSelected, " .SS {\n                cursor: n-resize;\n                left: 50%;\n                margin-left: -4px;\n              }\n              .").concat(classNames.componentSelected, " .EE,\n              .").concat(classNames.componentSelected, " .WW {\n                cursor: e-resize;\n                top: 50%;\n                margin-top: -4px;\n              }\n            .").concat(classNames.emptyTemplates, " {\n                padding:50px 0;\n                text-align: center;\n            }\n            .").concat(classNames.loadingTemplates, " {\n                padding:50px 0;\n                text-align: center;\n            }\n            .").concat(classNames.templateSelected, " .page-view {\n                border: solid 1px #337ab7!important;\n            }\n            .").concat(classNames.templateDialog, " .name {\n                margin-top: -").concat(templateDialog.nameHeight, "px;\n                height: ").concat(templateDialog.nameHeight, "px;\n                font-size: ").concat(templateDialog.fontSize, "px;\n                text-align: center;\n                padding-top: 6px;\n                background-color: black;\n                opacity: 0.5;\n            }\n            .").concat(classNames.templateDialog, " .name span {\n                color: white;\n            }\n            .").concat(classNames.emptyDocument, " {\n                text-align: center;\n                padding: 100px 0;\n            }\n            .").concat(classNames.component, " > .NW,\n            .").concat(classNames.component, " > .NN,\n            .").concat(classNames.component, " > .NE,\n            .").concat(classNames.component, " > .EE,\n            .").concat(classNames.component, " > .SE,\n            .").concat(classNames.component, " > .SW,\n            .").concat(classNames.component, " > .SS,\n            .").concat(classNames.component, " > .WW {\n                display: none;\n            }\n            .").concat(classNames.componentSelected, ".component > .NW,\n            .").concat(classNames.componentSelected, ".component > .NN,\n            .").concat(classNames.componentSelected, ".component > .NE,\n            .").concat(classNames.componentSelected, ".component > .EE,\n            .").concat(classNames.componentSelected, ".component > .SE,\n            .").concat(classNames.componentSelected, ".component > .SW,\n            .").concat(classNames.componentSelected, ".component > .SS,\n            .").concat(classNames.componentSelected, ".component > .WW {\n                display: block;\n            }\n            .").concat(classNames.placeholder, " {\n                min-height: 40px;\n                width: 100%;\n            }\n            .").concat(classNames.placeholder, ".active,\n            .").concat(classNames.componentWrapper, ".active,\n            .").concat(classNames.componentWrapper, ".").concat(classNames.componentSelected, ".active {\n                border: 1px solid green;\n            }\n            .").concat(classNames.editorPanel, " {\n                width: 300px;\n                background: white;\n                color: black;\n                margin: 0;\n                font-size: 14px;\n                z-index: 100;\n                overflow: auto;\n            }\n            .").concat(classNames.editorPanel, " label {\n                width: 80px;\n                float: left;\n                padding: 4px;\n                text-overflow: ellipsis;\n                overflow: hidden;\n            }\n            .").concat(classNames.editorPanel, " .control {\n                padding-left: 90px;\n            }\n            .").concat(classNames.editorPanel, " .empty {\n                padding-top: 200px;\n                text-align: center;\n            }\n            .").concat(classNames.designer, " .error,\n            .").concat(classNames.editorPanel, " .error {\n                color: red;\n            }\n            .").concat(classNames.componentPanel, " {\n                background: white;\n                color: black;\n                font-size: 14px;\n                z-index: 100;\n                list-style: none;\n                padding: 0;\n                text-align: center\n            }\n            .").concat(classNames.componentPanel, " .panel-heading {\n                text-align: center;\n            }\n            .").concat(classNames.componentPanel, " li {\n                text-align: center;\n                padding: 8px;\n            }\n            .").concat(classNames.componentWrapper, ".").concat(classNames.moveDown, " {\n         \n            }\n        ");

if (document.head != null) {
  document.head.appendChild(element);
}

function appendClassName(element, addonClassName) {
  if (element == null) throw _errors.Errors.argumentNull('element');
  if (!addonClassName) throw _errors.Errors.argumentNull('addonClassName');
  var sourceClassName;
  if (typeof element == 'string') sourceClassName = element;else sourceClassName = element.className;
  sourceClassName = sourceClassName || '';
  console.assert(addonClassName != null);
  if (sourceClassName.indexOf(addonClassName) >= 0) return sourceClassName;
  var className = "".concat(sourceClassName, " ").concat(addonClassName);
  if (typeof element != 'string') element.className = className;
  return className;
}

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
//# sourceMappingURL=index.es5.js.map