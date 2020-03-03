"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = require("react");

var page_designer_1 = require("./page-designer");

var errors_1 = require("./errors");

var common_1 = require("./common");

var components_1 = require("./components");

exports.DesignerContext = React.createContext({
  designer: null
});
exports.ComponentWrapperContext = React.createContext(null);

function component(args) {
  return function (constructor) {
    if (page_designer_1.PageDesigner) {
      Component.setAttribute(constructor.name, args);
    }

    Component.register(constructor.name, constructor);
    return constructor;
  };
}

exports.component = component;

var Component =
/*#__PURE__*/
function () {
  function Component() {
    _classCallCheck(this, Component);
  }

  _createClass(Component, null, [{
    key: "setAttribute",

    /**
     * 设置组件特性
     * @param typename 组件类型名称
     * @param attr 组件特性
     */
    value: function setAttribute(typename, attr) {
      Component.componentAttributes[typename] = attr;
    }
    /**
     * 获取组件特性
     * @param typename 组件类型名称
     */

  }, {
    key: "getAttribute",
    value: function getAttribute(type) {
      var typename = typeof type == 'string' ? type : type.name;
      var attr = Component.componentAttributes[typename];
      return Object.assign({
        type: type
      }, Component.defaultComponentAttribute, attr || {});
    }
  }, {
    key: "getPropEditors",
    value: function getPropEditors(componentData) {
      var componentType = componentData.type;
      var result = [];
      var propEditorInfo = this.componentPropEditors[componentType] || [];

      for (var i = 0; i < propEditorInfo.length; i++) {
        var propName = propEditorInfo[i].propName;
        var display = Component.componentPropEditorDisplay["".concat(componentType, ".").concat(propName)];
        if (display != null && display(componentData) == false) continue;
        result.push(propEditorInfo[i]);
      }

      return result; // let classEditors = this.componentPropEditors[componentType] || []
      // Component.componentPropEditorDisplay[`${className}.${propName}`] = editorDisplay;
      // return classEditors
    }
  }, {
    key: "getPropEditor",
    value: function getPropEditor(controlClassName, propName) {
      return this.getPropEditorByArray(controlClassName, propName);
    }
    /** 通过属性数组获取属性的编辑器 */

  }, {
    key: "getPropEditorByArray",
    value: function getPropEditorByArray(controlClassName, propNames) {
      var classEditors = this.componentPropEditors[controlClassName] || [];
      var editor = classEditors.filter(function (o) {
        return o.propName == propNames;
      })[0];
      return editor;
    }
  }, {
    key: "setPropEditor",
    value: function setPropEditor(componentTypeOrOptions, propName, editorType, group) {
      var componentType;
      var editorDisplay;

      if (_typeof(componentTypeOrOptions) == "object") {
        var options = componentTypeOrOptions;
        componentType = options.componentType;
        propName = options.propName;
        editorType = options.editorType;
        group = options.group;
        editorDisplay = options.display;

        if (options.displayName != null) {
          common_1.proptDisplayNames[propName] = options.displayName;
        }
      } else {
        componentType = componentTypeOrOptions;
      }

      group = group || ''; // 属性可能为导航属性,例如 style.width

      var propNames = propName.split('.');
      var className = typeof componentType == 'string' ? componentType : componentType.prototype.typename || componentType.name;
      Component.componentPropEditorDisplay["".concat(className, ".").concat(propName)] = editorDisplay;
      var classProps = Component.componentPropEditors[className] = Component.componentPropEditors[className] || [];

      for (var i = 0; i < classProps.length; i++) {
        var propName1 = classProps[i].propName; //classProps[i].propNames.join('.')

        var propName2 = propNames.join('.');

        if (propName1 == propName2) {
          classProps[i].editorType = editorType;
          return;
        }
      }

      classProps.push({
        propName: propName,
        editorType: editorType,
        group: group
      });
    }
  }, {
    key: "createElement",
    value: function createElement(componentData, h) {
      return Component._createElement(componentData, {
        components: [],
        componentTypes: []
      }, h);
    }
    /**
     * 将持久化的元素数据转换为 ReactElement
     * @param componentData 元素数据
     */

  }, {
    key: "_createElement",
    value: function _createElement(componentData, context, h) {
      if (!componentData) throw errors_1.Errors.argumentNull('componentData');
      h = h || React.createElement;

      try {
        var type = componentData.type;
        var componentName = componentData.type;
        var controlType = Component.componentTypes[componentName];

        if (controlType) {
          type = controlType;
        }

        var children = [];

        for (var i = 0; i < componentData.children.length; i++) {
          var child = componentData.children[i];
          if (typeof child == "string") children.push(child);else children.push(Component._createElement(child, context, h));
        } //componentData.children ? componentData.children.map(o => Component._createElement(o, context, h)) : [];


        var props = componentData.props == null ? {} : Object.assign({}, componentData.props); //JSON.parse(JSON.stringify(componentData.props));

        if (controlType != null && controlType["defaultProps"]) {
          props = Object.assign({}, controlType["defaultProps"], props);
        }

        var result;

        if (typeof type == 'string') {
          if (props.text) {
            children.push(props.text);
          } //=========================================
          // props.text 非 DOM 的 prop，并且已经使用完


          delete props.text;

          if (h == React.createElement) {
            delete props.attr;
          } //=========================================

        }

        var masterPage;
        type = type == Component.Fragment ? React.Fragment : type;
        var ref = props.ref;

        props.ref = function (e) {
          if (typeof ref == "function") ref(e);

          if (e instanceof components_1.MasterPage) {
            masterPage = e;

            for (var _i = 0; _i < context.componentTypes.length; _i++) {
              var typeName = context.componentTypes[_i];
              var childComponents = masterPage.childComponents[typeName] = masterPage.childComponents[typeName] || [];
              childComponents.push(context.components[_i]);
            }
          } else if (e != null) {
            context.components.push(e);
            context.componentTypes.push(typeof type == "string" ? type : type.name); // masterPage.componentCreated.fire({ component: e, type: typeof type == "string" ? type : type.name });
          }
        };

        result = h.apply(void 0, [type, props].concat(children));
        return result;
      } catch (e) {
        console.error(e);
        return null;
      }
    }
  }, {
    key: "register",
    value: function register(componentName, componentType, attr) {
      if (componentType == null && typeof componentName == 'function') {
        componentType = componentName;
        componentName = componentType.name;
        componentType['componentName'] = componentName;
      }

      if (!componentName) throw errors_1.Errors.argumentNull('componentName');
      if (!componentType) throw errors_1.Errors.argumentNull('componentType');
      Component.componentTypes[componentName] = componentType;
      if (attr) Component.setAttribute(componentName, attr);
    }
  }]);

  return Component;
}(); //==========================================
// 用于创建 React 的 React.Fragment 


Component.Fragment = ""; //==========================================

Component.defaultComponentAttribute = {
  container: false,
  movable: false,
  showHandler: false,
  resize: false
};
Component.componentAttributes = {
  'div': {
    container: true,
    movable: true,
    showHandler: true,
    resize: true
  },
  'img': {
    container: false,
    movable: true,
    resize: true
  },
  'label': {
    movable: true
  },
  'ul': {
    container: false,
    movable: true,
    showHandler: true,
    resize: false
  },
  'li': {
    container: true,
    movable: false
  },
  'table': {
    container: false,
    movable: true,
    showHandler: true,
    resize: true
  },
  'thead': {
    container: false,
    movable: false
  },
  'tbody': {
    container: false,
    movable: false
  },
  'tfoot': {
    container: false,
    movable: false
  },
  'tr': {
    container: false,
    movable: false
  },
  'td': {
    container: true,
    movable: false
  }
};
Component.componentPropEditors = {};
Component.componentPropEditorDisplay = {};
Component.componentTypes = {};
exports.Component = Component;
//# sourceMappingURL=component.js.map
