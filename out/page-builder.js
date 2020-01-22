"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("./component");
const errors_1 = require("./errors");
const style_1 = require("./style");
const component_wrapper_1 = require("./component-wrapper");
const React = require("react");
const ReactDOM = require("react-dom");
const common_1 = require("./common");
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
        let c = component_1.Component.createElement(this.pageData, this.createDesignTimeElement.bind(this));
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
        // console.assert(componentId != null)
        // console.assert(size != null)
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
}
exports.ReactPageBuilder = ReactPageBuilder;
//# sourceMappingURL=page-builder.js.map