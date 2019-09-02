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
define(["require", "exports", "react", "./common", "./errors", "./component", "./style", "./component-wrapper"], function (require, exports, React, common_1, errors_1, component_1, style_1, component_wrapper_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var PageDesigner =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(PageDesigner, _React$Component);

    function PageDesigner(props) {
      var _this;

      _classCallCheck(this, PageDesigner);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PageDesigner).call(this, props));
      _this.componentSelected = common_1.Callback.create();
      _this.componentRemoved = common_1.Callback.create();
      _this.componentAppend = common_1.Callback.create();
      _this.componentUpdated = common_1.Callback.create();
      _this.designtimeComponentDidMount = common_1.Callback.create();
      _this.components = {};
      PageDesigner.initPageData(props.pageData);
      _this.state = {
        pageData: props.pageData
      };

      _this.designtimeComponentDidMount.add(function (args) {
        console.log("this:designer event:controlComponentDidMount");
      });

      var stack = [props.pageData];

      var _loop = function _loop() {
        var item = stack.shift();
        var itemRef = item.props.ref;

        item.props.ref = function (e) {
          // this._components.push(e);
          _this.components[item.type] = _this.components[item.type] || [];

          _this.components[item.type].push(e);

          if (typeof itemRef == "function") itemRef(e);
        };

        stack.push.apply(stack, _toConsumableArray(item.children || []));
      };

      while (stack.length > 0) {
        _loop();
      }

      return _this;
    }

    _createClass(PageDesigner, [{
      key: "allComponents",
      value: function allComponents() {
        var r = [];

        for (var key in this.components) {
          r.push.apply(r, _toConsumableArray(this.components[key]));
        }

        return r;
      }
      /** 页面数据 */

    }, {
      key: "updateComponentProp",
      value: function updateComponentProp(componentId, propName, value) {
        return this.updateComponentProps({
          componentId: componentId,
          propName: propName,
          value: value
        });
      }
    }, {
      key: "updateComponentProps",
      value: function updateComponentProps() {
        var componentDatas = [];

        for (var i = 0; i < arguments.length; i++) {
          var _ref = i < 0 || arguments.length <= i ? undefined : arguments[i],
              componentId = _ref.componentId,
              propName = _ref.propName,
              value = _ref.value;

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

        this.setState(this.state);
        this.componentUpdated.fire(componentDatas);
      }
    }, {
      key: "sortChildren",
      value: function sortChildren(parentId, childIds) {
        if (!parentId) throw errors_1.Errors.argumentNull('parentId');
        if (!childIds) throw errors_1.Errors.argumentNull('childIds');
        var pageData = this.state.pageData;
        var parentControl = this.findComponentData(parentId);
        if (parentControl == null) throw new Error('Parent is not exists');
        console.assert(parentControl != null);
        console.assert(parentControl.children != null);
        console.assert((parentControl.children || []).length == childIds.length);
        var p = parentControl;
        parentControl.children = childIds.map(function (o) {
          var child = p.children.filter(function (a) {
            return a.props.id == o;
          })[0];
          console.assert(child != null, "child ".concat(o, " is null"));
          return child;
        });
        this.setState({
          pageData: pageData
        });
      }
      /**
       * 对组件及其子控件进行命名
       * @param component
       */

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
        PageDesigner.nameComponent(componentData);
        var parentControl = this.findComponentData(parentId);
        if (parentControl == null) throw new Error('Parent is not exists');
        console.assert(parentControl != null);
        parentControl.children = parentControl.children || [];

        if (componentIndex != null) {
          parentControl.children.splice(componentIndex, 0, componentData);
        } else {
          parentControl.children.push(componentData);
        }

        var pageData = this.state.pageData;
        this.setState({
          pageData: pageData
        });
        this.selectComponent(componentData.props.id);
        this.componentAppend.fire(this);
      }
      /**
       * 设置控件位置
       * @param componentId 组件编号
       * @param position 组件位置
       */

    }, {
      key: "setComponentPosition",
      value: function setComponentPosition(componentId, position) {
        return this.setComponentsPosition([{
          componentId: componentId,
          position: position
        }]);
      }
      /**
       * 设置控件大小
       * @param componentId 组件编号
       * @param size 组件大小
       */

    }, {
      key: "setComponentSize",
      value: function setComponentSize(componentId, size) {
        console.assert(componentId != null);
        console.assert(size != null);
        var componentData = this.findComponentData(componentId);
        if (!componentData) throw new Error("Control ".concat(componentId, " is not exits."));
        var style = componentData.props.style = componentData.props.style || {};
        if (size.height) style.height = size.height;
        if (size.width) style.width = size.width;
        var pageData = this.state.pageData;
        this.setState({
          pageData: pageData
        });
        this.componentUpdated.fire([componentData]);
      }
    }, {
      key: "setComponentsPosition",
      value: function setComponentsPosition(positions) {
        var _this2 = this;

        var componentDatas = new Array();
        positions.forEach(function (o) {
          var componentId = o.componentId;
          var _o$position = o.position,
              left = _o$position.left,
              top = _o$position.top;

          var componentData = _this2.findComponentData(componentId);

          if (!componentData) throw new Error("Control ".concat(componentId, " is not exits."));
          var style = componentData.props.style = componentData.props.style || {};
          if (left) style.left = left;
          if (top) style.top = top;
          var pageData = _this2.state.pageData;

          _this2.setState({
            pageData: pageData
          });

          componentDatas.push(componentData);
        });
        this.componentUpdated.fire(componentDatas);
      }
      /**
       * 选择指定的控件
       * @param control 指定的控件
       */

    }, {
      key: "selectComponent",
      value: function selectComponent(componentIds) {
        if (typeof componentIds == 'string') componentIds = [componentIds];
        var stack = [];
        stack.push(this.pageData);

        while (stack.length > 0) {
          var item = stack.pop();
          var isSelectedControl = componentIds.indexOf(item.props.id) >= 0;
          item.props.selected = isSelectedControl;
          var children = item.children || [];

          for (var i = 0; i < children.length; i++) {
            stack.push(children[i]);
          }
        }

        this.setState({
          pageData: this.pageData
        });
        this.componentSelected.fire(this.selectedComponentIds); //====================================================
        // 设置焦点，以便获取键盘事件

        this.element.focus(); //====================================================
      }
      /** 移除控件 */

    }, {
      key: "removeComponent",
      value: function removeComponent() {
        var _this3 = this;

        var pageData = this.state.pageData;
        if (!pageData || !pageData.children || pageData.children.length == 0) return;

        for (var _len = arguments.length, componentIds = new Array(_len), _key = 0; _key < _len; _key++) {
          componentIds[_key] = arguments[_key];
        }

        componentIds.forEach(function (controlId) {
          _this3.removeComponentFrom(controlId, pageData.children);
        });
        this.setState({
          pageData: pageData
        });
        this.componentRemoved.fire(componentIds);
      }
      /**
       * 移动控件到另外一个控件容器
       * @param componentId 要移动的组件编号
       * @param parentId 目标组件编号
       * @param beforeChildId 组件的前一个子组件编号
       */

    }, {
      key: "moveComponent",
      value: function moveComponent(componentId, parentId, childComponentIndex) {
        var component = this.findComponentData(componentId);
        if (component == null) throw new Error("Cannt find component by id ".concat(componentId));
        console.assert(component != null, "Cannt find component by id ".concat(componentId));
        var pageData = this.state.pageData;
        console.assert(pageData.children != null);
        this.removeComponentFrom(componentId, pageData.children);
        this.appendComponent(parentId, component, childComponentIndex);
      }
    }, {
      key: "removeComponentFrom",
      value: function removeComponentFrom(controlId, collection) {
        var controlIndex = null;

        for (var i = 0; i < collection.length; i++) {
          if (controlId == collection[i].props.id) {
            controlIndex = i;
            break;
          }
        }

        if (controlIndex == null) {
          for (var _i2 = 0; _i2 < collection.length; _i2++) {
            var o = collection[_i2];

            if (o.children && o.children.length > 0) {
              var isRemoved = this.removeComponentFrom(controlId, o.children);

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
      key: "travelComponentData",
      value: function travelComponentData(pageData, callback) {
        var stack = new Array();
        stack.push(pageData);
        var r = []; // return new Promise((resolve, reject) => {

        while (stack.length > 0) {
          var item = stack.pop();

          if (callback(item)) {
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
      key: "findComponetsByTypeName",
      value: function findComponetsByTypeName(componentTypeName) {
        var components = this.components[componentTypeName];
        return components;
      }
    }, {
      key: "findComponentData",
      value: function findComponentData(componentId) {
        var pageData = this.state.pageData;
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

        var componentDatas = this.travelComponentData(pageData, function (item) {
          return item.props.id == componentId;
        });
        return componentDatas[0];
      }
    }, {
      key: "onKeyDown",
      value: function onKeyDown(e) {
        var DELETE_KEY_CODE = 46;

        if (e.keyCode == DELETE_KEY_CODE) {
          if (this.selectedComponents.length == 0) return;
          this.removeComponent.apply(this, _toConsumableArray(this.selectedComponentIds));
        }
      }
    }, {
      key: "createDesignTimeElement",
      value: function createDesignTimeElement(type, props) {
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

        for (var _len2 = arguments.length, children = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          children[_key2 - 2] = arguments[_key2];
        }

        return React.createElement(component_wrapper_1.ComponentWrapper, Object.assign({}, wrapperProps, {
          designer: this,
          source: {
            type: type,
            attr: attr,
            props: props,
            children: children
          }
        }));
      } // componentWillReceiveProps(props: PageDesignerProps) {
      //     PageDesigner.initPageData(props.pageData)
      //     this.setState({ pageData: props.pageData });
      // }

    }, {
      key: "render",
      value: function render() {
        var _this4 = this;

        var designer = this;
        var pageData = this.state.pageData;
        var style = this.props.style;
        var result = React.createElement("div", {
          className: style_1.classNames.designer,
          tabIndex: 1,
          style: style,
          ref: function ref(e) {
            return _this4.element = e || _this4.element;
          },
          onKeyDown: function onKeyDown(e) {
            return _this4.onKeyDown(e);
          }
        }, React.createElement(component_1.DesignerContext.Provider, {
          value: {
            designer: designer
          }
        }, function () {
          var _root = pageData ? component_1.Component.createElement(pageData, _this4.createDesignTimeElement.bind(_this4)) : null;

          return _root;
        }()));
        return result;
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
          return o.props.id;
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
          if (item.props.selected == true) arr.push(item);
          var children = item.children || [];

          for (var i = 0; i < children.length; i++) {
            stack.push(children[i]);
          }
        }

        return arr;
      }
    }], [{
      key: "initPageData",
      value: function initPageData(pageData) {
        if (pageData == null) {
          return;
        }

        pageData.children = pageData.children || [];
        PageDesigner.nameComponent(pageData);
      }
    }, {
      key: "nameComponent",
      value: function nameComponent(component) {
        var namedComponents = {};
        var props = component.props = component.props || {};

        if (!props.name) {
          var num = 0;
          var name;

          do {
            num = num + 1;
            name = "".concat(component.type).concat(num);
          } while (namedComponents[name]);

          namedComponents[name] = component;
          props.name = name;
        }

        if (!props.id) props.id = common_1.guid();

        if (!component.children || component.children.length == 0) {
          return;
        }

        for (var i = 0; i < component.children.length; i++) {
          PageDesigner.nameComponent(component.children[i]);
        }
      }
    }, {
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        PageDesigner.initPageData(props.pageData);
        return {
          pageData: props.pageData
        };
      }
    }]);

    return PageDesigner;
  }(React.Component);

  PageDesigner.defaultProps = {
    pageData: null,
    wrapDesignTimeElement: true
  };
  exports.PageDesigner = PageDesigner;
});
//# sourceMappingURL=page-designer.js.map
