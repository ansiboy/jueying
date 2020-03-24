"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageDesigner = void 0;

var React = _interopRequireWildcard(require("react"));

var _common = require("./common");

var _errors = require("./errors");

var _style = require("./style");

var _reactPageBuilder = require("./react-page-builder");

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PageDesigner =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageDesigner, _React$Component);

  function PageDesigner(props) {
    var _this;

    _classCallCheck(this, PageDesigner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageDesigner).call(this, props));
    _this.componentSelected = _common.Callback.create();
    _this.componentRemoved = _common.Callback.create();
    _this.componentAppend = _common.Callback.create();
    _this.componentUpdated = _common.Callback.create();
    _this.designtimeComponentDidMount = _common.Callback.create(); // let components: PageDesignerState["components"] = {};
    // PageDesigner.fillPageData(props.pageData);

    _this.state = {};

    _this.designtimeComponentDidMount.add(function () {
      console.log("this:designer event:controlComponentDidMount");
    });

    var pageBuilderType = props.pageBuilderType || _reactPageBuilder.ReactPageBuilder;
    _this.pageBuilder = new pageBuilderType({
      designer: _assertThisInitialized(_this)
    });
    return _this;
  } // private static setComponetRefProp(pageData: ComponentData, components: PageDesignerState["components"]) {
  //     //=========================================================
  //     // 纪录当前 pageData 控件 ID
  //     let componentIds: { [typeName: string]: string[] } = {};
  //     //=========================================================
  //     PageDesigner.travelComponentData(pageData).forEach(item => {
  //         console.assert(item.props != null && item.props.id != null);
  //         componentIds[item.type] = componentIds[item.type] || [];
  //         componentIds[item.type].push(item.props["id"] as string);
  //         let itemRef = item.props.ref;
  //         item.props.ref = (e) => {
  //             if (e != null) {
  //                 components[item.type] = components[item.type] || [];
  //                 components[item.type].push(e);
  //             }
  //             if (typeof itemRef == "function")
  //                 itemRef(e);
  //         }
  //     })
  //     //=========================================================
  //     // 仅保留 componentIds 中的控件 
  //     let names = Object.getOwnPropertyNames(components);
  //     for (let i = 0; i < names.length; i++) {
  //         let typename = names[i];
  //         let ids = componentIds[typename] || [];
  //         components[typename] = (components[typename] || []).filter(o => ids.indexOf(o["id"] || o.props["id"]) >= 0)
  //     }
  //     //=========================================================
  // }
  // /** 对 pageData 进行缺少的字段进行补充 */
  // private static fillPageData(pageData: ComponentData) {
  //     if (pageData == null) {
  //         return
  //     }
  //     pageData.children = pageData.children || [];
  //     PageDesigner.nameComponent(pageData);
  //     // PageDesigner.setComponetRefProp(pageData, components);
  // }
  // allComponents(): React.Component[] {
  //     let r: React.Component[] = [];
  //     for (let key in this.state.components) {
  //         r.push(...this.state.components[key]);
  //     }
  //     return r;
  // }

  /** 页面数据 */


  _createClass(PageDesigner, [{
    key: "updateComponentProp",

    /** 更新组件属性 */
    value: function updateComponentProp(componentId, propName, value) {
      return this.updateComponentProps({
        componentId: componentId,
        propName: propName,
        value: value
      });
    }
    /** 更新组件多个属性 */

  }, {
    key: "updateComponentProps",
    value: function updateComponentProps() {
      for (var _len = arguments.length, componentProps = new Array(_len), _key = 0; _key < _len; _key++) {
        componentProps[_key] = arguments[_key];
      }

      var componentDatas = this.pageBuilder.updateComponentProps(componentProps);
      this.componentUpdated.fire(componentDatas);
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
      if (!parentId) throw _errors.Errors.argumentNull('parentId');
      if (!componentData) throw _errors.Errors.argumentNull('childComponent');
      this.pageBuilder.appendComponent(parentId, componentData, componentIndex);
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
      // console.assert(componentId != null)
      // console.assert(size != null)
      // let componentData = this.findComponentData(componentId);
      // if (!componentData)
      //     throw new Error(`Control ${componentId} is not exits.`);
      // let style = componentData.props.style = (componentData.props.style || {});
      // if (size.height)
      //     style.height = size.height
      // if (size.width)
      //     style.width = size.width
      // let { pageData } = this.state;
      // this.setState({ pageData });
      var componentDatas = this.pageBuilder.setComponentsSize([{
        componentId: componentId,
        size: size
      }]);
      this.componentUpdated.fire(componentDatas);
    }
    /** 设置多个组件的位置 */

  }, {
    key: "setComponentsPosition",
    value: function setComponentsPosition(positions) {
      var componentDatas = this.pageBuilder.setComponentsPosition(positions);
      this.componentUpdated.fire(componentDatas);
    }
    /**
     * 选择指定的控件
     * @param control 指定的控件
     */

  }, {
    key: "selectComponent",
    value: function selectComponent(componentIds) {
      var ids = typeof componentIds == "string" ? [componentIds] : componentIds;
      this.pageBuilder.selectComponents(ids);
      this.componentSelected.fire(ids);
    }
    /** 移除控件 */

  }, {
    key: "removeComponent",
    value: function removeComponent() {
      for (var _len2 = arguments.length, componentIds = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        componentIds[_key2] = arguments[_key2];
      }

      if (!componentIds) throw _errors.Errors.argumentNull("componentIds");
      this.pageBuilder.removeComponents(componentIds);
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
      this.pageBuilder.moveComponent(componentId, parentId, childComponentIndex);
    } // private static travelComponentData(pageData: ComponentData, filter?: (item: ComponentData) => boolean): ComponentData[] {
    //     let stack = new Array<ComponentData>();
    //     stack.push(pageData);
    //     let r: ComponentData[] = [];
    //     // return new Promise((resolve, reject) => {
    //     filter = filter || (() => true);
    //     while (stack.length > 0) {
    //         let item = stack.shift();
    //         if (filter(item)) {
    //             r.push(item);
    //         }
    //         //===============================================
    //         // 子元素有可能为字符串, 过滤出对象
    //         let children = (item.children || []).filter(o => typeof o == 'object') as ComponentData[]
    //         //===============================================
    //         stack.push(...children);
    //     }
    //     return r;
    // }
    // findComponetsByTypeName(componentTypeName: string) {
    //     let components = this.state.components[componentTypeName];
    //     return components;
    // }
    // findComponentData(componentId: string): ComponentData | null {
    //     let pageData = this.state.pageData;
    //     if (!pageData)
    //         throw Errors.pageDataIsNull();
    //     let componentDatas = PageDesigner.travelComponentData(pageData, (item) => item.props.id == componentId)
    //     return componentDatas[0];
    // }

  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var DELETE_KEY_CODE = 46;

      if (e.keyCode == DELETE_KEY_CODE) {
        if (this.selectedComponents.length == 0) return;
        this.removeComponent.apply(this, _toConsumableArray(this.selectedComponentIds));
      }
    } // private createDesignTimeElement(type: string | React.ComponentClass<any>, props: ComponentProps<any>, ...children: any[]) {
    //     if (type == null) throw Errors.argumentNull('type')
    //     if (props == null) throw Errors.argumentNull('props')
    //     if (props.id == null) throw Errors.argumentFieldCanntNull('id', 'props')
    //     console.assert(props.id != null)
    //     if (props.id != null)
    //         props.key = props.id;
    //     //===================================================
    //     // 获取对象的 ComponentAttribute ，以从对象 props 中获取的为准
    //     let attr1 = Component.getAttribute(type)
    //     console.assert(attr1 != null)
    //     let attr2 = props.attr || {}
    //     let attr = Object.assign({}, attr1, attr2)
    //     delete props.attr
    //     //===================================================
    //     let className = props.selected ? appendClassName(props.className || '', classNames.componentSelected) : props.className
    //     let wrapperProps = Object.assign({}, props);
    //     delete wrapperProps.ref;
    //     wrapperProps.className = className;
    //     return <ComponentWrapper {...wrapperProps} designer={this}
    //         source={{ type, attr, props, children }}>
    //     </ComponentWrapper>
    // }
    // static getDerivedStateFromProps(props: PageDesignerProps, state: PageDesignerState) {
    //     PageDesigner.fillPageData(props.pageData);
    //     return { pageData: props.pageData } as Partial<PageDesignerState>;
    // }

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.pageBuilder.createPage(this.pageData, this.element);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = this.props.style;
      var result = React.createElement("div", {
        className: _style.classNames.designer,
        tabIndex: 1,
        style: style,
        onKeyDown: function onKeyDown(e) {
          return _this2.onKeyDown(e);
        },
        ref: function ref(e) {
          _this2.element = e || _this2.element;
        }
      });
      return result;
    }
  }, {
    key: "pageData",
    get: function get() {
      return this.props.pageData;
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
        if (item.props != null && item.props.selected == true) arr.push(item);
        var children = item.children || [];

        for (var i = 0; i < children.length; i++) {
          stack.push(children[i]);
        }
      }

      return arr;
    }
  }], [{
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

      if (!props.id) props.id = (0, _common.guid)();

      if (!component.children || component.children.length == 0) {
        return;
      }

      for (var i = 0; i < component.children.length; i++) {
        PageDesigner.nameComponent(component.children[i]);
      }
    }
  }]);

  return PageDesigner;
}(React.Component);

exports.PageDesigner = PageDesigner;
PageDesigner.defaultProps = {
  pageData: null,
  wrapDesignTimeElement: true
};
//# sourceMappingURL=page-designer.js.map
