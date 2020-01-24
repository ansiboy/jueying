"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("./common");
const errors_1 = require("./errors");
const style_1 = require("./style");
const react_page_builder_1 = require("./react-page-builder");
class PageDesigner extends React.Component {
    constructor(props) {
        super(props);
        this.componentSelected = common_1.Callback.create();
        this.componentRemoved = common_1.Callback.create();
        this.componentAppend = common_1.Callback.create();
        this.componentUpdated = common_1.Callback.create();
        this.designtimeComponentDidMount = common_1.Callback.create();
        // let components: PageDesignerState["components"] = {};
        // PageDesigner.fillPageData(props.pageData);
        this.state = {};
        this.designtimeComponentDidMount.add(() => {
            console.log(`this:designer event:controlComponentDidMount`);
        });
        let pageBuilderType = props.pageBuilderType || react_page_builder_1.ReactPageBuilder;
        this.pageBuilder = new pageBuilderType({ designer: this });
    }
    // private static setComponetRefProp(pageData: ComponentData, components: PageDesignerState["components"]) {
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
    get pageData() {
        return this.props.pageData;
    }
    /** 获取已选择了的组件编号 */
    get selectedComponentIds() {
        return this.selectedComponents.map(o => o.props.id);
    }
    /** 获取已选择了的组件 */
    get selectedComponents() {
        let arr = new Array();
        let stack = new Array();
        stack.push(this.pageData);
        while (stack.length > 0) {
            let item = stack.pop();
            if (item.props != null && item.props.selected == true)
                arr.push(item);
            let children = item.children || [];
            for (let i = 0; i < children.length; i++)
                stack.push(children[i]);
        }
        return arr;
    }
    /** 更新组件属性 */
    updateComponentProp(componentId, propName, value) {
        return this.updateComponentProps({ componentId, propName, value });
    }
    /** 更新组件多个属性 */
    updateComponentProps(...componentProps) {
        let componentDatas = this.pageBuilder.updateComponentProps(componentProps);
        this.componentUpdated.fire(componentDatas);
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
    /**
     * 添加控件
     * @param parentId 父控件编号
     * @param componentData 控件数据
     * @param componentIndex 新添加组件在子组件中的次序
     */
    appendComponent(parentId, componentData, componentIndex) {
        if (!parentId)
            throw errors_1.Errors.argumentNull('parentId');
        if (!componentData)
            throw errors_1.Errors.argumentNull('childComponent');
        this.pageBuilder.appendComponent(parentId, componentData, componentIndex);
        this.selectComponent(componentData.props.id);
        this.componentAppend.fire(this);
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
        let componentDatas = this.pageBuilder.setComponentsSize([{ componentId, size }]);
        this.componentUpdated.fire(componentDatas);
    }
    /** 设置多个组件的位置 */
    setComponentsPosition(positions) {
        let componentDatas = this.pageBuilder.setComponentsPosition(positions);
        this.componentUpdated.fire(componentDatas);
    }
    /**
     * 选择指定的控件
     * @param control 指定的控件
     */
    selectComponent(componentIds) {
        let ids = typeof componentIds == "string" ? [componentIds] : componentIds;
        this.pageBuilder.selectComponents(ids);
        this.componentSelected.fire(ids);
    }
    /** 移除控件 */
    removeComponent(...componentIds) {
        if (!componentIds)
            throw errors_1.Errors.argumentNull("componentIds");
        this.pageBuilder.removeComponents(componentIds);
        this.componentRemoved.fire(componentIds);
    }
    /**
     * 移动控件到另外一个控件容器
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param beforeChildId 组件的前一个子组件编号
     */
    moveComponent(componentId, parentId, childComponentIndex) {
        this.pageBuilder.moveComponent(componentId, parentId, childComponentIndex);
    }
    // private static travelComponentData(pageData: ComponentData, filter?: (item: ComponentData) => boolean): ComponentData[] {
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
    onKeyDown(e) {
        const DELETE_KEY_CODE = 46;
        if (e.keyCode == DELETE_KEY_CODE) {
            if (this.selectedComponents.length == 0)
                return;
            this.removeComponent(...this.selectedComponentIds);
        }
    }
    // private createDesignTimeElement(type: string | React.ComponentClass<any>, props: ComponentProps<any>, ...children: any[]) {
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
    componentDidMount() {
        this.pageBuilder.createPage(this.pageData, this.element);
    }
    render() {
        let style = this.props.style;
        let result = React.createElement("div", { className: style_1.classNames.designer, tabIndex: 1, style: style, onKeyDown: (e) => this.onKeyDown(e), ref: e => {
                this.element = e || this.element;
            } });
        return result;
    }
}
PageDesigner.defaultProps = { pageData: null, wrapDesignTimeElement: true };
exports.PageDesigner = PageDesigner;
//# sourceMappingURL=page-designer.js.map