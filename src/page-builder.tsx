import { ComponentData } from "./models";
import { ComponentProps, Component } from "./component";
import { Errors } from "./errors";
import { appendClassName, classNames } from "./style";
import { ComponentWrapper } from "./component-wrapper";
import { PageDesigner } from "./page-designer";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { guid } from "./common";

interface PageRenderArguments {
    designer: PageDesigner;
}

type PageBuilderContextValue = { pageBuilder: PageBuilder | null };
export const PageBuilderContext = React.createContext<PageBuilderContextValue>({ pageBuilder: null });

/** 页面创建者 */
export interface PageBuilder {

    /**
     * 创建页面组件
     * @param pageData 页面数据
     * @param pageElement 页面元素
     */
    createPage(pageData: ComponentData, pageElement: HTMLElement);

    /**
     * 更新组件属性
     * @param componentProps 要更新的组件属性
     * @returns 返回更新的组件数据
     */
    updateComponentProps(componentProps: { componentId: string, propName: string, value: any }[]): ComponentData[];

    /**
     * 添加组件
     * @param parentId 父组件编号
     * @param componentData 组件数据
     * @param componentIndex 组件索引位置，如果为空，添加到最后
     */
    appendComponent(parentId: string, componentData: ComponentData, componentIndex?: number): void;

    /**
     * 选择指定的控件
     * @param componentIds 指定的控件
     */
    selectComponents(componentIds: string[]): void;

    /** 
     * 设置多个组件的位置
     * @returns 返回设置的组件数据
     */
    setComponentsPosition(positions: { componentId: string, position: { left: number | string, top: number | string } }[]): ComponentData[];

    /** 
     * 设置控件大小
     * @param componentId 组件编号
     * @param size 组件大小 
     */
    setComponentsSize(sizes: { componentId: string, size: { width?: number | string, height?: number | string } }[]): ComponentData[];//componentId: string, size: { width?: number | string, height?: number | string }

    /**
     * 移除控件
     * @param componentIds 控件编号
     */
    removeComponents(componentIds: string[]);

    /** 
     * 移动控件到另外一个控件容器 
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param childComponentIndex 子组件索引，空值添加到最后
     */
    moveComponent(componentId: string, parentId: string, childComponentIndex?: number): void;

    findComponentData(componentId: string): ComponentData | null;


}

/** 基于 ReactJS 的页面渲染器 */
export class ReactPageBuilder implements PageBuilder {


    private designer: PageDesigner;
    private pageData: ComponentData;
    private pageElement: HTMLElement;

    constructor(args: PageRenderArguments) {

        if (!args) throw Errors.argumentNull("args");

        this.designer = args.designer;
    }

    protected createDesignTimeElement(type: string | React.ComponentClass<any>, props: ComponentProps<any>, ...children: any[]) {
        if (type == null) throw Errors.argumentNull('type');
        if (props == null) throw Errors.argumentNull('props');
        if (props.id == null) throw Errors.argumentFieldCanntNull('id', 'props');

        console.assert(props.id != null)
        if (props.id != null)
            props.key = props.id;

        //===================================================
        // 获取对象的 ComponentAttribute ，以从对象 props 中获取的为准

        let attr1 = Component.getAttribute(type)
        console.assert(attr1 != null)

        let attr2 = props.attr || {}
        let attr = Object.assign({}, attr1, attr2)
        delete props.attr
        //===================================================

        let className = props.selected ? appendClassName(props.className || '', classNames.componentSelected) : props.className

        let wrapperProps = Object.assign({}, props);
        delete wrapperProps.ref;
        wrapperProps.className = className;

        return <ComponentWrapper {...wrapperProps} designer={this.designer}
            source={{ type, attr, props, children }}>
        </ComponentWrapper>
    }

    createPage(pageData: ComponentData, pageElement: HTMLElement) {
        if (!pageData) throw Errors.argumentNull("pageData");
        if (!pageElement) throw Errors.argumentNull("pageElement");

        ReactPageBuilder.fillPageData(pageData);
        this.pageData = pageData;
        this.pageElement = pageElement;

        this.render();
    }

    private render() {
        console.assert(this.pageData.props.id != null);
        let c = Component.createElement(this.pageData, this.createDesignTimeElement.bind(this));
        ReactDOM.render(<PageBuilderContext.Provider value={{ pageBuilder: this }} >
            {c}
        </PageBuilderContext.Provider>, this.pageElement);
    }

    updateComponentProps(componentProps: { componentId: string; propName: string; value: any; }[]): ComponentData[] {
        let componentDatas: ComponentData[] = [];
        for (let i = 0; i < componentProps.length; i++) {
            let { componentId, propName, value } = componentProps[i];

            let componentData = this.findComponentData(componentId);
            if (componentData == null)
                continue;

            let navPropsNames: string[] = propName.split(".");
            console.assert(componentData != null);
            console.assert(navPropsNames != null, 'props is null');

            componentData.props = componentData.props || {};

            let obj = componentData.props
            for (let i = 0; i < navPropsNames.length - 1; i++) {
                obj = obj[navPropsNames[i]] = obj[navPropsNames[i]] || {};
            }

            obj[navPropsNames[navPropsNames.length - 1]] = value;
            componentDatas.push(componentData);
        }

        this.render();
        return componentDatas;
    }

    setComponentsSize(componentSiezs: { componentId: string, size: { width?: React.ReactText; height?: React.ReactText; } }[]): ComponentData[] {
        // console.assert(componentId != null)
        // console.assert(size != null)

        let componentDatas: ComponentData[] = [];
        for (let i = 0; i < componentSiezs.length; i++) {
            let { componentId, size } = componentSiezs[i];
            let componentData = this.findComponentData(componentId);
            if (!componentData)
                throw new Error(`Control ${componentId} is not exits.`);

            componentDatas.push(componentData);
            let style = componentData.props.style = (componentData.props.style || {});
            if (size.height)
                style.height = size.height

            if (size.width)
                style.width = size.width;
        }

        this.render();

        return componentDatas;
    }

    findComponentData(componentId: string): ComponentData | null {
        let componentDatas = ReactPageBuilder.travelComponentData(this.pageData, (item) => item.props.id == componentId)
        return componentDatas[0];
    }

    /** 对 pageData 进行缺少的字段进行补充 */
    private static fillPageData(pageData: ComponentData) {
        if (pageData == null) {
            return
        }

        pageData.children = pageData.children || [];
        ReactPageBuilder.nameComponent(pageData);
        // PageDesigner.setComponetRefProp(pageData, components);

    }

    private static travelComponentData(pageData: ComponentData, filter?: (item: ComponentData) => boolean): ComponentData[] {
        let stack = new Array<ComponentData>();
        stack.push(pageData);
        let r: ComponentData[] = [];
        // return new Promise((resolve, reject) => {
        filter = filter || (() => true);
        while (stack.length > 0) {
            let item = stack.shift();
            if (filter(item)) {
                r.push(item);
            }

            //===============================================
            // 子元素有可能为字符串, 过滤出对象
            let children = (item.children || []).filter(o => typeof o == 'object') as ComponentData[]
            //===============================================
            stack.push(...children);
        }

        return r;
    }

    appendComponent(parentId: string, componentData: ComponentData, componentIndex?: number): void {
        if (!parentId) throw Errors.argumentNull('parentId');
        if (!componentData) throw Errors.argumentNull('childComponent');

        ReactPageBuilder.nameComponent(componentData);
        let parentControl = this.findComponentData(parentId);
        if (parentControl == null)
            throw new Error('Parent is not exists')

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
    selectComponents(componentIds: string[] | string): void {

        if (typeof componentIds == 'string')
            componentIds = [componentIds]

        var stack: ComponentData[] = []
        stack.push(this.pageData)
        while (stack.length > 0) {
            let item = stack.pop()
            let isSelectedControl = componentIds.indexOf(item.props.id) >= 0
            item.props.selected = isSelectedControl

            let children = item.children || []
            for (let i = 0; i < children.length; i++) {
                stack.push(children[i])
            }
        }

        // this.setState({ pageData: this.pageData })
        // this.componentSelected.fire(this.selectedComponentIds)
        this.render();
        //====================================================
        // 设置焦点，以便获取键盘事件
        this.pageElement.focus()
        //====================================================
    }

    setComponentsPosition(positions: { componentId: string, position: { left: number | string, top: number | string } }[]) {
        let componentDatas = new Array<ComponentData>()
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

            componentDatas.push(componentData)
        })

        this.render();
        return componentDatas;
    }

    removeComponents(componentIds: string[]) {
        let pageData = this.pageData;
        if (!pageData || !pageData.children || pageData.children.length == 0)
            return;


        componentIds.forEach(controlId => {
            this.removeComponentFrom(controlId, pageData.children);
        })

    }

    moveComponent(componentId: string, parentId: string, childComponentIndex?: number) {
        let component = this.findComponentData(componentId);
        if (component == null)
            throw new Error(`Cannt find component by id ${componentId}`)

        console.assert(component != null, `Cannt find component by id ${componentId}`);

        let pageData = this.pageData;
        console.assert(pageData.children != null);
        this.removeComponentFrom(componentId, pageData.children);
        this.appendComponent(parentId, component, childComponentIndex);
    }


    private removeComponentFrom(componentId: string, collection: ComponentData[]): boolean {
        let compoentIndex: number | null = null;
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
                    let isRemoved = this.removeComponentFrom(componentId, o.children)
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
    private static nameComponent(component: ComponentData) {
        let namedComponents: { [key: string]: ComponentData } = {}
        let props = component.props = component.props || {};
        if (!props.name) {
            let num = 0;
            let name: string;
            do {
                num = num + 1;
                name = `${component.type}${num}`;
            } while (namedComponents[name]);

            namedComponents[name] = component
            props.name = name;
        }

        if (!props.id)
            props.id = guid();

        if (!component.children || component.children.length == 0) {
            return;
        }
        for (let i = 0; i < component.children.length; i++) {
            ReactPageBuilder.nameComponent(component.children[i]);
        }
    }
}