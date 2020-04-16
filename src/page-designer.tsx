import * as React from "react";

import { ComponentData } from "./models";
import { ComponentDataHandler } from "./component-data-handler";

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

    // static defaultProps: Partial<PageDesignerProps> = { componentFactory: defaultComponentFactory };
    private components: { [typeName: string]: React.Component[] } = {};
    private handler: ComponentDataHandler;

    constructor(props: PageDesignerProps) {
        super(props);

        let pageData = this.props.pageData;
        this.initPageData(pageData);

        this.state = { pageData };

        this.handler = new ComponentDataHandler(pageData);
        this.handler.componentSelected.add(() => {
            this.setState({ pageData: this.handler.pageData });
        })
        this.handler.componentRemoved.add(() => {
            this.setState({ pageData: this.handler.pageData });
        })
        this.handler.componentUpdated.add(() => {
            this.setState({ pageData: this.handler.pageData });
        })

        this.handler.pageDataChanged.add(args => {
            this.setState({ pageData: args });
        })
    }

    private setComponetRefProp(pageData: ComponentData) {

        //=========================================================
        // 纪录当前 pageData 控件 ID
        let componentIds: { [typeName: string]: string[] } = {};
        //=========================================================
        PageDesigner.travelComponentData(pageData).forEach(item => {

            console.assert(item.props != null && item.id != null);
            componentIds[item.type] = componentIds[item.type] || [];
            componentIds[item.type].push(item.props["id"] as string);

            let itemRef = item.props.ref;
            item.props.ref = (e: any) => {
                if (e != null) {
                    this.components[item.type] = this.components[item.type] || [];
                    this.components[item.type].push(e);
                }

                if (typeof itemRef == "function")
                    itemRef(e);
            }
        })

        //=========================================================
        // 仅保留 componentIds 中的控件 
        let names = Object.getOwnPropertyNames(this.components);
        for (let i = 0; i < names.length; i++) {
            let typename = names[i];
            let ids = componentIds[typename] || [];
            this.components[typename] = (this.components[typename] || []).filter(o => ids.indexOf(o["id"] || o.props["id"]) >= 0)
        }
        //=========================================================
    }

    private initPageData(pageData: ComponentData) {
        if (pageData == null) {
            return
        }

        pageData.children = pageData.children || [];
        // PageDesigner.nameComponent(pageData);
        this.setComponetRefProp(pageData);

    }

    allComponents(): React.Component[] {
        let r: React.Component[] = [];
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
        return this.selectedComponents.map(o => o.id)
    }

    /** 获取已选择了的组件 */
    get selectedComponents(): ComponentData[] {
        return this.handler.selectedComponents;
    }

    get element(): HTMLElement {
        return this._element;
    }

    updateComponentProp(componentId: string, propName: string, value: any): any {
        return this.updateComponentProps({ componentId, propName, value });
    }
    updateComponentProps(...componentProps: { componentId: string, propName: string, value: any }[]): any {
        this.handler.updateComponentProps(componentProps);
    }

    /** 
     * 添加控件 
     * @param parentId 父控件编号
     * @param componentData 控件数据
     * @param componentIndex 新添加组件在子组件中的次序 
     */
    appendComponent(parentId: string, componentData: ComponentData, componentIndex?: number) {
        this.handler.appendComponent(parentId, componentData, componentIndex);
    }

    /** 
     * 设置控件位置
     * @param componentId 组件编号
     * @param position 组件位置 
     */
    setComponentPosition(componentId: string, position: { left: number | string, top: number | string }) {
        return this.setComponentsPosition([{ componentId, position }])
    }

    /** 
     * 设置控件大小
     * @param componentId 组件编号
     * @param size 组件大小 
     */
    setComponentSize(componentId: string, size: { width?: number | string, height?: number | string }) {
        console.assert(componentId != null)
        console.assert(size != null)

        let componentData = this.findComponentData(componentId);
        if (!componentData)
            throw new Error(`Control ${componentId} is not exits.`);

        let style = componentData.props.style = (componentData.props.style || {});
        if (size.height)
            style.height = size.height

        if (size.width)
            style.width = size.width

        let { pageData } = this.state;
        this.setState({ pageData });

        // this.componentUpdated.fire([componentData])
    }

    setComponentsPosition(positions: { componentId: string, position: { left: number | string, top: number | string } }[]) {
        let toUpdateProps: { componentId: string, propName: string, value: any }[] = [];
        positions.forEach(o => {
            let { componentId } = o
            let { left, top } = o.position
            let componentData = this.handler.findComponentData(componentId);
            if (!componentData)
                throw new Error(`Control ${componentId} is not exits.`);

            let style = componentData.props.style = (componentData.props.style || {});
            if (left)
                style.left = left;

            if (top)
                style.top = top;

            toUpdateProps.push({ componentId, propName: "style", value: style })
        })

        this.handler.updateComponentProps(toUpdateProps);
    }

    /**
     * 选择指定的控件
     * @param control 指定的控件
     */
    selectComponent(componentIds: string[] | string): void {

        this.handler.selectComponents(componentIds);
        //====================================================
        // 设置焦点，以便获取键盘事件
        if (this._element)
            this._element.focus()
        //====================================================
    }

    /** 移除控件 */
    removeComponent(...componentIds: string[]) {
        this.handler.removeComponents(componentIds);
    }

    removeComponents(componentIds: string[]) {
        this.handler.removeComponents(componentIds);
    }

    /** 
     * 移动控件到另外一个控件容器 
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param targetComponentIndex 组件位置
     */
    moveComponent(componentId: string, parentId: string, targetComponentIndex?: number) {
        return this.handler.moveComponent(componentId, parentId, targetComponentIndex);
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
        // return new Promise((resolve, reject) => {
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

    findComponentData(componentId: string): ComponentData | null {
        return this.handler.findComponentData(componentId);
    }

    private onKeyDown(e: React.KeyboardEvent<HTMLElement>) {
        const DELETE_KEY_CODE = 46;
        if (e.keyCode == DELETE_KEY_CODE) {
            if (this.selectedComponents.length == 0)
                return

            this.handler.removeComponents(this.selectedComponentIds)
        }
    }


    findComponetsByTypeName(typeName: string) {
        this.components[typeName];
    }

    render() {
        return <div ref={e => this._element = this._element || e} onKeyDown={e => this.onKeyDown(e)}
            className={this.props.className} style={this.props.style}>
            <DesignerContext.Provider value={{ designer: this }}>
                {this.props.children}
            </DesignerContext.Provider>
        </div>
    }
}