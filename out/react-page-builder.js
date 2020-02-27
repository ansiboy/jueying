define(["require", "exports", "./component", "./errors", "./style", "./component-wrapper", "react", "react-dom", "./common", "./component-panel"], function (require, exports, component_1, errors_1, style_1, component_wrapper_1, React, ReactDOM, common_1, component_panel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PageBuilderContext = React.createContext({ pageBuilder: null });
    /** 基于 ReactJS 的页面渲染器 */
    class ReactPageBuilder {
        constructor(args) {
            if (!args)
                throw errors_1.Errors.argumentNull("args");
            this.designer = args.designer;
        }
        createDesignTimeElement(type, props, ...children) {
            if (type == null)
                throw errors_1.Errors.argumentNull('type');
            if (props == null)
                throw errors_1.Errors.argumentNull('props');
            if (props.id == null)
                throw errors_1.Errors.argumentFieldCanntNull('id', 'props');
            console.assert(props.id != null);
            if (props.id != null)
                props.key = props.id;
            //===================================================
            // 获取对象的 ComponentAttribute ，以从对象 props 中获取的为准
            let attr1 = component_1.Component.getAttribute(type);
            console.assert(attr1 != null);
            let attr2 = props.attr || {};
            let attr = Object.assign({}, attr1, attr2);
            delete props.attr;
            //===================================================
            let className = props.selected ? style_1.appendClassName(props.className || '', style_1.classNames.componentSelected) : props.className;
            let wrapperProps = Object.assign({}, props);
            delete wrapperProps.ref;
            wrapperProps.className = className;
            return React.createElement(component_wrapper_1.ComponentWrapper, Object.assign({}, wrapperProps, { designer: this.designer, source: { type, attr, props, children } }));
        }
        createPage(pageData, pageElement) {
            if (!pageData)
                throw errors_1.Errors.argumentNull("pageData");
            if (!pageElement)
                throw errors_1.Errors.argumentNull("pageElement");
            ReactPageBuilder.fillPageData(pageData);
            this.pageData = pageData;
            this.pageElement = pageElement;
            this.render();
        }
        render() {
            console.assert(this.pageData.props.id != null);
            let c = ReactPageBuilder.createElement(this.pageData, this.createDesignTimeElement.bind(this));
            ReactDOM.render(React.createElement(exports.PageBuilderContext.Provider, { value: { pageBuilder: this } }, c), this.pageElement);
        }
        updateComponentProps(componentProps) {
            let componentDatas = [];
            for (let i = 0; i < componentProps.length; i++) {
                let { componentId, propName, value } = componentProps[i];
                let componentData = this.findComponentData(componentId);
                if (componentData == null)
                    continue;
                let navPropsNames = propName.split(".");
                console.assert(componentData != null);
                console.assert(navPropsNames != null, 'props is null');
                componentData.props = componentData.props || {};
                let obj = componentData.props;
                for (let i = 0; i < navPropsNames.length - 1; i++) {
                    obj = obj[navPropsNames[i]] = obj[navPropsNames[i]] || {};
                }
                obj[navPropsNames[navPropsNames.length - 1]] = value;
                componentDatas.push(componentData);
            }
            this.render();
            return componentDatas;
        }
        setComponentsSize(componentSiezs) {
            let componentDatas = [];
            for (let i = 0; i < componentSiezs.length; i++) {
                let { componentId, size } = componentSiezs[i];
                let componentData = this.findComponentData(componentId);
                if (!componentData)
                    throw new Error(`Control ${componentId} is not exits.`);
                componentDatas.push(componentData);
                let style = componentData.props.style = (componentData.props.style || {});
                if (size.height)
                    style.height = size.height;
                if (size.width)
                    style.width = size.width;
            }
            this.render();
            return componentDatas;
        }
        findComponentData(componentId) {
            let componentDatas = ReactPageBuilder.travelComponentData(this.pageData, (item) => item.props.id == componentId);
            return componentDatas[0];
        }
        /** 对 pageData 进行缺少的字段进行补充 */
        static fillPageData(pageData) {
            if (pageData == null) {
                return;
            }
            pageData.children = pageData.children || [];
            ReactPageBuilder.nameComponent(pageData);
            // PageDesigner.setComponetRefProp(pageData, components);
        }
        static travelComponentData(pageData, filter) {
            let stack = new Array();
            stack.push(pageData);
            let r = [];
            // return new Promise((resolve, reject) => {
            filter = filter || (() => true);
            while (stack.length > 0) {
                let item = stack.shift();
                if (filter(item)) {
                    r.push(item);
                }
                //===============================================
                // 子元素有可能为字符串, 过滤出对象
                let children = (item.children || []).filter(o => typeof o == 'object');
                //===============================================
                stack.push(...children);
            }
            return r;
        }
        appendComponent(parentId, componentData, componentIndex) {
            if (!parentId)
                throw errors_1.Errors.argumentNull('parentId');
            if (!componentData)
                throw errors_1.Errors.argumentNull('childComponent');
            ReactPageBuilder.nameComponent(componentData);
            let parentControl = this.findComponentData(parentId);
            if (parentControl == null)
                throw new Error('Parent is not exists');
            console.assert(parentControl != null);
            parentControl.children = parentControl.children || [];
            if (componentIndex != null) {
                parentControl.children.splice(componentIndex, 0, componentData);
            }
            else {
                parentControl.children.push(componentData);
            }
            // let { pageData } = this.state;
            // this.setState({ pageData });
            // this.selectComponent(componentData.props.id);
            // this.componentAppend.fire(this)
            this.render();
        }
        /**
         * 选择指定的控件
         * @param control 指定的控件
         */
        selectComponents(componentIds) {
            if (typeof componentIds == 'string')
                componentIds = [componentIds];
            var stack = [];
            stack.push(this.pageData);
            while (stack.length > 0) {
                let item = stack.pop();
                let isSelectedControl = componentIds.indexOf(item.props.id) >= 0;
                item.props.selected = isSelectedControl;
                let children = item.children || [];
                for (let i = 0; i < children.length; i++) {
                    stack.push(children[i]);
                }
            }
            // this.setState({ pageData: this.pageData })
            // this.componentSelected.fire(this.selectedComponentIds)
            this.render();
            //====================================================
            // 设置焦点，以便获取键盘事件
            this.pageElement.focus();
            //====================================================
        }
        setComponentsPosition(positions) {
            let componentDatas = new Array();
            positions.forEach(o => {
                let { componentId } = o;
                let { left, top } = o.position;
                let componentData = this.findComponentData(componentId);
                if (!componentData)
                    throw new Error(`Control ${componentId} is not exits.`);
                let style = componentData.props.style = componentData.props.style || {};
                if (left)
                    style.left = left;
                if (top)
                    style.top = top;
                componentDatas.push(componentData);
            });
            this.render();
            return componentDatas;
        }
        removeComponents(componentIds) {
            let pageData = this.pageData;
            if (!pageData || !pageData.children || pageData.children.length == 0)
                return;
            componentIds.forEach(controlId => {
                this.removeComponentFrom(controlId, pageData.children);
            });
        }
        moveComponent(componentId, parentId, childComponentIndex) {
            let component = this.findComponentData(componentId);
            if (component == null)
                throw new Error(`Cannt find component by id ${componentId}`);
            console.assert(component != null, `Cannt find component by id ${componentId}`);
            let pageData = this.pageData;
            console.assert(pageData.children != null);
            this.removeComponentFrom(componentId, pageData.children);
            this.appendComponent(parentId, component, childComponentIndex);
        }
        removeComponentFrom(componentId, collection) {
            let compoentIndex = null;
            for (let i = 0; i < collection.length; i++) {
                if (componentId == collection[i].props.id) {
                    compoentIndex = i;
                    break;
                }
            }
            if (compoentIndex == null) {
                for (let i = 0; i < collection.length; i++) {
                    let o = collection[i];
                    if (o.children && o.children.length > 0) {
                        let isRemoved = this.removeComponentFrom(componentId, o.children);
                        if (isRemoved) {
                            return true;
                        }
                    }
                }
                return false;
            }
            if (compoentIndex == 0) {
                collection.shift();
            }
            else if (compoentIndex == collection.length - 1) {
                collection.pop();
            }
            else {
                collection.splice(compoentIndex, 1);
            }
            return true;
        }
        /**
         * 对组件及其子控件进行命名
         * @param component
         */
        static nameComponent(component) {
            let namedComponents = {};
            let props = component.props = component.props || {};
            if (!props.name) {
                let num = 0;
                let name;
                do {
                    num = num + 1;
                    name = `${component.type}${num}`;
                } while (namedComponents[name]);
                namedComponents[name] = component;
                props.name = name;
            }
            if (!props.id)
                props.id = common_1.guid();
            if (!component.children || component.children.length == 0) {
                return;
            }
            for (let i = 0; i < component.children.length; i++) {
                ReactPageBuilder.nameComponent(component.children[i]);
            }
        }
        static createElement(componentData, h) {
            return ReactPageBuilder._createElement(componentData, { components: [], componentTypes: [] }, h);
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
                let componentType = component_1.Component.getComponentType(componentName);
                if (componentType) {
                    type = componentType;
                }
                let children = componentData.children ? componentData.children.map(o => ReactPageBuilder._createElement(o, context, h)) : [];
                let props = componentData.props == null ? {} : Object.assign({}, componentData.props); //JSON.parse(JSON.stringify(componentData.props));
                props.style = Object.assign({}, props.style || {});
                if (componentType != null && componentType["defaultProps"]) {
                    props = Object.assign({}, componentType["defaultProps"], props);
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
                type = type == component_1.Component.Fragment ? React.Fragment : type;
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
    }
    exports.ReactPageBuilder = ReactPageBuilder;
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
    component_1.Component.register(exports.MasterPageName, MasterPage, { container: false, resize: false, noWrapper: true });
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
                this.designer.moveComponent(dd.sourceElement.id, host.props.id);
                this.designer.updateComponentProps([{
                        componentId: "string", propName: "string", value: "any"
                    }]); //dd.sourceElement.id, propName, this.props.id
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
                return React.createElement(exports.PageBuilderContext.Consumer, null, args => {
                    return React.createElement(component_1.ComponentWrapperContext.Consumer, null, wraper => {
                        this.wraper = wraper;
                        console.assert(this.wraper != null);
                        if (args.pageBuilder != null && children.length == 0) {
                            children = [empty];
                        }
                        let element = React.createElement(React.Fragment, null,
                            this.props.children,
                            children);
                        if (args.pageBuilder) {
                            this.designer = args.pageBuilder;
                            element = React.createElement("div", { key: common_1.guid(), className: style_1.classNames.placeholder, ref: e => {
                                    if (!e)
                                        return;
                                    this.element = e;
                                    this.enableAppendDroppable(e, master);
                                    this.enableMoveDroppable(e, master);
                                } }, element);
                        }
                        return element;
                    });
                });
            });
        }
    }
    exports.PlaceHolder = PlaceHolder;
    component_1.Component.register('PlaceHolder', PlaceHolder, { resize: false, movable: false, container: true });
    /** 用于将 ComponentData 显示为组件 */
    class PageView extends React.Component {
        constructor(props) {
            super(props);
            if (!this.props.pageData)
                throw errors_1.Errors.propCanntNull(PageView.name, 'pageData');
        }
        render() {
            let element = ReactPageBuilder.createElement(this.props.pageData);
            return element;
        }
    }
    exports.PageView = PageView;
});
//# sourceMappingURL=react-page-builder.js.map