"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("./common");
const errors_1 = require("./errors");
const component_1 = require("./component");
const style_1 = require("./style");
const component_wrapper_1 = require("./component-wrapper");
class PageDesigner extends React.Component {
    constructor(props) {
        super(props);
        this.componentSelected = common_1.Callback.create();
        this.componentRemoved = common_1.Callback.create();
        this.componentAppend = common_1.Callback.create();
        this.componentUpdated = common_1.Callback.create();
        this.designtimeComponentDidMount = common_1.Callback.create();
        this.components = {};
        // let components: PageDesignerState["components"] = {};
        this.initPageData(props.pageData);
        this.state = { pageData: props.pageData, };
        this.designtimeComponentDidMount.add((args) => {
            console.log(`this:designer event:controlComponentDidMount`);
        });
        this.props.componentDataHandler.componentSelected.add(args => {
            this.componentSelected.fire(args);
            this.setState({ pageData: this.props.componentDataHandler.pageData });
        });
        this.props.componentDataHandler.componentRemoved.add(args => {
            this.componentRemoved.fire(args);
            this.setState({ pageData: this.props.componentDataHandler.pageData });
        });
        this.props.componentDataHandler.componentUpdated.add(args => {
            this.componentUpdated.fire(args);
            this.setState({ pageData: this.props.componentDataHandler.pageData });
        });
        this.componentAppend = common_1.Callback.create();
        this.props.componentDataHandler.componentAppend.add(() => this.componentAppend.fire(this));
    }
    setComponetRefProp(pageData) {
        //=========================================================
        // 纪录当前 pageData 控件 ID
        let componentIds = {};
        //=========================================================
        PageDesigner.travelComponentData(pageData).forEach(item => {
            console.assert(item.props != null && item.props.id != null);
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
        return this.selectedComponents.map(o => o.props.id);
    }
    /** 获取已选择了的组件 */
    get selectedComponents() {
        return this.props.componentDataHandler.selectedComponents;
    }
    get element() {
        return this._element;
    }
    updateComponentProp(componentId, propName, value) {
        return this.updateComponentProps({ componentId, propName, value });
    }
    updateComponentProps(...componentProps) {
        this.props.componentDataHandler.updateComponentProps(componentProps);
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
        let children = common_1.translateComponentDataChildren(component.children);
        for (let i = 0; i < children.length; i++) {
            PageDesigner.nameComponent(children[i]);
        }
    }
    /**
     * 添加控件
     * @param parentId 父控件编号
     * @param componentData 控件数据
     * @param componentIndex 新添加组件在子组件中的次序
     */
    appendComponent(parentId, componentData, componentIndex) {
        // if (!parentId) throw Errors.argumentNull('parentId');
        // if (!componentData) throw Errors.argumentNull('childComponent');
        // PageDesigner.nameComponent(componentData)
        // let parentControl = this.findComponentData(parentId);
        // if (parentControl == null)
        //     throw new Error('Parent is not exists')
        // console.assert(parentControl != null);
        // parentControl.children = parentControl.children || [];
        // if (componentIndex != null) {
        //     parentControl.children.splice(componentIndex, 0, componentData);
        // }
        // else {
        //     parentControl.children.push(componentData);
        // }
        // let { pageData } = this.state;
        // this.setState({ pageData });
        // this.selectComponent(componentData.props.id);
        // this.componentAppend.fire(this)
        this.props.componentDataHandler.appendComponent(parentId, componentData, componentIndex);
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
        this.componentUpdated.fire([componentData]);
    }
    setComponentsPosition(positions) {
        // let componentDatas = new Array<ComponentData>()
        let toUpdateProps = [];
        positions.forEach(o => {
            let { componentId } = o;
            let { left, top } = o.position;
            let componentData = this.props.componentDataHandler.findComponentData(componentId);
            if (!componentData)
                throw new Error(`Control ${componentId} is not exits.`);
            let style = componentData.props.style = (componentData.props.style || {});
            if (left)
                style.left = left;
            if (top)
                style.top = top;
            // let { pageData } = this.state;
            // this.setState({ pageData });
            // componentDatas.push(componentData)
            toUpdateProps.push({ componentId, propName: "style", value: style });
        });
        // this.componentUpdated.fire(componentDatas);
        this.props.componentDataHandler.updateComponentProps(toUpdateProps);
    }
    /**
     * 选择指定的控件
     * @param control 指定的控件
     */
    selectComponent(componentIds) {
        // if (typeof componentIds == 'string')
        //     componentIds = [componentIds]
        // var stack: ComponentData[] = []
        // stack.push(this.pageData)
        // while (stack.length > 0) {
        //     let item = stack.pop();
        //     let isSelectedControl = componentIds.indexOf(item.props.id) >= 0;
        //     item.props.selected = isSelectedControl;
        //     let children = translateComponentDataChildren(item.children || []);
        //     for (let i = 0; i < children.length; i++) {
        //         stack.push(children[i])
        //     }
        // }
        // this.setState({ pageData: this.pageData })
        // this.componentSelected.fire(this.selectedComponentIds)
        // //====================================================
        // // 设置焦点，以便获取键盘事件
        // if (this._element)
        //     this._element.focus()
        // //====================================================
        this.props.componentDataHandler.selectComponents(componentIds);
        //====================================================
        // 设置焦点，以便获取键盘事件
        if (this._element)
            this._element.focus();
        //====================================================
    }
    /** 移除控件 */
    removeComponent(...componentIds) {
        // let pageData = this.state.pageData;
        // if (!pageData || !pageData.children || pageData.children.length == 0)
        //     return;
        // let children = translateComponentDataChildren(pageData.children);
        // componentIds.forEach(controlId => {
        //     this.removeComponentFrom(controlId, children);
        // })
        // this.setState({ pageData });
        // this.componentRemoved.fire(componentIds)
        this.props.componentDataHandler.removeComponents(componentIds);
    }
    /**
     * 移动控件到另外一个控件容器
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param targetComponentIndex 组件位置
     */
    moveComponent(componentId, parentId, targetComponentIndex) {
        // let component = this.findComponentData(componentId);
        // if (component == null)
        //     throw new Error(`Cannt find component by id ${componentId}`)
        // console.assert(component != null, `Cannt find component by id ${componentId}`);
        // let pageData = this.state.pageData;
        // console.assert(pageData.children != null);
        // let children = translateComponentDataChildren(pageData.children);
        // this.removeComponentFrom(componentId, children);
        // this.appendComponent(parentId, component, childComponentIndex);
        return this.props.componentDataHandler.moveComponent(componentId, parentId, targetComponentIndex);
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
                let children = common_1.translateComponentDataChildren(o.children);
                if (children && children.length > 0) {
                    let isRemoved = this.removeComponentFrom(controlId, children);
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
    // findComponetsByTypeName(componentTypeName: string) {
    //     let components = this.components[componentTypeName];
    //     return components;
    // }
    findComponentData(componentId) {
        // let pageData = this.state.pageData;
        // if (!pageData)
        //     throw Errors.pageDataIsNull();
        // // let stack = new Array<ComponentData>();
        // // stack.push(pageData);
        // // while (stack.length > 0) {
        // //     let item = stack.pop();
        // //     if (item == null)
        // //         continue
        // //     if (item.props.id == componentId)
        // //         return item;
        // //     let children = (item.children || []).filter(o => typeof o == 'object') as ComponentData[]
        // //     stack.push(...children);
        // // }
        // let componentDatas = PageDesigner.travelComponentData(pageData, (item) => item.props.id == componentId)
        // return componentDatas[0];
        return this.props.componentDataHandler.findComponentData(componentId);
    }
    onKeyDown(e) {
        const DELETE_KEY_CODE = 46;
        if (e.keyCode == DELETE_KEY_CODE) {
            if (this.selectedComponents.length == 0)
                return;
            this.props.componentDataHandler.removeComponents(this.selectedComponentIds);
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
    // static getDerivedStateFromProps(props: PageDesignerProps, state: PageDesignerState) {
    //     PageDesigner.initPageData(props.pageData);
    //     return { pageData: props.pageData } as Partial<PageDesignerState>;
    // }
    render() {
        let designer = this;
        let { pageData } = this.state;
        let style = this.props.style;
        let elementTag = this.props.elementTag || "div";
        let result = React.createElement(elementTag, {
            className: style_1.classNames.designer, tabIndex: 1, style,
            ref: (e) => {
                if (!e)
                    return;
                this._element = e || this._element;
                this.props.componentFactory.renderDesignTimeComponent(pageData, e, { designer: this });
            },
            onKeyDown: (t) => this.onKeyDown(t)
        });
        return result;
    }
}
PageDesigner.defaultProps = { pageData: null, componentDataHandler: null };
exports.PageDesigner = PageDesigner;
//# sourceMappingURL=page-designer.js.map