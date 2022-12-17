/*!
 * 
 *  maishu-jueying v4.0.4
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

/***/ "./node_modules/maishu-toolkit/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/maishu-toolkit/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
 * ~
 *  maishu-toolkit v1.12.5
 *  https://github.com/ansiboy/toolkit
 *  
 *  Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 *  Licensed under the MIT License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(typeof window === 'undefined' ? global : window, function() {
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

/***/ "./out/assign-deep.js":
/*!****************************!*\
  !*** ./out/assign-deep.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.withOptions = exports.objectAssignDeepInto = exports.objectAssignDeep = void 0;
/*
 * OBJECT ASSIGN DEEP
 * Allows deep cloning of plain objects that contain primitives, nested plain objects, or nested plain arrays.
 */
/*
 * A unified way of returning a string that describes the type of the given variable.
 */
function getTypeOf(input) {
    if (input === null) {
        return 'null';
    }
    else if (typeof input === 'undefined') {
        return 'undefined';
    }
    else if (typeof input === 'object') {
        return (Array.isArray(input) ? 'array' : 'object');
    }
    return typeof input;
}
/*
 * Branching logic which calls the correct function to clone the given value base on its type.
 */
function cloneValue(value) {
    // The value is an object so lets clone it.
    if (getTypeOf(value) === 'object') {
        return quickCloneObject(value);
    }
    // The value is an array so lets clone it.
    else if (getTypeOf(value) === 'array') {
        return quickCloneArray(value);
    }
    // Any other value can just be copied.
    return value;
}
/*
 * Enumerates the given array and returns a new array, with each of its values cloned (i.e. references broken).
 */
function quickCloneArray(input) {
    return input.map(cloneValue);
}
/*
 * Enumerates the properties of the given object (ignoring the prototype chain) and returns a new object, with each of
 * its values cloned (i.e. references broken).
 */
function quickCloneObject(input) {
    const output = {};
    for (const key in input) {
        if (!input.hasOwnProperty(key)) {
            continue;
        }
        output[key] = cloneValue(input[key]);
    }
    return output;
}
/*
 * Does the actual deep merging.
 */
function executeDeepMerge(target, _objects = [], _options = {}) {
    const options = {
        arrayBehaviour: _options.arrayBehaviour || 'replace', // Can be "merge" or "replace".
    };
    // Ensure we have actual objects for each.
    const objects = _objects.map(object => object || {});
    const output = target || {};
    // Enumerate the objects and their keys.
    for (let oindex = 0; oindex < objects.length; oindex++) {
        const object = objects[oindex];
        const keys = Object.keys(object);
        for (let kindex = 0; kindex < keys.length; kindex++) {
            const key = keys[kindex];
            const value = object[key];
            const type = getTypeOf(value);
            const existingValueType = getTypeOf(output[key]);
            if (type === 'object') {
                if (existingValueType !== 'undefined') {
                    const existingValue = (existingValueType === 'object' ? output[key] : {});
                    output[key] = executeDeepMerge({}, [existingValue, quickCloneObject(value)], options);
                }
                else {
                    output[key] = quickCloneObject(value);
                }
            }
            else if (type === 'array') {
                if (existingValueType === 'array') {
                    const newValue = quickCloneArray(value);
                    output[key] = (options.arrayBehaviour === 'merge' ? output[key].concat(newValue) : newValue);
                }
                else {
                    output[key] = quickCloneArray(value);
                }
            }
            else {
                output[key] = value;
            }
        }
    }
    return output;
}
/*
 * Merge all the supplied objects into the target object, breaking all references, including those of nested objects
 * and arrays, and even objects nested inside arrays. The first parameter is not mutated unlike Object.assign().
 * Properties in later objects will always overwrite.
 */
function objectAssignDeep(target, ...objects) {
    return executeDeepMerge(target, objects);
}
exports.objectAssignDeep = objectAssignDeep;
;
/*
 * Same as objectAssignDeep() except it doesn't mutate the target object and returns an entirely new object.
 */
function objectAssignDeepInto(...objects) {
    return executeDeepMerge({}, objects);
}
exports.objectAssignDeepInto = objectAssignDeepInto;
;
/*
 * Allows an options object to be passed in to customise the behaviour of the function.
 */
let withOptions = function objectAssignDeepInto(target, objects, options) {
    return executeDeepMerge(target, objects, options);
};
exports.withOptions = withOptions;


/***/ }),

/***/ "./out/callback.js":
/*!*************************!*\
  !*** ./out/callback.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Callback = void 0;
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


/***/ }),

/***/ "./out/data.js":
/*!*********************!*\
  !*** ./out/data.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourceSelectArguments = exports.DataSource = void 0;
const errors_js_1 = __webpack_require__(/*! ./errors.js */ "./out/errors.js");
const callback_js_1 = __webpack_require__(/*! ./callback.js */ "./out/callback.js");
let errors = Object.assign(errors_js_1.errors, {
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
    },
    queryResultTypeError() {
        let msg = `Query result type error.`;
        return new Error(msg);
    }
});
class DataSource {
    constructor(args) {
        this.inserting = new callback_js_1.Callback(); //callbacks1<DataSource<T>, T, number>();
        this.inserted = new callback_js_1.Callback();
        this.deleting = new callback_js_1.Callback(); //callbacks<DataSource<T>, T>();
        this.deleted = new callback_js_1.Callback(); //callbacks<DataSource<T>, T>();
        this.updating = new callback_js_1.Callback();
        this.updated = new callback_js_1.Callback();
        this.selecting = new callback_js_1.Callback();
        this.selected = new callback_js_1.Callback(); //callbacks<DataSource<T>, DataSourceSelectResult<T>>();
        this.error = new callback_js_1.Callback(); //callbacks<this, DataSourceError>();
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
            this.selected.fire({ sender: this, selectResult: { totalRowCount, dataItems }, selectArguments: args });
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
exports.DataSource = DataSource;
class DataSourceSelectArguments {
    constructor() {
        this.startRowIndex = 0;
        this.maximumRows = 2147483647;
    }
}
exports.DataSourceSelectArguments = DataSourceSelectArguments;


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
        if (Object.keys(x).length != Object.keys(y).length)
            return false;
        for (var prop in x) {
            if (y.hasOwnProperty(prop)) {
                if (!deepEqual(x[prop], y[prop]))
                    return false;
            }
            else
                return false;
        }
        return true;
    }
    return false;
}
exports.deepEqual = deepEqual;


/***/ }),

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
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

/***/ "./out/format.js":
/*!***********************!*\
  !*** ./out/format.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.format = exports.formatString = exports.formatDate = void 0;
function formatDate(date, showHourMinutes, showSeconds) {
    if (typeof date == "string")
        return date;
    let d = date;
    if (showHourMinutes) {
        let str = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;
        if (showSeconds)
            str = `${str}:${d.getSeconds()}`;
        return str;
    }
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}
exports.formatDate = formatDate;
function formatString(pattern, ...args) {
    let a = pattern;
    for (let k in args) {
        a = a.replace("{" + k + "}", args[k]);
    }
    return a;
}
exports.formatString = formatString;
function format(value, format) {
    if (!format)
        return `${value}`;
    var result = '';
    for (var i = 0;;) {
        var open = format.indexOf('{', i);
        var close = format.indexOf('}', i);
        if ((open < 0) && (close < 0)) {
            result += format.slice(i);
            break;
        }
        if ((close > 0) && ((close < open) || (open < 0))) {
            if (format.charAt(close + 1) !== '}') {
                throw new Error('Sys.Res.stringFormatBraceMismatch');
            }
            result += format.slice(i, close + 1);
            i = close + 2;
            continue;
        }
        result += format.slice(i, open);
        i = open + 1;
        if (format.charAt(i) === '{') {
            result += '{';
            i++;
            continue;
        }
        if (close < 0)
            throw new Error('Sys.Res.stringFormatBraceMismatch');
        var brace = format.substring(i, close);
        var argFormat = brace;
        if (typeof (value) === "undefined" || value === null) {
            value = '';
        }
        if (value instanceof Date)
            result = result + formatDate1(value, argFormat);
        else if (value instanceof Number || typeof value == 'number')
            result = result + formatNumber(value, argFormat);
        else
            result = result + value.toString();
        i = close + 1;
    }
    return result;
}
exports.format = format;
function formatDate1(value, format) {
    let y = value.getFullYear();
    let m = value.getMonth() + 1;
    let d = value.getDate();
    let h = value.getHours();
    let M = value.getMinutes();
    let s = value.getSeconds();
    let twoDigit = function (value) {
        const TEN = 10;
        if (value < TEN)
            return `0` + value;
        return value.toString();
    };
    switch (format) {
        case 'd':
            return `${y}-${m}-${d}`;
        case 'g':
            return `${y}-${m}-${d} ${h}:${M}`;
        case 'gg':
            return `${y}-${twoDigit(m)}-${twoDigit(d)} ${twoDigit(h)}:${twoDigit(M)}`;
        case 'G':
            return `${y}-${m}-${d} ${h}:${M}:${s}`;
        case 'GG':
            return `${y}-${twoDigit(m)}-${twoDigit(d)} ${twoDigit(h)}:${twoDigit(M)}:${twoDigit(s)}`;
        case 't':
            return `${h}:${M}`;
        case 'T':
            return `${h}:${M}:${s}`;
    }
    return value.toString();
}
function formatNumber(value, format) {
    let reg = new RegExp('^C[0-9]+');
    if (reg.test(format)) {
        let num = format.substr(1);
        return value.toFixed(num);
    }
    return value.toString();
}


/***/ }),

/***/ "./out/guid.js":
/*!*********************!*\
  !*** ./out/guid.js ***!
  \*********************/
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

/***/ "./out/html.js":
/*!*********************!*\
  !*** ./out/html.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HTML = void 0;
const errors_js_1 = __webpack_require__(/*! ./errors.js */ "./out/errors.js");
class HTML {
    static addClassName(element, addonClassName) {
        if (element == null)
            throw errors_js_1.errors.argumentNull('element');
        if (!addonClassName)
            throw errors_js_1.errors.argumentNull('addonClassName');
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
    static removeClassName(element, targetClassName) {
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
}
exports.HTML = HTML;


/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleInvoke = exports.ValueStore = exports.HTML = exports.format = exports.formatString = exports.formatDate = exports.objectAssignDeep = exports.deepEqual = exports.parseUrl = exports.DataSourceSelectArguments = exports.DataSource = exports.Callback = exports.errors = exports.Errors = exports.pathConcat = exports.guid = void 0;
var guid_js_1 = __webpack_require__(/*! ./guid.js */ "./out/guid.js");
Object.defineProperty(exports, "guid", { enumerable: true, get: function () { return guid_js_1.guid; } });
var path_js_1 = __webpack_require__(/*! ./path.js */ "./out/path.js");
Object.defineProperty(exports, "pathConcat", { enumerable: true, get: function () { return path_js_1.pathConcat; } });
var errors_js_1 = __webpack_require__(/*! ./errors.js */ "./out/errors.js");
Object.defineProperty(exports, "Errors", { enumerable: true, get: function () { return errors_js_1.Errors; } });
Object.defineProperty(exports, "errors", { enumerable: true, get: function () { return errors_js_1.errors; } });
var callback_js_1 = __webpack_require__(/*! ./callback.js */ "./out/callback.js");
Object.defineProperty(exports, "Callback", { enumerable: true, get: function () { return callback_js_1.Callback; } });
var data_js_1 = __webpack_require__(/*! ./data.js */ "./out/data.js");
Object.defineProperty(exports, "DataSource", { enumerable: true, get: function () { return data_js_1.DataSource; } });
Object.defineProperty(exports, "DataSourceSelectArguments", { enumerable: true, get: function () { return data_js_1.DataSourceSelectArguments; } });
var url_js_1 = __webpack_require__(/*! ./url.js */ "./out/url.js");
Object.defineProperty(exports, "parseUrl", { enumerable: true, get: function () { return url_js_1.parseUrl; } });
var deep_equal_js_1 = __webpack_require__(/*! ./deep-equal.js */ "./out/deep-equal.js");
Object.defineProperty(exports, "deepEqual", { enumerable: true, get: function () { return deep_equal_js_1.deepEqual; } });
var assign_deep_js_1 = __webpack_require__(/*! ./assign-deep.js */ "./out/assign-deep.js");
Object.defineProperty(exports, "objectAssignDeep", { enumerable: true, get: function () { return assign_deep_js_1.objectAssignDeep; } });
var format_js_1 = __webpack_require__(/*! ./format.js */ "./out/format.js");
Object.defineProperty(exports, "formatDate", { enumerable: true, get: function () { return format_js_1.formatDate; } });
Object.defineProperty(exports, "formatString", { enumerable: true, get: function () { return format_js_1.formatString; } });
Object.defineProperty(exports, "format", { enumerable: true, get: function () { return format_js_1.format; } });
var html_js_1 = __webpack_require__(/*! ./html.js */ "./out/html.js");
Object.defineProperty(exports, "HTML", { enumerable: true, get: function () { return html_js_1.HTML; } });
var value_store_js_1 = __webpack_require__(/*! ./value-store.js */ "./out/value-store.js");
Object.defineProperty(exports, "ValueStore", { enumerable: true, get: function () { return value_store_js_1.ValueStore; } });
var single_inoke_js_1 = __webpack_require__(/*! ./single-inoke.js */ "./out/single-inoke.js");
Object.defineProperty(exports, "SingleInvoke", { enumerable: true, get: function () { return single_inoke_js_1.SingleInvoke; } });


/***/ }),

/***/ "./out/path.js":
/*!*********************!*\
  !*** ./out/path.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.partConcat2 = exports.pathConcat = void 0;
const errors_js_1 = __webpack_require__(/*! ./errors.js */ "./out/errors.js");
/** 连接多个路径 */
function pathConcat(path, ...otherPaths) {
    if (!path)
        throw errors_js_1.errors.argumentNull("path");
    let prefix = "";
    if (path.startsWith("http://"))
        prefix = "http://";
    else if (path.startsWith("https://"))
        prefix = "https://";
    path = path.substring(prefix.length);
    for (let i = 0; i < otherPaths.length; i++) {
        path = partConcat2(path, otherPaths[i]);
    }
    path = prefix + path;
    return path;
}
exports.pathConcat = pathConcat;
function partConcat2(path1, path2) {
    if (path1.startsWith("http://") || path1.startsWith("https://"))
        throw errors_js_1.errors.pathStartsHttp(path1);
    if (path2.startsWith("http://") || path2.startsWith("https://"))
        throw errors_js_1.errors.pathStartsHttp(path2);
    path1 = path1.replace(/(\/+\\*|\\+\/*)/g, '/');
    path2 = path2.replace(/(\/+\\*|\\+\/*)/g, '/');
    let arr1 = path1.split('/').filter(o => o);
    let arr2 = path2.split('/').filter(o => o);
    if (path1[0] == "/") {
        arr1.unshift("");
    }
    while (arr2[0] == "." || arr2[0] == "..") {
        if (arr2[0] == ".." && arr1.length > 0 && arr1[arr1.length - 1] != "") {
            arr1.pop();
        }
        arr2.shift();
    }
    if (arr1.length == 1 && arr1[0] == "" && arr2.length == 0) {
        return "/";
    }
    let path = [...arr1, ...arr2].join("/");
    return path;
}
exports.partConcat2 = partConcat2;


/***/ }),

/***/ "./out/single-inoke.js":
/*!*****************************!*\
  !*** ./out/single-inoke.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleInvoke = void 0;
const value_store_js_1 = __webpack_require__(/*! ./value-store.js */ "./out/value-store.js");
class SingleInvoke {
    constructor(func) {
        this.result = new value_store_js_1.ValueStore(undefined);
        this.error = new value_store_js_1.ValueStore(undefined);
        this.executing = false;
        this.func = func;
    }
    clear() {
        this.result = new value_store_js_1.ValueStore(undefined);
        this.error = new value_store_js_1.ValueStore(undefined);
    }
    execute() {
        if (this.result.value !== undefined) {
            return Promise.resolve(this.result.value);
        }
        if (this.executing) {
            return new Promise((resolve, reject) => {
                this.result.add(value => {
                    resolve(value);
                });
                this.error.add(err => {
                    reject(err);
                });
            });
        }
        this.executing = true;
        return new Promise((resolve, reject) => {
            this.func().then(r => {
                this.result.value = r || null;
                this.executing = false;
                resolve(r);
            }).catch(err => {
                this.error = err;
                this.executing = false;
                reject(err);
            });
        });
    }
}
exports.SingleInvoke = SingleInvoke;


/***/ }),

/***/ "./out/url.js":
/*!********************!*\
  !*** ./out/url.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUrl = void 0;
function parseUrl(url) {
    let i = url.indexOf("?");
    if (i < 0)
        return {};
    let query = url.substr(i + 1);
    return pareeUrlQuery(query);
}
exports.parseUrl = parseUrl;
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

/***/ "./out/value-store.js":
/*!****************************!*\
  !*** ./out/value-store.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueStore = void 0;
/**
 * 实现数据的存储，以及数据修改的通知
 */
class ValueStore {
    constructor(value) {
        this.items = new Array();
        this._value = value;
    }
    attach(func, sender) {
        if (this.value !== undefined) {
            func(this.value, sender);
        }
        return this.add(func, sender);
    }
    add(func, sender) {
        this.items.push({ func, sender });
        return func;
    }
    remove(func) {
        this.items = this.items.filter(o => o.func != func);
    }
    fire(value) {
        this.items.forEach(o => o.func(value, o.sender));
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.fire(value);
    }
}
exports.ValueStore = ValueStore;


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/maishu-toolkit/out/callback.js":
/*!*****************************************************!*\
  !*** ./node_modules/maishu-toolkit/out/callback.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Callback = void 0;
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

/***/ "./node_modules/sortablejs/modular/sortable.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
/*! exports provided: default, MultiDrag, Sortable, Swap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiDrag", function() { return MultiDragPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return Sortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swap", function() { return SwapPlugin; });
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var version = "1.15.0";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var _excluded = ["evt"];

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, _excluded);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable)) return;
    var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists && !ChromeForAndroid) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    } // Safari ignores further event handling after mousedown


    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // if there is a last element, it is the target


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();

          if (elLastChild && elLastChild.nextSibling) {
            // the last draggable element is not the last node
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }

          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);

        if (firstChild === dragEl) {
          return completed(false);
        }

        target = firstChild;
        targetRect = getRect(target);

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (!sortable.options.avoidImplicitDeselect) {
      if (sortable.options.supportPointer) {
        on(document, 'pointerup', this._deselectMultiDrag);
      } else {
        on(document, 'mouseup', this._deselectMultiDrag);
        on(document, 'touchend', this._deselectMultiDrag);
      }
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      avoidImplicitDeselect: false,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvent: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvent: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvent: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        folding = false; // Do not "unfold" after around dragEl if reverted

        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvent: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ __webpack_exports__["default"] = (Sortable);



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
exports.elementFactoryName = exports.constants = void 0;
exports.constants = {
  componentsDir: 'components',
  connectorElementClassName: 'component-container',
  componentTypeName: 'data-component-name',
  componentData: 'component-data',
  componentPosition: "component-position"
};
exports.elementFactoryName = "h";
//# sourceMappingURL=common.js.map


/***/ }),

/***/ "./out-es5/component.js":
/*!******************************!*\
  !*** ./out-es5/component.js ***!
  \******************************/
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
var property_editor_1 = __webpack_require__(/*! ./property-editor */ "./out-es5/property-editor.js");
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

/***/ "./out-es5/components.js":
/*!*******************************!*\
  !*** ./out-es5/components.js ***!
  \*******************************/
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
var strings_1 = __webpack_require__(/*! ./strings */ "./out-es5/strings.js");
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

/***/ "./out-es5/create-design-element.js":
/*!******************************************!*\
  !*** ./out-es5/create-design-element.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDesignElement = void 0;
var React = __importStar(__webpack_require__(/*! react */ "react"));
function createDesignElement(type, props) {
  props = Object.assign({}, props || {});
  if (type != React.Fragment) {
    var _type$prototype;
    props = props || {};
    if (props.onClick) {
      delete props.onClick;
    }
    if (props.href) {
      delete props.href;
    }
    if ((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.isReactComponent) {
      var ref = props.ref;
      if (props.ref == undefined) {
        delete props.ref;
      }
      props.ref = function (e) {
        if (e != null && e.onclick != null) {
          e.onclick = function () {
            console.warn("onclick event is disabled.");
          };
        }
        if (ref != null) ref.apply(this, [e]);
      };
    }
  }
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  return React.createElement.apply(React, [type, props].concat(children));
}
exports.createDesignElement = createDesignElement;
//# sourceMappingURL=create-design-element.js.map


/***/ }),

/***/ "./out-es5/data/data-list.js":
/*!***********************************!*\
  !*** ./out-es5/data/data-list.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataList = void 0;
var callback_1 = __webpack_require__(/*! maishu-toolkit/out/callback */ "./node_modules/maishu-toolkit/out/callback.js");
var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");
var DataList = /*#__PURE__*/function () {
  function DataList() {
    _classCallCheck(this, DataList);
    this.items = [];
    this.added = new callback_1.Callback();
    this.removed = new callback_1.Callback();
  }
  _createClass(DataList, [{
    key: "add",
    value: function add(element) {
      if (!element) throw errors_1.errors.argumentNull("element");
      this.items.push(element);
      this.added.fire({
        sender: this,
        dataItem: element
      });
    }
  }, {
    key: "contains",
    value: function contains(element) {
      if (!element) throw errors_1.errors.argumentNull("element");
      return this.items.indexOf(element) >= 0;
    }
  }, {
    key: "remove",
    value: function remove(element) {
      if (!element) throw errors_1.errors.argumentNull("element");
      this.items = this.items.filter(function (o) {
        return o != element;
      });
      this.removed.fire({
        sender: this,
        dataItem: element
      });
    }
  }, {
    key: "each",
    value: function each(callback) {
      if (!callback) throw errors_1.errors.argumentNull("element");
      for (var i = 0; i < this.items.length; i++) {
        callback(this.items[i], i);
      }
    }
  }, {
    key: "count",
    get: function get() {
      return this.items.length;
    }
  }, {
    key: "map",
    value: function map(callback) {
      return this.items.map(function (o) {
        return callback(o);
      });
    }
  }]);
  return DataList;
}();
exports.DataList = DataList;
//# sourceMappingURL=data-list.js.map


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
var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentDiagram = void 0;
var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");
var component_1 = __webpack_require__(/*! ../component */ "./out-es5/component.js");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var page_designer_1 = __webpack_require__(/*! ./page-designer */ "./out-es5/design/page-designer.js");
var strings_1 = __webpack_require__(/*! ../strings */ "./out-es5/strings.js");
var style_1 = __webpack_require__(/*! ../style */ "./out-es5/style.js");
var sortablejs_1 = __importDefault(__webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js"));
var guid_1 = __webpack_require__(/*! maishu-toolkit/out/guid */ "./node_modules/maishu-toolkit/out/guid.js");
var parse_design_component_data_1 = __webpack_require__(/*! ./parse-design-component-data */ "./out-es5/design/parse-design-component-data.js");
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
    key: "ref",
    value: function ref(e, args) {
      if (!e) return;
      this._element = e;
      if (!args.designer.componentDiagramElements.contains(e)) {
        args.designer.componentDiagramElements.add(e);
      }
    }
  }, {
    key: "element",
    get: function get() {
      return this._element;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var connect = function connect(panelElement, panel) {
        var groupName = (0, guid_1.guid)();
        new sortablejs_1.default(panelElement, {
          group: {
            name: groupName,
            pull: "clone",
            put: false
          },
          animation: 150,
          sort: false,
          onEnd: function onEnd(ev) {
            debugger;
            var componentData = panel.getComponentData(ev.item);
            _this2.designer.appendComponent(componentData);
          }
        });
        new sortablejs_1.default(_this2.element, {
          group: groupName,
          animation: 150
        });
      };
      this.designer.componentPanelElements.each(function (e) {
        return connect(e.element, e.instance);
      });
      this.designer.componentPanelElements.added.add(function (args) {
        return connect(args.dataItem.element, args.dataItem.instance);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      return React.createElement(page_designer_1.DesignerContext.Consumer, null, function (args) {
        if (!args) throw errors_1.errors.contextArgumentNull();
        var designer = args.designer;
        _this3.designer = designer;
        var componentDatas = designer.pageData.children || [];
        if (componentDatas.length == 0) return React.createElement("ul", {
          ref: function ref(e) {
            return _this3.ref(e, args);
          }
        }, React.createElement("li", null, strings_1.strings.emptyCompoenntPanel));
        var componentTypes = args.designer.componentTypes;
        return React.createElement("ul", {
          className: style_1.classNames.componentDiagram,
          ref: function ref(e) {
            return _this3.ref(e, args);
          }
        }, componentDatas.map(function (c) {
          var status = c.status || component_1.ComponentStatus.default;
          var selected = (status & component_1.ComponentStatus.selected) == component_1.ComponentStatus.selected;
          return React.createElement("li", {
            key: c.id,
            className: selected ? style_1.classNames.selected : "",
            onClick: function onClick(e) {
              e.preventDefault();
              e.stopPropagation();
              _this3.selectComponent(args.designer, c.id);
            }
          }, (0, parse_design_component_data_1.parseDesigntimeComponentData)(c, componentTypes));
        }));
      });
    }
  }]);
  return ComponentDiagram;
}(React.Component);
exports.ComponentDiagram = ComponentDiagram;
//# sourceMappingURL=component-diagram.js.map


/***/ }),

/***/ "./out-es5/design/component-panel.js":
/*!*******************************************!*\
  !*** ./out-es5/design/component-panel.js ***!
  \*******************************************/
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
var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentPanel = exports.ComponentPanelContext = void 0;
var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");
var React = __importStar(__webpack_require__(/*! react */ "react"));
var page_designer_1 = __webpack_require__(/*! ./page-designer */ "./out-es5/design/page-designer.js");
var style_1 = __webpack_require__(/*! ../style */ "./out-es5/style.js");
var strings_1 = __webpack_require__(/*! ../strings */ "./out-es5/strings.js");
var maishu_toolkit_1 = __webpack_require__(/*! maishu-toolkit */ "./node_modules/maishu-toolkit/dist/index.js");
var DATA_TYPE = "data-type";
exports.ComponentPanelContext = React.createContext(null);
/** 组件面板 */
var ComponentPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(ComponentPanel, _React$Component);
  var _super = _createSuper(ComponentPanel);
  function ComponentPanel() {
    _classCallCheck(this, ComponentPanel);
    return _super.apply(this, arguments);
  }
  _createClass(ComponentPanel, [{
    key: "element",
    get: function get() {
      return this._element;
    }
  }, {
    key: "getComponentData",
    value: function getComponentData(toolbarElement) {
      if (!toolbarElement) throw errors_1.errors.argumentNull("toolbarElement");
      var dataType = toolbarElement.getAttribute(DATA_TYPE);
      if (!dataType) throw new Error("Argument toolbarElement is an invalid component panel element.");
      var c = {
        id: (0, maishu_toolkit_1.guid)(),
        type: dataType,
        props: {}
      };
      return c;
    }
  }, {
    key: "ref",
    value: function ref(e, args) {
      if (!e) return;
      this._element = e;
      var elements = args.designer.componentPanelElements.map(function (o) {
        return o.element;
      });
      if (elements.indexOf(e) < 0) {
        args.designer.componentPanelElements.add({
          element: e,
          instance: this
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      return React.createElement(exports.ComponentPanelContext.Provider, {
        value: {
          instance: this
        }
      }, React.createElement(page_designer_1.DesignerContext.Consumer, null, function (args) {
        if (!args) throw errors_1.errors.contextArgumentNull();
        var componentsConfig = args.designer.props.componentsConfig;
        var componentInfos = Object.keys(componentsConfig).map(function (k) {
          return Object.assign({}, componentsConfig[k], {
            typeName: k
          });
        });
        var renderItem = _this.props.renderItem || ComponentPanel.renderItem;
        renderItem.bind(_this);
        return React.createElement("ul", {
          className: style_1.classNames.componentPanel,
          ref: function ref(e) {
            return _this.ref(e, args);
          }
        }, componentInfos.length > 0 ? componentInfos.map(function (o) {
          return renderItem(o.typeName, o);
        }) : React.createElement("li", {
          className: style_1.classNames.empty
        }, strings_1.strings.emptyCompoenntPanel));
      }));
    }
  }], [{
    key: "renderItem",
    value: function renderItem(typeName, componentConfig) {
      var displayName = componentConfig.displayName || typeName;
      return React.createElement("li", {
        key: typeName,
        ref: function ref(e) {
          return e ? e.setAttribute(DATA_TYPE, typeName) : null;
        }
      }, React.createElement("i", {
        className: componentConfig.icon
      }), React.createElement("div", null, displayName));
    }
  }]);
  return ComponentPanel;
}(React.Component);
exports.ComponentPanel = ComponentPanel;
//# sourceMappingURL=component-panel.js.map


/***/ }),

/***/ "./out-es5/design/create-design-element.js":
/*!*************************************************!*\
  !*** ./out-es5/design/create-design-element.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = __importStar(__webpack_require__(/*! react */ "react"));
var design_component_context_1 = __webpack_require__(/*! ./design-component-context */ "./out-es5/design/design-component-context.js");
var design_behavior_1 = __webpack_require__(/*! ./design-behavior */ "./out-es5/design/design-behavior.js");
var common_1 = __webpack_require__(/*! ../common */ "./out-es5/common.js");
var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");
var createDesignElement = function createDesignElement(type, props) {
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
var g = typeof window === "undefined" ? global : window;
if (g[common_1.constants.elementFactoryName]) throw errors_1.errors.elementFactoryExists();
g[common_1.constants.elementFactoryName] = createDesignElement;
//# sourceMappingURL=create-design-element.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

/***/ "./out-es5/design/design-component-context.js":
/*!****************************************************!*\
  !*** ./out-es5/design/design-component-context.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DesignComponentContext = void 0;
var designer_1 = __webpack_require__(/*! ../designer */ "./out-es5/designer.js");
Object.defineProperty(exports, "DesignComponentContext", {
  enumerable: true,
  get: function get() {
    return designer_1.DesignComponentContext;
  }
});
//# sourceMappingURL=design-component-context.js.map


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
var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageDesigner = exports.DesignerContext = void 0;
var React = __importStar(__webpack_require__(/*! react */ "react"));
var component_1 = __webpack_require__(/*! ../component */ "./out-es5/component.js");
var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");
var guid_1 = __webpack_require__(/*! maishu-toolkit/out/guid */ "./node_modules/maishu-toolkit/out/guid.js");
var component_2 = __webpack_require__(/*! ../component */ "./out-es5/component.js");
var utility_1 = __webpack_require__(/*! ../utility */ "./out-es5/utility/index.js");
var utility_2 = __webpack_require__(/*! ../utility */ "./out-es5/utility/index.js");
var data_list_1 = __webpack_require__(/*! ../data/data-list */ "./out-es5/data/data-list.js");
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
    _this.componentDiagramElements = new data_list_1.DataList();
    _this.componentPanelElements = new data_list_1.DataList();
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
      var travel = new utility_2.PageDataTravel(pageData);
      travel.each(function (c) {
        if (typeof c == "string" || !(0, utility_2.isCustomComponent)(c) || componentTypes[c.type]) return;
        componentTypes[c.type] = (0, component_2.createLoadingComponent)();
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
  }, {
    key: "componentsConfig",
    get: function get() {
      return this.props.componentsConfig;
    }
  }, {
    key: "componentTypes",
    get: function get() {
      return this.state.componentTypes;
    }
  }, {
    key: "componentEditors",
    get: function get() {
      return this.state.componentEditors;
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
        return ((o.status || component_1.ComponentStatus.default) & component_1.ComponentStatus.selected) == component_1.ComponentStatus.selected;
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
      // let parentId = componentData.parentId;
      // if (!parentId) throw new Error('ParentId field of component data is null.');
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
      debugger;
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
        c.status = c.status || component_1.ComponentStatus.default;
        c.status = c.status & ~component_1.ComponentStatus.selected;
      });
      this.pageData.children.filter(function (o) {
        return componentIds.indexOf(o.id) >= 0;
      }).forEach(function (c) {
        // c.selected = true;
        c.status = c.status || component_1.ComponentStatus.default;
        c.status = c.status | component_1.ComponentStatus.selected;
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
            return o.status == null || (o.status & component_1.ComponentStatus.asset) != component_1.ComponentStatus.asset;
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
        var componentsToLoad, travel, componentsConfig, promises, r, componentEditors;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                componentsToLoad = [];
                travel = new utility_2.PageDataTravel(pageData);
                travel.each(function (c) {
                  if (typeof c == "string" || !(0, utility_2.isCustomComponent)(c)) return;
                  componentsToLoad.push(c.type);
                });
                componentsConfig = this.props.componentsConfig;
                promises = componentsToLoad.map(function (typeName) {
                  return {
                    typeName: typeName,
                    componentConfig: componentsConfig[typeName]
                  };
                }).map(function (o) {
                  return o.componentConfig.editor.then(function (a) {
                    return {
                      typeName: o.typeName,
                      componentConfig: o,
                      module: a
                    };
                  });
                });
                _context.next = 7;
                return Promise.all(promises);
              case 7:
                r = _context.sent;
                componentEditors = this.state.componentEditors;
                r.forEach(function (m) {
                  var editors = m.module.default;
                  if (!m.module.default) throw errors_1.errors.editorModuleNoneDefaultExport(m.typeName);
                  componentEditors[m.typeName] = m.module.default;
                });
                // let componentDatas = pageData.children.filter(o => typeof o != "string").map(c => c)
                // for (let c of componentDatas) {
                //     let defaultValue: ComponentEditors[""] = []
                //     componentEditors[c.type] = componentEditors[c.type] || defaultValue
                //     let propEditors = Component.getPropEditors(c)
                //     for (let e of propEditors) {
                //         componentEditors[c.type] = componentEditors[c.type] || []
                //         componentEditors[c.type] = componentEditors[c.type].filter(o => o.propertyName != e.propertyName)
                //         componentEditors[c.type].push(e)
                //     }
                // }
                this.setState({
                  componentEditors: componentEditors
                });
              case 11:
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
    value: function () {
      var _loadComponentTypes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pageData) {
        var componentTypes, componentsConfig, componentsToLoad, travel, loadedComponentTypes;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                componentTypes = {};
                componentsConfig = this.props.componentsConfig;
                componentsToLoad = [];
                travel = new utility_2.PageDataTravel(pageData);
                travel.each(function (c) {
                  if (typeof c == "string" || componentsToLoad.indexOf(c.type) >= 0 || !(0, utility_2.isCustomComponent)(c)) return;
                  componentsToLoad.push(c.type);
                });
                _context2.next = 7;
                return PageDesigner.loadComponentTypes(componentsToLoad, componentsConfig);
              case 7:
                loadedComponentTypes = _context2.sent;
                Object.assign(componentTypes, loadedComponentTypes);
                this.setState({
                  componentTypes: componentTypes
                });
              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function loadComponentTypes(_x2) {
        return _loadComponentTypes.apply(this, arguments);
      }
      return loadComponentTypes;
    }()
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
      var _onPageDataChanged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(pageData) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.loadComponentTypes(pageData);
                this.loadEditorTypes(pageData);
              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function onPageDataChanged(_x3) {
        return _onPageDataChanged.apply(this, arguments);
      }
      return onPageDataChanged;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // let groupBaseName = 'diagram'
      // for (let i = 0; i < this.componentPanelElements.count; i++) {
      //     let groupName = groupBaseName + i
      //     new Sortable(this.componentPanelElements[i], {
      //         group: groupName,
      //         animation: 150
      //     })
      //     for (let j = 0; j < this.componentDiagramElements.length; j++) {
      //         new Sortable(this.componentDiagramElements[j], {
      //             group: groupName,
      //             animation: 150
      //         })
      //     }
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var pageData = this.state.pageData;
      var equal = (0, utility_1.deepEqual)(this.prePageData, pageData);
      if (!equal) {
        this.prePageData = JSON.parse(JSON.stringify(pageData));
        this.onPageDataChanged(pageData);
      }
      return React.createElement("div", {
        tabIndex: 0,
        ref: function ref(e) {
          return _this2._element = _this2._element || e;
        },
        onKeyDown: function onKeyDown(e) {
          return _this2.onKeyDown(e);
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
      var _loadComponentTypes2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(componentsToLoad, componentsConfig) {
        var promises, componentTypes, _loop2, i, _ret;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                promises = [];
                componentTypes = {};
                _loop2 = function _loop2(i) {
                  var typeName = componentsToLoad[i];
                  if (!typeName) {
                    var errorText = "Component '".concat(typeName, "' has not a config.");
                    componentTypes[typeName] = (0, component_2.createInfoComponent)(errorText);
                    return "continue";
                  }
                  if (component_1.componentTypes[typeName]) {
                    promises.push(Promise.resolve(component_1.componentTypes[typeName]));
                    return "continue";
                  }
                  var p = new Promise(function (resolve, reject) {
                    if (!componentsConfig[typeName]) {
                      var _errorText = "Component '".concat(typeName, "' is not exists.");
                      componentTypes[typeName] = (0, component_2.createInfoComponent)(_errorText);
                      resolve({});
                      return;
                    }
                    if (!(componentsConfig[typeName].type instanceof Promise)) {
                      var _errorText2 = "Component '".concat(typeName, "' type is invalid.");
                      componentTypes[typeName] = (0, component_2.createInfoComponent)(_errorText2);
                      resolve({});
                      return;
                    }
                    var componentType = componentsConfig[typeName].type;
                    if (!componentType) {
                      return resolve({});
                    }
                    componentType.then(function (p) {
                      if (!p.default) {
                        var _errorText3 = "Component '".concat(typeName, "' module has not export default member.");
                        componentTypes[typeName] = (0, component_2.createInfoComponent)(_errorText3);
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
                  _context4.next = 11;
                  break;
                }
                _ret = _loop2(i);
                if (!(_ret === "continue")) {
                  _context4.next = 8;
                  break;
                }
                return _context4.abrupt("continue", 8);
              case 8:
                i++;
                _context4.next = 4;
                break;
              case 11:
                _context4.next = 13;
                return Promise.all(promises);
              case 13:
                return _context4.abrupt("return", componentTypes);
              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      function loadComponentTypes(_x4, _x5) {
        return _loadComponentTypes2.apply(this, arguments);
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

/***/ "./out-es5/design/parse-design-component-data.js":
/*!*******************************************************!*\
  !*** ./out-es5/design/parse-design-component-data.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDesigntimeComponentData = void 0;
var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");
var component_1 = __webpack_require__(/*! ../component */ "./out-es5/component.js");
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var designer_1 = __webpack_require__(/*! ../designer */ "./out-es5/designer.js");
var utility_1 = __webpack_require__(/*! ../utility */ "./out-es5/utility/index.js");
var design_component_context_1 = __webpack_require__(/*! ./design-component-context */ "./out-es5/design/design-component-context.js");
function parseDesigntimeComponentData(componentData, componentTypes) {
  return (0, component_1.parseComponentData)(componentData, componentTypes, createDesigntimeComponent);
}
exports.parseDesigntimeComponentData = parseDesigntimeComponentData;
function createDesigntimeComponent(type, props, children) {
  var p = props;
  if (!p.id) throw errors_1.errors.argumentFieldNull("id", "props");
  return react_1.default.createElement(designer_1.DesignerContext.Consumer, null, function (args) {
    if (!args) throw errors_1.errors.contextArgumentNull();
    var componentData = utility_1.PageDataTravel.findComponent(args.designer.pageData, p.id); //args.designer.pageData.children.filter(o => o.id == p.id)[0]
    if (!componentData) throw new Error("Can not find component data by '".concat(p.id, "' in the page data."));
    var componentConfig = args.designer.props.componentsConfig[componentData.type];
    if (!componentConfig) return react_1.default.createElement(type, props, children);
    var value = {
      componentData: componentData,
      componentConfig: componentConfig
    };
    return react_1.default.createElement(design_component_context_1.DesignComponentContext.Provider, {
      value: value
    }, react_1.default.createElement(type, props, children));
  });
}
//# sourceMappingURL=parse-design-component-data.js.map


/***/ }),

/***/ "./out-es5/designer.js":
/*!*****************************!*\
  !*** ./out-es5/designer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageDesigner = exports.DesignComponentContext = exports.DesignerContext = void 0;
var React = __importStar(__webpack_require__(/*! react */ "react"));
var component_1 = __webpack_require__(/*! ./component */ "./out-es5/component.js");
var errors_1 = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");
var guid_1 = __webpack_require__(/*! maishu-toolkit/out/guid */ "./node_modules/maishu-toolkit/out/guid.js");
var component_2 = __webpack_require__(/*! ./component */ "./out-es5/component.js");
var utility_1 = __webpack_require__(/*! ./utility */ "./out-es5/utility/index.js");
var data_list_1 = __webpack_require__(/*! ./data/data-list */ "./out-es5/data/data-list.js");
exports.DesignerContext = React.createContext(null);
exports.DesignComponentContext = React.createContext(null);
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
    _this.componentDiagramElements = new data_list_1.DataList();
    _this.componentPanelElements = new data_list_1.DataList();
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
      var travel = new utility_1.PageDataTravel(pageData);
      travel.each(function (c) {
        if (typeof c == "string" || !(0, utility_1.isCustomComponent)(c) || componentTypes[c.type]) return;
        componentTypes[c.type] = (0, component_2.createLoadingComponent)();
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
  }, {
    key: "componentsConfig",
    get: function get() {
      return this.props.componentsConfig;
    }
  }, {
    key: "componentTypes",
    get: function get() {
      return this.state.componentTypes;
    }
  }, {
    key: "componentEditors",
    get: function get() {
      return this.state.componentEditors;
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
        return ((o.status || component_1.ComponentStatus.default) & component_1.ComponentStatus.selected) == component_1.ComponentStatus.selected;
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
      // let parentId = componentData.parentId;
      // if (!parentId) throw new Error('ParentId field of component data is null.');
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
      debugger;
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
        c.status = c.status || component_1.ComponentStatus.default;
        c.status = c.status & ~component_1.ComponentStatus.selected;
      });
      this.pageData.children.filter(function (o) {
        return componentIds.indexOf(o.id) >= 0;
      }).forEach(function (c) {
        // c.selected = true;
        c.status = c.status || component_1.ComponentStatus.default;
        c.status = c.status | component_1.ComponentStatus.selected;
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
            return o.status == null || (o.status & component_1.ComponentStatus.asset) != component_1.ComponentStatus.asset;
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
        var componentsToLoad, travel, componentsConfig, promises, r, componentEditors;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                componentsToLoad = [];
                travel = new utility_1.PageDataTravel(pageData);
                travel.each(function (c) {
                  if (typeof c == "string" || !(0, utility_1.isCustomComponent)(c)) return;
                  componentsToLoad.push(c.type);
                });
                componentsConfig = this.props.componentsConfig;
                promises = componentsToLoad.map(function (typeName) {
                  return {
                    typeName: typeName,
                    componentConfig: componentsConfig[typeName]
                  };
                }).map(function (o) {
                  return o.componentConfig.editor.then(function (a) {
                    return {
                      typeName: o.typeName,
                      componentConfig: o,
                      module: a
                    };
                  });
                });
                _context.next = 7;
                return Promise.all(promises);
              case 7:
                r = _context.sent;
                componentEditors = this.state.componentEditors;
                r.forEach(function (m) {
                  var editors = m.module.default;
                  if (!m.module.default) throw errors_1.errors.editorModuleNoneDefaultExport(m.typeName);
                  componentEditors[m.typeName] = m.module.default;
                });
                // let componentDatas = pageData.children.filter(o => typeof o != "string").map(c => c)
                // for (let c of componentDatas) {
                //     let defaultValue: ComponentEditors[""] = []
                //     componentEditors[c.type] = componentEditors[c.type] || defaultValue
                //     let propEditors = Component.getPropEditors(c)
                //     for (let e of propEditors) {
                //         componentEditors[c.type] = componentEditors[c.type] || []
                //         componentEditors[c.type] = componentEditors[c.type].filter(o => o.propertyName != e.propertyName)
                //         componentEditors[c.type].push(e)
                //     }
                // }
                this.setState({
                  componentEditors: componentEditors
                });
              case 11:
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
    value: function () {
      var _loadComponentTypes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pageData) {
        var componentTypes, componentsConfig, componentsToLoad, travel, loadedComponentTypes;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                componentTypes = {};
                componentsConfig = this.props.componentsConfig;
                componentsToLoad = [];
                travel = new utility_1.PageDataTravel(pageData);
                travel.each(function (c) {
                  if (typeof c == "string" || componentsToLoad.indexOf(c.type) >= 0 || !(0, utility_1.isCustomComponent)(c)) return;
                  componentsToLoad.push(c.type);
                });
                _context2.next = 7;
                return PageDesigner.loadComponentTypes(componentsToLoad, componentsConfig);
              case 7:
                loadedComponentTypes = _context2.sent;
                Object.assign(componentTypes, loadedComponentTypes);
                this.setState({
                  componentTypes: componentTypes
                });
              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function loadComponentTypes(_x2) {
        return _loadComponentTypes.apply(this, arguments);
      }
      return loadComponentTypes;
    }()
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
      var _onPageDataChanged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(pageData) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.loadComponentTypes(pageData);
                this.loadEditorTypes(pageData);
              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function onPageDataChanged(_x3) {
        return _onPageDataChanged.apply(this, arguments);
      }
      return onPageDataChanged;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // let groupBaseName = 'diagram'
      // for (let i = 0; i < this.componentPanelElements.count; i++) {
      //     let groupName = groupBaseName + i
      //     new Sortable(this.componentPanelElements[i], {
      //         group: groupName,
      //         animation: 150
      //     })
      //     for (let j = 0; j < this.componentDiagramElements.length; j++) {
      //         new Sortable(this.componentDiagramElements[j], {
      //             group: groupName,
      //             animation: 150
      //         })
      //     }
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var pageData = this.state.pageData;
      var equal = (0, utility_1.deepEqual)(this.prePageData, pageData);
      if (!equal) {
        this.prePageData = JSON.parse(JSON.stringify(pageData));
        this.onPageDataChanged(pageData);
      }
      return React.createElement("div", {
        tabIndex: 0,
        ref: function ref(e) {
          return _this2._element = _this2._element || e;
        },
        onKeyDown: function onKeyDown(e) {
          return _this2.onKeyDown(e);
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
      var _loadComponentTypes2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(componentsToLoad, componentsConfig) {
        var promises, componentTypes, _loop2, i, _ret;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                promises = [];
                componentTypes = {};
                _loop2 = function _loop2(i) {
                  var typeName = componentsToLoad[i];
                  if (!typeName) {
                    var errorText = "Component '".concat(typeName, "' has not a config.");
                    componentTypes[typeName] = (0, component_2.createInfoComponent)(errorText);
                    return "continue";
                  }
                  if (component_1.componentTypes[typeName]) {
                    promises.push(Promise.resolve(component_1.componentTypes[typeName]));
                    return "continue";
                  }
                  var p = new Promise(function (resolve, reject) {
                    if (!componentsConfig[typeName]) {
                      var _errorText = "Component '".concat(typeName, "' is not exists.");
                      componentTypes[typeName] = (0, component_2.createInfoComponent)(_errorText);
                      resolve({});
                      return;
                    }
                    if (!(componentsConfig[typeName].type instanceof Promise)) {
                      var _errorText2 = "Component '".concat(typeName, "' type is invalid.");
                      componentTypes[typeName] = (0, component_2.createInfoComponent)(_errorText2);
                      resolve({});
                      return;
                    }
                    var componentType = componentsConfig[typeName].type;
                    if (!componentType) {
                      return resolve({});
                    }
                    componentType.then(function (p) {
                      if (!p.default) {
                        var _errorText3 = "Component '".concat(typeName, "' module has not export default member.");
                        componentTypes[typeName] = (0, component_2.createInfoComponent)(_errorText3);
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
                  _context4.next = 11;
                  break;
                }
                _ret = _loop2(i);
                if (!(_ret === "continue")) {
                  _context4.next = 8;
                  break;
                }
                return _context4.abrupt("continue", 8);
              case 8:
                i++;
                _context4.next = 4;
                break;
              case 11:
                _context4.next = 13;
                return Promise.all(promises);
              case 13:
                return _context4.abrupt("return", componentTypes);
              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      function loadComponentTypes(_x4, _x5) {
        return _loadComponentTypes2.apply(this, arguments);
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
//# sourceMappingURL=designer.js.map


/***/ }),

/***/ "./out-es5/editor/editor-group.js":
/*!****************************************!*\
  !*** ./out-es5/editor/editor-group.js ***!
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
var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorGroup = void 0;
var React = __importStar(__webpack_require__(/*! react */ "react"));
var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");
var editor_panel_context_1 = __webpack_require__(/*! ./editor-panel-context */ "./out-es5/editor/editor-panel-context.js");
var utility_1 = __webpack_require__(/*! ../utility */ "./out-es5/utility/index.js");
var style_1 = __webpack_require__(/*! ../style */ "./out-es5/style.js");
var EditorGroup = /*#__PURE__*/function (_React$Component) {
  _inherits(EditorGroup, _React$Component);
  var _super = _createSuper(EditorGroup);
  function EditorGroup() {
    _classCallCheck(this, EditorGroup);
    return _super.apply(this, arguments);
  }
  _createClass(EditorGroup, [{
    key: "render",
    value: function render() {
      var _this = this;
      return React.createElement(editor_panel_context_1.EditPanelContext.Consumer, null, function (args) {
        if (!args) throw errors_1.errors.contextArgumentNull();
        var propertyEditor = _this.props.groupName ? args.editors.filter(function (o) {
          return o.group == _this.props.groupName;
        }) : args.editors;
        return React.createElement(React.Fragment, null, propertyEditor.map(function (o) {
          return React.createElement("div", {
            key: o.proppertyName,
            className: style_1.classNames.propertyEditor
          }, React.createElement("label", {
            className: style_1.classNames.propertyEditorLabel
          }, o.displayName), React.createElement("div", {
            className: style_1.classNames.propertyEditorControl
          }, React.createElement(utility_1.ErrorBoundary, null)));
        }));
      });
    }
  }]);
  return EditorGroup;
}(React.Component);
exports.EditorGroup = EditorGroup;
//# sourceMappingURL=editor-group.js.map


/***/ }),

/***/ "./out-es5/editor/editor-panel-context.js":
/*!************************************************!*\
  !*** ./out-es5/editor/editor-panel-context.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditPanelContext = void 0;
var React = __importStar(__webpack_require__(/*! react */ "react"));
exports.EditPanelContext = React.createContext(null);
//# sourceMappingURL=editor-panel-context.js.map


/***/ }),

/***/ "./out-es5/editor/editor-panel.js":
/*!****************************************!*\
  !*** ./out-es5/editor/editor-panel.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorPanel = void 0;
var React = __importStar(__webpack_require__(/*! react */ "react"));
var style_1 = __webpack_require__(/*! ../style */ "./out-es5/style.js");
var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");
var designer_1 = __webpack_require__(/*! ../designer */ "./out-es5/designer.js");
var editor_panel_context_1 = __webpack_require__(/*! ./editor-panel-context */ "./out-es5/editor/editor-panel-context.js");
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
  _createClass(EditorPanel, [{
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
      var _this2 = this;
      return React.createElement(designer_1.DesignerContext.Consumer, null, function (args) {
        if (!args) throw errors_1.errors.contextArgumentNull();
        var editors = EditorPanel.getEditors(args.designer);
        return React.createElement(editor_panel_context_1.EditPanelContext.Provider, {
          value: {
            editors: editors
          }
        }, React.createElement("div", {
          className: "".concat(style_1.classNames.editorPanel, " ").concat(_this2.props.className || ""),
          ref: function ref(e) {
            return _this2.element = e || _this2.element;
          }
        }, _this2.props.children));
      });
    }
  }], [{
    key: "getEditors",
    value: function getEditors(designer) {
      if (designer == null) throw errors_1.errors.argumentNull("designer");
      var selectedComponents = designer.selectedComponents;
      if (selectedComponents.length == 0) return [];
      var validEditorInfos = [];
      var firstComponent = selectedComponents[0];
      var firstComponentEditors = Object.assign({}, designer.componentEditors[selectedComponents[0].type]);
      var componentConfig = designer.componentsConfig[selectedComponents[0].type];
      console.assert(componentConfig != null);
      if (selectedComponents.length == 1) {
        var defaultValue = [];
        var componentEditors = designer.componentEditors[firstComponent.type] || defaultValue;
        validEditorInfos = _toConsumableArray(componentEditors);
      } else {
        var _loop = function _loop(i) {
          var e = firstComponentEditors[i];
          /** 判断是否存在相同的项 */
          var exists = true;
          var _loop2 = function _loop2(j) {
            var selectedComponent = selectedComponents[j];
            var selectedComponentEditors = designer.componentEditors[selectedComponent.type] || [];
            exists = selectedComponentEditors.filter(function (o) {
              return o.propertyName == e.propertyName && o.editorType == e.editorType && o.displayName == e.displayName && selectedComponent.props[o.propertyName] == firstComponent.props[e.propertyName];
            }).length > 0;
            if (!exists) {
              return "break";
            }
          };
          for (var j = 1; j < selectedComponents.length; j++) {
            var _ret = _loop2(j);
            if (_ret === "break") break;
          }
          if (exists) {
            validEditorInfos.push(e);
          }
        };
        for (var i = 0; i < firstComponentEditors.length; i++) {
          _loop(i);
        }
      }
      var r = [];
      var _loop3 = function _loop3(_i) {
        var editorInfo = validEditorInfos[_i];
        var editorProps = {
          value: firstComponent.props[editorInfo.propertyName],
          editComponents: selectedComponents,
          updateComponentProp: function updateComponentProp(value) {
            var componentProps = selectedComponents.map(function (o) {
              return {
                componentId: o.id,
                propName: editorInfo.propertyName,
                value: value
              };
            });
            designer.updateComponentProps(componentProps);
          }
        };
        var editorType = editorInfo.editorType;
        var editor = React.createElement(editorType, editorProps);
        r.push({
          proppertyName: editorInfo.propertyName,
          displayName: editorInfo.displayName || editorInfo.propertyName,
          group: editorInfo.group || "",
          editor: editor
        });
      };
      for (var _i = 0; _i < validEditorInfos.length; _i++) {
        _loop3(_i);
      }
      // for (let i = 1; i < selectedComponents.length; i++) {
      //     let editors = designer.componentEditors[selectedComponents[i].type];
      //     /** 只保留名称相同，类型相同的编辑器 */
      //     let displayName2 = designer.componentsConfig[selectedComponents[i].type].displayName || key
      //     // if (editors[key] != firstComponentEditors[key] || displayName1 != displayName2) {
      //     //     delete firstComponentEditors[key]
      //     //     break;
      //     // }
      // }
      // // r.push({ displayName: displayName1, })
      return r;
      // if (designer == null) {
      //     return []
      // }
      // // 各个控件相同的编辑器
      // let commonPropEditorInfos: PropEditorInfo[] = []
      // let selectedComponents = designer.selectedComponents;
      // for (let i = 0; i < selectedComponents.length; i++) {
      //     let componentData = selectedComponents[i];
      //     let componentEditors = designer.componentEditors[componentData.type];
      //     if (!componentEditors)
      //         continue;
      //     let componentConfig = designer.componentsConfig[componentData.type];
      //     let propEditorInfos = Object.keys(componentEditors).map(propertyName => {
      //         let r: PropEditorInfo = {
      //             propName: propertyName, displayName: componentConfig.displayName || componentData.type,
      //             editorType: componentEditors[propertyName], group: componentConfig.group || ""
      //         }
      //         return r
      //     })
      //     if (i == 0) {
      //         commonPropEditorInfos = propEditorInfos || []
      //     }
      //     else {
      //         let items: PropEditorInfo[] = []
      //         commonPropEditorInfos.forEach(propInfo1 => {
      //             propEditorInfos.forEach(propInfo2 => {
      //                 let propName1 = propInfo1.propName;
      //                 let propName2 = propInfo2.propName;
      //                 if (propInfo1.editorType == propInfo2.editorType && propName1 == propName2) {
      //                     items.push(propInfo1)
      //                 }
      //             })
      //         })
      //         commonPropEditorInfos = items
      //     }
      // }
      // // 各个控件相同的属性值
      // let commonFlatProps: { [navName: string]: any } = {};
      // for (let i = 0; i < selectedComponents.length; i++) {
      //     let control = selectedComponents[i];
      //     let controlProps: { [key: string]: any } = Object.assign({}, control.props);
      //     delete (controlProps as any).children;
      //     if (i == 0) {
      //         commonFlatProps = controlProps
      //     }
      //     else {
      //         let obj = {}
      //         for (let key in commonFlatProps) {
      //             if (commonFlatProps[key] == controlProps[key])
      //                 obj[key] = controlProps[key]
      //         }
      //         commonFlatProps = obj
      //     }
      // }
      // let editors: PropertyEditor[] = []
      // for (let i = 0; i < commonPropEditorInfos.length; i++) {
      //     let propEditorInfo = commonPropEditorInfos[i];
      //     let propName = propEditorInfo.propName;;
      //     let editorType = propEditorInfo.editorType;
      //     let value = this.propValue(propName, commonFlatProps);
      //     if (value == null)
      //         value = propEditorInfo.defaultValue;
      //     let editorProps: PropEditorProps<any> = {
      //         value: value,
      //         editComponents: selectedComponents,
      //         updateComponentProp: (value) => {
      //             let componentProps = selectedComponents.map(o => ({
      //                 componentId: o.id, propName: propEditorInfo.propName, value
      //             }));
      //             if (this._validator == null) {
      //                 this._validateFields = commonPropEditorInfos.filter(o => o.validation != null)
      //                     .map(o => Object.assign(o.validation as any, { name: o.propName, rules: [] }));
      //                 this._validator = new FormValidator(this.element, ...this._validateFields);
      //             }
      //             if (this._validateFields.filter(o => o.name == propEditorInfo.propName).length > 0)
      //                 this._validator.checkElement(propEditorInfo.propName);
      //             designer.updateComponentProps(componentProps);
      //         }
      //     };
      //     let editor = React.createElement(editorType, editorProps);
      //     editors.push({ prop: propEditorInfo.propName, displayName: propEditorInfo.displayName, editor, group: propEditorInfo.group })
      // }
      // return editors
    }
  }]);
  return EditorPanel;
}(React.Component);
exports.EditorPanel = EditorPanel;
//# sourceMappingURL=editor-panel.js.map


/***/ }),

/***/ "./out-es5/editor/index.js":
/*!*********************************!*\
  !*** ./out-es5/editor/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorGroup = exports.EditPanelContext = exports.EditorPanel = void 0;
var editor_panel_1 = __webpack_require__(/*! ./editor-panel */ "./out-es5/editor/editor-panel.js");
Object.defineProperty(exports, "EditorPanel", {
  enumerable: true,
  get: function get() {
    return editor_panel_1.EditorPanel;
  }
});
var editor_panel_context_1 = __webpack_require__(/*! ./editor-panel-context */ "./out-es5/editor/editor-panel-context.js");
Object.defineProperty(exports, "EditPanelContext", {
  enumerable: true,
  get: function get() {
    return editor_panel_context_1.EditPanelContext;
  }
});
var editor_group_1 = __webpack_require__(/*! ./editor-group */ "./out-es5/editor/editor-group.js");
Object.defineProperty(exports, "EditorGroup", {
  enumerable: true,
  get: function get() {
    return editor_group_1.EditorGroup;
  }
});
//# sourceMappingURL=index.js.map


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
    key: "contextArgumentNull",
    value: function contextArgumentNull() {
      var msg = "Context argument null.";
      var error = new Error(msg);
      error.name = exports.errors.contextArgumentNull.name;
      return error;
    }
  }, {
    key: "editorModuleNoneDefaultExport",
    value: function editorModuleNoneDefaultExport(typeName) {
      var msg = "Component ".concat(typeName, " has not export default member.");
      var error = new Error(msg);
      error.name = exports.errors.editorModuleNoneDefaultExport.name;
      return error;
    }
  }, {
    key: "elementFactoryExists",
    value: function elementFactoryExists() {
      var msg = "Element factory '".concat(name, "' exists.");
      var error = new Error(msg);
      error.name = exports.errors.elementFactoryExists.name;
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
exports.EditorPanel = exports.EditorGroup = exports.ComponentPanel = exports.ComponentDiagram = exports.classNames = exports.DesignerContext = exports.PageDesigner = void 0;
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
var component_panel_1 = __webpack_require__(/*! ./design/component-panel */ "./out-es5/design/component-panel.js");
Object.defineProperty(exports, "ComponentPanel", {
  enumerable: true,
  get: function get() {
    return component_panel_1.ComponentPanel;
  }
});
var editor_1 = __webpack_require__(/*! ./editor */ "./out-es5/editor/index.js");
Object.defineProperty(exports, "EditorGroup", {
  enumerable: true,
  get: function get() {
    return editor_1.EditorGroup;
  }
});
Object.defineProperty(exports, "EditorPanel", {
  enumerable: true,
  get: function get() {
    return editor_1.EditorPanel;
  }
});
__webpack_require__(/*! ./design/create-design-element */ "./out-es5/design/create-design-element.js");
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

/***/ "./out-es5/page-designer.js":
/*!**********************************!*\
  !*** ./out-es5/page-designer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

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
var errors_1 = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");
var guid_1 = __webpack_require__(/*! maishu-toolkit/out/guid */ "./node_modules/maishu-toolkit/out/guid.js");
var components_1 = __webpack_require__(/*! ./components */ "./out-es5/components.js");
var page_data_travel_1 = __webpack_require__(/*! ./page-data-travel */ "./out-es5/page-data-travel.js");
var component_1 = __webpack_require__(/*! ./component */ "./out-es5/component.js");
var deep_equal_1 = __webpack_require__(/*! ./deep-equal */ "./out-es5/deep-equal.js");
var common_1 = __webpack_require__(/*! ./common */ "./out-es5/common.js");
var create_design_element_1 = __webpack_require__(/*! ./create-design-element */ "./out-es5/create-design-element.js");
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
    _this._elementFactory = create_design_element_1.createDesignElement; //React.createElement
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
  }, {
    key: "elementFactory",
    get: function get() {
      return this._elementFactory;
    }
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
                if (typeof window === "undefined") global["h"] = create_design_element_1.createDesignElement;else window["h"] = create_design_element_1.createDesignElement;
                _context2.next = 3;
                return this.loadComponentTypes(pageData);
              case 3:
                window["h"] = React.createElement;
                this.loadEditorTypes(pageData);
              case 5:
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./out-es5/property-editor.js":
/*!************************************!*\
  !*** ./out-es5/property-editor.js ***!
  \************************************/
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
var component_1 = __webpack_require__(/*! ./component */ "./out-es5/component.js");
// import { PropEditorProps } from "./prop-editor";
var errors_1 = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");
var page_designer_1 = __webpack_require__(/*! ./page-designer */ "./out-es5/page-designer.js");
var common_1 = __webpack_require__(/*! ./common */ "./out-es5/common.js");
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
exports.classNames = void 0;
exports.classNames = {
  empty: "empty",
  selected: "selected",
  componentDiagram: 'component-diagram',
  componentPanel: 'component-panel',
  editorPanel: 'editor-panel',
  propertyEditor: "property-editor",
  propertyEditorControl: "property-editor-control",
  propertyEditorLabel: "property-editor-label"
};
// let templateDialog = {
//     nameHeight: 40,
//     fontSize: 22
// }
var element = document.createElement('style');
element.type = 'text/css';
element.setAttribute("data-name", "jueying");
element.innerHTML = "\n.".concat(exports.classNames.componentDiagram, " {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n.").concat(exports.classNames.componentPanel, " {\n    display: flex;\n}\n.").concat(exports.classNames.editorPanel, " {\n    width: 300px;\n    background: white;\n    color: black;\n    margin: 0;\n    font-size: 14px;\n    z-index: 100;\n    overflow: auto;\n}\n.").concat(exports.classNames.editorPanel, " label {\n    width: 80px;\n    float: left;\n    padding: 4px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n.").concat(exports.classNames.editorPanel, " .control {\n    padding-left: 90px;\n}\n.").concat(exports.classNames.editorPanel, " .empty {\n    padding-top: 200px;\n    text-align: center;\n}\n.").concat(exports.classNames.editorPanel, " .error {\n    color: red;\n}\n.").concat(exports.classNames.componentPanel, " {\n    background: white;\n    color: black;\n    font-size: 14px;\n    z-index: 100;\n    list-style: none;\n    padding: 0;\n    text-align: center\n}\n.").concat(exports.classNames.componentPanel, " .panel-heading {\n    text-align: center;\n}\n.").concat(exports.classNames.componentPanel, " li {\n    text-align: center;\n    padding: 8px;\n}\n        ");
if (document.head != null) {
  document.head.appendChild(element);
}
//# sourceMappingURL=style.js.map


/***/ }),

/***/ "./out-es5/utility/common.js":
/*!***********************************!*\
  !*** ./out-es5/utility/common.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementFactoryName = exports.childrenNodeToArray = exports.isCustomComponent = exports.groupDisplayNames = exports.proptDisplayNames = void 0;
var component_1 = __webpack_require__(/*! ../component */ "./out-es5/component.js");
exports.proptDisplayNames = {};
exports.groupDisplayNames = {};
function isCustomComponent(componentData) {
  // 全小写为 HTML 元素，不需要加载
  if (componentData.type.toLowerCase() == componentData.type) return false;
  if (component_1.componentTypes[componentData.type]) return false;
  return true;
}
exports.isCustomComponent = isCustomComponent;
function childrenNodeToArray(children) {
  if (!children) return [];
  if (Array.isArray(children)) return children;
  return [children];
}
exports.childrenNodeToArray = childrenNodeToArray;
exports.elementFactoryName = "h";
//# sourceMappingURL=common.js.map


/***/ }),

/***/ "./out-es5/utility/deep-equal.js":
/*!***************************************!*\
  !*** ./out-es5/utility/deep-equal.js ***!
  \***************************************/
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

/***/ "./out-es5/utility/error-boundary.js":
/*!*******************************************!*\
  !*** ./out-es5/utility/error-boundary.js ***!
  \*******************************************/
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
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorBoundary = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var ErrorBoundary = /*#__PURE__*/function (_react_1$default$Comp) {
  _inherits(ErrorBoundary, _react_1$default$Comp);
  var _super = _createSuper(ErrorBoundary);
  function ErrorBoundary(props) {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
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
        return react_1.default.createElement("div", {
          className: "error"
        }, react_1.default.createElement("div", null, error.message), react_1.default.createElement("div", null, error.stack));
      }
      return this.props.children;
    }
  }]);
  return ErrorBoundary;
}(react_1.default.Component);
exports.ErrorBoundary = ErrorBoundary;
//# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ "./out-es5/utility/index.js":
/*!**********************************!*\
  !*** ./out-es5/utility/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorBoundary = exports.PageDataTravel = exports.deepEqual = exports.isCustomComponent = exports.childrenNodeToArray = void 0;
var common_1 = __webpack_require__(/*! ./common */ "./out-es5/utility/common.js");
Object.defineProperty(exports, "childrenNodeToArray", {
  enumerable: true,
  get: function get() {
    return common_1.childrenNodeToArray;
  }
});
Object.defineProperty(exports, "isCustomComponent", {
  enumerable: true,
  get: function get() {
    return common_1.isCustomComponent;
  }
});
var deep_equal_1 = __webpack_require__(/*! ./deep-equal */ "./out-es5/utility/deep-equal.js");
Object.defineProperty(exports, "deepEqual", {
  enumerable: true,
  get: function get() {
    return deep_equal_1.deepEqual;
  }
});
var page_data_travel_1 = __webpack_require__(/*! ./page-data-travel */ "./out-es5/utility/page-data-travel.js");
Object.defineProperty(exports, "PageDataTravel", {
  enumerable: true,
  get: function get() {
    return page_data_travel_1.PageDataTravel;
  }
});
var error_boundary_1 = __webpack_require__(/*! ./error-boundary */ "./out-es5/utility/error-boundary.js");
Object.defineProperty(exports, "ErrorBoundary", {
  enumerable: true,
  get: function get() {
    return error_boundary_1.ErrorBoundary;
  }
});
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./out-es5/utility/page-data-travel.js":
/*!*********************************************!*\
  !*** ./out-es5/utility/page-data-travel.js ***!
  \*********************************************/
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
var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");
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