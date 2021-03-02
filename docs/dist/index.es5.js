/*!
 * 
 *  maishu-jueying v3.1.17
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
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["jueying"] = factory(require("react"));
	else
		root["jueying"] = factory(root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
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

/***/ "./node_modules/maishu-dilu/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/maishu-dilu/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *  maishu-dilu v1.7.1
 *  https://github.com/ansiboy/dilu
 *  
 *  Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 *  Licensed under the MIT License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
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

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// namespace dilu {
exports.errors = {
    argumentNull(parameterName) {
        let msg = `Parameter ${parameterName} can not be null or empty.`;
        return new Error(msg);
    },
    elementValidateRuleNotSet(element) {
        let msg = `元素'${element.name}'没有设置验证规则`;
        return new Error(msg);
    },
    fieldElementCanntNull(fieldIndex) {
        // if (fieldIndex != null)
        let msg = fieldIndex != null ?
            `The element value in the field cannt be null, field index is ${fieldIndex}.` :
            `The element in the field is null`;
        return new Error(msg);
    },
    elementNotExists(name) {
        let msg = `Element ${name} is not exits in the form.`;
        return new Error(msg);
    },
    fieldResultExpectBooleanType(name) {
        let msg = `Result of ${name} field is expected boolean.`;
        return new Error(msg);
    }
};
// }


/***/ }),

/***/ "./out/formValidator.js":
/*!******************************!*\
  !*** ./out/formValidator.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __webpack_require__(/*! ./errors */ "./out/errors.js");
/**
 * 表单验证器，用于对表单中的字段进行验证
 */
class FormValidator {
    constructor(form, ...fields) {
        /** 输入框的值发生改变，是否重新校验该输入框的值，默认为 true */
        this.validateOnChanged = true;
        if (!form)
            throw errors_1.errors.argumentNull('form');
        this.fields = fields || [];
        this.form = form;
        this.elementEvents = {};
    }
    appendField(field) {
        this.fields.push(field);
    }
    /**
     * 清除表单的错误信息
     */
    clearErrors() {
        this.fields.map(o => o.errorElement)
            .filter(o => o != null)
            .forEach(o => o.style.display = 'none');
    }
    /**
     * 清除表单的指定元素错误信息
     * @param name 指定的元素名称
     */
    clearElementError(name) {
        if (!name)
            throw errors_1.errors.argumentNull('name');
        let fields = this.fields.filter(o => o.name == name);
        for (let field of fields) {
            let errorElement = this.fieldErrorElement(field);
            errorElement.style.display = 'none';
        }
    }
    /**
     * 设置表单的指定元素错误信息
     * @param name 指定的元素名称
     * @param error 错误信息
     */
    setElementError(name, error) {
        if (!name)
            throw errors_1.errors.argumentNull('name');
        if (!error)
            throw errors_1.errors.argumentNull('error');
        let fields = this.fields.filter(o => o.name == name);
        for (let field of fields) {
            let errorElement = this.fieldErrorElement(field);
            errorElement.style.removeProperty('display');
            errorElement.innerHTML = error;
        }
    }
    fieldElement(field) {
        let name = field.name;
        let element = this.form.querySelectorAll(`[name='${name}']`)[0];
        if (element == null)
            throw errors_1.errors.elementNotExists(name);
        return element;
    }
    fieldErrorElement(field) {
        if (!field.errorElement) {
            let errorElement = this.form.getElementsByClassName(`${FormValidator.errorClassName} ${field.name}`)[0];
            if (!errorElement) {
                let element = this.fieldElement(field);
                errorElement = document.createElement("span");
                errorElement.className = FormValidator.errorClassName;
                errorElement.style.display = 'none';
                if (element.nextSibling)
                    element.parentElement.insertBefore(errorElement, element.nextSibling);
                else
                    element.parentElement.appendChild(errorElement);
            }
            field.errorElement = errorElement;
        }
        return field.errorElement;
        // return errorElement;
    }
    /**
     * 验证字段
     */
    check() {
        let ps = new Array();
        for (let i = 0; i < this.fields.length; i++) {
            let field = this.fields[i];
            let element = this.fieldElement(field);
            if (field.condition && field.condition(element) == false)
                continue;
            let p = this.checkField(field);
            ps.push(p);
        }
        let result = ps.filter(o => o == false).length == 0;
        return result;
    }
    /**
     * 异步验证字段
     */
    checkAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            let ps = new Array();
            for (let i = 0; i < this.fields.length; i++) {
                let field = this.fields[i];
                let element = this.fieldElement(field);
                if (field.condition && field.condition(element) == false)
                    continue;
                let p = this.checkFieldAsync(field);
                ps.push(p);
            }
            let checkResults = yield Promise.all(ps);
            let result = checkResults.filter(o => o == false).length == 0;
            return result;
        });
    }
    bindElementEvent(field, isAsync) {
        if (this.elementEvents[field.name]) {
            return;
        }
        let element = this.fieldElement(field);
        let validateFunc = (() => {
            let checking = false;
            return () => {
                if (checking)
                    return;
                checking = true;
                // isAsync ? this.checkFieldAsync(field) : this.checkField(field);
                if (isAsync) {
                    this.checkFieldAsync(field)
                        .then(() => checking = false)
                        .catch(() => checking = false);
                }
                else {
                    this.checkField(field);
                    checking = false;
                }
            };
        })();
        if (this.validateOnChanged) {
            element.addEventListener('change', validateFunc);
            let elementType = element.type || "text";
            if (elementType == "text" || elementType == "password") {
                element.addEventListener('keyup', validateFunc);
            }
            else if (elementType == "radio") {
                let name = element.name;
                let elements = this.form.querySelectorAll(`[name='${name}']`);
                for (let i = 0; i < elements.length; i++) {
                    if (elements[i] == element) {
                        continue;
                    }
                    elements[i].addEventListener("change", validateFunc);
                }
            }
        }
        this.elementEvents[field.name] = true;
    }
    checkField(field) {
        this.bindElementEvent(field, false);
        let element = this.fieldElement(field);
        let depends = field.depends || [];
        for (let j = 0; j < depends.length; j++) {
            let dependResult = depends[j](element);
            if (typeof dependResult == 'object') {
                throw new Error('Please use checkAsync method.');
            }
            let dependIsOK = dependResult;
            if (!dependIsOK)
                return false;
        }
        for (let j = 0; j < field.rules.length; j++) {
            let rule = field.rules[j];
            let element = this.fieldElement(field);
            if (element == null)
                throw errors_1.errors.fieldElementCanntNull();
            let value = this.elementValue(element);
            let isPass = rule.validate(value);
            if (typeof isPass == 'object') {
                throw new Error('Please use checkAsync method.');
            }
            this.showElement(!isPass, field, rule, element);
            if (!isPass)
                return false;
        }
        return true;
    }
    checkFieldAsync(field) {
        return __awaiter(this, void 0, void 0, function* () {
            this.bindElementEvent(field, true);
            let element = this.fieldElement(field);
            let depends = field.depends || [];
            for (let j = 0; j < depends.length; j++) {
                let dependResult = depends[j](element);
                if (typeof dependResult == 'boolean') {
                    dependResult = Promise.resolve(dependResult);
                }
                let dependIsOK = yield dependResult;
                if (!dependIsOK)
                    return false;
            }
            for (let j = 0; j < field.rules.length; j++) {
                let rule = field.rules[j];
                let element = this.fieldElement(field);
                if (element == null)
                    throw errors_1.errors.fieldElementCanntNull();
                let value = this.elementValue(element);
                let p = rule.validate(value);
                if (typeof p == 'boolean') {
                    p = Promise.resolve(p);
                }
                let isPass = yield p;
                this.showElement(!isPass, field, rule, element);
                if (!isPass)
                    return false;
            }
            return true;
        });
    }
    showElement(display, field, rule, element) {
        let errorElement = this.fieldErrorElement(field);
        console.assert(errorElement != null, 'errorElement cannt be null.');
        if (rule.error != null) {
            errorElement = field.errorElement;
            let name = this.elementName(element);
            let errorText = typeof rule.error == 'string' ? rule.error : rule.error() || '';
            errorElement.innerHTML = errorText.replace('%s', name);
        }
        if (display) {
            errorElement.style.removeProperty('display');
        }
        else {
            errorElement.style.display = 'none';
        }
    }
    /**
     * 异步验证 HTML 元素
     * @param name HTML 元素名称
     */
    checkElementAsync(name) {
        let field = this.fields.filter(o => o.name == name)[0];
        if (!field)
            throw errors_1.errors.elementNotExists(name);
        return this.checkFieldAsync(field);
    }
    /**
     * 同步验证 HTML 元素
     * @param name HTML 元素名称
     */
    checkElement(name) {
        let field = this.fields.filter(o => o.name == name)[0];
        if (!field)
            throw errors_1.errors.elementNotExists(name);
        return this.checkField(field);
    }
    elementValue(element) {
        if (element.tagName == "TEXTAREA") {
            return element.value;
        }
        let inputElement = element;
        if (inputElement.type == "radio") {
            let elements = this.form.querySelectorAll(`[name='${inputElement.name}']`);
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].checked) {
                    return elements[i].value;
                }
            }
            return "";
        }
        return element.value;
    }
    elementName(element) {
        if (element.tagName == "TEXTAREA") {
            return element.name;
        }
        return element.name;
    }
}
exports.FormValidator = FormValidator;
FormValidator.errorClassName = 'validationMessage';
// }


/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var formValidator_1 = __webpack_require__(/*! ./formValidator */ "./out/formValidator.js");
exports.FormValidator = formValidator_1.FormValidator;
var rules_1 = __webpack_require__(/*! ./rules */ "./out/rules.js");
exports.rules = rules_1.rules;


/***/ }),

/***/ "./out/rules.js":
/*!**********************!*\
  !*** ./out/rules.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// namespace dilu {
var ruleRegex = /^(.+?)\[(.+)\]$/, numericRegex = /^[0-9]+$/, integerRegex = /^\-?[0-9]+$/, decimalRegex = /^\-?[0-9]*\.?[0-9]+$/, emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, alphaRegex = /^[a-z]+$/i, alphaNumericRegex = /^[a-z0-9]+$/i, alphaDashRegex = /^[a-z0-9_\-]+$/i, naturalRegex = /^[0-9]+$/i, naturalNoZeroRegex = /^[1-9][0-9]*$/i, ipRegex = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i, base64Regex = /[^a-zA-Z0-9\/\+=]/i, numericDashRegex = /^[\d\-\s]+$/, urlRegex = /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, mobileRegex = /^1[34578]\d{9}$/, dateRegex = /\d{4}-\d{1,2}-\d{1,2}/;
let msgs = {
    required: '%s不能为空',
    matches: '%s与%s不匹配',
    "default": 'The %s field is still set to default, please change.',
    equal: '%s和%s必须相同',
    email: '不是有效的邮箱地址',
    valid_emails: 'The %s field must contain all valid email addresses.',
    minLength: '%s至少包含%s个字符',
    maxLength: '%s不能超过%s字符',
    exact_length: 'The %s field must be exactly %s characters in length.',
    greater_than: 'The %s field must contain a number greater than %s.',
    less_than: 'The %s field must contain a number less than %s.',
    alpha: 'The %s field must only contain alphabetical characters.',
    alpha_numeric: 'The %s field must only contain alpha-numeric characters.',
    alpha_dash: 'The %s field must only contain alpha-numeric characters, underscores, and dashes.',
    numeric: '请数入数字',
    integer: 'The %s field must contain an integer.',
    decimal: 'The %s field must contain a decimal number.',
    is_natural: 'The %s field must contain only positive numbers.',
    is_natural_no_zero: 'The %s field must contain a number greater than zero.',
    ip: 'The %s field must contain a valid IP.',
    valid_base64: 'The %s field must contain a base64 string.',
    valid_credit_card: 'The %s field must contain a valid credit card number.',
    is_file_type: 'The %s field must contain only %s files.',
    valid_url: 'The %s field must contain a valid URL.',
    greater_than_date: 'The %s field must contain a more recent date than %s.',
    less_than_date: 'The %s field must contain an older date than %s.',
    greater_than_or_equal_date: 'The %s field must contain a date that\'s at least as recent as %s.',
    less_than_or_equal_date: 'The %s field must contain a date that\'s %s or older.',
    mobile: '请输入正确的手机号码',
    custom: '请输入正确制',
};
function createValidation(validate, error) {
    return {
        validate: validate,
        error: error
    };
}
function calc(value) {
    if (typeof value == 'function') {
        return value();
    }
    return value;
}
/**
 * 表单验证规则
 */
exports.rules = {
    /**
     * 验证必填字段
     * @param error 错误提示文字
     */
    required(error) {
        let validate = (value) => value != '';
        return createValidation(validate, error || msgs.required);
    },
    /**
     * 验证两个字段值是否相等
     * @param otherElement 另外一个字段
     * @param error 错误提示文字
     */
    matches(otherElement, error) {
        var validate = (value) => value == otherElement.value;
        return createValidation(validate, error || msgs.required);
    },
    /**
     * 验证邮箱
     * @param error 错误提示文字
     */
    email(error) {
        var validate = (value) => emailRegex.test(value);
        return createValidation(validate, error || msgs.required);
    },
    /**
     * 验证字段最小长度
     * @param length 最小长度
     * @param error 错误提示文字
     */
    minLength(length, error) {
        var validate = (value) => (value || '').length >= calc(length);
        return createValidation(validate, error || msgs.minLength);
    },
    /**
     * 验证字段的最大长度
     * @param length 最大长度
     * @param error 错误提示文字
     */
    maxLength(length, error) {
        var validate = (value) => (value || '').length <= calc(length);
        return createValidation(validate, error || msgs.matches);
    },
    /**
     * 验证字段大于指定的值
     * @param value 指定的值
     * @param error 错误提示文字
     */
    greaterThan(value, error) {
        var validate = (o) => elementValueCompare(o, calc(value)) == 'greaterThan';
        return createValidation(validate, error || msgs.greater_than);
    },
    /**
     * 验证字段小于指定的值
     * @param value 指定的值
     * @param error 错误提示文字
     */
    lessThan(value, error) {
        var validate = (o) => elementValueCompare(o, calc(value)) == 'lessThan';
        return createValidation(validate, error || msgs.less_than);
    },
    /**
     * 验证字段等于指定的值
     * @param value 指定的值
     * @param error 错误提示文字
     */
    equal(value, error) {
        var validate = (o) => elementValueCompare(o, calc(value)) == 'equal';
        return createValidation(validate, error || msgs.equal);
    },
    /**
     * 验证字段为 IP
     * @param error 错误提示文字
     */
    ip(error) {
        var validate = (value) => ipRegex.test(value);
        return createValidation(validate, error || msgs.ip);
    },
    /**
     * 验证字段为 URL
     * @param error 错误提示文字
     */
    url(error) {
        var validate = (value) => urlRegex.test(value);
        return createValidation(validate, error || msgs.valid_url);
    },
    /**
     * 验证字段为手机号码
     * @param error 错误提示文字
     */
    mobile(error) {
        var validate = (value) => mobileRegex.test(value);
        return createValidation(validate, error || msgs.mobile);
    },
    /**
     * 验证字段为数字
     * @param error 错误提示文字
     */
    numeric(error) {
        var validate = (value) => numericRegex.test(value);
        return createValidation(validate, error || msgs.numeric);
    },
    /**
     * 自定义验证
     * @param validate 自定义验证的方法
     * @param error 错误提示文字
     */
    custom(validate, error) {
        return createValidation(validate, error || msgs.custom);
    }
};
function elementValueCompare(value, otherValue) {
    let elementValue;
    if (typeof otherValue == 'number') {
        elementValue = decimalRegex.test(value) ? parseFloat(value) : null;
    }
    else if (typeof otherValue == 'string') {
        elementValue = value;
    }
    else {
        elementValue = getValidDate(value);
    }
    if (elementValue < otherValue)
        return 'lessThan';
    else if (elementValue > otherValue)
        return 'greaterThan';
    else
        return 'equal';
}
/**
 * private function _getValidDate: helper function to convert a string date to a Date object
 * @param date (String) must be in format yyyy-mm-dd or use keyword: today
 * @returns {Date} returns false if invalid
 */
function getValidDate(date) {
    if (!date.match('today') && !date.match(dateRegex)) {
        return null;
    }
    var validDate = new Date(), validDateArray;
    if (!date.match('today')) {
        validDateArray = date.split('-');
        validDate.setFullYear(validDateArray[0]);
        validDate.setMonth(validDateArray[1] - 1);
        validDate.setDate(validDateArray[2]);
    }
    return validDate;
}
;
// }


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/node_modules/maishu-toolkit/out/callback.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/maishu-jueying-core/node_modules/maishu-toolkit/out/callback.js ***!
  \**************************************************************************************/
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

/***/ "./node_modules/maishu-jueying-core/out/component-container.js":
/*!*********************************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/component-container.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentContainer = void 0;
const React = __webpack_require__(/*! react */ "react");
const components_1 = __webpack_require__(/*! ./components */ "./node_modules/maishu-jueying-core/out/components/index.js");
const parse_component_data_1 = __webpack_require__(/*! ./parse-component-data */ "./node_modules/maishu-jueying-core/out/parse-component-data.js");
/** 组件容器，实现组件的渲染 */
class ComponentContainer extends React.Component {
    renderChild(componentData) {
        return React.createElement(React.Fragment, { key: componentData.id }, parse_component_data_1.parseComponentData(componentData));
    }
    render() {
        return React.createElement(components_1.PageContext.Consumer, null, args => {
            var _a;
            let children = ((_a = args.pageData) === null || _a === void 0 ? void 0 : _a.children.filter(o => o.parentId == this.props.id)) || [];
            return React.createElement("div", { className: this.props.className, style: this.props.style }, children.map(o => this.renderChild(o)));
        });
    }
}
exports.ComponentContainer = ComponentContainer;
ComponentContainer.contextType = components_1.PageContext;
//# sourceMappingURL=component-container.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/components/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/components/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PageBody = exports.PageFooter = exports.PageHeader = exports.PageContext = exports.Page = void 0;
var page_1 = __webpack_require__(/*! ./page */ "./node_modules/maishu-jueying-core/out/components/page.js");
Object.defineProperty(exports, "Page", { enumerable: true, get: function () { return page_1.Page; } });
Object.defineProperty(exports, "PageContext", { enumerable: true, get: function () { return page_1.PageContext; } });
var page_header_1 = __webpack_require__(/*! ./page-header */ "./node_modules/maishu-jueying-core/out/components/page-header.js");
Object.defineProperty(exports, "PageHeader", { enumerable: true, get: function () { return page_header_1.PageHeader; } });
var page_footer_1 = __webpack_require__(/*! ./page-footer */ "./node_modules/maishu-jueying-core/out/components/page-footer.js");
Object.defineProperty(exports, "PageFooter", { enumerable: true, get: function () { return page_footer_1.PageFooter; } });
var page_body_1 = __webpack_require__(/*! ./page-body */ "./node_modules/maishu-jueying-core/out/components/page-body.js");
Object.defineProperty(exports, "PageBody", { enumerable: true, get: function () { return page_body_1.PageBody; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/components/page-body.js":
/*!**********************************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/components/page-body.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PageBody = void 0;
// import { component } from "./decorators";
const React = __webpack_require__(/*! react */ "react");
const component_container_1 = __webpack_require__(/*! ../component-container */ "./node_modules/maishu-jueying-core/out/component-container.js");
const page_1 = __webpack_require__(/*! ./page */ "./node_modules/maishu-jueying-core/out/components/page.js");
const page_header_1 = __webpack_require__(/*! ./page-header */ "./node_modules/maishu-jueying-core/out/components/page-header.js");
const page_footer_1 = __webpack_require__(/*! ./page-footer */ "./node_modules/maishu-jueying-core/out/components/page-footer.js");
const register_1 = __webpack_require__(/*! ../register */ "./node_modules/maishu-jueying-core/out/register.js");
// @component({ type: PageBody.typeName })
class PageBody extends React.Component {
    render() {
        return React.createElement(page_1.PageContext.Consumer, null, args => {
            let style = { marginTop: 0 };
            if (args.pageData != null) {
                let header = args.pageData.children.filter(o => o.type == page_header_1.PageHeader.typeName)[0];
                let footer = args.pageData.children.filter(o => o.type == page_footer_1.PageFooter.typeName)[0];
                if (header != null && header.props.visible) {
                    let p = header.props;
                    style.marginTop = p.height;
                    style.height = `calc(100% - ${p.height}px)`;
                }
                if (footer != null && footer.props.visible) {
                    let p = footer.props;
                    style.marginBottom = p.height;
                    style.height = `calc(100% - ${style.marginTop + p.height}px)`;
                }
            }
            style.display = this.props.visible ? "" : "none";
            return React.createElement(component_container_1.ComponentContainer, Object.assign({ className: PageBody.className }, this.props, { style: style }));
        });
    }
}
exports.PageBody = PageBody;
PageBody.typeName = "section";
PageBody.className = "body";
PageBody.id = "page-body";
PageBody.defaultProps = { id: PageBody.id, visible: true };
PageBody.contextType = page_1.PageContext;
register_1.registerComponent(PageBody.typeName, PageBody);
//# sourceMappingURL=page-body.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/components/page-footer.js":
/*!************************************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/components/page-footer.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PageFooter = void 0;
// import { component } from "./decorators";
const React = __webpack_require__(/*! react */ "react");
const component_container_1 = __webpack_require__(/*! ../component-container */ "./node_modules/maishu-jueying-core/out/component-container.js");
const register_1 = __webpack_require__(/*! ../register */ "./node_modules/maishu-jueying-core/out/register.js");
// @component({ type: PageFooter.typeName })
class PageFooter extends React.Component {
    render() {
        let style = this.props.style || {};
        Object.assign({}, style, { height: this.props.height, display: this.props.visible ? "" : "none" });
        return React.createElement(component_container_1.ComponentContainer, { id: this.props.id, className: PageFooter.className, style: style });
    }
}
exports.PageFooter = PageFooter;
PageFooter.typeName = "footer";
PageFooter.className = "footer";
PageFooter.id = "page-footer";
PageFooter.defaultProps = { id: PageFooter.id, height: 50, visible: true };
register_1.registerComponent(PageFooter.typeName, PageFooter);
//# sourceMappingURL=page-footer.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/components/page-header.js":
/*!************************************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/components/page-header.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHeader = void 0;
// import { component } from "./decorators";
const React = __webpack_require__(/*! react */ "react");
const component_container_1 = __webpack_require__(/*! ../component-container */ "./node_modules/maishu-jueying-core/out/component-container.js");
const register_1 = __webpack_require__(/*! ../register */ "./node_modules/maishu-jueying-core/out/register.js");
// @component({ type: PageHeader.typeName })
class PageHeader extends React.Component {
    render() {
        let style = this.props.style || {};
        Object.assign({}, style, { height: this.props.height, display: this.props.visible ? "" : "none" });
        return React.createElement(component_container_1.ComponentContainer, { id: this.props.id, className: PageHeader.className, style: style });
    }
}
exports.PageHeader = PageHeader;
PageHeader.typeName = "header";
PageHeader.className = "header";
PageHeader.id = "page-header";
PageHeader.defaultProps = { height: 50, visible: true, id: PageHeader.id };
register_1.registerComponent(PageHeader.typeName, PageHeader);
//# sourceMappingURL=page-header.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/components/page.js":
/*!*****************************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/components/page.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _components;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = exports.PageContext = void 0;
const React = __webpack_require__(/*! react */ "react");
const register_1 = __webpack_require__(/*! ../register */ "./node_modules/maishu-jueying-core/out/register.js");
// import { component } from "./decorators";
const parse_component_data_1 = __webpack_require__(/*! ../parse-component-data */ "./node_modules/maishu-jueying-core/out/parse-component-data.js");
const callback_1 = __webpack_require__(/*! maishu-toolkit/out/callback */ "./node_modules/maishu-jueying-core/node_modules/maishu-toolkit/out/callback.js");
exports.PageContext = React.createContext({});
// @component({ type: Page.typeName })
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.childComponentCreated = new callback_1.Callback();
        _components.set(this, {});
    }
    get components() {
        return __classPrivateFieldGet(this, _components);
    }
    render() {
        let pageStyle = {};
        let pageData = this.props.pageData;
        pageData.children.forEach(c => {
            c.props.ref = (e) => {
                if (e == null)
                    return;
                if (__classPrivateFieldGet(this, _components)[c.id] == null)
                    this.childComponentCreated.fire({ component: e, id: c.id });
                __classPrivateFieldGet(this, _components)[c.id] = e || __classPrivateFieldGet(this, _components)[c.id];
            };
        });
        let children = pageData.children.filter(o => o.parentId == pageData.id);
        let childComponents = children.map(o => React.createElement(React.Fragment, { key: o.id }, parse_component_data_1.parseComponentData(o)));
        return React.createElement("div", { className: `${Page.className}`, style: pageStyle },
            React.createElement(exports.PageContext.Provider, { value: { page: this, pageData } }, childComponents));
    }
}
exports.Page = Page;
_components = new WeakMap();
Page.typeName = "article";
Page.className = "page-view";
//========================================================
// 兼容旧代码
register_1.registerComponent("PageView", Page);
//========================================================
register_1.registerComponent(Page.typeName, Page);
//# sourceMappingURL=page.js.map

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
exports.errors = {
    pathFieldRequired(name) {
        let msg = `Path field of '${name}' component config can not be null or empty.`;
        return new Error(msg);
    },
    canntFindModule(name, path) {
        let msg = `Can not find component '${name}' in the module, module path is: '${path}'.`;
        return new Error(msg);
    },
    componentTypeNotExists(name) {
        let msg = `Component '${name}' not exists.`;
        return new Error(msg);
    },
    argumentNull(name) {
        let msg = `Argument '${name}' can not be null or empty.`;
        return new Error(msg);
    }
};
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentContainer = exports.PageBody = exports.PageFooter = exports.PageHeader = exports.Page = exports.componentTypes = exports.registerComponent = exports.parseComponentData = void 0;
var parse_component_data_1 = __webpack_require__(/*! ./parse-component-data */ "./node_modules/maishu-jueying-core/out/parse-component-data.js");
Object.defineProperty(exports, "parseComponentData", { enumerable: true, get: function () { return parse_component_data_1.parseComponentData; } });
var register_1 = __webpack_require__(/*! ./register */ "./node_modules/maishu-jueying-core/out/register.js");
Object.defineProperty(exports, "registerComponent", { enumerable: true, get: function () { return register_1.registerComponent; } });
Object.defineProperty(exports, "componentTypes", { enumerable: true, get: function () { return register_1.componentTypes; } });
var index_1 = __webpack_require__(/*! ./components/index */ "./node_modules/maishu-jueying-core/out/components/index.js");
Object.defineProperty(exports, "Page", { enumerable: true, get: function () { return index_1.Page; } });
Object.defineProperty(exports, "PageHeader", { enumerable: true, get: function () { return index_1.PageHeader; } });
Object.defineProperty(exports, "PageFooter", { enumerable: true, get: function () { return index_1.PageFooter; } });
Object.defineProperty(exports, "PageBody", { enumerable: true, get: function () { return index_1.PageBody; } });
var component_container_1 = __webpack_require__(/*! ./component-container */ "./node_modules/maishu-jueying-core/out/component-container.js");
Object.defineProperty(exports, "ComponentContainer", { enumerable: true, get: function () { return component_container_1.ComponentContainer; } });
__webpack_require__(/*! ./style */ "./node_modules/maishu-jueying-core/out/style.js");
//# sourceMappingURL=index.js.map

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
const React = __webpack_require__(/*! react */ "react");
const register_1 = __webpack_require__(/*! ./register */ "./node_modules/maishu-jueying-core/out/register.js");
const errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/maishu-jueying-core/out/errors.js");
function parseComponentData(componentData) {
    let type = register_1.componentTypes[componentData.type];
    if (type == null) {
        throw errors_1.errors.componentTypeNotExists(componentData.type);
    }
    let children = [];
    if (componentData.children != null) {
        children = componentData.children.map(c => typeof c == "string" ? c : parseComponentData(c));
    }
    return React.createElement(type, componentData.props, ...children);
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
//# sourceMappingURL=register.js.map

/***/ }),

/***/ "./node_modules/maishu-jueying-core/out/style.js":
/*!*******************************************************!*\
  !*** ./node_modules/maishu-jueying-core/out/style.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isFixed = exports.isVisible = void 0;
const components_1 = __webpack_require__(/*! ./components */ "./node_modules/maishu-jueying-core/out/components/index.js");
let elementId = "maishu-jueying-core-style";
if (!document.getElementById(elementId) && document.head != null) {
    let element = document.createElement('style');
    element.type = 'text/css';
    element.id = elementId;
    document.head.appendChild(element);
    element.innerHTML = `
    .${components_1.Page.className} {
        width   : 100%;
        height  : 100%;
        position: absolute;
    }
    
    .${components_1.Page.className} .${components_1.PageBody.className} {
        overflow-y: auto;
        overflow-x: hidden;
        height  : 100%;
    }
    
    .${components_1.Page.className} .${components_1.PageBody.className}::-webkit-scrollbar-track-piece {
        background-color: #fff;
    }
    
    .${components_1.Page.className} .${components_1.PageBody.className}::-webkit-scrollbar {
        width: 4px;
    }
    
    .${components_1.Page.className} .${components_1.PageBody.className}::-webkit-scrollbar-thumb {
        background: #999;
    }
    
    .${components_1.Page.className} .${components_1.PageHeader.className} {
        position: absolute;
        top     : 0px;
        width   : 100%;
    }
    
    .${components_1.Page.className} .${components_1.PageFooter.className} {
        position: absolute;
        bottom  : 0px;
        width   : 100%;
        margin  : 0;
    }
    `;
}
function isVisible(style) {
    if (!style.display)
        return true;
    return style.display != "none";
}
exports.isVisible = isVisible;
function isFixed(style) {
    return style.position == "fixed" || style.position == "absolute";
}
exports.isFixed = isFixed;
//# sourceMappingURL=style.js.map

/***/ }),

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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

exports.guid = guid;

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

/***/ "./out-es5/component-data-handler.js":
/*!*******************************************!*\
  !*** ./out-es5/component-data-handler.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentDataHandler = void 0;

var errors_1 = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

var maishu_toolkit_1 = __webpack_require__(/*! maishu-toolkit */ "./node_modules/maishu-toolkit/out/index.js");

var ComponentDataHandler =
/*#__PURE__*/
function () {
  function ComponentDataHandler(componentData) {
    _classCallCheck(this, ComponentDataHandler);

    this._components = {};
    this.componentSelected = maishu_toolkit_1.Callback.create();
    this.componentRemoved = maishu_toolkit_1.Callback.create();
    this.componentAppend = maishu_toolkit_1.Callback.create();
    this.componentUpdated = maishu_toolkit_1.Callback.create();
    this.pageDataChanged = maishu_toolkit_1.Callback.create();
    this._pageData = componentData;
    this.initComponentData(this._pageData);
  }
  /** 对 pageData 字段补全 */


  _createClass(ComponentDataHandler, [{
    key: "initComponentData",
    value: function initComponentData(componentData) {
      if (componentData == null) {
        return;
      }

      componentData.children = componentData.children || [];
      ComponentDataHandler.fillComponent(componentData);
      ComponentDataHandler.setComponetRefProp(componentData, this._components);
    }
    /** 获取已选择了的组件 */

  }, {
    key: "moveComponent",

    /**
     * 移动控件到另外一个控件容器
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param beforeChildId 组件的前一个子组件编号
     */
    value: function moveComponent(componentId, parentId, childComponentIndex) {
      var component = this.findComponentData(componentId);
      if (component == null) throw new Error("Cannt find component by id ".concat(componentId));
      console.assert(component != null, "Cannt find component by id ".concat(componentId));
      var pageData = this.pageData;
      console.assert(pageData.children != null);
      var children = pageData.children; //translateComponentDataChildren(pageData.children);

      this.removeComponentFrom(componentId, children);
      this.appendComponent(parentId, component, childComponentIndex);
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

      this.componentUpdated.fire(componentDatas);
    }
  }, {
    key: "findComponentData",
    value: function findComponentData(componentId) {
      var pageData = this._pageData;
      if (!pageData) throw errors_1.Errors.pageDataIsNull(); // let stack = new Array<ComponentData>();
      // stack.push(pageData);
      // while (stack.length > 0) {
      //     let item = stack.pop();
      //     if (item == null)
      //         continue
      //     if (item.props.id == componentId)
      //         return item;
      //     let children = (item.children || []).filter(o => typeof o == 'object') as ComponentData[]
      //     stack.push(...children);
      // }

      var componentDatas = ComponentDataHandler.travelComponentData(pageData, function (item) {
        return item.id == componentId;
      });
      return componentDatas[0];
    }
  }, {
    key: "removeComponentFrom",
    value: function removeComponentFrom(controlId, collection) {
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
        for (var _i2 = 0; _i2 < collection.length; _i2++) {
          var o = collection[_i2];
          if (typeof o == "string") continue;
          var children = o.children;

          if (children && children.length > 0) {
            var isRemoved = this.removeComponentFrom(controlId, children);

            if (isRemoved) {
              return true;
            }
          }
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
    key: "appendComponent",

    /**
     * 添加控件
     * @param parentId 父控件编号
     * @param componentData 控件数据
     * @param componentIndex 新添加组件在子组件中的次序
     */
    value: function appendComponent(parentId, componentData, componentIndex) {
      if (!parentId) throw errors_1.Errors.argumentNull('parentId');
      if (!componentData) throw errors_1.Errors.argumentNull('childComponent');
      this.initComponentData(componentData);
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
      this.componentAppend.fire(this);
    }
    /**
     * 对组件及其子控件进行命名
     * @param component
     */

  }, {
    key: "selectComponent",

    /**
     * 选择指定的控件
     * @param control 指定的控件
     */
    value: function selectComponent(componentId) {
      return this.selectComponents(componentId);
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
      stack.push(this._pageData);

      while (stack.length > 0) {
        var item = stack.pop();
        if (item == null || typeof item == "string") continue;
        var isSelectedControl = componentIds.indexOf(item.id) >= 0;
        item.selected = isSelectedControl;
        (item.children || []).forEach(function (child) {
          if (typeof child == "string") return true;
          stack.push(child);
        });
      }

      this.componentSelected.fire(this.selectedComponentIds);
    }
  }, {
    key: "removeComponent",
    value: function removeComponent(componentId) {
      return this.removeComponents([componentId]);
    }
    /** 移除控件 */

  }, {
    key: "removeComponents",
    value: function removeComponents(componentIds) {
      var _this = this;

      var pageData = this.pageData;
      if (!pageData || !pageData.children || pageData.children.length == 0) return;
      var children = pageData.children;
      componentIds.forEach(function (controlId) {
        _this.removeComponentFrom(controlId, children);
      });
      this.componentRemoved.fire(componentIds);
    }
  }, {
    key: "selectedComponents",
    get: function get() {
      var arr = new Array();
      var stack = new Array();
      stack.push(this._pageData);

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
    /** 获取已选择了的组件编号 */

  }, {
    key: "selectedComponentIds",
    get: function get() {
      return this.selectedComponents.map(function (o) {
        return o.id;
      });
    }
    /**  */

  }, {
    key: "components",
    get: function get() {
      return this._components;
    }
  }, {
    key: "pageData",
    get: function get() {
      return this._pageData;
    },
    set: function set(value) {
      this._pageData = value;
      this.initComponentData(value);
      this.pageDataChanged.fire(value);
    }
  }], [{
    key: "travelComponentData",
    value: function travelComponentData(pageData, filter) {
      var stack = new Array();
      stack.push(pageData);
      var r = []; // return new Promise((resolve, reject) => {

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
  }, {
    key: "fillComponent",
    value: function fillComponent(component) {
      var namedComponents = {}; // let props: any = component.props = component.props || {};
      //==================================================
      // 兼容旧版本代码
      // if (props.id) {
      //     component.id = props.id;
      //     delete props.id;
      // }
      // if (props.parentId) {
      //     component.parentId = props.parentId;
      //     delete component.parentId;
      // }
      // if (props.selected) {
      //     component.selected = props.selected;
      // }
      // if (props.name) {
      //     component.name = props.name;
      //     delete props.name;
      // }
      // if (props.attr) {
      //     component.attr = props.attr;
      //     delete props.attr;
      // }
      //==================================================

      if (!component["name"]) {
        var num = 0;
        var name;

        do {
          num = num + 1;
          name = "".concat(component.type).concat(num);
        } while (namedComponents[name]);

        namedComponents[name] = component;
        component["name"] = name;
      }

      if (!component.id) component.id = maishu_toolkit_1.guid();
      component.children = component.children || [];

      if (!component.children || component.children.length == 0) {
        return;
      }

      component.children.forEach(function (child) {
        if (typeof child == "string") return true;
        ComponentDataHandler.fillComponent(child);
      });
    }
  }, {
    key: "setComponetRefProp",
    value: function setComponetRefProp(pageData, components) {
      //=========================================================
      // 纪录当前 pageData 控件 ID
      var componentIds = {}; //=========================================================

      ComponentDataHandler.travelComponentData(pageData).forEach(function (item) {
        var itemProps = item.props || {};
        console.assert(item.props != null && item.id != null);
        componentIds[item.type] = componentIds[item.type] || [];
        componentIds[item.type].push(item.id);
        var itemRef = itemProps.ref;

        itemProps.ref = function (e) {
          if (e != null) {
            components[item.type] = components[item.type] || [];
            components[item.type].push(e);
          }

          if (typeof itemRef == "function") itemRef(e);
        };
      }); //=========================================================
      // 仅保留 componentIds 中的控件 

      var names = Object.getOwnPropertyNames(components);

      var _loop = function _loop(i) {
        var typename = names[i];
        var ids = componentIds[typename] || [];
        components[typename] = (components[typename] || []).filter(function (o) {
          return ids.indexOf(o["id"] || o.props["id"]) >= 0;
        });
      };

      for (var i = 0; i < names.length; i++) {
        _loop(i);
      } //=========================================================

    }
  }]);

  return ComponentDataHandler;
}();

exports.ComponentDataHandler = ComponentDataHandler;
//# sourceMappingURL=component-data-handler.js.map


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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

var property_editor_1 = __webpack_require__(/*! ./property-editor */ "./out-es5/property-editor.js");

var maishu_jueying_core_1 = __webpack_require__(/*! maishu-jueying-core */ "./node_modules/maishu-jueying-core/out/index.js"); // type CreateElementContext = { components: React.Component[], componentTypes: string[] };
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
          displayName = options.displayName,
          defaultValue = options.defaultValue,
          validation = options.validation;
      group = group || property_editor_1.defaultGroupName;
      propName = propName || "";
      displayName = displayName || propName; // 属性可能为导航属性,例如 style.width

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
      return maishu_jueying_core_1.registerComponent(typeName, componentType);
    }
  }]);

  return Component;
}();

exports.Component = Component; //==========================================
// 用于创建 React 的 React.Fragment 

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


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorPanel = void 0;

var React = __webpack_require__(/*! react */ "react");

var property_editor_1 = __webpack_require__(/*! ./property-editor */ "./out-es5/property-editor.js");

var style_1 = __webpack_require__(/*! ./style */ "./out-es5/style.js");

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

/***/ "./out-es5/errors.js":
/*!***************************!*\
  !*** ./out-es5/errors.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Errors = void 0;

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
exports.ComponentDataHandler = exports.classNames = exports.TextInput = exports.PropEditor = exports.DesignerContext = exports.PageDesigner = exports.EditorPanel = exports.Component = exports.groupDisplayNames = void 0;

var common_1 = __webpack_require__(/*! ./common */ "./out-es5/common.js");

Object.defineProperty(exports, "groupDisplayNames", {
  enumerable: true,
  get: function get() {
    return common_1.groupDisplayNames;
  }
});

var component_1 = __webpack_require__(/*! ./component */ "./out-es5/component.js");

Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function get() {
    return component_1.Component;
  }
});

var editor_panel_1 = __webpack_require__(/*! ./editor-panel */ "./out-es5/editor-panel.js");

Object.defineProperty(exports, "EditorPanel", {
  enumerable: true,
  get: function get() {
    return editor_panel_1.EditorPanel;
  }
});

var page_designer_1 = __webpack_require__(/*! ./page-designer */ "./out-es5/page-designer.js");

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

var prop_editor_1 = __webpack_require__(/*! ./prop-editor */ "./out-es5/prop-editor.js");

Object.defineProperty(exports, "PropEditor", {
  enumerable: true,
  get: function get() {
    return prop_editor_1.PropEditor;
  }
});
Object.defineProperty(exports, "TextInput", {
  enumerable: true,
  get: function get() {
    return prop_editor_1.TextInput;
  }
});

var style_1 = __webpack_require__(/*! ./style */ "./out-es5/style.js");

Object.defineProperty(exports, "classNames", {
  enumerable: true,
  get: function get() {
    return style_1.classNames;
  }
});

var component_data_handler_1 = __webpack_require__(/*! ./component-data-handler */ "./out-es5/component-data-handler.js");

Object.defineProperty(exports, "ComponentDataHandler", {
  enumerable: true,
  get: function get() {
    return component_data_handler_1.ComponentDataHandler;
  }
});
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./out-es5/page-designer.js":
/*!**********************************!*\
  !*** ./out-es5/page-designer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageDesigner = exports.DesignerContext = void 0;

var React = __webpack_require__(/*! react */ "react");

var errors_1 = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

var maishu_toolkit_1 = __webpack_require__(/*! maishu-toolkit */ "./node_modules/maishu-toolkit/out/index.js");

exports.DesignerContext = React.createContext({
  designer: null
});

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

      pageData.children = pageData.children || [];
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

      if (!component["name"]) {
        var num = 0;
        var name;

        do {
          num = num + 1;
          name = "".concat(component.type).concat(num);
        } while (namedComponents[name]);

        namedComponents[name] = component;
        component["name"] = name;
      }

      if (!component.id) component.id = maishu_toolkit_1.guid();
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
      if (!parentId) throw errors_1.Errors.argumentNull('parentId');
      if (!componentData) throw errors_1.Errors.argumentNull('childComponent');
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
     * 选择指定的控件，一个或多个。已经选择的控件取消选择。
     * @param control 指定的控件
     */

  }, {
    key: "selectComponents",
    value: function selectComponents(componentIds) {
      if (typeof componentIds == 'string') componentIds = [componentIds];
      var selectedComponentIds = this.selectedComponentIds;
      if (this.isSame(componentIds, selectedComponentIds)) return;
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
    /** 判断两个字符串数组是否相等 */

  }, {
    key: "isSame",
    value: function isSame(arr1, arr2) {
      if (arr1.length != arr2.length) return false;

      for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) < 0) return false;
      }

      return true;
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
      if (!pageData) throw errors_1.Errors.pageDataIsNull();
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
      }, React.createElement(exports.DesignerContext.Provider, {
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
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = exports.PropEditor = void 0;

var React = __webpack_require__(/*! react */ "react");

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


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorBoundary = exports.PropertyEditor = exports.defaultGroupName = void 0;

var React = __webpack_require__(/*! react */ "react");

var component_1 = __webpack_require__(/*! ./component */ "./out-es5/component.js");

var errors_1 = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

var page_designer_1 = __webpack_require__(/*! ./page-designer */ "./out-es5/page-designer.js");

var common_1 = __webpack_require__(/*! ./common */ "./out-es5/common.js");

var maishu_dilu_1 = __webpack_require__(/*! maishu-dilu */ "./node_modules/maishu-dilu/dist/index.js");

exports.defaultGroupName = "";

var PropertyEditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PropertyEditor, _React$Component);

  function PropertyEditor(props) {
    var _this;

    _classCallCheck(this, PropertyEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyEditor).call(this, props));
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
        var propEditorInfos = component_1.Component.getPropEditors(componentData);

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
        delete controlProps.children;

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
                  name: o.propName
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

      for (var _i = 0; _i < commonPropEditorInfos.length; _i++) {
        _loop2(_i);
      }

      return editors;
    }
  }, {
    key: "propValue",
    value: function propValue(propName, props) {
      if (!propName) throw errors_1.Errors.argumentNull("propName");
      if (!props) throw errors_1.Errors.argumentNull("props");
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
exports.removeClassName = exports.appendClassName = exports.classNames = void 0;

var errors_1 = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");

exports.classNames = {
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
  if (element == null) throw errors_1.Errors.argumentNull('element');
  if (!addonClassName) throw errors_1.Errors.argumentNull('addonClassName');
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