"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = require("react");

var component_wrapper_1 = require("./component-wrapper");

var errors_1 = require("./errors");

var common_1 = require("./common");

exports.ComponentWrapperContext = React.createContext(null);

function component(args) {
  return function (constructor) {
    // if (PageDesigner) {
    Component.setAttribute(constructor.name, args); // }

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
      }, component_wrapper_1.defaultComponentAttribute, attr || {});
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
  }, {
    key: "getComponentType",
    value: function getComponentType(componentName) {
      var componentType = Component.componentTypes[componentName];
      return componentType;
    }
  }]);

  return Component;
}(); //==========================================
// 用于创建 React 的 React.Fragment 


Component.Fragment = ""; //==========================================
// private static defaultComponentAttribute: ComponentAttribute = {
//     container: false, movable: false, showHandler: false, resize: false
// }

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
