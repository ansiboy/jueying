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

define(["require", "exports", "react", "./page-designer", "./errors", "./style", "./common", "./component-panel"], function (require, exports, React, page_designer_1, errors_1, style_1, common_1, component_panel_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
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

          var children = componentData.children ? componentData.children.map(function (o) {
            return Component._createElement(o, context, h);
          }) : [];
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
  exports.MasterPageName = 'MasterPage';
  exports.MasterPageContext = React.createContext({
    master: null
  });

  var MasterPage =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(MasterPage, _React$Component);

    function MasterPage(props) {
      var _this;

      _classCallCheck(this, MasterPage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MasterPage).call(this, props));
      _this.childComponents = {};
      var children = MasterPage.children(props);
      _this.state = {
        children: children
      };
      return _this;
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
  Component.register(exports.MasterPageName, MasterPage, {
    container: false
  });
  /**
   * 占位符，用于放置控件
   */

  var PlaceHolder =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(PlaceHolder, _React$Component2);

    function PlaceHolder(props) {
      var _this2;

      _classCallCheck(this, PlaceHolder);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(PlaceHolder).call(this, props));

      if (!_this2.props.id) {
        throw errors_1.Errors.placeHolderIdNull();
      }

      return _this2;
    }
    /**
     * 启用拖放操作，以便通过拖放图标添加控件
     */


    _createClass(PlaceHolder, [{
      key: "enableAppendDroppable",
      value: function enableAppendDroppable(element, master) {
        var _this3 = this;

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
          console.assert(_this3.props.id != null);
          console.assert(_this3.designer != null);
          ctrl.props.parentId = _this3.props.id;
          console.assert(master != null, 'host is null');

          _this3.designer.appendComponent(master.props.id, ctrl);
        };
      }
    }, {
      key: "enableMoveDroppable",
      value: function enableMoveDroppable(element, host) {
        var _this4 = this;

        if (element.getAttribute('enable-move-droppable')) return;
        element.setAttribute('enable-move-droppable', 'true');
        $(element).drop('start', function (event, dd) {
          if (dd.sourceElement.id == _this4.wraper.props.source.props.id) return;
          style_1.appendClassName(element, 'active');
        }).drop('drop', function (event, dd) {
          if (dd.sourceElement.id == _this4.wraper.props.source.props.id) return;

          var componentData = _this4.designer.findComponentData(dd.sourceElement.id);

          console.assert(componentData != null);
          var propName = 'parentId';

          _this4.designer.moveComponent(dd.sourceElement.id, host.props.id);

          _this4.designer.updateComponentProps({
            componentId: "string",
            propName: "string",
            value: "any"
          }); //dd.sourceElement.id, propName, this.props.id

        }).drop('end', function (event, dd) {
          if (dd.sourceElement.id == _this4.wraper.props.source.props.id) return;
          style_1.removeClassName(element, 'active');
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this5 = this;

        var empty = this.props.empty || React.createElement("div", {
          key: common_1.guid(),
          className: "empty"
        }, "\u53EF\u4EE5\u62D6\u62C9\u63A7\u4EF6\u5230\u8FD9\u91CC");
        return React.createElement(exports.MasterPageContext.Consumer, null, function (args) {
          var master = args.master;
          if (master == null) throw errors_1.Errors.canntFindMasterPage(_this5.props.id);
          var children = [];

          if (master.props && master.props.children) {
            var arr;

            if (Array.isArray(master.props.children)) {
              arr = master.props.children;
            } else {
              arr = [master.props.children];
            }

            children = arr.filter(function (o) {
              return o.props.parentId != null && o.props.parentId == _this5.props.id;
            });
          }

          return React.createElement(exports.DesignerContext.Consumer, null, function (args) {
            return React.createElement(exports.ComponentWrapperContext.Consumer, null, function (wraper) {
              _this5.wraper = wraper;
              console.assert(_this5.wraper != null);

              if (args.designer != null && children.length == 0) {
                children = [empty];
              }

              var element = React.createElement(React.Fragment, null, _this5.props.children, children);

              if (args.designer) {
                _this5.designer = args.designer;
                element = React.createElement("div", {
                  key: common_1.guid(),
                  className: style_1.classNames.placeholder,
                  ref: function ref(e) {
                    if (!e) return;
                    _this5.element = e;

                    _this5.enableAppendDroppable(e, master);

                    _this5.enableMoveDroppable(e, master);
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
  Component.register('PlaceHolder', PlaceHolder);

  var PageView =
  /*#__PURE__*/
  function (_React$Component3) {
    _inherits(PageView, _React$Component3);

    function PageView(props) {
      var _this6;

      _classCallCheck(this, PageView);

      _this6 = _possibleConstructorReturn(this, _getPrototypeOf(PageView).call(this, props));
      if (!_this6.props.pageData) throw errors_1.Errors.propCanntNull(PageView.name, 'pageData');
      return _this6;
    }

    _createClass(PageView, [{
      key: "render",
      value: function render() {
        var element = Component.createElement(this.props.pageData);
        return element;
      }
    }]);

    return PageView;
  }(React.Component);

  exports.PageView = PageView;

  var ErrorBoundary =
  /*#__PURE__*/
  function (_React$Component4) {
    _inherits(ErrorBoundary, _React$Component4);

    function ErrorBoundary(props) {
      var _this7;

      _classCallCheck(this, ErrorBoundary);

      _this7 = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));
      _this7.state = {};
      return _this7;
    }

    _createClass(ErrorBoundary, [{
      key: "componentDidCatch",
      value: function componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({
          error: error
        }); // You can also log the error to an error reporting service
        //   logErrorToMyService(error, info);

        debugger;
      }
    }, {
      key: "render",
      value: function render() {
        var _ref = this.state || {},
            error = _ref.error;

        if (error) {
          // You can render any custom fallback UI
          return React.createElement("div", {
            className: "error"
          }, React.createElement("div", null, error.message), React.createElement("div", null, error.stack));
        }

        return this.props.children;
      }
    }]);

    return ErrorBoundary;
  }(React.Component);

  exports.ErrorBoundary = ErrorBoundary;
});
//# sourceMappingURL=component.js.map
