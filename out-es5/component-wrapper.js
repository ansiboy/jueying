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

var React = require("react");

var errors_1 = require("./errors");

var common_1 = require("./common");

var component_toolbar_1 = require("./component-toolbar");

var style_1 = require("./style");

var component_1 = require("./component");
/**
 * 组件包装器，对组件进行包装，实现组件设计时的行为。
 * 1. 组件的移动
 * 2. 组件的拖放
 */


var ComponentWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ComponentWrapper, _React$Component);

  function ComponentWrapper() {
    _classCallCheck(this, ComponentWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(ComponentWrapper).apply(this, arguments));
  }

  _createClass(ComponentWrapper, [{
    key: "designtimeBehavior",
    value: function designtimeBehavior(element, attr) {
      if (!element) throw errors_1.Errors.argumentNull('element');
      if (!attr) throw errors_1.Errors.argumentNull('args');

      if (element.getAttribute('data-behavior')) {
        return;
      }

      element.setAttribute('data-behavior', 'behavior');
      var designer = this.props.designer;
      console.assert(attr.container != null);
      console.assert(attr.movable != null);

      if (attr.container) {
        ComponentWrapper.enableDroppable(element, designer);
      }

      if (attr.movable) {
        console.assert(element != null);
        ComponentWrapper.draggable(designer, element);
        if (this.handler != null) ComponentWrapper.draggable(designer, element, this.handler);
      } else {
        element.onclick = function (ev) {
          return ComponentWrapper.invokeOnClick(ev, designer, element);
        };
      }
    }
    /**
     * 启用拖放操作，以便通过拖放图标添加控件
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.element) {
        return;
      }

      var attr = this.props.source.attr;
      this.designtimeBehavior(this.element, attr);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      console.assert(!Array.isArray(this.props.children));
      var attr = this.props.source.attr;
      var shouldWrapper = attr.resize || typeof this.props.source.type != 'string' && this.props.source.type != component_1.MasterPage;

      if (!shouldWrapper) {
        return this.renderWidthoutWrapper();
      }

      var props = this.props.source.props;
      var style = props.style = JSON.parse(JSON.stringify(props.style || {})); // 深复制 style

      var top = style.top,
          left = style.left,
          position = style.position,
          width = style.width,
          height = style.height,
          display = style.display,
          visibility = style.visibility;
      var className = style_1.appendClassName(props.className || '', style_1.classNames.componentWrapper);
      className = props.selected ? style_1.appendClassName(className, style_1.classNames.componentSelected) : className;
      var wrapperProps = {
        id: props.id,
        className: className,
        style: {
          top: top,
          left: left,
          position: position,
          width: width,
          height: height,
          display: display,
          visibility: visibility
        },
        ref: function ref(e) {
          return _this.element = e || _this.element;
        }
      };
      var move_handle = props.selected && attr.showHandler ? React.createElement("div", {
        className: "move_handle",
        style: {},
        ref: function ref(e) {
          return _this.handler = e || _this.handler;
        }
      }) : null;
      var showResizeHandle = attr.resize && props.style.position == 'absolute' && props.selected;
      var source = this.props.source;

      if (props.style) {
        delete props.style.left;
        delete props.style.top;
        delete props.style.position;
        if (wrapperProps.style.width && wrapperProps.style.width != 'unset') props.style.width = '100%';
        if (wrapperProps.style.height && wrapperProps.style.height != 'unset') props.style.height = '100%';
      }

      return React.createElement(component_1.ComponentWrapperContext.Provider, {
        value: this
      }, React.createElement("div", Object.assign({}, wrapperProps), move_handle, showResizeHandle ? React.createElement(React.Fragment, null, React.createElement("div", {
        className: "resize_handle NE"
      }), React.createElement("div", {
        className: "resize_handle NN"
      }), React.createElement("div", {
        className: "resize_handle NW"
      }), React.createElement("div", {
        className: "resize_handle WW"
      }), React.createElement("div", {
        className: "resize_handle EE"
      }), React.createElement("div", {
        className: "resize_handle SW"
      }), React.createElement("div", {
        className: "resize_handle SS"
      }), React.createElement("div", {
        className: "resize_handle SE"
      })) : null, this.createRawElement(source.type, source.props, source.children)));
    }
  }, {
    key: "renderWidthoutWrapper",
    value: function renderWidthoutWrapper() {
      var _this2 = this;

      var _this$props$source = this.props.source,
          type = _this$props$source.type,
          props = _this$props$source.props,
          children = _this$props$source.children;

      props.ref = function (e) {
        if (!e) return;

        if (e.tagName) {
          var attr = _this2.props.source.attr;

          _this2.designtimeBehavior(e, attr);

          return;
        }
      };

      if (props.selected) {
        props.className = style_1.appendClassName(props.className || '', style_1.classNames.componentSelected);
      }

      var element = this.createRawElement(type, props, children);
      return React.createElement(component_1.ComponentWrapperContext.Provider, {
        value: this
      }, element);
    }
  }, {
    key: "createRawElement",
    value: function createRawElement(type, props, children) {
      var isEmptyElement = (children || []).length == 0;

      if (isEmptyElement) {
        var emtpy = this.designTimeEmptyElement(type, props);
        if (emtpy != null) children = [emtpy];
      }

      return React.createElement.apply(React, [type, props].concat(_toConsumableArray(children)));
    }
  }, {
    key: "designTimeEmptyElement",
    value: function designTimeEmptyElement(type, props) {
      if (type == 'input' || type == 'img' || type == 'meta' || type == 'link') return null;
      var typename = typeof type == 'string' ? type : type.name;
      var text = this.designTimeText(typename, props);
      return text;
    }
  }, {
    key: "designTimeText",
    value: function designTimeText(type, props) {
      var text = props.text;

      if (text) {
        return text;
      }

      text = text || props.name || type;
      return text;
    }
  }], [{
    key: "enableDroppable",
    value: function enableDroppable(element, designer) {
      console.assert(element != null);
      element.addEventListener('dragover', function (event) {
        event.preventDefault();
        event.stopPropagation();
        var componentName = event.dataTransfer.getData(common_1.constants.componentData);
        if (componentName) event.dataTransfer.dropEffect = "copy";else event.dataTransfer.dropEffect = "move";
        console.log("dragover: left:".concat(event.layerX, " top:").concat(event.layerX));
      });

      element.ondrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
        var ctrl = component_toolbar_1.ComponentPanel.getComponentData(event.dataTransfer);
        if (!ctrl) return;
        ctrl.props.style = ctrl.props.style || {};
        designer.pageData.props.style = designer.pageData.props.style || {};

        if (!ctrl.props.style.position) {
          ctrl.props.style.position = designer.pageData.props.style.position;
        }

        var pos = component_toolbar_1.ComponentPanel.mouseInnerPosition(event.dataTransfer);
        console.assert(pos != null);

        if (ctrl.props.style.position == 'absolute') {
          ctrl.props.style.left = event.layerX - pos.x;
          ctrl.props.style.top = event.layerY - pos.y;
        }

        designer.appendComponent(element.id, ctrl);
      };
    }
  }, {
    key: "isResizeHandleClassName",
    value: function isResizeHandleClassName(className) {
      var classNames = ['resize_handle NE', 'resize_handle NN', 'resize_handle NW', 'resize_handle WW', 'resize_handle EE', 'resize_handle SW', 'resize_handle SS', 'resize_handle SE'];
      return classNames.indexOf(className) >= 0;
    }
  }, {
    key: "draggable",
    value: function draggable(designer, element, handler) {
      if (!designer) throw errors_1.Errors.argumentNull('designer');
      if (!element) throw errors_1.Errors.argumentNull('element');
      console.assert(element.id);
      handler = handler || element;
      var componentId = element.id;
      console.assert(componentId);
      var startPos;
      var rect;
      var dragStart;
      $(handler).drag("init", function (ev) {
        startPos = $(element).position();
        if ($(this).is(".".concat(style_1.classNames.componentSelected))) return $(".".concat(style_1.classNames.componentSelected));
      }).drag('start', function (ev, dd) {
        dd.attr = $(ev.target).prop("className");
        dd.width = $(this).width();
        dd.height = $(this).height();
        dd.sourceElement = element;
        dragStart = Date.now();
      }).drag(function (ev, dd) {
        ev.preventDefault();
        ev.stopPropagation();
        rect = {};

        if (dd.attr.indexOf("E") > -1) {
          rect.width = Math.max(32, dd.width + dd.deltaX);
        }

        if (dd.attr.indexOf("S") > -1) {
          rect.height = Math.max(32, dd.height + dd.deltaY);
        }

        if (dd.attr.indexOf("W") > -1) {
          rect.width = Math.max(32, dd.width - dd.deltaX);
          setLeft(dd);
        }

        if (dd.attr.indexOf("N") > -1) {
          rect.height = Math.max(32, dd.height - dd.deltaY);
          setTop(dd);
        }

        if (dd.attr.indexOf("WW") >= 0) setLeft(dd);
        if (dd.attr.indexOf("NE") >= 0 || dd.attr.indexOf("NW") >= 0 || dd.attr.indexOf("SW") >= 0) setPosition(dd);
        if (dd.attr.indexOf("NN") >= 0) setTop(dd);

        if (dd.attr.indexOf("drag") > -1) {
          rect.top = dd.offsetY;
          rect.left = dd.offsetX;
        }

        if (!ComponentWrapper.isResizeHandleClassName(dd.attr)) {
          setPosition(dd);
        }

        if (dd.attr) $(this).css(rect);
      }, {
        click: true
      }).drag('end', function (ev, dd) {
        var interval = Date.now() - dragStart;
        ComponentWrapper.isDrag = interval >= 300;

        if (!ComponentWrapper.isResizeHandleClassName(dd.attr)) {
          var left = startPos.left + dd.deltaX;
          var top = startPos.top + dd.deltaY;
          designer.setComponentPosition(element.id, {
            left: left,
            top: top
          });
          element.style.transform = '';
        } else {
          var _left, _top;

          if (dd.attr.indexOf("W") > -1) _left = startPos.left + dd.deltaX;
          if (dd.attr.indexOf("N") > -1) _top = startPos.top + dd.deltaY;
          element.style.transform = '';
          designer.setComponentPosition(element.id, {
            left: _left,
            top: _top
          });
          designer.setComponentSize(componentId, rect);
        }
      }).click(function (ev) {
        ComponentWrapper.invokeOnClick(ev, designer, element);
      });

      var setPosition = function setPosition(dd) {
        console.log(['dd.offsetX, dd.offsetY', dd.offsetX, dd.offsetY]);
        console.log(dd);
        element.style.transform = "translate(".concat(dd.deltaX, "px,").concat(dd.deltaY, "px)");
      };

      var setTop = function setTop(dd) {
        element.style.transform = "translateY(".concat(dd.deltaY, "px)");
      };

      var setLeft = function setLeft(dd) {
        element.style.transform = "translateX(".concat(dd.deltaX, "px)");
      };
    }
  }, {
    key: "invokeOnClick",
    value: function invokeOnClick(ev, designer, element) {
      ev.preventDefault();
      ev.stopPropagation();

      if (ComponentWrapper.isDrag) {
        ComponentWrapper.isDrag = false;
        return;
      }

      var elementID = element.id;

      if (!ev.ctrlKey) {
        designer.selectComponent(element.id);
        return;
      }

      var selectedControlIds = designer.selectedComponentIds;
      console.assert(elementID);

      if (selectedControlIds.indexOf(elementID) >= 0) {
        selectedControlIds = selectedControlIds.filter(function (o) {
          return o != elementID;
        });
      } else {
        selectedControlIds.push(elementID);
      }

      designer.selectComponent(selectedControlIds);
    }
  }]);

  return ComponentWrapper;
}(React.Component);

ComponentWrapper.isDrag = false;
exports.ComponentWrapper = ComponentWrapper;
//# sourceMappingURL=component-wrapper.js.map
