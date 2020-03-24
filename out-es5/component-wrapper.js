"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultComponentAttribute = exports.ComponentWrapper = void 0;

var React = _interopRequireWildcard(require("react"));

var _errors = require("./errors");

var _common = require("./common");

var _componentPanel = require("./component-panel");

var _style = require("./style");

var _component = require("./component");

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

/**
 * 组件包装器，对组件进行包装，实现组件设计时的行为。
 * 1. 组件的移动
 * 2. 组件的拖放
 */
var ComponentWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ComponentWrapper, _React$Component);

  function ComponentWrapper(props) {
    _classCallCheck(this, ComponentWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(ComponentWrapper).call(this, props));
  }

  _createClass(ComponentWrapper, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({
        error: error
      }); // You can also log the error to an error reporting service
      //   logErrorToMyService(error, info);

      debugger;
    }
  }, {
    key: "designtimeBehavior",
    value: function designtimeBehavior(element, attr) {
      if (!element) throw _errors.Errors.argumentNull('element');
      if (!attr) throw _errors.Errors.argumentNull('args');

      if (element.getAttribute('data-behavior')) {
        return;
      }

      element.setAttribute('data-behavior', 'behavior');
      var designer = this.props.designer;
      console.assert(attr.container != null);
      console.assert(attr.movable != null);

      if (attr.container) {
        ComponentWrapper.enableAppendDroppable(element, designer);
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

      var _ref = this.state || {},
          error = _ref.error;

      if (error) {
        return React.createElement("div", {
          className: "error"
        }, React.createElement("div", null, error.message), React.createElement("div", null, error.stack));
      }

      var attr = this.props.source.attr;
      var noWrapper = attr.noWrapper; //attr.resize || typeof this.props.source.type != 'string';// || (typeof this.props.source.type != 'string' && this.props.source.type != MasterPage)

      if (noWrapper) {
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
      var className = (0, _style.appendClassName)(props.className || '', _style.classNames.componentWrapper);
      className = props.selected ? (0, _style.appendClassName)(className, _style.classNames.componentSelected) : className;
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
      } // source.props.ref = function (e) {
      // };


      return React.createElement(_component.ComponentWrapperContext.Provider, {
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
      var ref = props.ref;

      props.ref = function (e) {
        if (typeof ref == "function") ref(e);
        if (!e) return;

        if (e.tagName) {
          var attr = _this2.props.source.attr;

          _this2.designtimeBehavior(e, attr);

          return;
        }
      };

      if (props.selected) {
        props.className = (0, _style.appendClassName)(props.className || '', _style.classNames.componentSelected);
      }

      var element = this.createRawElement(type, props, children);
      return React.createElement(_component.ComponentWrapperContext.Provider, {
        value: this
      }, element);
    }
  }, {
    key: "createRawElement",
    value: function createRawElement(type, props, children) {
      props = Object.assign({}, props);
      var isEmptyElement = (children || []).length == 0;

      if (isEmptyElement) {
        var emtpy = this.designTimeEmptyElement(type, props);
        if (emtpy != null) children = [emtpy];
      }

      if (typeof type == "string") {
        props["parent-id"] = props.parentId;
        delete props.parentId;
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
    key: "enableAppendDroppable",
    value: function enableAppendDroppable(element, designer) {
      console.assert(element != null);
      element.addEventListener('dragover', function (event) {
        event.preventDefault();
        event.stopPropagation();
        var componentName = event.dataTransfer.getData(_common.constants.componentData);
        if (componentName) event.dataTransfer.dropEffect = "copy";else event.dataTransfer.dropEffect = "move";
        console.log("dragover: left:".concat(event['layerX'], " top:").concat(event['layerX']));
      });
      element.addEventListener("drop", function (event) {
        event.preventDefault();
        event.stopPropagation();
        var args1 = arguments[1];
        if (!event.dataTransfer) return;

        var ctrl = _componentPanel.ComponentPanel.getComponentData(event.dataTransfer);

        if (!ctrl) return;
        ctrl.props.style = ctrl.props.style || {};
        designer.pageData.props.style = designer.pageData.props.style || {};

        if (!ctrl.props.style.position) {
          ctrl.props.style.position = designer.pageData.props.style.position;
        }

        var pos = _componentPanel.ComponentPanel.mouseInnerPosition(event.dataTransfer);

        console.assert(pos != null);

        if (ctrl.props.style.position == 'absolute') {
          ctrl.props.style.left = event['layerX'] - pos.x;
          ctrl.props.style.top = event['layerY'] - pos.y;
        }

        designer.appendComponent(element.id, ctrl);
      });
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
      if (!designer) throw _errors.Errors.argumentNull('designer');
      if (!element) throw _errors.Errors.argumentNull('element');
      console.assert(element.id != "");
      handler = handler || element;
      var componentId = element.id;
      console.assert(componentId != "");
      var startPos;
      var rect;
      var dragStart;
      $(handler).drag("init", function (ev) {
        startPos = $(element).position();
        if ($(this).is(".".concat(_style.classNames.componentSelected))) return $(".".concat(_style.classNames.componentSelected));
      }).drag('start', function (ev, dd) {
        dd.attr = $(ev.target).prop("className");
        dd.width = $(this).width();
        dd.height = $(this).height();
        dd.sourceElement = element;
        dragStart = Date.now();
      }).drag(function (ev, dd) {
        ev.preventDefault();
        ev.stopPropagation();
        console.log("drop:");
        console.log(dd.drop);
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
      console.assert(elementID != "");

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

exports.ComponentWrapper = ComponentWrapper;
ComponentWrapper.isDrag = false;
var defaultComponentAttribute = {
  container: false,
  movable: false,
  showHandler: false,
  resize: false,
  noWrapper: false
};
exports.defaultComponentAttribute = defaultComponentAttribute;
//# sourceMappingURL=component-wrapper.js.map
