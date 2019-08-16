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

var React = require("react");

var common_1 = require("./common");

var component_1 = require("./component");

var style_1 = require("./style");

var ComponentPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ComponentPanel, _React$Component);

  function ComponentPanel(props) {
    var _this;

    _classCallCheck(this, ComponentPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComponentPanel).call(this, props));
    _this.state = {
      componets: []
    };
    return _this;
  }

  _createClass(ComponentPanel, [{
    key: "componentDraggable",
    value: function componentDraggable(toolItemElement, componentData) {
      console.assert(toolItemElement != null);
      toolItemElement.draggable = true;
      toolItemElement.addEventListener('dragstart', function (ev) {
        componentData.props = componentData.props || {};
        ev.dataTransfer.setData(common_1.constants.componentData, JSON.stringify(componentData));
        ev.dataTransfer.setData('mousePosition', JSON.stringify({
          x: ev.offsetX,
          y: ev.offsetY
        }));
      });
    }
  }, {
    key: "setComponets",
    value: function setComponets(componets) {
      this.setState({
        componets: componets
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var empty = this.props.empty || React.createElement("div", {
        className: "empty"
      }, "\u6682\u65E0\u53EF\u7528\u7EC4\u4EF6");
      var props = Object.assign({}, this.props);
      var componets = this.state.componets || [];
      return React.createElement(component_1.DesignerContext.Consumer, null, function (context) {
        _this2.designer = context.designer;
        return React.createElement("ul", Object.assign({}, props, {
          className: "".concat(style_1.classNames.componentPanel),
          ref: function ref(e) {
            return _this2.toolbarElement = _this2.toolbarElement || e;
          }
        }), componets.length == 0 ? empty : componets.map(function (c, i) {
          var props = {
            key: i
          };
          return React.createElement("li", Object.assign({}, props), React.createElement("div", {
            className: "btn-link"
          }, React.createElement("i", {
            className: c.icon,
            style: {
              fontSize: 44,
              color: 'black'
            },
            ref: function ref(e) {
              if (!e) return;
              var ctrl = c.componentData;

              _this2.componentDraggable(e, ctrl);
            }
          })), React.createElement("div", null, c.displayName));
        })); // return <div {...props as any} className={`${classNames.componentPanel} panel panel-primary`}>
        //     <div className="panel-heading">工具栏</div>
        //     <div className="panel-body">
        //     </div>
        // </div>
      });
    }
  }], [{
    key: "getComponentData",
    value: function getComponentData(dataTransfer) {
      var str = dataTransfer.getData(common_1.constants.componentData);
      if (!str) return;
      return JSON.parse(str);
    }
    /** 获取光标在图标内的位置 */

  }, {
    key: "mouseInnerPosition",
    value: function mouseInnerPosition(dataTransfer) {
      var str = dataTransfer.getData('mousePosition');
      if (!str) return;
      return JSON.parse(str);
    }
  }]);

  return ComponentPanel;
}(React.Component);

exports.ComponentPanel = ComponentPanel;
//# sourceMappingURL=component-toolbar.js.map
