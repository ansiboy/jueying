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

var property_editor_1 = require("./property-editor");

var style_1 = require("./style");

var EditorPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditorPanel, _React$Component);

  // private designerComponentChanged: (args: any) => void
  function EditorPanel(props) {
    var _this;

    _classCallCheck(this, EditorPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditorPanel).call(this, props));
    _this.state = {
      componentDatas: []
    }; // this.designerComponentChanged = () => {
    //     console.assert(this.designer != null)
    //     this.setState({ designer: this.designer })
    // }

    return _this;
  }

  _createClass(EditorPanel, [{
    key: "render",
    // set designer(value) {
    //     if (this._designer) {
    //         this._designer.componentRemoved.remove(this.designerComponentChanged)
    //         this._designer.componentAppend.remove(this.designerComponentChanged)
    //         this._designer.componentUpdated.remove(this.designerComponentChanged)
    //         this._designer.componentSelected.remove(this.designerComponentChanged)
    //     }
    //     if (value) {
    //         value.componentRemoved.add(this.designerComponentChanged)
    //         value.componentAppend.add(this.designerComponentChanged)
    //         value.componentUpdated.add(this.designerComponentChanged)
    //         value.componentSelected.add(this.designerComponentChanged)
    //     }
    //     this._designer = value;
    //     this.setState({ designer: value });
    // }
    value: function render() {
      var _this2 = this;

      var empty = this.props.empty;
      empty = empty || React.createElement("div", {
        className: "empty"
      }, "\u6682\u65E0\u53EF\u7528\u7684\u5C5E\u6027");
      var designer = this.props.designer;
      return React.createElement("div", {
        className: "".concat(style_1.classNames.editorPanel, " ").concat(this.props.className || ""),
        ref: function ref(e) {
          return _this2.element = e || _this2.element;
        }
      }, React.createElement(property_editor_1.PropertyEditor, {
        designer: designer,
        ref: function ref(e) {
          return _this2.editor = e || _this2.editor;
        },
        empty: empty,
        customRender: this.props.customRender
      }));
    }
  }, {
    key: "designer",
    get: function get() {
      return this._designer;
    }
  }]);

  return EditorPanel;
}(React.Component);

exports.EditorPanel = EditorPanel;
//# sourceMappingURL=editor-panel.js.map
