/*******************************************************************************
 * Copyright (C) maishu All rights reserved.
 *
 * HTML 页面设计器
 *
 * 作者: 寒烟
 * 日期: 2018/5/30
 *
 * 个人博客：   http://www.cnblogs.com/ansiboy/
 * GITHUB:     http://github.com/ansiboy
 * QQ 讨论组：  119038574
 *
 ********************************************************************************/
define(["require", "exports", "react", "./common", "./errors", "./component", "./style", "./component-wrapper"], function (require, exports, React, common_1, errors_1, component_1, style_1, component_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PageDesigner extends React.Component {
        constructor(props) {
            super(props);
            this.componentSelected = common_1.Callback.create();
            this.componentRemoved = common_1.Callback.create();
            this.componentAppend = common_1.Callback.create();
            this.componentUpdated = common_1.Callback.create();
            this.designtimeComponentDidMount = common_1.Callback.create();
            PageDesigner.initPageData(props.pageData);
            this.state = { pageData: props.pageData };
            this.designtimeComponentDidMount.add((args) => {
                console.log(`this:designer event:controlComponentDidMount`);
            });
        }
        static initPageData(pageData) {
            if (pageData == null) {
                return;
            }
            pageData.children = pageData.children || [];
            PageDesigner.nameComponent(pageData);
        }
        get root() {
            return this._root;
        }
        get pageData() {
            return this.state.pageData;
        }
        get selectedComponentIds() {
            return this.selectedComponents.map(o => o.props.id);
        }
        get selectedComponents() {
            let arr = new Array();
            let stack = new Array();
            stack.push(this.pageData);
            while (stack.length > 0) {
                let item = stack.pop();
                if (item.props.selected == true)
                    arr.push(item);
                let children = item.children || [];
                for (let i = 0; i < children.length; i++)
                    stack.push(children[i]);
            }
            return arr;
        }
        updateControlProp(...componentProps) {
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
            this.setState(this.state);
            this.componentUpdated.fire(componentDatas);
        }
        sortChildren(parentId, childIds) {
            if (!parentId)
                throw errors_1.Errors.argumentNull('parentId');
            if (!childIds)
                throw errors_1.Errors.argumentNull('childIds');
            let pageData = this.state.pageData;
            let parentControl = this.findComponentData(parentId);
            if (parentControl == null)
                throw new Error('Parent is not exists');
            console.assert(parentControl != null);
            console.assert(parentControl.children != null);
            console.assert((parentControl.children || []).length == childIds.length);
            let p = parentControl;
            parentControl.children = childIds.map(o => {
                let child = p.children.filter(a => a.props.id == o)[0];
                console.assert(child != null, `child ${o} is null`);
                return child;
            });
            this.setState({ pageData });
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
                PageDesigner.nameComponent(component.children[i]);
            }
        }
        /** 添加控件 */
        appendComponent(parentId, childComponent, childComponentIndex) {
            if (!parentId)
                throw errors_1.Errors.argumentNull('parentId');
            if (!childComponent)
                throw errors_1.Errors.argumentNull('childComponent');
            // if(childComponentIndex!=null && childComponentIndex<0)
            // throw Errors.ar
            PageDesigner.nameComponent(childComponent);
            let parentControl = this.findComponentData(parentId);
            if (parentControl == null)
                throw new Error('Parent is not exists');
            console.assert(parentControl != null);
            parentControl.children = parentControl.children || [];
            if (childComponentIndex != null) {
                parentControl.children.splice(childComponentIndex, 0, childComponent);
            }
            else {
                parentControl.children.push(childComponent);
            }
            let { pageData } = this.state;
            this.setState({ pageData });
            // parentControl.children.push(childControl);
            // if (childIds)
            //     this.sortChildren(parentId, childIds);
            // else {
            //     let { pageData } = this.state;
            //     this.setState({ pageData });
            // }
            this.selectComponent(childComponent.props.id);
            this.componentAppend.fire(this);
        }
        /** 设置控件位置 */
        setComponentPosition(componentId, position) {
            return this.setComponentsPosition([{ componentId, position }]);
        }
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
            this.componentUpdated.fire([componentData]);
        }
        setComponentsPosition(positions) {
            let componentDatas = new Array();
            positions.forEach(o => {
                let { componentId } = o;
                let { left, top } = o.position;
                let componentData = this.findComponentData(componentId);
                if (!componentData)
                    throw new Error(`Control ${componentId} is not exits.`);
                let style = componentData.props.style = (componentData.props.style || {});
                if (left)
                    style.left = left;
                if (top)
                    style.top = top;
                let { pageData } = this.state;
                this.setState({ pageData });
                componentDatas.push(componentData);
            });
            this.componentUpdated.fire(componentDatas);
        }
        /**
         * 选择指定的控件
         * @param control 指定的控件
         */
        selectComponent(componentIds) {
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
            this.setState({ pageData: this.pageData });
            this.componentSelected.fire(this.selectedComponentIds);
            //====================================================
            // 设置焦点，以便获取键盘事件
            this.element.focus();
            //====================================================
        }
        /** 移除控件 */
        removeComponent(...componentIds) {
            let pageData = this.state.pageData;
            if (!pageData || !pageData.children || pageData.children.length == 0)
                return;
            componentIds.forEach(controlId => {
                this.removeComponentFrom(controlId, pageData.children);
            });
            this.setState({ pageData });
            this.componentRemoved.fire(componentIds);
        }
        /**
         * 移动控件到另外一个控件容器
         * @param componentId 要移动的组件编号
         * @param parentId 目标组件编号
         * @param beforeChildId 组件的前一个子组件编号
         */
        moveComponent(componentId, parentId, childComponentIndex) {
            let component = this.findComponentData(componentId);
            if (component == null)
                throw new Error(`Cannt find component by id ${componentId}`);
            console.assert(component != null, `Cannt find component by id ${componentId}`);
            let pageData = this.state.pageData;
            console.assert(pageData.children != null);
            this.removeComponentFrom(componentId, pageData.children);
            this.appendComponent(parentId, component, childComponentIndex);
        }
        removeComponentFrom(controlId, collection) {
            let controlIndex = null;
            for (let i = 0; i < collection.length; i++) {
                if (controlId == collection[i].props.id) {
                    controlIndex = i;
                    break;
                }
            }
            if (controlIndex == null) {
                for (let i = 0; i < collection.length; i++) {
                    let o = collection[i];
                    if (o.children && o.children.length > 0) {
                        let isRemoved = this.removeComponentFrom(controlId, o.children);
                        if (isRemoved) {
                            return true;
                        }
                    }
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
        findComponentData(controlId) {
            let pageData = this.state.pageData;
            if (!pageData)
                throw errors_1.Errors.pageDataIsNull();
            let stack = new Array();
            stack.push(pageData);
            while (stack.length > 0) {
                let item = stack.pop();
                if (item == null)
                    continue;
                if (item.props.id == controlId)
                    return item;
                let children = (item.children || []).filter(o => typeof o == 'object');
                stack.push(...children);
            }
            return null;
        }
        onKeyDown(e) {
            const DELETE_KEY_CODE = 46;
            if (e.keyCode == DELETE_KEY_CODE) {
                if (this.selectedComponents.length == 0)
                    return;
                this.removeComponent(...this.selectedComponentIds);
            }
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
            return React.createElement(component_wrapper_1.ComponentWrapper, Object.assign({}, wrapperProps, { designer: this, source: { type, attr, props, children } }));
        }
        // componentWillReceiveProps(props: PageDesignerProps) {
        //     PageDesigner.initPageData(props.pageData)
        //     this.setState({ pageData: props.pageData });
        // }
        static getDerivedStateFromProps(props, state) {
            PageDesigner.initPageData(props.pageData);
            return { pageData: props.pageData };
        }
        render() {
            let designer = this;
            let { pageData } = this.state;
            let style = this.props.style;
            let result = React.createElement("div", { className: style_1.classNames.designer, tabIndex: 1, style: style, ref: e => this.element = e || this.element, onKeyDown: (e) => this.onKeyDown(e) },
                React.createElement(component_1.DesignerContext.Provider, { value: { designer } }, (() => {
                    this._root = pageData ? component_1.Component.createElement(pageData, this.createDesignTimeElement.bind(this)) : null;
                    return this._root;
                })()));
            return result;
        }
    }
    PageDesigner.defaultProps = { pageData: null, wrapDesignTimeElement: true };
    exports.PageDesigner = PageDesigner;
});
//# sourceMappingURL=page-designer.js.map