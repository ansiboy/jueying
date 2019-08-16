
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

import React = require("react");

import { ComponentData } from "./models";
import { Callback, guid } from "./common";
import { Errors } from "./errors";
import { ComponentProps, Component, DesignerContext } from "./component";
import { appendClassName, classNames } from "./style";
import { ComponentWrapper } from "./component-wrapper";

export interface PageDesignerProps extends React.Props<PageDesigner> {
    pageData: ComponentData | null,
    style?: React.CSSProperties
}

export interface PageDesignerState {
    pageData: ComponentData | null
}

export class PageDesigner extends React.Component<PageDesignerProps, PageDesignerState> {
    private element: HTMLElement;

    componentSelected = Callback.create<string[]>();
    componentRemoved = Callback.create<string[]>()
    componentAppend = Callback.create<PageDesigner>()
    componentUpdated = Callback.create<ComponentData[]>()

    designtimeComponentDidMount = Callback.create<{ component: React.ReactElement<any>, element: HTMLElement }>();
    private namedComponents: { [key: string]: ComponentData } = {}
    private _root: React.ReactElement<any>

    constructor(props: PageDesignerProps) {
        super(props);

        this.initPageData(props.pageData)
        this.state = { pageData: props.pageData };
        this.designtimeComponentDidMount.add((args) => {
            console.log(`this:designer event:controlComponentDidMount`)
        })
    }

    initPageData(pageData: ComponentData) {
        if (pageData == null) {
            return
        }

        pageData.children = pageData.children || []
        this.nameComponent(pageData)
    }

    get root(): React.ReactElement<any> {
        return this._root
    }

    get pageData() {
        return this.state.pageData;
    }

    get selectedComponentIds() {
        return this.selectedComponents.map(o => o.props.id)
    }

    get selectedComponents(): ComponentData[] {
        let arr = new Array<ComponentData>()
        let stack = new Array<ComponentData>()
        stack.push(this.pageData)
        while (stack.length > 0) {
            let item = stack.pop()
            if (item.props.selected == true)
                arr.push(item)

            let children = item.children || []
            for (let i = 0; i < children.length; i++)
                stack.push(children[i])
        }

        return arr
    }

    updateControlProps(controlId: string, navPropsNames: string[], value: any): any {
        let componentData = this.findComponentData(controlId);
        if (componentData == null)
            return

        console.assert(componentData != null);
        console.assert(navPropsNames != null, 'props is null');

        componentData.props = componentData.props || {};

        let obj = componentData.props
        for (let i = 0; i < navPropsNames.length - 1; i++) {
            obj = obj[navPropsNames[i]] = obj[navPropsNames[i]] || {};
        }

        obj[navPropsNames[navPropsNames.length - 1]] = value
        this.setState(this.state);
        this.componentUpdated.fire([componentData])
    }

    private sortChildren(parentId: string, childIds: string[]) {
        if (!parentId) throw Errors.argumentNull('parentId');
        if (!childIds) throw Errors.argumentNull('childIds');

        let pageData = this.state.pageData;
        let parentControl = this.findComponentData(parentId);
        if (parentControl == null)
            throw new Error('Parent is not exists')

        console.assert(parentControl != null);
        console.assert(parentControl.children != null);
        console.assert((parentControl.children || []).length == childIds.length);

        let p = parentControl
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
    private nameComponent(component: ComponentData) {
        let props = component.props = component.props || {};
        if (!props.name) {
            let num = 0;
            let name: string;
            do {
                num = num + 1;
                name = `${component.type}${num}`;
            } while (this.namedComponents[name]);

            this.namedComponents[name] = component
            props.name = name;
        }

        if (!props.id)
            props.id = guid();

        if (!component.children || component.children.length == 0) {
            return;
        }
        for (let i = 0; i < component.children.length; i++) {
            this.nameComponent(component.children[i]);
        }
    }

    /** 添加控件 */
    appendComponent(parentId: string, childControl: ComponentData, childIds?: string[]) {
        if (!parentId) throw Errors.argumentNull('parentId');
        if (!childControl) throw Errors.argumentNull('childControl');

        this.nameComponent(childControl)
        let parentControl = this.findComponentData(parentId);
        if (parentControl == null)
            throw new Error('Parent is not exists')

        console.assert(parentControl != null);
        parentControl.children = parentControl.children || [];
        parentControl.children.push(childControl);
        if (childIds)
            this.sortChildren(parentId, childIds);
        else {
            let { pageData } = this.state;
            this.setState({ pageData });
        }

        this.selectComponent(childControl.props.id);
        this.componentAppend.fire(this)
    }

    /** 设置控件位置 */
    setComponentPosition(componentId: string, position: { left: number | string, top: number | string }) {
        return this.setComponentsPosition([{ componentId, position }])
    }

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

        this.componentUpdated.fire([componentData])
    }

    setComponentsPosition(positions: { componentId: string, position: { left: number | string, top: number | string } }[]) {
        let componentDatas = new Array<ComponentData>()
        positions.forEach(o => {
            let { componentId } = o
            let { left, top } = o.position
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
            componentDatas.push(componentData)
        })

        this.componentUpdated.fire(componentDatas)
    }

    /**
     * 选择指定的控件
     * @param control 指定的控件
     */
    selectComponent(componentIds: string[] | string): void {

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

        this.setState({ pageData: this.pageData })
        this.componentSelected.fire(this.selectedComponentIds)
        //====================================================
        // 设置焦点，以便获取键盘事件
        this.element.focus()
        //====================================================
    }

    /** 移除控件 */
    removeControl(...controlIds: string[]) {
        let pageData = this.state.pageData;
        if (!pageData || !pageData.children || pageData.children.length == 0)
            return;


        controlIds.forEach(controlId => {
            this.removeControlFrom(controlId, pageData.children);
        })


        this.setState({ pageData });
        this.componentRemoved.fire(controlIds)
    }

    /** 
     * 移动控件到另外一个控件容器 
     * @param componentId 要移动的组件编号
     * @param parentId 目标组件编号
     * @param childIds 目标组件子组件的编号，用于排序子组件
     */
    moveControl(componentId: string, parentId: string, childIds?: string[]) {
        let control = this.findComponentData(componentId);
        if (control == null)
            throw new Error(`Cannt find control by id ${componentId}`)

        console.assert(control != null, `Cannt find control by id ${componentId}`);

        let pageData = this.state.pageData;
        console.assert(pageData.children != null);
        this.removeControlFrom(componentId, pageData.children);
        this.appendComponent(parentId, control, childIds);
    }

    private removeControlFrom(controlId: string, collection: ComponentData[]): boolean {
        let controlIndex: number | null = null;
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
                    let isRemoved = this.removeControlFrom(controlId, o.children)
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

    findComponentData(controlId: string): ComponentData | null {
        let pageData = this.state.pageData;
        if (!pageData)
            throw Errors.pageDataIsNull();

        let stack = new Array<ComponentData>();
        stack.push(pageData);
        while (stack.length > 0) {
            let item = stack.pop();
            if (item == null)
                continue

            if (item.props.id == controlId)
                return item;

            let children = (item.children || []).filter(o => typeof o == 'object') as ComponentData[]
            stack.push(...children);
        }

        return null;
    }

    private onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
        const DELETE_KEY_CODE = 46;
        if (e.keyCode == DELETE_KEY_CODE) {
            if (this.selectedComponents.length == 0)
                return

            this.removeControl(...this.selectedComponentIds)
        }
    }

    protected createDesignTimeElement(type: string | React.ComponentClass<any>, props: ComponentProps<any>, ...children: any[]) {

        if (type == null) throw Errors.argumentNull('type')
        if (props == null) throw Errors.argumentNull('props')
        if (props.id == null) throw Errors.argumentFieldCanntNull('id', 'props')


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
        return <ComponentWrapper {...Object.assign({}, props, { className })} designer={this}
            source={{ type, attr, props, children }}>
        </ComponentWrapper>
    }

    componentWillReceiveProps(props: PageDesignerProps) {
        this.initPageData(props.pageData)
        this.setState({ pageData: props.pageData });
    }

    render() {
        let designer = this;
        let { pageData } = this.state
        let style = this.props.style

        let result = <div className="designer" tabIndex={1} style={style}
            ref={e => this.element = e || this.element}
            onKeyDown={(e) => this.onKeyDown(e)}>
            <DesignerContext.Provider value={{ designer }}>
                {(() => {
                    this._root = pageData ? Component.createElement(pageData, this.createDesignTimeElement.bind(this)) : null
                    return this._root
                })()}
            </DesignerContext.Provider>
        </div >

        return result
    }
}