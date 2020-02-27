"use strict";

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

define(["require", "exports", "./component", "./errors", "./style", "./component-wrapper", "react", "react-dom", "./common", "./component-panel"], function (require, exports, component_1, errors_1, style_1, component_wrapper_1, React, ReactDOM, common_1, component_panel_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
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
        ReactPageBuilder.fillPageData(pageData);
        this.pageData = pageData;
        this.pageElement = pageElement;
        this.render();
      }
    }, {
      key: "render",
      value: function render() {
        console.assert(this.pageData.props.id != null);
        var c = ReactPageBuilder.createElement(this.pageData, this.createDesignTimeElement.bind(this));
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
      /** 对 pageData 进行缺少的字段进行补充 */

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
      key: "fillPageData",
      value: function fillPageData(pageData) {
        if (pageData == null) {
          return;
        }

        pageData.children = pageData.children || [];
        ReactPageBuilder.nameComponent(pageData); // PageDesigner.setComponetRefProp(pageData, components);
      }
    }, {
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
    }, {
      key: "createElement",
      value: function createElement(componentData, h) {
        return ReactPageBuilder._createElement(componentData, {
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
          var componentType = component_1.Component.getComponentType(componentName);

          if (componentType) {
            type = componentType;
          }

          var children = componentData.children ? componentData.children.map(function (o) {
            return ReactPageBuilder._createElement(o, context, h);
          }) : [];
          var props = componentData.props == null ? {} : Object.assign({}, componentData.props); //JSON.parse(JSON.stringify(componentData.props));

          props.style = Object.assign({}, props.style || {});

          if (componentType != null && componentType["defaultProps"]) {
            props = Object.assign({}, componentType["defaultProps"], props);
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
          type = type == component_1.Component.Fragment ? React.Fragment : type;
          var ref = props.ref;

          props.ref = function (e) {
            if (typeof ref == "function") ref(e);

            if (e instanceof MasterPage) {
              masterPage = e;

              for (var i = 0; i < context.componentTypes.length; i++) {
                var typeName = context.componentTypes[i];
                var childComponents = masterPage.childComponents[typeName] = masterPage.childComponents[typeName] || [];
                childComponents.push(context.components[i]);
              }
            } else if (e != null) {
              context.components.push(e);
              context.componentTypes.push(typeof type == "string" ? type : type.name); // masterPage.componentCreated.fire({ component: e, type: typeof type == "string" ? type : type.name });
            }
          };

          result = h.apply(void 0, [type, props].concat(_toConsumableArray(children)));
          return result;
        } catch (e) {
          console.error(e);
          return null;
        }
      }
    }]);

    return ReactPageBuilder;
  }();

  exports.ReactPageBuilder = ReactPageBuilder;
  exports.MasterPageName = 'MasterPage';
  exports.MasterPageContext = React.createContext({
    master: null
  });

  var MasterPage =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(MasterPage, _React$Component);

    function MasterPage(props) {
      var _this3;

      _classCallCheck(this, MasterPage);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(MasterPage).call(this, props));
      _this3.childComponents = {};
      var children = MasterPage.children(props);
      _this3.state = {
        children: children
      };
      return _this3;
    }

    _createClass(MasterPage, [{
      key: "render",
      value: function render() {
        var props = {};

        for (var key in this.props) {
          if (key == 'ref' || key == 'id') continue;
          props[key] = this.props[key];
        }

        props.style = Object.assign({
          minHeight: 40
        }, props.style);
        var children = this.state.children.filter(function (o) {
          return o.props.parentId == null;
        });
        var master = this;
        console.assert(master != null);
        return React.createElement(exports.MasterPageContext.Provider, {
          value: {
            master: master
          }
        }, children);
      }
    }], [{
      key: "children",
      value: function children(props) {
        var arr = props.children == null ? [] : Array.isArray(props.children) ? props.children : [props.children];
        var children = [];
        arr.forEach(function (o) {
          if (!React.isValidElement(o)) return;
          children.push(o);
        });
        return children;
      }
    }, {
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props) {
        var children = MasterPage.children(props);
        return {
          children: children
        };
      }
    }]);

    return MasterPage;
  }(React.Component);

  exports.MasterPage = MasterPage;
  component_1.Component.register(exports.MasterPageName, MasterPage, {
    container: false,
    resize: false,
    noWrapper: true
  });
  /**
   * 占位符，用于放置控件
   */

  var PlaceHolder =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(PlaceHolder, _React$Component2);

    function PlaceHolder(props) {
      var _this4;

      _classCallCheck(this, PlaceHolder);

      _this4 = _possibleConstructorReturn(this, _getPrototypeOf(PlaceHolder).call(this, props));

      if (!_this4.props.id) {
        throw errors_1.Errors.placeHolderIdNull();
      }

      return _this4;
    }
    /**
     * 启用拖放操作，以便通过拖放图标添加控件
     */


    _createClass(PlaceHolder, [{
      key: "enableAppendDroppable",
      value: function enableAppendDroppable(element, master) {
        var _this5 = this;

        if (element.getAttribute('enable-append-droppable')) return;
        element.setAttribute('enable-append-droppable', 'true');
        console.assert(element != null);
        element.addEventListener('dragover', function (event) {
          event.preventDefault();
          event.stopPropagation();
          element.className = style_1.appendClassName(element.className || '', 'active');
          var componentName = event.dataTransfer.getData(common_1.constants.componentData);
          if (componentName) event.dataTransfer.dropEffect = "copy";else event.dataTransfer.dropEffect = "move";
          console.log("dragover: left:".concat(event.layerX, " top:").concat(event.layerX));
        });

        var func = function func(event) {
          event.preventDefault();
          event.stopPropagation();
          element.className = style_1.removeClassName(element.className, 'active');
        };

        element.addEventListener('dragleave', func);
        element.addEventListener('dragend', func);
        element.addEventListener('dragexit', func);

        element.ondrop = function (event) {
          event.preventDefault();
          event.stopPropagation();
          element.className = style_1.removeClassName(element.className, 'active');
          var ctrl;
          if (event.dataTransfer) ctrl = component_panel_1.ComponentPanel.getComponentData(event.dataTransfer);
          if (!ctrl) return;
          console.assert(_this5.props.id != null);
          console.assert(_this5.designer != null);
          ctrl.props.parentId = _this5.props.id;
          console.assert(master != null, 'host is null');

          _this5.designer.appendComponent(master.props.id, ctrl);
        };
      }
    }, {
      key: "enableMoveDroppable",
      value: function enableMoveDroppable(element, host) {
        var _this6 = this;

        if (element.getAttribute('enable-move-droppable')) return;
        element.setAttribute('enable-move-droppable', 'true');
        $(element).drop('start', function (event, dd) {
          if (dd.sourceElement.id == _this6.wraper.props.source.props.id) return;
          style_1.appendClassName(element, 'active');
        }).drop('drop', function (event, dd) {
          if (dd.sourceElement.id == _this6.wraper.props.source.props.id) return;

          var componentData = _this6.designer.findComponentData(dd.sourceElement.id);

          console.assert(componentData != null);

          _this6.designer.moveComponent(dd.sourceElement.id, host.props.id);

          _this6.designer.updateComponentProps([{
            componentId: "string",
            propName: "string",
            value: "any"
          }]); //dd.sourceElement.id, propName, this.props.id

        }).drop('end', function (event, dd) {
          if (dd.sourceElement.id == _this6.wraper.props.source.props.id) return;
          style_1.removeClassName(element, 'active');
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this7 = this;

        var empty = this.props.empty || React.createElement("div", {
          key: common_1.guid(),
          className: "empty"
        }, "\u53EF\u4EE5\u62D6\u62C9\u63A7\u4EF6\u5230\u8FD9\u91CC");
        return React.createElement(exports.MasterPageContext.Consumer, null, function (args) {
          var master = args.master;
          if (master == null) throw errors_1.Errors.canntFindMasterPage(_this7.props.id);
          var children = [];

          if (master.props && master.props.children) {
            var arr;

            if (Array.isArray(master.props.children)) {
              arr = master.props.children;
            } else {
              arr = [master.props.children];
            }

            children = arr.filter(function (o) {
              return o.props.parentId != null && o.props.parentId == _this7.props.id;
            });
          }

          return React.createElement(exports.PageBuilderContext.Consumer, null, function (args) {
            return React.createElement(component_1.ComponentWrapperContext.Consumer, null, function (wraper) {
              _this7.wraper = wraper;
              console.assert(_this7.wraper != null);

              if (args.pageBuilder != null && children.length == 0) {
                children = [empty];
              }

              var element = React.createElement(React.Fragment, null, _this7.props.children, children);

              if (args.pageBuilder) {
                _this7.designer = args.pageBuilder;
                element = React.createElement("div", {
                  key: common_1.guid(),
                  className: style_1.classNames.placeholder,
                  ref: function ref(e) {
                    if (!e) return;
                    _this7.element = e;

                    _this7.enableAppendDroppable(e, master);

                    _this7.enableMoveDroppable(e, master);
                  }
                }, element);
              }

              return element;
            });
          });
        });
      }
    }]);

    return PlaceHolder;
  }(React.Component);

  exports.PlaceHolder = PlaceHolder;
  component_1.Component.register('PlaceHolder', PlaceHolder, {
    resize: false,
    movable: false,
    container: true
  });
  /** 用于将 ComponentData 显示为组件 */

  var PageView =
  /*#__PURE__*/
  function (_React$Component3) {
    _inherits(PageView, _React$Component3);

    function PageView(props) {
      var _this8;

      _classCallCheck(this, PageView);

      _this8 = _possibleConstructorReturn(this, _getPrototypeOf(PageView).call(this, props));
      if (!_this8.props.pageData) throw errors_1.Errors.propCanntNull(PageView.name, 'pageData');
      return _this8;
    }

    _createClass(PageView, [{
      key: "render",
      value: function render() {
        var element = ReactPageBuilder.createElement(this.props.pageData);
        return element;
      }
    }]);

    return PageView;
  }(React.Component);

  exports.PageView = PageView;
});
//# sourceMappingURL=react-page-builder.js.map
