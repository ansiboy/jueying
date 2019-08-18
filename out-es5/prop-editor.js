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

define(["require", "exports", "react"], function (require, exports, React) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var PropEditor =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(PropEditor, _React$Component);

    function PropEditor(props) {
      var _this;

      _classCallCheck(this, PropEditor);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PropEditor).call(this, props));
      _this.state = {
        value: props.value
      };
      return _this;
    }

    _createClass(PropEditor, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(props) {
        this.setState({
          value: props.value
        });
      }
    }], [{
      key: "dropdown",
      value: function dropdown(items) {
        return _dropdown(items);
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
        var _this2 = this;

        var value = this.state.value;
        return React.createElement("input", {
          className: 'form-control',
          value: value || '',
          onChange: function onChange(e) {
            _this2.setState({
              value: e.target.value
            });

            _this2.props.onChange(e.target.value);
          }
        });
      }
    }]);

    return TextInput;
  }(PropEditor);

  exports.TextInput = TextInput;

  function _dropdown(items) {
    return (
      /*#__PURE__*/
      function (_PropEditor2) {
        _inherits(Dropdown, _PropEditor2);

        function Dropdown() {
          _classCallCheck(this, Dropdown);

          return _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).apply(this, arguments));
        }

        _createClass(Dropdown, [{
          key: "render",
          value: function render() {
            var _this3 = this;

            var value = this.state.value;
            value = value || '';

            if (Array.isArray(items)) {
              var tmp = items;
              items = {};

              for (var i = 0; i < tmp.length; i++) {
                items[tmp[i]] = tmp[i];
              }
            }

            return React.createElement("select", {
              className: 'form-control',
              value: value,
              onChange: function onChange(e) {
                value = e.target.value;

                _this3.setState({
                  value: value
                });

                _this3.props.onChange(value);
              }
            }, Object.getOwnPropertyNames(items).map(function (o) {
              return React.createElement("option", {
                key: o,
                value: o
              }, items[o]);
            }));
          }
        }]);

        return Dropdown;
      }(PropEditor)
    );
  }
});
//# sourceMappingURL=prop-editor.js.map
