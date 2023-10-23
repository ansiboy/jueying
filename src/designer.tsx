import * as React from "react";
import { ComponentData, PageData, ComponentStatus, ComponentTypes, Component } from "./runtime";
import { errors, errors as Errors } from "./errors";
import type { ComponentModule, ComponentsConfig } from "./components-config";
import { createInfoComponent, createLoadingComponent } from "./design/components";
import { ComponentEditors } from "./types";
import { PageDataHelper as PageDataTravel, deepEqual, isHTMLComponent } from "./utility";
import { DataList } from "./data/data-list";
import { ComponentPanel, DesignComponent } from "./design";
import { DesignBehavior } from "./design/design-behavior";
import { ComponentClass } from "./runtime/types";
import { defaultTypes } from "./defaultTypes";



let defaultComponentTypes = Object.assign(defaultTypes.runtime, defaultTypes.design);
export interface PageDesignerProps extends React.ComponentProps<any> {
    pageData: PageData;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    componentsConfig: ComponentsConfig;
}

export interface PageDesignerState {
    pageData: PageData;
    componentTypes: ComponentTypes;
    componentEditors: ComponentEditors;
}

export type DesignerContextValue = {
    designer: PageDesigner,
};

export let DesignerContext = React.createContext<DesignerContextValue | null>(null)

export type DesignComponentContextValue = {
    componentData: ComponentData;
    componentConfig: ComponentsConfig[0];
    designer: PageDesigner;
    componentTypes: ComponentTypes;
    parent: DesignComponentContextValue | null;
};

export let DesignComponentContext = React.createContext<DesignComponentContextValue | null>(null)
/**
 * 组件数据处理，负责对对组件数据进行处理维护。
 */
export class PageDesigner extends React.Component<PageDesignerProps, PageDesignerState> {
    private _element: HTMLElement
    private _prePageData: PageData | null = null
    readonly componentDiagramElements = new DataList<HTMLElement>()
    readonly componentPanels = new DataList<ComponentPanel>()

    constructor(props: PageDesignerProps) {
        super(props);

        if (!props) throw errors.argumentNull("props")
        if (!props.componentsConfig) throw errors.argumentFieldCanntNull("componentsConfig", "props")

        this.checkComponentsConfig(props.componentsConfig)

        let pageData = this.props.pageData;
        this.state = { pageData, componentTypes: {}, componentEditors: {} };
    }

    /** 检查组件配置 */
    private checkComponentsConfig(componentsConfig: ComponentsConfig) {
        // TODO: 检查组件配置
    }

    /** 页面数据 */
    get pageData() {
        return this.state.pageData;
    }

    get componentsConfig() {
        return this.props.componentsConfig
    }

    get componentTypes(): ComponentTypes {
        return this.state.componentTypes
    }

    get componentEditors(): ComponentEditors {
        return this.state.componentEditors
    }

    get prePageData(): PageData | null {
        return this._prePageData
    }
    set prePageData(value: PageData | null) {
        this._prePageData = value
    }

    /** 获取已选择了的组件编号 */
    get selectedComponentIds() {
        return this.selectedComponents.map(o => o.id)
    }

    /** 获取已选择了的组件 */
    get selectedComponents(): ComponentData[] {
        let arr: ComponentData[] = []
        PageDataTravel.each(this.pageData, (o) => {
            if (((o.status || ComponentStatus.default) & ComponentStatus.selected) == ComponentStatus.selected) {
                arr.push(o)
            }
        })
        return arr
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
    appendComponent(componentData: ComponentData, parentId: string, componentIndex?: number) {
        if (!componentData) throw Errors.argumentNull('childComponent');
        if (!parentId) throw errors.argumentNull("parentId");

        let parentComponentData = PageDataTravel.findComponent(this.pageData, parentId);
        if (!parentComponentData)
            throw new Error(`Component data '${parentId}' is not exists`)

        let children: ComponentData[] = parentComponentData.children || [];
        if (componentIndex == null) {
            children.push(componentData);
        }
        else {
            children.splice(componentIndex, 0, componentData);
        }

        this.selectComponents(componentData.id);
    }

    /**
     * 选择指定的控件
     * @param componentIds 指定的控件编号
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
     * @param componentIds 指定的控件 ID
     */
    selectComponents(componentIds: string[] | string): void {
        if (typeof componentIds == 'string')
            componentIds = [componentIds]

        /** 取消选中 */
        PageDataTravel.each(this.pageData, (c) => {
            c.status = c.status || ComponentStatus.default;
            c.status = c.status & (~ComponentStatus.selected);
        })

        /** 设置选中 */
        PageDataTravel.each(this.pageData, (c) => {
            if (componentIds.indexOf(c.id) < 0)
                return;

            c.status = c.status || ComponentStatus.default;
            c.status = c.status | ComponentStatus.selected;
        })

        this.setState({ pageData: this.pageData });
    }

    /** 移除控件 */
    removeComponent(...componentIds: string[]) {
        for (let i = 0; i < componentIds.length; i++) {
            let componentId = componentIds[i]
            let { component, parent } = PageDataTravel.findComponentAndParent(this.pageData, componentId);//componentChildren.filter(o => o.id == componentId)[0];
            if (component == null)
                throw new Error(`Component '${componentId}' is not exists.`);

            if (parent == null)
                throw new Error(`Component '${componentId}' is root element, can not remove.`)

            parent.children = (parent.children || []).filter(o => o.id != componentId)
        }
    }

    removeComponentIfExists(...componentIds: string[]) {
        for (let i = 0; i < componentIds.length; i++) {
            let componentId = componentIds[i]
            let { component, parent } = PageDataTravel.findComponentAndParent(this.pageData, componentId);//componentChildren.filter(o => o.id == componentId)[0];
            if (component == null)
                continue

            if (parent == null)
                throw new Error(`Component '${componentId}' is root element, can not remove.`)

            parent.children = (parent.children || []).filter(o => o.id != componentId)
        }
    }

    removeComponents(componentIds: string[]) {
        let pageData = this.pageData;
        if (!pageData || !pageData.children || pageData.children.length == 0)
            return;

        for (let i = 0; i < componentIds.length; i++) {
            this.removeComponent(componentIds[i]);
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
        // component.parentId = parentId;

        let pageData = this.pageData;
        console.assert(pageData.children != null);
        this.removeComponent(componentId);
        this.appendComponent(component, parentId, childComponentIndex);
    }

    /**
     * 通过组件编号获取组件的数据
     * @param componentId 组件编号
     */
    findComponentData(componentId: string): ComponentData | null {
        let pageData = this.state.pageData;
        if (!pageData)
            throw Errors.pageDataIsNull();

        let componentData = PageDataTravel.findComponent(pageData, componentId) || null;
        return componentData;
    }

    private async loadEditorTypes(pageData: PageData) {
        let componentsToLoad: string[] = [];
        PageDataTravel.each(pageData, (c) => {
            componentsToLoad.push(c.type);
        })

        let componentsConfig = this.props.componentsConfig;
        let promises = componentsToLoad.map(typeName => ({ typeName, componentConfig: componentsConfig[typeName] }))
            .map(o => o.componentConfig?.editor ?
                o.componentConfig.editor.then(a => ({ typeName: o.typeName, componentConfig: o, module: a })) : Promise.resolve(null));

        let r = await Promise.all(promises);

        let componentEditors = this.state.componentEditors;
        r.forEach(m => {
            if (m == null)
                return

            let editors = m.module.default;
            if (!m.module.default)
                throw errors.editorModuleNoneDefaultExport(m.typeName);

            componentEditors[m.typeName] = m.module.default;
        })

        this.setState({ componentEditors: componentEditors })
    }

    private async loadComponentTypes(pageData: PageData) {
        let componentTypes: ComponentTypes = this.state.componentTypes;
        let componentsConfig = this.props.componentsConfig;
        let componentsToLoad: string[] = [];
        PageDataTravel.each(pageData, (c) => {
            if (isHTMLComponent(c))
                return

            componentsToLoad.push(c.type)
        })

        componentsToLoad.forEach(typeName => {
            componentTypes[typeName] = createLoadingComponent()
        })

        // const loadedComponentTypes = await PageDesigner.loadComponentTypes(componentsToLoad, componentsConfig);
        PageDesigner.loadComponentTypes(componentsToLoad, componentsConfig).then(loadedComponentTypes => {
            Object.assign(componentTypes, loadedComponentTypes);
            this.setState({ componentTypes });
        })
    }

    static async loadComponentTypes(componentsToLoad: string[], componentsConfig: ComponentsConfig): Promise<ComponentTypes> {
        if (!componentsToLoad) throw errors.argumentNull("componentsToLoad")
        if (!componentsConfig) throw errors.argumentNull("componentsConfig")

        // 设置默认组件
        for (let typeName in defaultTypes.runtime) {
            if (!componentsConfig[typeName]) {
                let designBehavior = DesignBehavior.default




                componentsConfig[typeName] = {
                    type: Promise.resolve({ default: (defaultTypes.runtime as any)[typeName] }),
                    hidden: true, design: Promise.resolve({ default: (defaultTypes.design as any)[typeName] })
                }

                // if (typeName == Component.typeNames.page) {
                //     componentsConfig[typeName].design = Promise.resolve({ default: DesignPage })
                // }
            }
        }

        let promises: Promise<any>[] = []
        let componentTypes: { [typeName: string]: ComponentClass | string } = {}
        for (let i = 0; i < componentsToLoad.length; i++) {
            let typeName = componentsToLoad[i]

            let p = new Promise(function (resolve, reject) {

                if (!componentsConfig[typeName]) {
                    let errorText = `Component '${typeName}' is not exists.`
                    // componentTypes[typeName] = createInfoComponent(errorText,typeName)
                    createInfoComponent(errorText, typeName);
                    resolve({})
                    return
                }

                if (!(componentsConfig[typeName].type instanceof Promise)) {
                    let errorText = `Component '${typeName}' type is invalid.`
                    // componentTypes[typeName] = createInfoComponent(errorText)
                    createInfoComponent(errorText, typeName);
                    resolve({})
                    return
                }

                let componentType: Promise<ComponentModule> | undefined
                if (componentsConfig[typeName].design instanceof Promise) {
                    componentType = componentsConfig[typeName].design as Promise<ComponentModule>
                }
                // else if (DesignComponent.types[typeName]) {
                //     componentType = Promise.resolve({ default: DesignComponent.types[typeName] });
                // }
                else {
                    componentType = componentsConfig[typeName].type
                }

                if (!componentType) {
                    return resolve({})
                }

                componentType.then(p => {
                    if (!p.default) {
                        let errorText = `Component '${typeName}' module has not export default member.`
                        // componentTypes[typeName] = createInfoComponent(errorText)
                        createInfoComponent(errorText, typeName);
                    }
                    else {
                        componentTypes[typeName] = p.default
                    }

                    resolve({})
                }).catch(err => {
                    reject(err)
                })
            })

            promises.push(p)
        }

        await Promise.all(promises)
        return componentTypes
    }

    private onKeyDown(e: React.KeyboardEvent<HTMLElement>) {
        const DELETE_KEY_CODE = 46;
        if (e.keyCode == DELETE_KEY_CODE) {
            if (this.selectedComponents.length == 0)
                return

            this.removeComponents(this.selectedComponentIds)
        }
    }

    private async onPageDataChanged(pageData: PageData) {
        this.loadComponentTypes(pageData)
        this.loadEditorTypes(pageData)
    }

    static getDerivedStateFromProps(props: PageDesignerProps, state: PageDesignerState): Partial<PageDesignerState> {
        return { pageData: props.pageData }
    }

    componentDidMount(): void {
    }

    render() {

        let pageData = this.state.pageData
        let equal = deepEqual(this.prePageData, pageData)
        if (!equal) {
            this.prePageData = JSON.parse(JSON.stringify(pageData))
            this.onPageDataChanged(pageData)
        }

        return <div tabIndex={0} ref={e => this._element = this._element || e} onKeyDown={e => this.onKeyDown(e)}
            className={this.props.className} style={this.props.style}>
            <DesignerContext.Provider value={{
                designer: this,
            }}>
                {this.props.children}
            </DesignerContext.Provider>
        </div>
    }


}