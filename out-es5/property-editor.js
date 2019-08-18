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

/*******************************************************************************
 * Copyright (C) maishu All rights reserved.
 *
 * HTML 页面设计器
 *
 * 作者: 寒烟
 * 日期: 2018/5/30
 *
 * 个人博客：   http://www.cnblogs.com/ansiboy/
 * GITHUB:     http://github.com/ansiboy
 * QQ 讨论组：  119038574
 *
 ********************************************************************************/
define(["require", "exports", "react", "./component", "./common"], function (require, exports, React, component_1, common_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var PropertyEditor =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(PropertyEditor, _React$Component);

    function PropertyEditor(props) {
      var _this;

      _classCallCheck(this, PropertyEditor);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyEditor).call(this, props));
      _this._element = null;
      _this.state = {
        editors: []
      };
      return _this;
    }

    _createClass(PropertyEditor, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(props) {
        this.setState({
          designer: props.designer
        });
      }
    }, {
      key: "getEditors",
      value: function getEditors(designer) {
        if (designer == null) {
          return [];
        } // 各个控件相同的编辑器


        var commonPropEditorInfos = [];
        var componentDatas = designer.selectedComponents;

        var _loop = function _loop(i) {
          var control = componentDatas[i];
          var className = control.type;
          var propEditorInfos = component_1.Component.getPropEditors(className);

          if (i == 0) {
            commonPropEditorInfos = propEditorInfos || [];
          } else {
            var items = [];
            commonPropEditorInfos.forEach(function (propInfo1) {
              propEditorInfos.forEach(function (propInfo2) {
                var propName1 = propInfo1.propNames.join('.');
                var propName2 = propInfo2.propNames.join('.');

                if (propInfo1.editorType == propInfo2.editorType && propName1 == propName2) {
                  items.push(propInfo1);
                }
              });
            });
            commonPropEditorInfos = items;
          }
        };

        for (var i = 0; i < componentDatas.length; i++) {
          _loop(i);
        } // 各个控件相同的属性值


        var commonFlatProps;

        for (var i = 0; i < componentDatas.length; i++) {
          var control = componentDatas[i];
          var controlProps = Object.assign({}, control.props);
          delete controlProps.children;
          controlProps = this.flatProps(controlProps);

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
          var propName = propEditorInfo.propNames[propEditorInfo.propNames.length - 1];
          var editorType = propEditorInfo.editorType;
          var propNames = propEditorInfo.propNames;
          var editor = React.createElement(editorType, {
            value: commonFlatProps[propNames.join('.')],
            onChange: function onChange(value) {
              for (var _i2 = 0; _i2 < componentDatas.length; _i2++) {
                var c = componentDatas[_i2];
                console.assert(c.props.id != null);
                designer.updateControlProps(c.props.id, propNames, value);
              }
            }
          });
          editors.push({
            prop: propName,
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
      key: "flatProps",
      value: function flatProps(props, baseName) {
        baseName = baseName ? baseName + '.' : '';
        var obj = {};

        for (var key in props) {
          if (_typeof(props[key]) != 'object') {
            obj[baseName + key] = props[key];
          } else {
            Object.assign(obj, this.flatProps(props[key], key));
          }
        }

        return obj;
      }
    }, {
      key: "render",
      value: function render() {
        var designer = this.state.designer;
        var editors = this.getEditors(designer);

        if (editors.length == 0) {
          var empty = this.props.empty;
          return React.createElement("div", {
            className: "text-center"
          }, empty);
        }

        var groupEditorsArray = [];

        var _loop3 = function _loop3(i) {
          var group = editors[i].group || '';
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
            editor: editors[i].editor
          });
        };

        for (var i = 0; i < editors.length; i++) {
          _loop3(i);
        }

        return React.createElement(React.Fragment, null, groupEditorsArray.map(function (g) {
          return React.createElement("div", {
            key: g.group,
            className: "panel panel-default"
          }, g.group ? React.createElement("div", {
            className: "panel-heading"
          }, common_1.strings[g.group] || g.group) : null, React.createElement("div", {
            className: "panel-body"
          }, g.editors.map(function (o, i) {
            return React.createElement("div", {
              key: o.prop,
              className: "form-group"
            }, React.createElement("label", {
              key: common_1.guid()
            }, common_1.strings[o.prop] || o.prop), " ", React.createElement("div", {
              className: "control"
            }, o.editor));
          })));
        }));
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
});
//# sourceMappingURL=property-editor.js.map
