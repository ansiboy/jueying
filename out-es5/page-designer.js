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

var component_1 = require("./component");

var style_1 = require("./style");

var component_wrapper_1 = require("./component-wrapper");

var PageDesigner =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageDesigner, _React$Component);

  function PageDesigner(props) {
    var _this;

    _classCallCheck(this, PageDesigner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageDesigner).call(this, props));
    _this.components = {};
    var pageData = _this.props.componentDataHandler.pageData;

    _this.initPageData(pageData);

    _this.state = {
      pageData: pageData
    };

    _this.props.componentDataHandler.componentSelected.add(function (args) {
      // this.componentSelected.fire(args);
      _this.setState({
        pageData: _this.props.componentDataHandler.pageData
      });
    });

    _this.props.componentDataHandler.componentRemoved.add(function (args) {
      // this.componentRemoved.fire(args);
      _this.setState({
        pageData: _this.props.componentDataHandler.pageData
      });
    });

    _this.props.componentDataHandler.componentUpdated.add(function (args) {
      // this.componentUpdated.fire(args);
      _this.setState({
        pageData: _this.props.componentDataHandler.pageData
      });
    });

    _this.props.componentDataHandler.pageDataChanged.add(function (args) {
      _this.setState({
        pageData: args
      });
    }); // this.componentAppend = Callback.create();
    // this.props.componentDataHandler.componentAppend.add(() => this.componentAppend.fire(this));


    return _this;
  }

  _createClass(PageDesigner, [{
    key: "setComponetRefProp",
    value: function setComponetRefProp(pageData) {
      var _this2 = this;

      //=========================================================
      // 纪录当前 pageData 控件 ID
      var componentIds = {}; //=========================================================

      PageDesigner.travelComponentData(pageData).forEach(function (item) {
        console.assert(item.props != null && item.id != null);
        componentIds[item.type] = componentIds[item.type] || [];
        componentIds[item.type].push(item.props["id"]);
        var itemRef = item.props.ref;

        item.props.ref = function (e) {
          if (e != null) {
            _this2.components[item.type] = _this2.components[item.type] || [];

            _this2.components[item.type].push(e);
          }

          if (typeof itemRef == "function") itemRef(e);
        };
      }); //=========================================================
      // 仅保留 componentIds 中的控件 

      var names = Object.getOwnPropertyNames(this.components);

      var _loop = function _loop(i) {
        var typename = names[i];
        var ids = componentIds[typename] || [];
        _this2.components[typename] = (_this2.components[typename] || []).filter(function (o) {
          return ids.indexOf(o["id"] || o.props["id"]) >= 0;
        });
      };

      for (var i = 0; i < names.length; i++) {
        _loop(i);
      } //=========================================================

    }
  }, {
    key: "initPageData",
    value: function initPageData(pageData) {
      if (pageData == null) {
        return;
      }

      pageData.children = pageData.children || []; // PageDesigner.nameComponent(pageData);

      this.setComponetRefProp(pageData);
    }
  }, {
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
      for (var _len = arguments.length, componentProps = new Array(_len), _key = 0; _key < _len; _key++) {
        componentProps[_key] = arguments[_key];
      }

      this.props.componentDataHandler.updateComponentProps(componentProps);
    } // /**
    //  * 对组件及其子控件进行命名
    //  * @param component 
    //  */
    // private static nameComponent(component: ComponentData) {
    //     let namedComponents: { [key: string]: ComponentData } = {}
    //     let props = component.props = component.props || {};
    //     if (!props.name) {
    //         let num = 0;
    //         let name: string;
    //         do {
    //             num = num + 1;
    //             name = `${component.type}${num}`;
    //         } while (namedComponents[name]);
    //         namedComponents[name] = component
    //         props.name = name;
    //     }
    //     if (!props.id)
    //         props.id = guid();
    //     if (!component.children || component.children.length == 0) {
    //         return;
    //     }
    //     component.children.forEach(child => {
    //         if (typeof child == "string")
    //             return true;
    //         PageDesigner.nameComponent(child);
    //     })
    // }

    /**
     * 添加控件
     * @param parentId 父控件编号
     * @param componentData 控件数据
     * @param componentIndex 新添加组件在子组件中的次序
     */

  }, {
    key: "appendComponent",
    value: function appendComponent(parentId, componentData, componentIndex) {
      this.props.componentDataHandler.appendComponent(parentId, componentData, componentIndex);
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
      }); // this.componentUpdated.fire([componentData])
    }
  }, {
    key: "setComponentsPosition",
    value: function setComponentsPosition(positions) {
      var _this3 = this;

      var toUpdateProps = [];
      positions.forEach(function (o) {
        var componentId = o.componentId;
        var _o$position = o.position,
            left = _o$position.left,
            top = _o$position.top;

        var componentData = _this3.props.componentDataHandler.findComponentData(componentId);

        if (!componentData) throw new Error("Control ".concat(componentId, " is not exits."));
        var style = componentData.props.style = componentData.props.style || {};
        if (left) style.left = left;
        if (top) style.top = top;
        toUpdateProps.push({
          componentId: componentId,
          propName: "style",
          value: style
        });
      });
      this.props.componentDataHandler.updateComponentProps(toUpdateProps);
    }
    /**
     * 选择指定的控件
     * @param control 指定的控件
     */

  }, {
    key: "selectComponent",
    value: function selectComponent(componentIds) {
      this.props.componentDataHandler.selectComponents(componentIds); //====================================================
      // 设置焦点，以便获取键盘事件

      if (this._element) this._element.focus(); //====================================================
    }
    /** 移除控件 */

  }, {
    key: "removeComponent",
    value: function removeComponent() {
      for (var _len2 = arguments.length, componentIds = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        componentIds[_key2] = arguments[_key2];
      }

      this.props.componentDataHandler.removeComponents(componentIds);
    }
    /**
     * 移动控件到另外一个控件容器
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param targetComponentIndex 组件位置
     */

  }, {
    key: "moveComponent",
    value: function moveComponent(componentId, parentId, targetComponentIndex) {
      return this.props.componentDataHandler.moveComponent(componentId, parentId, targetComponentIndex);
    }
  }, {
    key: "removeComponentFrom",
    value: function removeComponentFrom(controlId, collection) {
      var _this4 = this;

      var controlIndex = null;

      for (var i = 0; i < collection.length; i++) {
        var child = collection[i];
        if (typeof child == "string") continue;

        if (controlId == child.id) {
          controlIndex = i;
          break;
        }
      }

      if (controlIndex == null) {
        var _loop2 = function _loop2(_i) {
          var o = collection[_i];
          if (typeof o == "string") return "continue";
          var children = o.children || [];
          children.forEach(function (child) {
            if (typeof child == "string") return true;

            var isRemoved = _this4.removeComponentFrom(controlId, children);

            if (isRemoved) {
              return true;
            }
          });
        };

        for (var _i = 0; _i < collection.length; _i++) {
          var _ret = _loop2(_i);

          if (_ret === "continue") continue;
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
    key: "findComponentData",
    value: function findComponentData(componentId) {
      return this.props.componentDataHandler.findComponentData(componentId);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var DELETE_KEY_CODE = 46;

      if (e.keyCode == DELETE_KEY_CODE) {
        if (this.selectedComponents.length == 0) return;
        this.props.componentDataHandler.removeComponents(this.selectedComponentIds);
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

      for (var _len3 = arguments.length, children = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        children[_key3 - 2] = arguments[_key3];
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
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var pageData = this.state.pageData;
      var style = this.props.style;
      var elementTag = this.props.elementTag || "div";
      var result = React.createElement(elementTag, {
        className: style_1.classNames.designer,
        tabIndex: 1,
        style: style,
        ref: function ref(e) {
          if (!e) return;
          _this5._element = e || _this5._element;

          _this5.props.componentFactory.renderDesignTimeComponent(pageData, e, {
            handler: _this5.props.componentDataHandler
          });
        },
        onKeyDown: function onKeyDown(t) {
          return _this5.onKeyDown(t);
        }
      });
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
        return o.id;
      });
    }
    /** 获取已选择了的组件 */

  }, {
    key: "selectedComponents",
    get: function get() {
      return this.props.componentDataHandler.selectedComponents;
    }
  }, {
    key: "element",
    get: function get() {
      return this._element;
    }
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
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      return {
        pageData: props.componentDataHandler.pageData
      };
    }
  }]);

  return PageDesigner;
}(React.Component); // componentSelected: Callback<string[]> = Callback.create<string[]>();
// componentRemoved: Callback<string[]> = Callback.create<string[]>()
// componentAppend: Callback<PageDesigner> = Callback.create<PageDesigner>()
// componentUpdated: Callback<ComponentData[]> = Callback.create<ComponentData[]>()
// designtimeComponentDidMount = Callback.create<{ component: React.ReactElement<any>, element: HTMLElement }>();


PageDesigner.defaultProps = {
  componentDataHandler: null
};
exports.PageDesigner = PageDesigner;
//# sourceMappingURL=page-designer.js.map
