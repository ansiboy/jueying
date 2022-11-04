import * as React from "react";

import { ComponentData, PageData, ComponentStatus } from "maishu-jueying-core";
import { Errors } from "./errors";
import { guid } from "maishu-toolkit";

export interface PageDesignerProps extends React.ClassAttributes<PageDesigner> {
    pageData: PageData,
    className?: string,
    style?: React.CSSProperties,
}

export interface PageDesignerState {
    pageData: PageData,
}

export type DesignerContextValue = { designer: PageDesigner | null };

export let DesignerContext = React.createContext<DesignerContextValue>({ designer: null })

/**
 * 组件数据处理，负责对对组件数据进行处理维护。
 */
export class PageDesigner extends React.Component<PageDesignerProps, PageDesignerState> {
    private _element: HTMLElement;

    constructor(props: PageDesignerProps) {
        super(props);

        let pageData = this.props.pageData;
        this.initPageData(pageData);

        this.state = { pageData: pageData };
    }

    private initPageData(pageData: PageData) {
        if (pageData == null) {
            return
        }

        // pageData.children = pageData.children || [];
        console.assert(pageData.children != null, "PageData children is null.")
        pageData.children.forEach(c => {
            this.initComponent(c, pageData);

        })
    }

    /**
     * 对组件及其子控件进行命名
     * @param componentData 
     */
    private initComponent(componentData: ComponentData, pageData: PageData) {
        let namedComponents: { [key: string]: PageData | ComponentData } = {};
        pageData.children.forEach(c => {
            if (c.name) {
                namedComponents[c.name] = c;
            }
        })

        if (!componentData.name) {
            let num = 0;
            let name: string;
            do {
                num = num + 1;
                name = `${componentData.type}${num}`;
            } while (namedComponents[name]);

            namedComponents[name] = componentData
            componentData.name = name;
        }

        if (!componentData.id)
            componentData.id = guid();
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
        let arr = this.pageData.children.filter(o => ((o.status || ComponentStatus.default) & ComponentStatus.selected) == ComponentStatus.selected);
        return arr;
    }

    get element(): HTMLElement {
        return this._element;
    }

    updateComponentProp(componentId: string, propName: string, value: any) {
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

        this.setState({ pageData: this.pageData });
    }

    /** 
     * 添加控件 
     * @param componentData 控件数据
     * @param componentIndex 新添加组件在子组件中的次序 
     */
    appendComponent(componentData: ComponentData, componentIndex?: number) {
        let parentId = componentData.parentId;
        if (!parentId) throw new Error('ParentId field of component data is null.');
        if (!componentData) throw Errors.argumentNull('childComponent');

        let pageData: PageData = this.pageData;
        this.initComponent(componentData, pageData)

        if (componentIndex == null) {
            pageData.children.push(componentData);
        }
        else {
            pageData.children.splice(componentIndex, 0, componentData);
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

        this.pageData.children.forEach(c => {
            // c.selected = false;
            c.status = c.status || ComponentStatus.default;
            c.status = c.status & (~ComponentStatus.selected);
        })
        this.pageData.children.filter(o => componentIds.indexOf(o.id) >= 0).forEach(c => {
            // c.selected = true;
            c.status = c.status || ComponentStatus.default;
            c.status = c.status | ComponentStatus.selected;
        });

        this.setState({ pageData: this.pageData });
    }

    /** 移除控件 */
    removeComponent(...componentIds: string[]) {
        this.removeComponents(componentIds);
    }

    removeComponents(componentIds: string[]) {
        let pageData = this.pageData;
        if (!pageData || !pageData.children || pageData.children.length == 0)
            return;

        for (let i = 0; i < componentIds.length; i++) {
            this.removeComponentFrom(componentIds[i], pageData);
        }

        this.setState({ pageData: pageData })
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
        component.parentId = parentId;

        let pageData = this.pageData;
        console.assert(pageData.children != null);
        this.removeComponentFrom(componentId, pageData);
        this.appendComponent(component, childComponentIndex);
    }



    private removeComponentFrom(componentId: string, pageData: PageData,) {
        let child = pageData.children.filter(o => o.id == componentId)[0];
        if (child == null)
            throw new Error(`Component '${componentId}' is not exists.`);

        let stack: PageData["children"] = [child];
        let componentsToRemove: string[] = [componentId];
        while (stack.length > 0) {
            let item = stack.pop() as ComponentData;
            let children = pageData.children.filter(o => o.parentId == item.id);
            if (children.length > 0) {
                stack.push(...children);

                // status 为 ComponentStatus.asset 不要删除
                componentsToRemove.push(...children.filter(o => o.status == null || (o.status & ComponentStatus.asset) != ComponentStatus.asset).map(o => o.id));
            }
        }

        pageData.children = pageData.children.filter(o => componentsToRemove.indexOf(o.id) < 0);
    }

    /**
     * 通过组件编号获取组件的数据
     * @param componentId 组件编号
     */
    findComponentData(componentId: string): ComponentData | null {
        let pageData = this.state.pageData;
        if (!pageData)
            throw Errors.pageDataIsNull();

        let componentData = pageData.children.filter(o => o.id == componentId)[0];
        return componentData;
    }

    private onKeyDown(e: React.KeyboardEvent<HTMLElement>) {
        const DELETE_KEY_CODE = 46;
        if (e.keyCode == DELETE_KEY_CODE) {
            if (this.selectedComponents.length == 0)
                return

            this.removeComponents(this.selectedComponentIds)
        }
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