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

var component_1 = require("./component");

var errors_1 = require("./errors");

var style_1 = require("./style");

var component_wrapper_1 = require("./component-wrapper");

var React = require("react");

var ReactDOM = require("react-dom");

var common_1 = require("./common");

exports.PageBuilderContext = React.createContext({
  pageBuilder: null
});
/** 基于 ReactJS 的页面渲染器 */

var ReactPageBuilder =
/*#__PURE__*/
function () {
  function ReactPageBuilder(args) {
    _classCallCheck(this, ReactPageBuilder);

    if (!args) throw errors_1.Errors.argumentNull("args");
    this.designer = args.designer;
  }

  _createClass(ReactPageBuilder, [{
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

      for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
      }

      return React.createElement(component_wrapper_1.ComponentWrapper, Object.assign({}, wrapperProps, {
        designer: this.designer,
        source: {
          type: type,
          attr: attr,
          props: props,
          children: children
        }
      }));
    }
  }, {
    key: "createPage",
    value: function createPage(pageData, pageElement) {
      if (!pageData) throw errors_1.Errors.argumentNull("pageData");
      if (!pageElement) throw errors_1.Errors.argumentNull("pageElement");
      this.pageData = pageData;
      this.pageElement = pageElement;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      console.assert(this.pageData.props.id != null);
      var c = component_1.Component.createElement(this.pageData, this.createDesignTimeElement.bind(this));
      ReactDOM.render(React.createElement(exports.PageBuilderContext.Provider, {
        value: {
          pageBuilder: this
        }
      }, c), this.pageElement);
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

      this.render();
      return componentDatas;
    }
  }, {
    key: "setComponentsSize",
    value: function setComponentsSize(componentSiezs) {
      // console.assert(componentId != null)
      // console.assert(size != null)
      var componentDatas = [];

      for (var i = 0; i < componentSiezs.length; i++) {
        var _componentSiezs$i = componentSiezs[i],
            componentId = _componentSiezs$i.componentId,
            size = _componentSiezs$i.size;
        var componentData = this.findComponentData(componentId);
        if (!componentData) throw new Error("Control ".concat(componentId, " is not exits."));
        componentDatas.push(componentData);
        var style = componentData.props.style = componentData.props.style || {};
        if (size.height) style.height = size.height;
        if (size.width) style.width = size.width;
      }

      this.render();
      return componentDatas;
    }
  }, {
    key: "findComponentData",
    value: function findComponentData(componentId) {
      var componentDatas = ReactPageBuilder.travelComponentData(this.pageData, function (item) {
        return item.props.id == componentId;
      });
      return componentDatas[0];
    }
  }, {
    key: "appendComponent",
    value: function appendComponent(parentId, componentData, componentIndex) {
      if (!parentId) throw errors_1.Errors.argumentNull('parentId');
      if (!componentData) throw errors_1.Errors.argumentNull('childComponent');
      ReactPageBuilder.nameComponent(componentData);
      var parentControl = this.findComponentData(parentId);
      if (parentControl == null) throw new Error('Parent is not exists');
      console.assert(parentControl != null);
      parentControl.children = parentControl.children || [];

      if (componentIndex != null) {
        parentControl.children.splice(componentIndex, 0, componentData);
      } else {
        parentControl.children.push(componentData);
      } // let { pageData } = this.state;
      // this.setState({ pageData });
      // this.selectComponent(componentData.props.id);
      // this.componentAppend.fire(this)


      this.render();
    }
    /**
     * 选择指定的控件
     * @param control 指定的控件
     */

  }, {
    key: "selectComponents",
    value: function selectComponents(componentIds) {
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
      } // this.setState({ pageData: this.pageData })
      // this.componentSelected.fire(this.selectedComponentIds)


      this.render(); //====================================================
      // 设置焦点，以便获取键盘事件

      this.pageElement.focus(); //====================================================
    }
  }, {
    key: "setComponentsPosition",
    value: function setComponentsPosition(positions) {
      var _this = this;

      var componentDatas = new Array();
      positions.forEach(function (o) {
        var componentId = o.componentId;
        var _o$position = o.position,
            left = _o$position.left,
            top = _o$position.top;

        var componentData = _this.findComponentData(componentId);

        if (!componentData) throw new Error("Control ".concat(componentId, " is not exits."));
        var style = componentData.props.style = componentData.props.style || {};
        if (left) style.left = left;
        if (top) style.top = top;
        componentDatas.push(componentData);
      });
      this.render();
      return componentDatas;
    }
  }, {
    key: "removeComponents",
    value: function removeComponents(componentIds) {
      var _this2 = this;

      var pageData = this.pageData;
      if (!pageData || !pageData.children || pageData.children.length == 0) return;
      componentIds.forEach(function (controlId) {
        _this2.removeComponentFrom(controlId, pageData.children);
      });
    }
  }, {
    key: "moveComponent",
    value: function moveComponent(componentId, parentId, childComponentIndex) {
      var component = this.findComponentData(componentId);
      if (component == null) throw new Error("Cannt find component by id ".concat(componentId));
      console.assert(component != null, "Cannt find component by id ".concat(componentId));
      var pageData = this.pageData;
      console.assert(pageData.children != null);
      this.removeComponentFrom(componentId, pageData.children);
      this.appendComponent(parentId, component, childComponentIndex);
    }
  }, {
    key: "removeComponentFrom",
    value: function removeComponentFrom(componentId, collection) {
      var compoentIndex = null;

      for (var i = 0; i < collection.length; i++) {
        if (componentId == collection[i].props.id) {
          compoentIndex = i;
          break;
        }
      }

      if (compoentIndex == null) {
        for (var _i2 = 0; _i2 < collection.length; _i2++) {
          var o = collection[_i2];

          if (o.children && o.children.length > 0) {
            var isRemoved = this.removeComponentFrom(componentId, o.children);

            if (isRemoved) {
              return true;
            }
          }
        }

        return false;
      }

      if (compoentIndex == 0) {
        collection.shift();
      } else if (compoentIndex == collection.length - 1) {
        collection.pop();
      } else {
        collection.splice(compoentIndex, 1);
      }

      return true;
    }
    /**
     * 对组件及其子控件进行命名
     * @param component
     */

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
        ReactPageBuilder.nameComponent(component.children[i]);
      }
    }
  }]);

  return ReactPageBuilder;
}();

exports.ReactPageBuilder = ReactPageBuilder;
//# sourceMappingURL=component-factory.js.map
