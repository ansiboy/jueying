/*!
 * 
 *  maishu-jueying v4.2.11
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
})(typeof window === 'undefined' ? global : window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
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

/***/ "./out/common/constants.js":
/*!*********************************!*\
  !*** ./out/common/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.constants = void 0;
exports.constants = {
    componentsDir: 'components',
    connectorElementClassName: 'component-container',
    componentTypeName: 'data-component-name',
    componentData: 'component-data',
    componentPosition: "component-position",
    /** 设计时组件工厂 */
    designComponentFactoryName: "h"
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./out/common/index.js":
/*!*****************************!*\
  !*** ./out/common/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.constants = void 0;
var constants_1 = __webpack_require__(/*! ./constants */ "./out/common/constants.js");
Object.defineProperty(exports, "constants", { enumerable: true, get: function () { return constants_1.constants; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./out/data/data-list.js":
/*!*******************************!*\
  !*** ./out/data/data-list.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DataList = void 0;
const callback_1 = __webpack_require__(/*! maishu-toolkit/out/callback */ "./node_modules/maishu-toolkit/out/callback.js");
const errors_1 = __webpack_require__(/*! ../errors */ "./out/errors.js");
class DataList {
    constructor() {
        this.items = [];
        this.added = new callback_1.Callback();
        this.removed = new callback_1.Callback();
    }
    add(element) {
        if (!element)
            throw errors_1.errors.argumentNull("element");
        this.items.push(element);
        this.added.fire({ sender: this, dataItem: element });
    }
    contains(element) {
        if (!element)
            throw errors_1.errors.argumentNull("element");
        return this.items.indexOf(element) >= 0;
    }
    remove(element) {
        if (!element)
            throw errors_1.errors.argumentNull("element");
        this.items = this.items.filter(o => o != element);
        this.removed.fire({ sender: this, dataItem: element });
    }
    each(callback) {
        if (!callback)
            throw errors_1.errors.argumentNull("element");
        for (let i = 0; i < this.items.length; i++)
            callback(this.items[i], i);
    }
    get count() {
        return this.items.length;
    }
    map(callback) {
        return this.items.map(o => callback(o));
    }
}
exports.DataList = DataList;
//# sourceMappingURL=data-list.js.map

/***/ }),

/***/ "./out/design/component-diagram.js":
/*!*****************************************!*\
  !*** ./out/design/component-diagram.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentDiagram = void 0;
const errors_1 = __webpack_require__(/*! ../errors */ "./out/errors.js");
const React = __importStar(__webpack_require__(/*! react */ "react"));
const designer_1 = __webpack_require__(/*! ../designer */ "./out/designer.js");
const runtime_1 = __webpack_require__(/*! ../runtime */ "./out/runtime/index.js");
const parse_design_component_data_1 = __webpack_require__(/*! ./parse-design-component-data */ "./out/design/parse-design-component-data.js");
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
    get element() {
        return this._element;
    }
    render() {
        return React.createElement(designer_1.DesignerContext.Consumer, null, args => {
            if (!args)
                throw errors_1.errors.contextArgumentNull();
            let designer = args.designer;
            let componentTypes = args.designer.componentTypes;
            return (0, runtime_1.parsePageData)(designer.pageData, componentTypes, parse_design_component_data_1.createDesigntimeComponent);
        });
    }
}
exports.ComponentDiagram = ComponentDiagram;
//# sourceMappingURL=component-diagram.js.map

/***/ }),

/***/ "./out/design/component-panel.js":
/*!***************************************!*\
  !*** ./out/design/component-panel.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentPanel = exports.ComponentPanelContext = void 0;
const errors_1 = __webpack_require__(/*! ../errors */ "./out/errors.js");
const React = __importStar(__webpack_require__(/*! react */ "react"));
const designer_1 = __webpack_require__(/*! ../designer */ "./out/designer.js");
const style_1 = __webpack_require__(/*! ../style */ "./out/style.js");
const strings_1 = __webpack_require__(/*! ../strings */ "./out/strings.js");
const sortablejs_1 = __importDefault(__webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js"));
const utility_1 = __webpack_require__(/*! ../utility */ "./out/utility/index.js");
const GROUP = "shared";
const DATA_TYPE = "data-type";
exports.ComponentPanelContext = React.createContext(null);
/** 组件面板 */
class ComponentPanel extends React.Component {
    constructor() {
        super(...arguments);
        this.dropTargets = [];
        this.sortables = [];
    }
    static renderItem(typeName, componentConfig) {
        let displayName = componentConfig.displayName || typeName;
        return React.createElement("li", { key: typeName, ref: e => e ? e.setAttribute(DATA_TYPE, typeName) : null },
            React.createElement("i", { className: componentConfig.icon }),
            React.createElement("div", null, displayName));
    }
    get element() {
        return this._element;
    }
    getComponentData(ui, componentDataFactory) {
        if (!ui)
            throw errors_1.errors.argumentNull("ui");
        if (!ui.item) {
            throw new Error("Not supported.");
        }
        let dataType = ui.item.getAttribute(DATA_TYPE);
        let c = dataType ? componentDataFactory(dataType) : componentDataFactory(ui.item);
        return c;
    }
    ref(e, args) {
        if (!e)
            return;
        this._element = e;
        let elements = args.designer.componentPanels.map(o => o.element);
        if (elements.indexOf(e) < 0) {
            args.designer.componentPanels.add(this);
        }
    }
    componentDidMount() {
        this.sortable = new sortablejs_1.default(this.element, {
            group: {
                name: GROUP,
                pull: "clone",
                put: false,
            },
            animation: 150,
            sort: false,
        });
    }
    appendDropTarget(element, designer, parentId, componentDataFactory) {
        if (!element)
            throw errors_1.errors.argumentNull("element");
        let elementIndex = this.dropTargets.indexOf(element);
        if (elementIndex >= 0)
            return this.sortables[elementIndex];
        let sortable = new sortablejs_1.default(element, {
            group: {
                name: GROUP,
            },
            animation: 150,
            onAdd: (evt) => {
                evt.preventDefault();
                evt.stopPropagation();
                let componentData = this.getComponentData(evt, componentDataFactory);
                let targetIndex;
                let parentElement = evt.item.parentElement;
                for (let i = 0; i < parentElement.children.length; i++) {
                    if (parentElement.children[i] == evt.item) {
                        targetIndex = i;
                        break;
                    }
                }
                designer.removeComponentIfExists(componentData.id);
                designer.appendComponent(componentData, parentId, targetIndex);
            },
            onSort(event) {
                if (event.item.getAttribute(DATA_TYPE))
                    return;
                let componentData = componentDataFactory(event.item);
                console.assert(componentData != null, "componentData is null");
                // debugger
                let r = utility_1.PageDataTravel.findComponentAndParent(designer.pageData, componentData.id);
                let parent = r.parent;
                // parent.children.splice(event.oldIndex || 0, 1)
                // parent.children.splice(event.newIndex || 0, 0, componentData)
                designer.moveComponent(componentData.id, parent.id, event.newIndex);
            },
        });
        this.dropTargets.push(element);
        this.sortables.push(sortable);
        return sortable;
    }
    render() {
        return React.createElement(exports.ComponentPanelContext.Provider, { value: { instance: this } },
            React.createElement(designer_1.DesignerContext.Consumer, null, args => {
                if (!args)
                    throw errors_1.errors.contextArgumentNull();
                let componentsConfig = args.designer.props.componentsConfig;
                let componentInfos = Object.keys(componentsConfig).filter(k => !componentsConfig[k].hidden)
                    .map(k => Object.assign({}, componentsConfig[k], { typeName: k }));
                let renderItem = this.props.renderItem || ComponentPanel.renderItem;
                renderItem.bind(this);
                return React.createElement("ul", { className: style_1.classNames.componentPanel, ref: e => this.ref(e, args) }, componentInfos.length > 0 ? componentInfos.map(o => renderItem(o.typeName, o)) :
                    React.createElement("li", { className: style_1.classNames.empty }, strings_1.strings.emptyCompoenntPanel));
            }));
    }
}
exports.ComponentPanel = ComponentPanel;
//# sourceMappingURL=component-panel.js.map

/***/ }),

/***/ "./out/design/components/create-info-component.js":
/*!********************************************************!*\
  !*** ./out/design/components/create-info-component.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInfoComponent = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
function createInfoComponent(text) {
    return class InfoComponent extends React.Component {
        render() {
            return React.createElement("div", { className: "text-center", style: { paddingTop: 20, paddingBottom: 20 } }, text);
        }
    };
}
exports.createInfoComponent = createInfoComponent;
//# sourceMappingURL=create-info-component.js.map

/***/ }),

/***/ "./out/design/components/create-loading-component.js":
/*!***********************************************************!*\
  !*** ./out/design/components/create-loading-component.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoadingComponent = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const strings_1 = __webpack_require__(/*! ../../strings */ "./out/strings.js");
function createLoadingComponent() {
    return class FakeComponent extends React.Component {
        render() {
            return React.createElement("div", { key: this.props.id, style: { padding: "50px 0 50px 0", textAlign: "center" } }, strings_1.strings.componentLoading);
        }
    };
}
exports.createLoadingComponent = createLoadingComponent;
//# sourceMappingURL=create-loading-component.js.map

/***/ }),

/***/ "./out/design/components/design-component-placeholder.js":
/*!***************************************************************!*\
  !*** ./out/design/components/design-component-placeholder.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignComponentPlaceHolder = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const designer_1 = __webpack_require__(/*! ../../designer */ "./out/designer.js");
const errors_1 = __webpack_require__(/*! ../../errors */ "./out/errors.js");
const strings_1 = __webpack_require__(/*! ../../strings */ "./out/strings.js");
const style_1 = __webpack_require__(/*! ../../style */ "./out/style.js");
const utility_1 = __webpack_require__(/*! ../../utility */ "./out/utility/index.js");
const parse_design_component_data_1 = __webpack_require__(/*! ../parse-design-component-data */ "./out/design/parse-design-component-data.js");
const CONTAINER_ID = "container_id";
const DATA_ID = "data-id";
class DesignComponentPlaceHolder extends React.Component {
    constructor(props) {
        super(props);
    }
    enableDrop(element, designer, componentId) {
        if (!element || this.element)
            return;
        this.element = element;
        designer.componentPanels.each((componentPanel) => {
            componentPanel.appendDropTarget(this.element, designer, componentId, (arg) => {
                if (typeof arg == "string") {
                    let componentType = arg;
                    return this.createComponentData(designer.pageData, componentType, this.props.id);
                }
                let element = arg;
                let dataId = element.getAttribute(DATA_ID);
                console.assert(dataId != null);
                let c = utility_1.PageDataTravel.findComponent(designer.pageData, dataId);
                c.props[CONTAINER_ID] = this.props.id;
                return c;
            });
        });
    }
    createComponentData(pageData, componentType, containerId) {
        let props = {};
        props[CONTAINER_ID] = containerId;
        let id = utility_1.PageDataTravel.generateId(pageData, componentType);
        let c = {
            id, type: componentType, props, children: []
        };
        return c;
    }
    render() {
        return React.createElement(designer_1.DesignComponentContext.Consumer, null, args => {
            if (!args)
                throw errors_1.errors.contextArgumentNull();
            let childComponentDatas = args.componentData.children.filter(o => o.props[CONTAINER_ID] == this.props.id);
            let className = this.props.className || "";
            return React.createElement("ul", { style: this.props.style, className: `${style_1.classNames.designComponentPlaceHolder} ${className}`, ref: e => this.enableDrop(e, args.designer, args.componentData.id) }, childComponentDatas.length > 0 ? childComponentDatas.map(c => React.createElement("li", { key: c.id, ref: e => {
                    if (!e)
                        return;
                    e.setAttribute(DATA_ID, c.id);
                }, onClick: e => {
                    e.preventDefault();
                    e.stopPropagation();
                    args.designer.selectComponent(c.id);
                } }, (0, parse_design_component_data_1.parseDesigntimeComponentData)(c, args.componentTypes))) : React.createElement("li", { className: style_1.classNames.empty }, strings_1.strings.emptyDiagram));
        });
    }
}
exports.DesignComponentPlaceHolder = DesignComponentPlaceHolder;
//# sourceMappingURL=design-component-placeholder.js.map

/***/ }),

/***/ "./out/design/components/design-page.js":
/*!**********************************************!*\
  !*** ./out/design/components/design-page.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignPage = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const designer_1 = __webpack_require__(/*! ../../designer */ "./out/designer.js");
const errors_1 = __webpack_require__(/*! ../../errors */ "./out/errors.js");
const utility_1 = __webpack_require__(/*! ../../utility */ "./out/utility/index.js");
const style_1 = __webpack_require__(/*! ../../style */ "./out/style.js");
const runtime_1 = __webpack_require__(/*! ../../runtime */ "./out/runtime/index.js");
const DATA_ID = "data-id";
class DesignPage extends React.Component {
    ref(element, designer) {
        if (!element || this.element)
            return;
        this.element = element;
        designer.componentPanels.each(componentPanel => {
            componentPanel.appendDropTarget(element, designer, designer.pageData.id, (arg) => {
                if (typeof arg == "string") {
                    let c = {
                        id: utility_1.PageDataTravel.generateId(designer.pageData, arg), type: arg, props: {}, children: []
                    };
                    return c;
                }
                let element = arg;
                let dataId = element.getAttribute(DATA_ID);
                if (!dataId)
                    throw new Error(`Invalid element`);
                let c = utility_1.PageDataTravel.findComponent(designer.pageData, dataId);
                return c;
            });
        });
    }
    render() {
        let children = (0, utility_1.childrenNodeToArray)(this.props.children);
        return React.createElement(designer_1.DesignerContext.Consumer, null, args => {
            if (!args)
                throw errors_1.errors.contextArgumentNull();
            let p = this.props;
            let className = p.className || "";
            return React.createElement("ul", { key: args.designer.pageData.id, className: `${style_1.classNames.designPage} ${className}`, style: p.style, ref: e => this.ref(e, args.designer) }, children.map(o => {
                console.assert(o.key != null, "key is null");
                let componentData = utility_1.PageDataTravel.findComponent(args.designer.pageData, o.key);
                console.assert(componentData != null, `component data ${o.key} is not exists.`);
                let status = componentData.status || runtime_1.ComponentStatus.default;
                let isSelected = (status & runtime_1.ComponentStatus.selected) == runtime_1.ComponentStatus.selected;
                return React.createElement("li", { key: o.key, className: isSelected ? style_1.classNames.selected : undefined, onClick: e => {
                        let id = o.key;
                        if (typeof id == "string") {
                            e.preventDefault();
                            e.stopPropagation();
                            args.designer.selectComponent(id);
                        }
                    }, ref: e => {
                        if (!e)
                            return;
                        e.setAttribute(DATA_ID, o.key);
                    } }, o);
            }));
        });
    }
}
exports.DesignPage = DesignPage;
//# sourceMappingURL=design-page.js.map

/***/ }),

/***/ "./out/design/components/index.js":
/*!****************************************!*\
  !*** ./out/design/components/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignComponentPlaceHolder = exports.DesignPage = exports.createLoadingComponent = exports.createInfoComponent = void 0;
var create_info_component_1 = __webpack_require__(/*! ./create-info-component */ "./out/design/components/create-info-component.js");
Object.defineProperty(exports, "createInfoComponent", { enumerable: true, get: function () { return create_info_component_1.createInfoComponent; } });
var create_loading_component_1 = __webpack_require__(/*! ./create-loading-component */ "./out/design/components/create-loading-component.js");
Object.defineProperty(exports, "createLoadingComponent", { enumerable: true, get: function () { return create_loading_component_1.createLoadingComponent; } });
var design_page_1 = __webpack_require__(/*! ./design-page */ "./out/design/components/design-page.js");
Object.defineProperty(exports, "DesignPage", { enumerable: true, get: function () { return design_page_1.DesignPage; } });
var design_component_placeholder_1 = __webpack_require__(/*! ./design-component-placeholder */ "./out/design/components/design-component-placeholder.js");
Object.defineProperty(exports, "DesignComponentPlaceHolder", { enumerable: true, get: function () { return design_component_placeholder_1.DesignComponentPlaceHolder; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./out/design/create-design-element.js":
/*!*********************************************!*\
  !*** ./out/design/create-design-element.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const design_component_context_1 = __webpack_require__(/*! ./design-component-context */ "./out/design/design-component-context.js");
const design_behavior_1 = __webpack_require__(/*! ./design-behavior */ "./out/design/design-behavior.js");
const common_1 = __webpack_require__(/*! ../common */ "./out/common/index.js");
const errors_1 = __webpack_require__(/*! ../errors */ "./out/errors.js");
const runtime_1 = __webpack_require__(/*! ../runtime */ "./out/runtime/index.js");
const components_1 = __webpack_require__(/*! ./components */ "./out/design/components/index.js");
const createDesignElement = (type, props, ...children) => {
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
        if (type.typeName == runtime_1.ComponentPlaceHolder.typeName) {
            type = components_1.DesignComponentPlaceHolder;
        }
        return React.createElement(type, props, ...children);
    }));
};
let g = typeof window === "undefined" ? global : window;
if (g[common_1.constants.designComponentFactoryName])
    throw errors_1.errors.elementFactoryExists();
g[common_1.constants.designComponentFactoryName] = createDesignElement;
//# sourceMappingURL=create-design-element.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
    DesignBehavior[DesignBehavior["disableClick"] = 1] = "disableClick";
    DesignBehavior[DesignBehavior["disableHref"] = 2] = "disableHref";
    DesignBehavior[DesignBehavior["isContainer"] = 4] = "isContainer";
    DesignBehavior[DesignBehavior["default"] = 3] = "default";
})(DesignBehavior = exports.DesignBehavior || (exports.DesignBehavior = {}));
//# sourceMappingURL=design-behavior.js.map

/***/ }),

/***/ "./out/design/design-component-context.js":
/*!************************************************!*\
  !*** ./out/design/design-component-context.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignComponentContext = void 0;
var designer_1 = __webpack_require__(/*! ../designer */ "./out/designer.js");
Object.defineProperty(exports, "DesignComponentContext", { enumerable: true, get: function () { return designer_1.DesignComponentContext; } });
//# sourceMappingURL=design-component-context.js.map

/***/ }),

/***/ "./out/design/index.js":
/*!*****************************!*\
  !*** ./out/design/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDesigntimeComponentData = exports.DesignComponentPlaceHolder = exports.DesignPage = exports.ComponentDiagram = exports.ComponentPanel = void 0;
var component_panel_1 = __webpack_require__(/*! ./component-panel */ "./out/design/component-panel.js");
Object.defineProperty(exports, "ComponentPanel", { enumerable: true, get: function () { return component_panel_1.ComponentPanel; } });
var component_diagram_1 = __webpack_require__(/*! ./component-diagram */ "./out/design/component-diagram.js");
Object.defineProperty(exports, "ComponentDiagram", { enumerable: true, get: function () { return component_diagram_1.ComponentDiagram; } });
var design_page_1 = __webpack_require__(/*! ./components/design-page */ "./out/design/components/design-page.js");
Object.defineProperty(exports, "DesignPage", { enumerable: true, get: function () { return design_page_1.DesignPage; } });
var design_component_placeholder_1 = __webpack_require__(/*! ./components/design-component-placeholder */ "./out/design/components/design-component-placeholder.js");
Object.defineProperty(exports, "DesignComponentPlaceHolder", { enumerable: true, get: function () { return design_component_placeholder_1.DesignComponentPlaceHolder; } });
var parse_design_component_data_1 = __webpack_require__(/*! ./parse-design-component-data */ "./out/design/parse-design-component-data.js");
Object.defineProperty(exports, "parseDesigntimeComponentData", { enumerable: true, get: function () { return parse_design_component_data_1.parseDesigntimeComponentData; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./out/design/parse-design-component-data.js":
/*!***************************************************!*\
  !*** ./out/design/parse-design-component-data.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDesigntimeComponent = exports.parseDesigntimeComponentData = void 0;
const errors_1 = __webpack_require__(/*! ../errors */ "./out/errors.js");
const runtime_1 = __webpack_require__(/*! ../runtime */ "./out/runtime/index.js");
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const designer_1 = __webpack_require__(/*! ../designer */ "./out/designer.js");
const utility_1 = __webpack_require__(/*! ../utility */ "./out/utility/index.js");
const design_component_context_1 = __webpack_require__(/*! ./design-component-context */ "./out/design/design-component-context.js");
const design_behavior_1 = __webpack_require__(/*! ./design-behavior */ "./out/design/design-behavior.js");
function parseDesigntimeComponentData(componentData, componentTypes) {
    return (0, runtime_1.parsePageData)(componentData, componentTypes, createDesigntimeComponent);
}
exports.parseDesigntimeComponentData = parseDesigntimeComponentData;
function createDesigntimeComponent(type, props, children) {
    let p = props;
    if (!p.id)
        throw errors_1.errors.argumentFieldNull("id", "props");
    return react_1.default.createElement(designer_1.DesignerContext.Consumer, { key: p.id }, args => {
        if (!args)
            throw errors_1.errors.contextArgumentNull();
        let componentData = utility_1.PageDataTravel.findComponent(args.designer.pageData, p.id);
        if (!componentData)
            throw new Error(`Can not find component data by '${p.id}' in the page data.`);
        let componentConfig = args.designer.componentsConfig;
        if (!componentConfig)
            throw new Error(`Component config is null for component type '${componentData.type}'`);
        let componentTypes = args.designer.componentTypes;
        let value = {
            componentData, componentConfig, designer: args.designer, componentTypes
        };
        let designBehavior = typeof componentConfig.design == "number" ? componentConfig.design : design_behavior_1.DesignBehavior.default;
        return react_1.default.createElement(design_component_context_1.DesignComponentContext.Provider, { value: value }, react_1.default.createElement(type, props, children));
    });
}
exports.createDesigntimeComponent = createDesigntimeComponent;
//# sourceMappingURL=parse-design-component-data.js.map

/***/ }),

/***/ "./out/designer.js":
/*!*************************!*\
  !*** ./out/designer.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageDesigner = exports.DesignComponentContext = exports.DesignerContext = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const runtime_1 = __webpack_require__(/*! ./runtime */ "./out/runtime/index.js");
const errors_1 = __webpack_require__(/*! ./errors */ "./out/errors.js");
const components_1 = __webpack_require__(/*! ./design/components */ "./out/design/components/index.js");
const utility_1 = __webpack_require__(/*! ./utility */ "./out/utility/index.js");
const data_list_1 = __webpack_require__(/*! ./data/data-list */ "./out/data/data-list.js");
const design_behavior_1 = __webpack_require__(/*! ./design/design-behavior */ "./out/design/design-behavior.js");
const design_page_1 = __webpack_require__(/*! ./design/components/design-page */ "./out/design/components/design-page.js");
exports.DesignerContext = React.createContext(null);
exports.DesignComponentContext = React.createContext(null);
/**
 * 组件数据处理，负责对对组件数据进行处理维护。
 */
class PageDesigner extends React.Component {
    constructor(props) {
        super(props);
        this._prePageData = null;
        this.componentDiagramElements = new data_list_1.DataList();
        this.componentPanels = new data_list_1.DataList();
        if (!props)
            throw errors_1.errors.argumentNull("props");
        if (!props.componentsConfig)
            throw errors_1.errors.argumentFieldCanntNull("componentsConfig", "props");
        this.checkComponentsConfig(props.componentsConfig);
        let pageData = this.props.pageData;
        this.state = { pageData, componentTypes: {}, componentEditors: {} };
    }
    /** 检查组件配置 */
    checkComponentsConfig(componentsConfig) {
        // TODO: 检查组件配置
    }
    /** 页面数据 */
    get pageData() {
        return this.state.pageData;
    }
    get componentsConfig() {
        return this.props.componentsConfig;
    }
    get componentTypes() {
        return this.state.componentTypes;
    }
    get componentEditors() {
        return this.state.componentEditors;
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
        let arr = [];
        utility_1.PageDataTravel.each(this.pageData, (o) => {
            if (((o.status || runtime_1.ComponentStatus.default) & runtime_1.ComponentStatus.selected) == runtime_1.ComponentStatus.selected) {
                arr.push(o);
            }
        });
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
    appendComponent(componentData, parentId, componentIndex) {
        if (!componentData)
            throw errors_1.errors.argumentNull('childComponent');
        if (!parentId)
            throw errors_1.errors.argumentNull("parentId");
        let parentComponentData = utility_1.PageDataTravel.findComponent(this.pageData, parentId);
        if (!parentComponentData)
            throw new Error(`Component data '${parentId}' is not exists`);
        let children = parentComponentData.children;
        if (componentIndex == null) {
            children.push(componentData);
        }
        else {
            children.splice(componentIndex, 0, componentData);
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
        /** 取消选中 */
        utility_1.PageDataTravel.each(this.pageData, (c) => {
            c.status = c.status || runtime_1.ComponentStatus.default;
            c.status = c.status & (~runtime_1.ComponentStatus.selected);
        });
        /** 设置选中 */
        utility_1.PageDataTravel.each(this.pageData, (c) => {
            if (componentIds.indexOf(c.id) < 0)
                return;
            c.status = c.status || runtime_1.ComponentStatus.default;
            c.status = c.status | runtime_1.ComponentStatus.selected;
        });
        this.setState({ pageData: this.pageData });
    }
    /** 移除控件 */
    removeComponent(...componentIds) {
        for (let i = 0; i < componentIds.length; i++) {
            let componentId = componentIds[i];
            let { component, parent } = utility_1.PageDataTravel.findComponentAndParent(this.pageData, componentId); //componentChildren.filter(o => o.id == componentId)[0];
            if (component == null)
                throw new Error(`Component '${componentId}' is not exists.`);
            if (parent == null)
                throw new Error(`Component '${componentId}' is root element, can not remove.`);
            parent.children = parent.children.filter(o => o.id != componentId);
        }
    }
    removeComponentIfExists(...componentIds) {
        for (let i = 0; i < componentIds.length; i++) {
            let componentId = componentIds[i];
            let { component, parent } = utility_1.PageDataTravel.findComponentAndParent(this.pageData, componentId); //componentChildren.filter(o => o.id == componentId)[0];
            if (component == null)
                continue;
            if (parent == null)
                throw new Error(`Component '${componentId}' is root element, can not remove.`);
            parent.children = parent.children.filter(o => o.id != componentId);
        }
    }
    removeComponents(componentIds) {
        let pageData = this.pageData;
        if (!pageData || !pageData.children || pageData.children.length == 0)
            return;
        for (let i = 0; i < componentIds.length; i++) {
            this.removeComponent(componentIds[i]);
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
        // component.parentId = parentId;
        let pageData = this.pageData;
        console.assert(pageData.children != null);
        this.removeComponent(componentId);
        this.appendComponent(component, parentId, childComponentIndex);
    }
    /**
     * 通过组件编号获取组件的数据
     * @param componentId 组件编号
     */
    findComponentData(componentId) {
        let pageData = this.state.pageData;
        if (!pageData)
            throw errors_1.errors.pageDataIsNull();
        let componentData = utility_1.PageDataTravel.findComponent(pageData, componentId) || null;
        return componentData;
    }
    async loadEditorTypes(pageData) {
        let componentsToLoad = [];
        let travel = new utility_1.PageDataTravel(pageData);
        travel.each((c) => {
            componentsToLoad.push(c.type);
        });
        let componentsConfig = this.props.componentsConfig;
        let promises = componentsToLoad.map(typeName => ({ typeName, componentConfig: componentsConfig[typeName] }))
            .map(o => o.componentConfig.editor ?
            o.componentConfig.editor.then(a => ({ typeName: o.typeName, componentConfig: o, module: a })) : Promise.resolve(null));
        let r = await Promise.all(promises);
        let componentEditors = this.state.componentEditors;
        r.forEach(m => {
            if (m == null)
                return;
            let editors = m.module.default;
            if (!m.module.default)
                throw errors_1.errors.editorModuleNoneDefaultExport(m.typeName);
            componentEditors[m.typeName] = m.module.default;
        });
        this.setState({ componentEditors: componentEditors });
    }
    async loadComponentTypes(pageData) {
        let componentTypes = this.state.componentTypes;
        let componentsConfig = this.props.componentsConfig;
        let componentsToLoad = [];
        let travel = new utility_1.PageDataTravel(pageData);
        travel.each((c) => {
            if ((0, utility_1.isHTMLComponent)(c))
                return;
            componentsToLoad.push(c.type);
        });
        componentsToLoad.forEach(typeName => {
            componentTypes[typeName] = (0, components_1.createLoadingComponent)();
        });
        // const loadedComponentTypes = await PageDesigner.loadComponentTypes(componentsToLoad, componentsConfig);
        PageDesigner.loadComponentTypes(componentsToLoad, componentsConfig).then(loadedComponentTypes => {
            Object.assign(componentTypes, loadedComponentTypes);
            this.setState({ componentTypes });
        });
    }
    static async loadComponentTypes(componentsToLoad, componentsConfig) {
        if (!componentsToLoad)
            throw errors_1.errors.argumentNull("componentsToLoad");
        if (!componentsConfig)
            throw errors_1.errors.argumentNull("componentsConfig");
        // 设置默认组件
        for (let typeName in runtime_1.componentTypes) {
            if (!componentsConfig[typeName]) {
                let designBehavior = design_behavior_1.DesignBehavior.default;
                componentsConfig[typeName] = {
                    type: Promise.resolve({ default: runtime_1.componentTypes[typeName] }),
                    hidden: true, design: designBehavior
                };
                if (typeName == runtime_1.componentTypeNames.page) {
                    componentsConfig[typeName].design = Promise.resolve({ default: design_page_1.DesignPage });
                }
            }
        }
        let promises = [];
        let componentTypes = {};
        for (let i = 0; i < componentsToLoad.length; i++) {
            let typeName = componentsToLoad[i];
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
                let componentType;
                if (componentsConfig[typeName].design instanceof Promise) {
                    componentType = componentsConfig[typeName].design;
                }
                else {
                    componentType = componentsConfig[typeName].type;
                }
                if (!componentType) {
                    return resolve({});
                }
                componentType.then(p => {
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
    componentDidMount() {
    }
    render() {
        let pageData = this.state.pageData;
        let equal = (0, utility_1.deepEqual)(this.prePageData, pageData);
        if (!equal) {
            this.prePageData = JSON.parse(JSON.stringify(pageData));
            this.onPageDataChanged(pageData);
        }
        return React.createElement("div", { tabIndex: 0, ref: e => this._element = this._element || e, onKeyDown: e => this.onKeyDown(e), className: this.props.className, style: this.props.style },
            React.createElement(exports.DesignerContext.Provider, { value: {
                    designer: this,
                } }, this.props.children));
    }
}
exports.PageDesigner = PageDesigner;
//# sourceMappingURL=designer.js.map

/***/ }),

/***/ "./out/editor/editor-group.js":
/*!************************************!*\
  !*** ./out/editor/editor-group.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorGroup = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const errors_1 = __webpack_require__(/*! ../errors */ "./out/errors.js");
const editor_panel_context_1 = __webpack_require__(/*! ./editor-panel-context */ "./out/editor/editor-panel-context.js");
const utility_1 = __webpack_require__(/*! ../utility */ "./out/utility/index.js");
const style_1 = __webpack_require__(/*! ../style */ "./out/style.js");
// export type PropertyEditor = {
//     /** 用于对编辑器进行分组，方便查看各个属性 */
//     group: string,
//     /** 属性名称 */
//     prop: string,
//     /** 属性显示名称 */
//     displayName: string,
//     /** 属性编辑器 */
//     editor: React.ReactElement<any>,
// };
class EditorGroup extends React.Component {
    constructor(props) {
        super(props);
        this.renderItem = (o) => {
            return React.createElement("div", { key: o.proppertyName, className: style_1.classNames.propertyEditor },
                React.createElement("label", { className: style_1.classNames.propertyEditorLabel }, o.displayName),
                React.createElement("div", { className: style_1.classNames.propertyEditorControl },
                    React.createElement(utility_1.ErrorBoundary, null, o.editor)));
        };
    }
    render() {
        let renderItem = this.props.renderItem || this.renderItem;
        return React.createElement(editor_panel_context_1.EditPanelContext.Consumer, null, args => {
            if (!args)
                throw errors_1.errors.contextArgumentNull();
            let propertyEditor = this.props.groupName ? args.editors.filter(o => o.group == this.props.groupName) : args.editors;
            return React.createElement(React.Fragment, null, propertyEditor.map(o => renderItem(o)));
        });
    }
}
exports.EditorGroup = EditorGroup;
//# sourceMappingURL=editor-group.js.map

/***/ }),

/***/ "./out/editor/editor-panel-context.js":
/*!********************************************!*\
  !*** ./out/editor/editor-panel-context.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditPanelContext = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
exports.EditPanelContext = React.createContext(null);
//# sourceMappingURL=editor-panel-context.js.map

/***/ }),

/***/ "./out/editor/editor-panel.js":
/*!************************************!*\
  !*** ./out/editor/editor-panel.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorPanel = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const style_1 = __webpack_require__(/*! ../style */ "./out/style.js");
const errors_1 = __webpack_require__(/*! ../errors */ "./out/errors.js");
const designer_1 = __webpack_require__(/*! ../designer */ "./out/designer.js");
const editor_panel_context_1 = __webpack_require__(/*! ./editor-panel-context */ "./out/editor/editor-panel-context.js");
const strings_1 = __webpack_require__(/*! ../strings */ "./out/strings.js");
class EditorPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { componentDatas: [] };
    }
    static getEditors(designer) {
        if (designer == null)
            throw errors_1.errors.argumentNull("designer");
        let selectedComponents = designer.selectedComponents;
        if (selectedComponents.length == 0)
            return [];
        let validEditorInfos = [];
        let firstComponent = selectedComponents[0];
        let firstComponentEditors = Object.assign({}, designer.componentEditors[selectedComponents[0].type]);
        let componentConfig = designer.componentsConfig[selectedComponents[0].type];
        console.assert(componentConfig != null);
        if (selectedComponents.length == 1) {
            let defaultValue = [];
            let componentEditors = designer.componentEditors[firstComponent.type] || defaultValue;
            validEditorInfos = [...componentEditors];
        }
        else {
            for (let i = 0; i < firstComponentEditors.length; i++) {
                let e = firstComponentEditors[i];
                /** 判断是否存在相同的项 */
                let exists = true;
                for (let j = 1; j < selectedComponents.length; j++) {
                    let selectedComponent = selectedComponents[j];
                    let selectedComponentEditors = designer.componentEditors[selectedComponent.type] || [];
                    exists = selectedComponentEditors
                        .filter(o => o.propertyName == e.propertyName && o.editorType == e.editorType &&
                        o.displayName == e.displayName && selectedComponent.props[o.propertyName] == firstComponent.props[e.propertyName]).length > 0;
                    if (!exists) {
                        break;
                    }
                }
                if (exists) {
                    validEditorInfos.push(e);
                }
            }
        }
        let r = [];
        for (let i = 0; i < validEditorInfos.length; i++) {
            let editorInfo = validEditorInfos[i];
            let editorProps = {
                value: firstComponent.props[editorInfo.propertyName],
                editComponents: selectedComponents,
                updateComponentProp(value) {
                    let componentProps = selectedComponents.map(o => ({
                        componentId: o.id, propName: editorInfo.propertyName, value
                    }));
                    designer.updateComponentProps(componentProps);
                },
            };
            let editorType = editorInfo.editorType;
            let editor = React.createElement(editorType, editorProps);
            r.push({
                proppertyName: editorInfo.propertyName, displayName: editorInfo.displayName || editorInfo.propertyName,
                group: editorInfo.group || "", editor
            });
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
        return React.createElement(designer_1.DesignerContext.Consumer, null, args => {
            if (!args)
                throw errors_1.errors.contextArgumentNull();
            let editors = EditorPanel.getEditors(args.designer);
            return React.createElement(editor_panel_context_1.EditPanelContext.Provider, { value: { editors } },
                React.createElement("div", { className: `${style_1.classNames.editorPanel} ${this.props.className || ""}`, ref: (e) => this.element = e || this.element }, editors.length == 0 ? React.createElement("div", { className: style_1.classNames.empty }, strings_1.strings.emptyEditorPanel) : this.props.children));
        });
    }
}
exports.EditorPanel = EditorPanel;
//# sourceMappingURL=editor-panel.js.map

/***/ }),

/***/ "./out/editor/index.js":
/*!*****************************!*\
  !*** ./out/editor/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorGroup = exports.EditPanelContext = exports.EditorPanel = void 0;
var editor_panel_1 = __webpack_require__(/*! ./editor-panel */ "./out/editor/editor-panel.js");
Object.defineProperty(exports, "EditorPanel", { enumerable: true, get: function () { return editor_panel_1.EditorPanel; } });
var editor_panel_context_1 = __webpack_require__(/*! ./editor-panel-context */ "./out/editor/editor-panel-context.js");
Object.defineProperty(exports, "EditPanelContext", { enumerable: true, get: function () { return editor_panel_context_1.EditPanelContext; } });
var editor_group_1 = __webpack_require__(/*! ./editor-group */ "./out/editor/editor-group.js");
Object.defineProperty(exports, "EditorGroup", { enumerable: true, get: function () { return editor_group_1.EditorGroup; } });
//# sourceMappingURL=index.js.map

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
    contextArgumentNull() {
        let msg = `Context argument null.`;
        let error = new Error(msg);
        error.name = exports.errors.contextArgumentNull.name;
        return error;
    }
    editorModuleNoneDefaultExport(typeName) {
        let msg = `Component ${typeName} has not export default member.`;
        let error = new Error(msg);
        error.name = exports.errors.editorModuleNoneDefaultExport.name;
        return error;
    }
    elementFactoryExists() {
        let msg = `Element factory '${name}' exists.`;
        let error = new Error(msg);
        error.name = exports.errors.elementFactoryExists.name;
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
exports.childrenNodeToArray = exports.PageDataTravel = exports.parsePageData = exports.PageDataParser = exports.Page = exports.ComponentPlaceHolder = exports.componentTypeNames = exports.ComponentStatus = exports.EditorPanel = exports.EditorGroup = exports.parseDesigntimeComponentData = exports.ComponentPanel = exports.ComponentDiagram = exports.classNames = exports.DesignComponentContext = exports.DesignerContext = exports.PageDesigner = void 0;
var designer_1 = __webpack_require__(/*! ./designer */ "./out/designer.js");
Object.defineProperty(exports, "PageDesigner", { enumerable: true, get: function () { return designer_1.PageDesigner; } });
Object.defineProperty(exports, "DesignerContext", { enumerable: true, get: function () { return designer_1.DesignerContext; } });
Object.defineProperty(exports, "DesignComponentContext", { enumerable: true, get: function () { return designer_1.DesignComponentContext; } });
var style_1 = __webpack_require__(/*! ./style */ "./out/style.js");
Object.defineProperty(exports, "classNames", { enumerable: true, get: function () { return style_1.classNames; } });
var design_1 = __webpack_require__(/*! ./design */ "./out/design/index.js");
Object.defineProperty(exports, "ComponentDiagram", { enumerable: true, get: function () { return design_1.ComponentDiagram; } });
Object.defineProperty(exports, "ComponentPanel", { enumerable: true, get: function () { return design_1.ComponentPanel; } });
Object.defineProperty(exports, "parseDesigntimeComponentData", { enumerable: true, get: function () { return design_1.parseDesigntimeComponentData; } });
var editor_1 = __webpack_require__(/*! ./editor */ "./out/editor/index.js");
Object.defineProperty(exports, "EditorGroup", { enumerable: true, get: function () { return editor_1.EditorGroup; } });
Object.defineProperty(exports, "EditorPanel", { enumerable: true, get: function () { return editor_1.EditorPanel; } });
var runtime_1 = __webpack_require__(/*! ./runtime */ "./out/runtime/index.js");
Object.defineProperty(exports, "ComponentStatus", { enumerable: true, get: function () { return runtime_1.ComponentStatus; } });
Object.defineProperty(exports, "componentTypeNames", { enumerable: true, get: function () { return runtime_1.componentTypeNames; } });
Object.defineProperty(exports, "ComponentPlaceHolder", { enumerable: true, get: function () { return runtime_1.ComponentPlaceHolder; } });
Object.defineProperty(exports, "Page", { enumerable: true, get: function () { return runtime_1.Page; } });
Object.defineProperty(exports, "PageDataParser", { enumerable: true, get: function () { return runtime_1.PageDataParser; } });
Object.defineProperty(exports, "parsePageData", { enumerable: true, get: function () { return runtime_1.parsePageData; } });
var utility_1 = __webpack_require__(/*! ./utility */ "./out/utility/index.js");
Object.defineProperty(exports, "PageDataTravel", { enumerable: true, get: function () { return utility_1.PageDataTravel; } });
Object.defineProperty(exports, "childrenNodeToArray", { enumerable: true, get: function () { return utility_1.childrenNodeToArray; } });
__webpack_require__(/*! ./design/create-design-element */ "./out/design/create-design-element.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./out/runtime/components/component-placeholder.js":
/*!*********************************************************!*\
  !*** ./out/runtime/components/component-placeholder.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentPlaceHolder = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const utility_1 = __webpack_require__(/*! ../../utility */ "./out/utility/index.js");
const component_type_names_1 = __webpack_require__(/*! ./component-type-names */ "./out/runtime/components/component-type-names.js");
class ComponentPlaceHolder extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let arr = (0, utility_1.childrenNodeToArray)(this.props.children);
        return React.createElement("ul", { className: this.props.className, style: this.props.style }, arr.map(o => React.createElement("li", null, o)));
    }
}
exports.ComponentPlaceHolder = ComponentPlaceHolder;
ComponentPlaceHolder.typeName = component_type_names_1.componentTypeNames.placeHolder;
//# sourceMappingURL=component-placeholder.js.map

/***/ }),

/***/ "./out/runtime/components/component-type-names.js":
/*!********************************************************!*\
  !*** ./out/runtime/components/component-type-names.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.componentTypeNames = void 0;
exports.componentTypeNames = {
    page: "Page",
    placeHolder: "PlaceHolder",
    text: "Text",
};
//# sourceMappingURL=component-type-names.js.map

/***/ }),

/***/ "./out/runtime/components/index.js":
/*!*****************************************!*\
  !*** ./out/runtime/components/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.componentTypes = exports.componentTypeNames = exports.Text = exports.Page = exports.ComponentPlaceHolder = void 0;
const component_placeholder_1 = __webpack_require__(/*! ./component-placeholder */ "./out/runtime/components/component-placeholder.js");
const component_type_names_1 = __webpack_require__(/*! ./component-type-names */ "./out/runtime/components/component-type-names.js");
const page_1 = __webpack_require__(/*! ./page */ "./out/runtime/components/page.js");
const text_1 = __webpack_require__(/*! ./text */ "./out/runtime/components/text.js");
var component_placeholder_2 = __webpack_require__(/*! ./component-placeholder */ "./out/runtime/components/component-placeholder.js");
Object.defineProperty(exports, "ComponentPlaceHolder", { enumerable: true, get: function () { return component_placeholder_2.ComponentPlaceHolder; } });
var page_2 = __webpack_require__(/*! ./page */ "./out/runtime/components/page.js");
Object.defineProperty(exports, "Page", { enumerable: true, get: function () { return page_2.Page; } });
var text_2 = __webpack_require__(/*! ./text */ "./out/runtime/components/text.js");
Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return text_2.Text; } });
var component_type_names_2 = __webpack_require__(/*! ./component-type-names */ "./out/runtime/components/component-type-names.js");
Object.defineProperty(exports, "componentTypeNames", { enumerable: true, get: function () { return component_type_names_2.componentTypeNames; } });
exports.componentTypes = {};
exports.componentTypes[component_type_names_1.componentTypeNames.placeHolder] = component_placeholder_1.ComponentPlaceHolder;
exports.componentTypes[component_type_names_1.componentTypeNames.page] = page_1.Page;
exports.componentTypes[component_type_names_1.componentTypeNames.text] = text_1.Text;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./out/runtime/components/page.js":
/*!****************************************!*\
  !*** ./out/runtime/components/page.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const component_type_names_1 = __webpack_require__(/*! ./component-type-names */ "./out/runtime/components/component-type-names.js");
class Page extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let p = this.props;
        return React.createElement("div", { className: p.className, style: p.style }, this.props.children);
    }
}
exports.Page = Page;
Page.typeName = component_type_names_1.componentTypeNames.page;
//# sourceMappingURL=page.js.map

/***/ }),

/***/ "./out/runtime/components/text.js":
/*!****************************************!*\
  !*** ./out/runtime/components/text.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
class Text extends React.Component {
    render() {
        return this.props.value;
    }
}
exports.Text = Text;
//# sourceMappingURL=text.js.map

/***/ }),

/***/ "./out/runtime/errors.js":
/*!*******************************!*\
  !*** ./out/runtime/errors.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = void 0;
const errors_1 = __webpack_require__(/*! maishu-toolkit/out/errors */ "./node_modules/maishu-toolkit/out/errors.js");
const page_data_parser_1 = __webpack_require__(/*! ../runtime/page-data-parser */ "./out/runtime/page-data-parser.js");
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

/***/ "./out/runtime/index.js":
/*!******************************!*\
  !*** ./out/runtime/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = exports.ComponentPlaceHolder = exports.componentTypeNames = exports.componentTypes = exports.ComponentStatus = exports.PageDataParserContext = exports.PageDataParser = exports.parsePageData = void 0;
var parse_component_data_1 = __webpack_require__(/*! ./parse-component-data */ "./out/runtime/parse-component-data.js");
Object.defineProperty(exports, "parsePageData", { enumerable: true, get: function () { return parse_component_data_1.parsePageData; } });
var page_data_parser_1 = __webpack_require__(/*! ./page-data-parser */ "./out/runtime/page-data-parser.js");
Object.defineProperty(exports, "PageDataParser", { enumerable: true, get: function () { return page_data_parser_1.PageDataParser; } });
Object.defineProperty(exports, "PageDataParserContext", { enumerable: true, get: function () { return page_data_parser_1.PageDataParserContext; } });
var types_1 = __webpack_require__(/*! ./types */ "./out/runtime/types.js");
Object.defineProperty(exports, "ComponentStatus", { enumerable: true, get: function () { return types_1.ComponentStatus; } });
var components_1 = __webpack_require__(/*! ./components */ "./out/runtime/components/index.js");
Object.defineProperty(exports, "componentTypes", { enumerable: true, get: function () { return components_1.componentTypes; } });
var component_type_names_1 = __webpack_require__(/*! ./components/component-type-names */ "./out/runtime/components/component-type-names.js");
Object.defineProperty(exports, "componentTypeNames", { enumerable: true, get: function () { return component_type_names_1.componentTypeNames; } });
var component_placeholder_1 = __webpack_require__(/*! ./components/component-placeholder */ "./out/runtime/components/component-placeholder.js");
Object.defineProperty(exports, "ComponentPlaceHolder", { enumerable: true, get: function () { return component_placeholder_1.ComponentPlaceHolder; } });
var page_1 = __webpack_require__(/*! ./components/page */ "./out/runtime/components/page.js");
Object.defineProperty(exports, "Page", { enumerable: true, get: function () { return page_1.Page; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./out/runtime/page-data-parser.js":
/*!*****************************************!*\
  !*** ./out/runtime/page-data-parser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageDataParser = exports.PageDataParserContext = void 0;
const errors_1 = __webpack_require__(/*! ./errors */ "./out/runtime/errors.js");
const React = __importStar(__webpack_require__(/*! react */ "react"));
const parse_component_data_1 = __webpack_require__(/*! ./parse-component-data */ "./out/runtime/parse-component-data.js");
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
        // let children = (pageData.children || []).filter(o => typeof o == "string" || !o.parentId);
        // let childComponents = children.map(o => {
        //     if (typeof o == "string")
        //         return o
        //     return parseComponentData(o, componentTypes, elementFactory);
        // });
        // let pageType = componentTypes[pageData.type]
        // if (!pageType)
        //     throw new Error(`Component type '${pageData.type}' is not exists.`)
        // let pageElement = React.createElement(pageType, pageData.props, childComponents)
        let pageElement = (0, parse_component_data_1.parsePageData)(pageData, componentTypes, elementFactory);
        return React.createElement(exports.PageDataParserContext.Provider, { value: { pageData, elementFactory, componentTypes } }, pageElement);
    }
}
exports.PageDataParser = PageDataParser;
//# sourceMappingURL=page-data-parser.js.map

/***/ }),

/***/ "./out/runtime/parse-component-data.js":
/*!*********************************************!*\
  !*** ./out/runtime/parse-component-data.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePageData = void 0;
const errors_1 = __webpack_require__(/*! ./errors */ "./out/runtime/errors.js");
const components_1 = __webpack_require__(/*! ./components */ "./out/runtime/components/index.js");
function parseComponentData(componentData, componentTypes, createElement) {
    if (!componentData)
        throw errors_1.errors.argumentNull("componentData");
    if (!componentTypes)
        throw errors_1.errors.argumentNull("componentTypes");
    if (!componentData.type) {
        throw errors_1.errors.argumentFieldNull("type", "componentData");
    }
    let isHtmlComponent = componentData.type.toLowerCase() == componentData.type;
    let type = isHtmlComponent ? componentData.type : (componentTypes[componentData.type] || components_1.componentTypes[componentData.type]);
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
function parsePageData(pageData, componentTypes, createElement) {
    if (!pageData)
        throw errors_1.errors.argumentNull("pageData");
    if (!componentTypes)
        throw errors_1.errors.argumentNull("componentTypes");
    if (!pageData.type) {
        throw errors_1.errors.argumentFieldNull("type", "pageData");
    }
    return parseComponentData(pageData, componentTypes, createElement);
}
exports.parsePageData = parsePageData;
//# sourceMappingURL=parse-component-data.js.map

/***/ }),

/***/ "./out/runtime/types.js":
/*!******************************!*\
  !*** ./out/runtime/types.js ***!
  \******************************/
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
//# sourceMappingURL=types.js.map

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
    emptyEditorPanel: "暂无可编辑属性"
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
exports.classNames = void 0;
exports.classNames = {
    empty: "empty",
    selected: "selected",
    componentDiagram: 'component-diagram',
    componentPanel: 'component-panel',
    editorPanel: 'editor-panel',
    propertyEditor: "property-editor",
    propertyEditorControl: "property-editor-control",
    propertyEditorLabel: "property-editor-label",
    componentWrapper: "component-wrapper",
    designComponentPlaceHolder: "design-component-place-holder",
    designPage: "design-page",
};
// let templateDialog = {
//     nameHeight: 40,
//     fontSize: 22
// }
if (typeof document !== "undefined") {
    let element = document.createElement('style');
    element.type = 'text/css';
    element.setAttribute("data-name", "jueying");
    element.innerHTML = `
    .${exports.classNames.componentDiagram} {
        list-style: none;
        margin: 0;
        padding: 0;
        border: solid 1px #ccc;
    }
    .${exports.classNames.componentPanel} {
        display: flex;
        border: solid 1px #ccc;
    }
    .${exports.classNames.editorPanel} {
        border: solid 1px #ccc;
        min-height: 50px;
    }
    .${exports.classNames.editorPanel} label {
        width: 80px;
        padding: 4px;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .${exports.classNames.editorPanel} .control {
        padding-left: 90px;
    }
    .${exports.classNames.editorPanel} .empty {
        padding-top: 20px;
        text-align: center;
    }
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
    .${exports.classNames.propertyEditor} {
        display: flex;
    }
    .${exports.classNames.designComponentPlaceHolder} {
        min-height: 50px;
        min-width: 50px;
        padding: 0;
        list-style: none;
    }
    .${exports.classNames.componentWrapper} {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .${exports.classNames.designPage} {
        list-style: none;
        margin: 0;
        padding: 0;
        min-height: 100px;
        border: solid 1px #ccc;
    }
    .${exports.classNames.empty} {
        text-align: center;
        padding-top: 15px;
    }
            `;
    if (document.head != null) {
        document.head.appendChild(element);
    }
}
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./out/utility/common.js":
/*!*******************************!*\
  !*** ./out/utility/common.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.elementFactoryName = exports.childrenNodeToArray = exports.isHTMLComponent = exports.groupDisplayNames = exports.proptDisplayNames = void 0;
exports.proptDisplayNames = {};
exports.groupDisplayNames = {};
function isHTMLComponent(componentData) {
    // 全小写为 HTML 组件
    return componentData.type.toLowerCase() == componentData.type;
}
exports.isHTMLComponent = isHTMLComponent;
function childrenNodeToArray(children) {
    if (!children)
        return [];
    if (Array.isArray(children))
        return children;
    return [children];
}
exports.childrenNodeToArray = childrenNodeToArray;
exports.elementFactoryName = "h";
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./out/utility/deep-equal.js":
/*!***********************************!*\
  !*** ./out/utility/deep-equal.js ***!
  \***********************************/
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

/***/ "./out/utility/error-boundary.js":
/*!***************************************!*\
  !*** ./out/utility/error-boundary.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
class ErrorBoundary extends react_1.default.Component {
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
            return react_1.default.createElement("div", { className: "error" },
                react_1.default.createElement("div", null, error.message),
                react_1.default.createElement("div", null, error.stack));
        }
        return this.props.children;
    }
}
exports.ErrorBoundary = ErrorBoundary;
//# sourceMappingURL=error-boundary.js.map

/***/ }),

/***/ "./out/utility/index.js":
/*!******************************!*\
  !*** ./out/utility/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = exports.PageDataTravel = exports.deepEqual = exports.isHTMLComponent = exports.childrenNodeToArray = void 0;
var common_1 = __webpack_require__(/*! ./common */ "./out/utility/common.js");
Object.defineProperty(exports, "childrenNodeToArray", { enumerable: true, get: function () { return common_1.childrenNodeToArray; } });
Object.defineProperty(exports, "isHTMLComponent", { enumerable: true, get: function () { return common_1.isHTMLComponent; } });
var deep_equal_1 = __webpack_require__(/*! ./deep-equal */ "./out/utility/deep-equal.js");
Object.defineProperty(exports, "deepEqual", { enumerable: true, get: function () { return deep_equal_1.deepEqual; } });
var page_data_travel_1 = __webpack_require__(/*! ./page-data-travel */ "./out/utility/page-data-travel.js");
Object.defineProperty(exports, "PageDataTravel", { enumerable: true, get: function () { return page_data_travel_1.PageDataTravel; } });
var error_boundary_1 = __webpack_require__(/*! ./error-boundary */ "./out/utility/error-boundary.js");
Object.defineProperty(exports, "ErrorBoundary", { enumerable: true, get: function () { return error_boundary_1.ErrorBoundary; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./out/utility/page-data-travel.js":
/*!*****************************************!*\
  !*** ./out/utility/page-data-travel.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PageDataTravel = void 0;
const errors_1 = __webpack_require__(/*! ../errors */ "./out/errors.js");
/** 页面数据（PageData）遍历器，遍历 PageData 里的组件 */
class PageDataTravel {
    constructor(pageData) {
        this.pageData = pageData;
    }
    each(callback) {
        PageDataTravel.each(this.pageData, callback);
    }
    static each(componentData, callback) {
        let stack = [{ component: componentData, parent: null }];
        let item = stack.pop();
        while (item != null) {
            callback(item.component, item.parent);
            // if (typeof item != "string") {
            for (let i = 0; i < item.component.children.length; i++) {
                let c = item.component.children[i];
                stack.push({ component: c, parent: item.component });
            }
            item = stack.pop();
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
    static findComponentAndParent(pageData, componentId) {
        if (!pageData)
            throw errors_1.errors.argumentNull("pageData");
        if (!componentId)
            throw errors_1.errors.argumentNull("componentId");
        let travel = new PageDataTravel(pageData);
        let component = null;
        let parent = null;
        travel.each(function (c, p) {
            if (typeof c == "string" || component)
                return;
            if (componentId == c.id) {
                component = c;
                parent = p;
            }
        });
        return { component, parent };
    }
    static generateId(pageData, typeName) {
        let namedComponents = {};
        PageDataTravel.each(pageData, (c, p) => {
            namedComponents[c.id] = c;
        });
        let num = 0;
        let name;
        do {
            num = num + 1;
            name = `${typeName}${num}`;
        } while (namedComponents[name]);
        return name;
    }
}
exports.PageDataTravel = PageDataTravel;
//# sourceMappingURL=page-data-travel.js.map

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