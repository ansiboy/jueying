import * as React from "react";

import { ComponentData } from "maishu-jueying-core";
import { Errors } from "./errors";
import { guid } from "maishu-toolkit";

export interface PageDesignerProps extends React.Props<PageDesigner> {
    pageData: ComponentData,
    className?: string,
    style?: React.CSSProperties,
}

export interface PageDesignerState {
    pageData: ComponentData,
}

export let DesignerContext = React.createContext<{ designer: PageDesigner | null }>({ designer: null })

export class PageDesigner extends React.Component<PageDesignerProps, PageDesignerState> {
    private _element: HTMLElement;
    private components: { [typeName: string]: { [id: string]: React.Component } } = {};

    constructor(props: PageDesignerProps) {
        super(props);

        let pageData = this.props.pageData;
        this.initPageData(pageData);

        this.state = { pageData };
    }

    private setComponetRefProp(pageData: ComponentData) {
        //=========================================================
        // 记录当前 pageData 控件 ID
        let componentIds: { [typeName: string]: string[] } = {};
        //=========================================================
        PageDesigner.travelComponentData(pageData).forEach(item => {

            console.assert(item.props != null && item.id != null);
            componentIds[item.type] = componentIds[item.type] || [];
            componentIds[item.type].push(item.id);

            let itemRef = item.props.ref;
            item.props.ref = (e: any) => {
                if (e != null) {
                    this.components[item.type] = this.components[item.type] || {};
                    this.components[item.type][item.id] = e;
                }

                if (typeof itemRef == "function")
                    itemRef(e);
            }
        })
    }

    private initPageData(pageData: ComponentData) {
        if (pageData == null) {
            return
        }

        pageData.children = pageData.children || [];
        this.fillComponent(pageData);
        this.setComponetRefProp(pageData);
    }

    /**
     * 对组件及其子控件进行命名
     * @param component 
     */
    private fillComponent(component: ComponentData) {
        let namedComponents: { [key: string]: ComponentData } = {}
        if (!component["name"]) {
            let num = 0;
            let name: string;
            do {
                num = num + 1;
                name = `${component.type}${num}`;
            } while (namedComponents[name]);

            namedComponents[name] = component
            component["name"] = name;
        }

        if (!component.id)
            component.id = guid();

        component.children = component.children || [];



        if (!component.children || component.children.length == 0) {
            return;
        }

        component.children.forEach(child => {
            if (typeof child == "string")
                return true;

            this.fillComponent(child);
        })
    }

    allComponents(): React.Component[] {
        let r: React.Component[] = [];
        for (let key in this.components) {
            let ids = Object.getOwnPropertyNames(this.components[key]);
            r.push(...ids.map(id => this.components[key][id]));
        }
        return r;
    }

    /** 页面数据 */
    get pageData() {
        return this.state.pageData;
    }

    /** 获取已选择了的组件编号 */
    get selectedComponentIds() {
        return this.selectedComponents.map(o => o.id)
    }

    /** 获取已选择了的组件 */
    get selectedComponents(): ComponentData[] {
        let arr = new Array<ComponentData>()
        let stack = new Array<ComponentData>()
        stack.push(this.pageData)
        while (stack.length > 0) {
            let item = stack.pop() as ComponentData;
            if (item.props != null && item.selected == true)
                arr.push(item);

            (item.children || []).forEach(child => {
                if (typeof child == "string")
                    return true;

                stack.push(child);
            })
        }

        return arr;
    }

    get element(): HTMLElement {
        return this._element;
    }

    updateComponentProp(componentId: string, propName: string, value: any): any {
        return this.updateComponentProps([{ componentId, propName, value }]);
    }
    updateComponentProps(componentProps: { componentId: string, propName: string, value: any }[]): any {
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

        this.setState({ pageData: this.pageData })
    }

    /** 
     * 添加控件 
     * @param parentId 父控件编号
     * @param componentData 控件数据
     * @param componentIndex 新添加组件在子组件中的次序 
     */
    appendComponent(parentId: string, componentData: ComponentData, componentIndex?: number) {
        if (!parentId) throw Errors.argumentNull('parentId');
        if (!componentData) throw Errors.argumentNull('childComponent');

        this.initPageData(componentData)
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

        this.selectComponents(componentData.id);
    }

    /**
     * 选择指定的控件
     * @param control 指定的控件
     */
    selectComponent(componentIds: string[] | string): void {
        this.selectComponents(componentIds);
        //====================================================
        // 设置焦点，以便获取键盘事件
        if (this._element)
            this._element.focus()
        //====================================================
    }

    /**
     * 选择指定的控件，一个或多个。已经选择的控件取消选择。
     * @param control 指定的控件
     */
    selectComponents(componentIds: string[] | string): void {
        if (typeof componentIds == 'string')
            componentIds = [componentIds]

        let selectedComponentIds = this.selectedComponentIds;
        if (this.isSame(componentIds, selectedComponentIds))
            return;

        var stack: ComponentData[] = [];
        stack.push(this.pageData)
        while (stack.length > 0) {
            let item = stack.pop() as ComponentData;
            let isSelectedControl = componentIds.indexOf(item.id) >= 0;
            item.selected = isSelectedControl;

            (item.children || []).forEach(child => {
                if (typeof child == "string")
                    return true;

                stack.push(child);
            })
        }

        this.setState({ pageData: this.pageData });
    }

    /** 判断两个字符串数组是否相等 */
    private isSame(arr1: string[], arr2: string[]) {
        if (arr1.length != arr2.length)
            return false;

        for (let i = 0; i < arr1.length; i++) {
            if (arr2.indexOf(arr1[i]) < 0)
                return false;
        }
        return true;
    }

    /** 移除控件 */
    removeComponent(...componentIds: string[]) {
        this.removeComponents(componentIds);
    }

    removeComponents(componentIds: string[]) {
        let pageData = this.pageData;
        if (!pageData || !pageData.children || pageData.children.length == 0)
            return;

        let children = pageData.children;
        componentIds.forEach(controlId => {
            this.removeComponentFrom(controlId, children);
        })


        this.setState({ pageData })
    }

    /** 
     * 移动控件到另外一个控件容器 
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param childComponentIndex 组件位置
     */
    moveComponent(componentId: string, parentId: string, childComponentIndex?: number) {
        let component = this.findComponentData(componentId);
        if (component == null)
            throw new Error(`Cannt find component by id ${componentId}`)

        console.assert(component != null, `Cannt find component by id ${componentId}`);

        let pageData = this.pageData;
        console.assert(pageData.children != null);
        let children = pageData.children;
        this.removeComponentFrom(componentId, children);
        this.appendComponent(parentId, component, childComponentIndex);
    }

    private removeComponentFrom(controlId: string, collection: ComponentData["children"]): boolean {
        let controlIndex: number | null = null;
        collection = collection || [];
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
                })
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

    private static travelComponentData(pageData: ComponentData, filter?: (item: ComponentData) => boolean): ComponentData[] {
        let stack = new Array<ComponentData>();
        stack.push(pageData);
        let r: ComponentData[] = [];
        filter = filter || (() => true);
        while (stack.length > 0) {
            let item = stack.shift() as ComponentData;
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

    /**
     * 通过组件编号获取组件的数据
     * @param componentId 组件编号
     */
    findComponentData(componentId: string): ComponentData | null {
        let pageData = this.state.pageData;
        if (!pageData)
            throw Errors.pageDataIsNull();

        let componentDatas = PageDesigner.travelComponentData(pageData, (item) => item.id == componentId)
        return componentDatas[0];
    }

    private onKeyDown(e: React.KeyboardEvent<HTMLElement>) {
        const DELETE_KEY_CODE = 46;
        if (e.keyCode == DELETE_KEY_CODE) {
            if (this.selectedComponents.length == 0)
                return

            this.removeComponents(this.selectedComponentIds)
        }
    }

    /** 
     * 通过组件名称获取组件实例
     * @param typeName 组件名称
     */
    findComponetsByTypeName(typeName: string) {
        this.components[typeName];
    }

    render() {
        return <div tabIndex={0} ref={e => this._element = this._element || e} onKeyDown={e => this.onKeyDown(e)}
            className={this.props.className} style={this.props.style}>
            <DesignerContext.Provider value={{ designer: this }}>
                {this.props.children}
            </DesignerContext.Provider>
        </div>
    }
}