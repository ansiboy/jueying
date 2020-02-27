define(["require", "exports", "react", "./page-designer", "./errors", "./style", "./common", "./component-panel"], function (require, exports, React, page_designer_1, errors_1, style_1, common_1, component_panel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DesignerContext = React.createContext({ designer: null });
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
    class Component {
        /**
         * 设置组件特性
         * @param typename 组件类型名称
         * @param attr 组件特性
         */
        static setAttribute(typename, attr) {
            Component.componentAttributes[typename] = attr;
        }
        /**
         * 获取组件特性
         * @param typename 组件类型名称
         */
        static getAttribute(type) {
            let typename = typeof type == 'string' ? type : type.name;
            let attr = Component.componentAttributes[typename];
            return Object.assign({ type }, Component.defaultComponentAttribute, attr || {});
        }
        static getPropEditors(componentData) {
            let componentType = componentData.type;
            let result = [];
            let propEditorInfo = this.componentPropEditors[componentType] || [];
            for (let i = 0; i < propEditorInfo.length; i++) {
                let propName = propEditorInfo[i].propName;
                let display = Component.componentPropEditorDisplay[`${componentType}.${propName}`];
                if (display != null && display(componentData) == false)
                    continue;
                result.push(propEditorInfo[i]);
            }
            return result;
            // let classEditors = this.componentPropEditors[componentType] || []
            // Component.componentPropEditorDisplay[`${className}.${propName}`] = editorDisplay;
            // return classEditors
        }
        static getPropEditor(controlClassName, propName) {
            return this.getPropEditorByArray(controlClassName, propName);
        }
        /** 通过属性数组获取属性的编辑器 */
        static getPropEditorByArray(controlClassName, propNames) {
            let classEditors = this.componentPropEditors[controlClassName] || [];
            let editor = classEditors.filter(o => o.propName == propNames)[0];
            return editor;
        }
        static setPropEditor(componentTypeOrOptions, propName, editorType, group) {
            let componentType;
            let editorDisplay;
            if (typeof componentTypeOrOptions == "object") {
                let options = componentTypeOrOptions;
                componentType = options.componentType;
                propName = options.propName;
                editorType = options.editorType;
                group = options.group;
                editorDisplay = options.display;
                if (options.displayName != null) {
                    common_1.proptDisplayNames[propName] = options.displayName;
                }
            }
            else {
                componentType = componentTypeOrOptions;
            }
            group = group || '';
            // 属性可能为导航属性,例如 style.width
            let propNames = propName.split('.');
            let className = typeof componentType == 'string' ? componentType : componentType.prototype.typename || componentType.name;
            Component.componentPropEditorDisplay[`${className}.${propName}`] = editorDisplay;
            let classProps = Component.componentPropEditors[className] = Component.componentPropEditors[className] || [];
            for (let i = 0; i < classProps.length; i++) {
                let propName1 = classProps[i].propName; //classProps[i].propNames.join('.')
                let propName2 = propNames.join('.');
                if (propName1 == propName2) {
                    classProps[i].editorType = editorType;
                    return;
                }
            }
            classProps.push({ propName, editorType, group });
        }
        static createElement(componentData, h) {
            return Component._createElement(componentData, { components: [], componentTypes: [] }, h);
        }
        /**
         * 将持久化的元素数据转换为 ReactElement
         * @param componentData 元素数据
         */
        static _createElement(componentData, context, h) {
            if (!componentData)
                throw errors_1.Errors.argumentNull('componentData');
            h = h || React.createElement;
            try {
                let type = componentData.type;
                let componentName = componentData.type;
                let controlType = Component.componentTypes[componentName];
                if (controlType) {
                    type = controlType;
                }
                let children = componentData.children ? componentData.children.map(o => Component._createElement(o, context, h)) : [];
                let props = componentData.props == null ? {} : Object.assign({}, componentData.props); //JSON.parse(JSON.stringify(componentData.props));
                if (controlType != null && controlType["defaultProps"]) {
                    props = Object.assign({}, controlType["defaultProps"], props);
                }
                let result;
                if (typeof type == 'string') {
                    if (props.text) {
                        children.push(props.text);
                    }
                    //=========================================
                    // props.text 非 DOM 的 prop，并且已经使用完
                    delete props.text;
                    if (h == React.createElement) {
                        delete props.attr;
                    }
                    //=========================================
                }
                let masterPage;
                type = type == Component.Fragment ? React.Fragment : type;
                let ref = props.ref;
                props.ref = function (e) {
                    if (typeof ref == "function")
                        ref(e);
                    if (e instanceof MasterPage) {
                        masterPage = e;
                        for (let i = 0; i < context.componentTypes.length; i++) {
                            let typeName = context.componentTypes[i];
                            let childComponents = masterPage.childComponents[typeName] = masterPage.childComponents[typeName] || [];
                            childComponents.push(context.components[i]);
                        }
                    }
                    else if (e != null) {
                        context.components.push(e);
                        context.componentTypes.push(typeof type == "string" ? type : type.name);
                        // masterPage.componentCreated.fire({ component: e, type: typeof type == "string" ? type : type.name });
                    }
                };
                result = h(type, props, ...children);
                return result;
            }
            catch (e) {
                console.error(e);
                return null;
            }
        }
        static register(componentName, componentType, attr) {
            if (componentType == null && typeof componentName == 'function') {
                componentType = componentName;
                componentName = componentType.name;
                componentType['componentName'] = componentName;
            }
            if (!componentName)
                throw errors_1.Errors.argumentNull('componentName');
            if (!componentType)
                throw errors_1.Errors.argumentNull('componentType');
            Component.componentTypes[componentName] = componentType;
            if (attr)
                Component.setAttribute(componentName, attr);
        }
    }
    exports.Component = Component;
    //==========================================
    // 用于创建 React 的 React.Fragment 
    Component.Fragment = "";
    //==========================================
    Component.defaultComponentAttribute = {
        container: false, movable: false, showHandler: false, resize: false
    };
    Component.componentAttributes = {
        'div': { container: true, movable: true, showHandler: true, resize: true },
        'img': { container: false, movable: true, resize: true },
        'label': { movable: true },
        'ul': { container: false, movable: true, showHandler: true, resize: false },
        'li': { container: true, movable: false, },
        'table': { container: false, movable: true, showHandler: true, resize: true },
        'thead': { container: false, movable: false },
        'tbody': { container: false, movable: false },
        'tfoot': { container: false, movable: false },
        'tr': { container: false, movable: false },
        'td': { container: true, movable: false },
    };
    Component.componentPropEditors = {};
    Component.componentPropEditorDisplay = {};
    Component.componentTypes = {};
    exports.MasterPageName = 'MasterPage';
    exports.MasterPageContext = React.createContext({ master: null });
    class MasterPage extends React.Component {
        constructor(props) {
            super(props);
            this.childComponents = {};
            let children = MasterPage.children(props);
            this.state = { children };
        }
        static children(props) {
            let arr = props.children == null ? [] :
                Array.isArray(props.children) ? props.children : [props.children];
            let children = [];
            arr.forEach(o => {
                if (!React.isValidElement(o))
                    return;
                children.push(o);
            });
            return children;
        }
        static getDerivedStateFromProps(props) {
            let children = MasterPage.children(props);
            return { children };
        }
        render() {
            let props = {};
            for (let key in this.props) {
                if (key == 'ref' || key == 'id')
                    continue;
                props[key] = this.props[key];
            }
            props.style = Object.assign({ minHeight: 40 }, props.style);
            let children = this.state.children.filter(o => o.props.parentId == null);
            let master = this;
            console.assert(master != null);
            return React.createElement(exports.MasterPageContext.Provider, { value: { master } }, children);
        }
    }
    exports.MasterPage = MasterPage;
    Component.register(exports.MasterPageName, MasterPage, { container: false });
    /**
     * 占位符，用于放置控件
     */
    class PlaceHolder extends React.Component {
        constructor(props) {
            super(props);
            if (!this.props.id) {
                throw errors_1.Errors.placeHolderIdNull();
            }
        }
        /**
         * 启用拖放操作，以便通过拖放图标添加控件
         */
        enableAppendDroppable(element, master) {
            if (element.getAttribute('enable-append-droppable'))
                return;
            element.setAttribute('enable-append-droppable', 'true');
            console.assert(element != null);
            element.addEventListener('dragover', function (event) {
                event.preventDefault();
                event.stopPropagation();
                element.className = style_1.appendClassName(element.className || '', 'active');
                let componentName = event.dataTransfer.getData(common_1.constants.componentData);
                if (componentName)
                    event.dataTransfer.dropEffect = "copy";
                else
                    event.dataTransfer.dropEffect = "move";
                console.log(`dragover: left:${event.layerX} top:${event.layerX}`);
            });
            let func = function (event) {
                event.preventDefault();
                event.stopPropagation();
                element.className = style_1.removeClassName(element.className, 'active');
            };
            element.addEventListener('dragleave', func);
            element.addEventListener('dragend', func);
            element.addEventListener('dragexit', func);
            element.ondrop = (event) => {
                event.preventDefault();
                event.stopPropagation();
                element.className = style_1.removeClassName(element.className, 'active');
                let ctrl;
                if (event.dataTransfer)
                    ctrl = component_panel_1.ComponentPanel.getComponentData(event.dataTransfer);
                if (!ctrl)
                    return;
                console.assert(this.props.id != null);
                console.assert(this.designer != null);
                ctrl.props.parentId = this.props.id;
                console.assert(master != null, 'host is null');
                this.designer.appendComponent(master.props.id, ctrl);
            };
        }
        enableMoveDroppable(element, host) {
            if (element.getAttribute('enable-move-droppable'))
                return;
            element.setAttribute('enable-move-droppable', 'true');
            $(element)
                .drop('start', (event, dd) => {
                if (dd.sourceElement.id == this.wraper.props.source.props.id)
                    return;
                style_1.appendClassName(element, 'active');
            })
                .drop('drop', (event, dd) => {
                if (dd.sourceElement.id == this.wraper.props.source.props.id)
                    return;
                let componentData = this.designer.findComponentData(dd.sourceElement.id);
                console.assert(componentData != null);
                let propName = 'parentId';
                this.designer.moveComponent(dd.sourceElement.id, host.props.id);
                this.designer.updateComponentProps({
                    componentId: "string", propName: "string", value: "any"
                }); //dd.sourceElement.id, propName, this.props.id
            })
                .drop('end', (event, dd) => {
                if (dd.sourceElement.id == this.wraper.props.source.props.id)
                    return;
                style_1.removeClassName(element, 'active');
            });
        }
        render() {
            let empty = this.props.empty || React.createElement("div", { key: common_1.guid(), className: "empty" }, "\u53EF\u4EE5\u62D6\u62C9\u63A7\u4EF6\u5230\u8FD9\u91CC");
            return React.createElement(exports.MasterPageContext.Consumer, null, (args) => {
                let master = args.master;
                if (master == null)
                    throw errors_1.Errors.canntFindMasterPage(this.props.id);
                let children = [];
                if (master.props && master.props.children) {
                    let arr;
                    if (Array.isArray(master.props.children)) {
                        arr = master.props.children;
                    }
                    else {
                        arr = [master.props.children];
                    }
                    children = arr.filter((o) => o.props.parentId != null && o.props.parentId == this.props.id);
                }
                return React.createElement(exports.DesignerContext.Consumer, null, args => React.createElement(exports.ComponentWrapperContext.Consumer, null, wraper => {
                    this.wraper = wraper;
                    console.assert(this.wraper != null);
                    if (args.designer != null && children.length == 0) {
                        children = [empty];
                    }
                    let element = React.createElement(React.Fragment, null,
                        this.props.children,
                        children);
                    if (args.designer) {
                        this.designer = args.designer;
                        element = React.createElement("div", { key: common_1.guid(), className: style_1.classNames.placeholder, ref: e => {
                                if (!e)
                                    return;
                                this.element = e;
                                this.enableAppendDroppable(e, master);
                                this.enableMoveDroppable(e, master);
                            } }, element);
                    }
                    return element;
                }));
            });
        }
    }
    exports.PlaceHolder = PlaceHolder;
    Component.register('PlaceHolder', PlaceHolder);
    class PageView extends React.Component {
        constructor(props) {
            super(props);
            if (!this.props.pageData)
                throw errors_1.Errors.propCanntNull(PageView.name, 'pageData');
        }
        render() {
            let element = Component.createElement(this.props.pageData);
            return element;
        }
    }
    exports.PageView = PageView;
    class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        componentDidCatch(error, info) {
            // Display fallback UI
            this.setState({ error });
            // You can also log the error to an error reporting service
            //   logErrorToMyService(error, info);
            debugger;
        }
        render() {
            let { error } = this.state || {};
            if (error) {
                // You can render any custom fallback UI
                return React.createElement("div", { className: "error" },
                    React.createElement("div", null, error.message),
                    React.createElement("div", null, error.stack));
            }
            return this.props.children;
        }
    }
    exports.ErrorBoundary = ErrorBoundary;
});
//# sourceMappingURL=component.js.map