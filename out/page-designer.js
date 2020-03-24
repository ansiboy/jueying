"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const errors_1 = require("./errors");
const component_1 = require("./component");
const style_1 = require("./style");
const component_wrapper_1 = require("./component-wrapper");
class PageDesigner extends React.Component {
    constructor(props) {
        super(props);
        this.components = {};
        let pageData = this.props.handler.pageData;
        this.initPageData(pageData);
        this.state = { pageData };
        this.props.handler.componentSelected.add(args => {
            // this.componentSelected.fire(args);
            this.setState({ pageData: this.props.handler.pageData });
        });
        this.props.handler.componentRemoved.add(args => {
            // this.componentRemoved.fire(args);
            this.setState({ pageData: this.props.handler.pageData });
        });
        this.props.handler.componentUpdated.add(args => {
            // this.componentUpdated.fire(args);
            this.setState({ pageData: this.props.handler.pageData });
        });
        this.props.handler.pageDataChanged.add(args => {
            this.setState({ pageData: args });
        });
        // this.componentAppend = Callback.create();
        // this.props.componentDataHandler.componentAppend.add(() => this.componentAppend.fire(this));
    }
    setComponetRefProp(pageData) {
        //=========================================================
        // 纪录当前 pageData 控件 ID
        let componentIds = {};
        //=========================================================
        PageDesigner.travelComponentData(pageData).forEach(item => {
            console.assert(item.props != null && item.id != null);
            componentIds[item.type] = componentIds[item.type] || [];
            componentIds[item.type].push(item.props["id"]);
            let itemRef = item.props.ref;
            item.props.ref = (e) => {
                if (e != null) {
                    this.components[item.type] = this.components[item.type] || [];
                    this.components[item.type].push(e);
                }
                if (typeof itemRef == "function")
                    itemRef(e);
            };
        });
        //=========================================================
        // 仅保留 componentIds 中的控件 
        let names = Object.getOwnPropertyNames(this.components);
        for (let i = 0; i < names.length; i++) {
            let typename = names[i];
            let ids = componentIds[typename] || [];
            this.components[typename] = (this.components[typename] || []).filter(o => ids.indexOf(o["id"] || o.props["id"]) >= 0);
        }
        //=========================================================
    }
    initPageData(pageData) {
        if (pageData == null) {
            return;
        }
        pageData.children = pageData.children || [];
        // PageDesigner.nameComponent(pageData);
        this.setComponetRefProp(pageData);
    }
    allComponents() {
        let r = [];
        for (let key in this.components) {
            r.push(...this.components[key]);
        }
        return r;
    }
    /** 页面数据 */
    get pageData() {
        return this.state.pageData;
    }
    /** 获取已选择了的组件编号 */
    get selectedComponentIds() {
        return this.selectedComponents.map(o => o.id);
    }
    /** 获取已选择了的组件 */
    get selectedComponents() {
        return this.props.handler.selectedComponents;
    }
    get element() {
        return this._element;
    }
    updateComponentProp(componentId, propName, value) {
        return this.updateComponentProps({ componentId, propName, value });
    }
    updateComponentProps(...componentProps) {
        this.props.handler.updateComponentProps(componentProps);
    }
    // /**
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
    appendComponent(parentId, componentData, componentIndex) {
        this.props.handler.appendComponent(parentId, componentData, componentIndex);
    }
    /**
     * 设置控件位置
     * @param componentId 组件编号
     * @param position 组件位置
     */
    setComponentPosition(componentId, position) {
        return this.setComponentsPosition([{ componentId, position }]);
    }
    /**
     * 设置控件大小
     * @param componentId 组件编号
     * @param size 组件大小
     */
    setComponentSize(componentId, size) {
        console.assert(componentId != null);
        console.assert(size != null);
        let componentData = this.findComponentData(componentId);
        if (!componentData)
            throw new Error(`Control ${componentId} is not exits.`);
        let style = componentData.props.style = (componentData.props.style || {});
        if (size.height)
            style.height = size.height;
        if (size.width)
            style.width = size.width;
        let { pageData } = this.state;
        this.setState({ pageData });
        // this.componentUpdated.fire([componentData])
    }
    setComponentsPosition(positions) {
        let toUpdateProps = [];
        positions.forEach(o => {
            let { componentId } = o;
            let { left, top } = o.position;
            let componentData = this.props.handler.findComponentData(componentId);
            if (!componentData)
                throw new Error(`Control ${componentId} is not exits.`);
            let style = componentData.props.style = (componentData.props.style || {});
            if (left)
                style.left = left;
            if (top)
                style.top = top;
            toUpdateProps.push({ componentId, propName: "style", value: style });
        });
        this.props.handler.updateComponentProps(toUpdateProps);
    }
    /**
     * 选择指定的控件
     * @param control 指定的控件
     */
    selectComponent(componentIds) {
        this.props.handler.selectComponents(componentIds);
        //====================================================
        // 设置焦点，以便获取键盘事件
        if (this._element)
            this._element.focus();
        //====================================================
    }
    /** 移除控件 */
    removeComponent(...componentIds) {
        this.props.handler.removeComponents(componentIds);
    }
    /**
     * 移动控件到另外一个控件容器
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param targetComponentIndex 组件位置
     */
    moveComponent(componentId, parentId, targetComponentIndex) {
        return this.props.handler.moveComponent(componentId, parentId, targetComponentIndex);
    }
    removeComponentFrom(controlId, collection) {
        let controlIndex = null;
        for (let i = 0; i < collection.length; i++) {
            let child = collection[i];
            if (typeof child == "string")
                continue;
            if (controlId == child.id) {
                controlIndex = i;
                break;
            }
        }
        if (controlIndex == null) {
            for (let i = 0; i < collection.length; i++) {
                let o = collection[i];
                if (typeof o == "string")
                    continue;
                let children = o.children || [];
                children.forEach(child => {
                    if (typeof child == "string")
                        return true;
                    let isRemoved = this.removeComponentFrom(controlId, children);
                    if (isRemoved) {
                        return true;
                    }
                });
            }
            return false;
        }
        if (controlIndex == 0) {
            collection.shift();
        }
        else if (controlIndex == collection.length - 1) {
            collection.pop();
        }
        else {
            collection.splice(controlIndex, 1);
        }
        return true;
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
    findComponentData(componentId) {
        return this.props.handler.findComponentData(componentId);
    }
    onKeyDown(e) {
        const DELETE_KEY_CODE = 46;
        if (e.keyCode == DELETE_KEY_CODE) {
            if (this.selectedComponents.length == 0)
                return;
            this.props.handler.removeComponents(this.selectedComponentIds);
        }
    }
    createDesignTimeElement(componentData) {
        //type: string | React.ComponentClass<any>, props: ComponentProps<any>, ...children: any[]
        let { type, props, children } = componentData;
        if (type == null)
            throw errors_1.Errors.argumentFieldCanntNull("componentData", 'type');
        if (props == null)
            throw errors_1.Errors.argumentNull('props');
        if (componentData.id == null)
            throw errors_1.Errors.argumentFieldCanntNull('id', 'componentData');
        console.assert(componentData.id != null);
        if (componentData.id != null)
            props.key = componentData.id;
        //===================================================
        // 获取对象的 ComponentAttribute ，以从对象 props 中获取的为准
        let attr1 = component_1.Component.getAttribute(type);
        console.assert(attr1 != null);
        let attr2 = componentData.attr || {};
        let attr = Object.assign({}, attr1, attr2);
        // delete props.attr
        //===================================================
        let className = componentData.selected ? style_1.appendClassName(props.className || '', style_1.classNames.componentSelected) : props.className;
        let wrapperProps = Object.assign({}, props);
        delete wrapperProps.ref;
        wrapperProps.className = className;
        // let context: Context = this.props.handler;
        // console.assert(context.handler != null);
        return React.createElement(component_wrapper_1.ComponentWrapper, Object.assign({}, wrapperProps, { handler: this.props.handler, source: { type: type, attr, props, children } }));
    }
    static getDerivedStateFromProps(props, state) {
        return { pageData: props.handler.pageData };
    }
    findComponetsByTypeName(typeName) {
        this.components[typeName];
    }
    render() {
        let { pageData } = this.state;
        let style = this.props.style;
        let elementTag = this.props.elementTag || "div";
        // let result = React.createElement(elementTag, {
        //     className: classNames.designer, tabIndex: 1, style,
        //     ref: (e: HTMLElement) => {
        //         if (!e) return;
        //         this._element = e || this._element;
        //         let c = this.props.componentFactory(pageData) //.renderDesignTimeComponent(pageData, e, { handler: this.props.componentDataHandler });
        //         ReactDOM.render(c, e);
        //     },
        //     onKeyDown: (t) => this.onKeyDown(t)
        // })
        // return result;
        return this.props.componentFactory(pageData);
    }
}
exports.PageDesigner = PageDesigner;
PageDesigner.defaultProps = { handler: null, componentFactory: component_1.defaultComponentFactory };
//# sourceMappingURL=page-designer.js.map