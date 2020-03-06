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

var component_factory_1 = require("component-factory");

var errors_1 = require("errors");

var component_1 = require("component");

var style_1 = require("style");

var component_wrapper_1 = require("component-wrapper");

var React = require("react");

var ReactDOM = require("react-dom");

var ReactComponentFacotry =
/*#__PURE__*/
function (_component_factory_1$) {
  _inherits(ReactComponentFacotry, _component_factory_1$);

  function ReactComponentFacotry() {
    _classCallCheck(this, ReactComponentFacotry);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReactComponentFacotry).apply(this, arguments));
  }

  _createClass(ReactComponentFacotry, [{
    key: "renderDesignTimeComponent",
    value: function renderDesignTimeComponent(compentData, element, context) {
      var _this = this;

      var componentElement = component_1.Component.createElement(compentData, function (type, props, children) {
        return _this.createDesignTimeElement(type, props, context.handler, children);
      });
      ReactDOM.render(componentElement, element);
    }
  }, {
    key: "renderRunTimeComponent",
    value: function renderRunTimeComponent(compentData, element, context) {
      var componentElement = component_1.Component.createElement(compentData);
      ReactDOM.render(componentElement, element);
    }
  }, {
    key: "createDesignTimeElement",
    value: function createDesignTimeElement(type, props, handler) {
      if (type == null) throw errors_1.Errors.argumentNull('type');
      if (props == null) throw errors_1.Errors.argumentNull('props');
      if (props.id == null) throw errors_1.Errors.argumentFieldCanntNull('id', 'props');
      console.assert(props.id != null);
      if (props.id != null) props.key = props.id; //===================================================
      // 获取对象的 ComponentAttribute ，以从对象 props 中获取的为准

      var attr1 = component_1.Component.getAttribute(type);
      console.assert(attr1 != null);
      var attr2 = props.attr || {};
      var attr = Object.assign({}, attr1, attr2);
      delete props.attr; //===================================================

      var className = props.selected ? style_1.appendClassName(props.className || '', style_1.classNames.componentSelected) : props.className;
      var wrapperProps = Object.assign({}, props);
      delete wrapperProps.ref;
      wrapperProps.className = className;

      for (var _len = arguments.length, children = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        children[_key - 3] = arguments[_key];
      }

      return React.createElement(component_wrapper_1.ComponentWrapper, Object.assign({}, wrapperProps, {
        designer: handler,
        source: {
          type: type,
          attr: attr,
          props: props,
          children: children
        }
      }));
    }
  }]);

  return ReactComponentFacotry;
}(component_factory_1.ComponentFactory);

exports.ReactComponentFacotry = ReactComponentFacotry;
//# sourceMappingURL=react-provider.js.map
