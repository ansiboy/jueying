/// <reference path="./typings/declare.d.ts"/>

import { ComponentProps } from "react";
import * as React from "react";
import { PageDesigner } from "./page-designer";
import { Errors } from "./errors";
import { constants } from "./common";
import { ComponentPanel } from "./component-panel";
import { classNames, appendClassName } from "./style";
import { MasterPage, ComponentWrapperContext } from "./component";

type ComponentWrapperProps = {
    designer: PageDesigner,
    source: {
        type: string | React.ComponentClass,
        attr: ComponentAttribute,
        props: ComponentProps<any>,
        children: any[]
    }

}

export interface ComponentWrapperDrapData extends DragDropData {
    attr: string, sourceElement: HTMLElement
}

/**
 * 组件包装器，对组件进行包装，实现组件设计时的行为。
 * 1. 组件的移动
 * 2. 组件的拖放
 */
export class ComponentWrapper extends React.Component<ComponentWrapperProps, any>{
    private handler: HTMLElement;
    private element: HTMLElement;
    private static isDrag: boolean = false;

    designtimeBehavior(element: HTMLElement, attr: { container?: boolean, movable?: boolean }) {
        if (!element) throw Errors.argumentNull('element')
        if (!attr) throw Errors.argumentNull('args')

        if (element.getAttribute('data-behavior')) {
            return
        }

        element.setAttribute('data-behavior', 'behavior')
        let designer = this.props.designer
        console.assert(attr.container != null)
        console.assert(attr.movable != null)
        if (attr.container) {
            ComponentWrapper.enableAppendDroppable(element, designer)
        }

        if (attr.movable) {
            console.assert(element != null)
            ComponentWrapper.draggable(designer, element)
            if (this.handler != null)
                ComponentWrapper.draggable(designer, element, this.handler)
        }
        else {
            element.onclick = (ev) => ComponentWrapper.invokeOnClick(ev, designer, element)
        }
    }


    /**
     * 启用拖放操作，以便通过拖放图标添加控件
     */
    private static enableAppendDroppable(element: HTMLElement, designer: PageDesigner) {
        console.assert(element != null)
        element.addEventListener('dragover', function (event) {
            event.preventDefault()
            event.stopPropagation()

            let componentName = event.dataTransfer.getData(constants.componentData)
            if (componentName)
                event.dataTransfer.dropEffect = "copy"
            else
                event.dataTransfer.dropEffect = "move"

            console.log(`dragover: left:${event.layerX} top:${event.layerX}`)
        })

        element.addEventListener("drop", function (event) {
            event.preventDefault()
            event.stopPropagation()

            let args1 = arguments[1]

            if (!event.dataTransfer)
                return;

            let ctrl = ComponentPanel.getComponentData(event.dataTransfer)
            if (!ctrl)
                return

            ctrl.props.style = ctrl.props.style || {}
            designer.pageData.props.style = designer.pageData.props.style || {}
            if (!ctrl.props.style.position) {
                ctrl.props.style.position = designer.pageData.props.style.position
            }

            let pos = ComponentPanel.mouseInnerPosition(event.dataTransfer)
            console.assert(pos != null)
            if (ctrl.props.style.position == 'absolute') {
                ctrl.props.style.left = event.layerX - pos.x
                ctrl.props.style.top = event.layerY - pos.y
            }
            designer.appendComponent(element.id, ctrl);
        })
    }
    private static isResizeHandleClassName(className: string) {
        let classNames = [
            'resize_handle NE', 'resize_handle NN', 'resize_handle NW',
            'resize_handle WW', 'resize_handle EE', 'resize_handle SW',
            'resize_handle SS', 'resize_handle SE',
        ]
        return classNames.indexOf(className) >= 0
    }
    private static draggable(designer: PageDesigner, element: HTMLElement, handler?: HTMLElement) {

        if (!designer) throw Errors.argumentNull('designer')
        if (!element) throw Errors.argumentNull('element')
        console.assert(element.id != "")

        handler = handler || element
        let componentId = element.id
        console.assert(componentId != "")
        let startPos: JQuery.Coordinates
        let rect: { width?: number, height?: number, left?: number, top?: number };
        let dragStart: number
        $(handler)
            .drag("init", function (ev) {
                startPos = $(element).position()
                if ($(this).is(`.${classNames.componentSelected}`))
                    return $(`.${classNames.componentSelected}`);
            })
            .drag('start', function (ev, dd: ComponentWrapperDrapData) {
                dd.attr = $(ev.target).prop("className");
                dd.width = $(this).width();
                dd.height = $(this).height();
                dd.sourceElement = element;

                dragStart = Date.now()

            })
            .drag(function (ev, dd: DragDropData & { attr: string }) {
                ev.preventDefault()
                ev.stopPropagation()

                console.log(`drop:`)
                console.log(dd.drop);

                rect = {}
                if (dd.attr.indexOf("E") > -1) {
                    rect.width = Math.max(32, dd.width + dd.deltaX);
                }
                if (dd.attr.indexOf("S") > -1) {
                    rect.height = Math.max(32, dd.height + dd.deltaY);
                }
                if (dd.attr.indexOf("W") > -1) {
                    rect.width = Math.max(32, dd.width - dd.deltaX);
                    setLeft(dd)
                }
                if (dd.attr.indexOf("N") > -1) {
                    rect.height = Math.max(32, dd.height - dd.deltaY);
                    setTop(dd)
                }

                if (dd.attr.indexOf("WW") >= 0)
                    setLeft(dd)
                if (dd.attr.indexOf("NE") >= 0 || dd.attr.indexOf("NW") >= 0 || dd.attr.indexOf("SW") >= 0)
                    setPosition(dd)

                if (dd.attr.indexOf("NN") >= 0)
                    setTop(dd)


                if (dd.attr.indexOf("drag") > -1) {
                    rect.top = dd.offsetY;
                    rect.left = dd.offsetX;
                }

                if (!ComponentWrapper.isResizeHandleClassName(dd.attr)) {
                    setPosition(dd)
                }

                if (dd.attr)
                    $(this).css(rect);

            }, { click: true })
            .drag('end', function (ev, dd: DragDropData & { attr: string }) {
                let interval = Date.now() - dragStart
                ComponentWrapper.isDrag = interval >= 300

                if (!ComponentWrapper.isResizeHandleClassName(dd.attr)) {
                    let left = startPos.left + dd.deltaX
                    let top = startPos.top + dd.deltaY
                    designer.setComponentPosition(element.id, { left, top })
                    element.style.transform = ''
                }
                else {
                    let left, top: number
                    if (dd.attr.indexOf("W") > -1)
                        left = startPos.left + dd.deltaX

                    if (dd.attr.indexOf("N") > -1)
                        top = startPos.top + dd.deltaY

                    element.style.transform = ''
                    designer.setComponentPosition(element.id, { left, top })
                    designer.setComponentSize(componentId, rect)
                }
            })
            .click((ev) => {
                ComponentWrapper.invokeOnClick(ev as any, designer, element)
            })

        let setPosition = (dd: DragDropData) => {
            console.log(['dd.offsetX, dd.offsetY', dd.offsetX, dd.offsetY])
            console.log(dd)
            element.style.transform = `translate(${dd.deltaX}px,${dd.deltaY}px)`
        }

        let setTop = (dd: DragDropData) => {
            element.style.transform = `translateY(${dd.deltaY}px)`
        }
        let setLeft = (dd: DragDropData) => {
            element.style.transform = `translateX(${dd.deltaX}px)`
        }
    }

    static invokeOnClick(ev: MouseEvent, designer: PageDesigner, element: HTMLElement) {
        ev.preventDefault()
        ev.stopPropagation()

        if (ComponentWrapper.isDrag) {
            ComponentWrapper.isDrag = false
            return
        }

        let elementID = element.id
        if (!ev.ctrlKey) {
            designer.selectComponent(element.id)
            return
        }

        let selectedControlIds = designer.selectedComponentIds
        console.assert(elementID != "");
        if (selectedControlIds.indexOf(elementID) >= 0) {
            selectedControlIds = selectedControlIds.filter(o => o != elementID)
        }
        else {
            selectedControlIds.push(elementID)
        }
        designer.selectComponent(selectedControlIds)
    }

    componentDidMount() {
        if (!this.element) {
            return
        }

        let attr = this.props.source.attr
        this.designtimeBehavior(this.element, attr)
    }

    render() {
        console.assert(!Array.isArray(this.props.children))

        let attr = this.props.source.attr
        let shouldWrapper = attr.resize || (typeof this.props.source.type != 'string' && this.props.source.type != MasterPage)
        if (!shouldWrapper) {
            return this.renderWidthoutWrapper()
        }

        let props = this.props.source.props
        let style = props.style = JSON.parse(JSON.stringify(props.style || {})) // 深复制 style
        let { top, left, position, width, height, display, visibility } = style

        let className = appendClassName(props.className || '', classNames.componentWrapper)
        className = props.selected ? appendClassName(className, classNames.componentSelected) : className

        let wrapperProps: ComponentProps<any> & React.HTMLAttributes<any> = {
            id: props.id,
            className,
            style: { top, left, position, width, height, display, visibility },
            ref: (e: HTMLElement) => this.element = e || this.element
        }
        let move_handle = props.selected && attr.showHandler ? <div className="move_handle" style={{}}
            ref={e => this.handler = e || this.handler} /> : null

        let showResizeHandle = attr.resize && props.style.position == 'absolute' && props.selected
        let source = this.props.source
        if (props.style) {
            delete props.style.left
            delete props.style.top
            delete props.style.position

            if (wrapperProps.style.width && wrapperProps.style.width != 'unset')
                props.style.width = '100%'

            if (wrapperProps.style.height && wrapperProps.style.height != 'unset')
                props.style.height = '100%'
        }
        return <ComponentWrapperContext.Provider value={this}>
            <div {...wrapperProps}>
                {move_handle}
                {showResizeHandle ?
                    <>
                        <div className="resize_handle NE"></div>
                        <div className="resize_handle NN"></div>
                        <div className="resize_handle NW"></div>
                        <div className="resize_handle WW"></div>
                        <div className="resize_handle EE"></div>
                        <div className="resize_handle SW"></div>
                        <div className="resize_handle SS"></div>
                        <div className="resize_handle SE"></div>
                    </> : null}
                {this.createRawElement(source.type, source.props, source.children)}
            </div>
        </ComponentWrapperContext.Provider>
    }

    private renderWidthoutWrapper() {
        let { type, props, children } = this.props.source

        props.ref = (e: HTMLElement | React.Component) => {
            if (!e) return

            if ((e as HTMLElement).tagName) {
                let attr = this.props.source.attr
                this.designtimeBehavior(e as HTMLElement, attr)
                return
            }
        }

        if (props.selected) {
            props.className = appendClassName(props.className || '', classNames.componentSelected)
        }

        let element = this.createRawElement(type, props, children)
        return <ComponentWrapperContext.Provider value={this}>
            {element}
        </ComponentWrapperContext.Provider>
    }

    private createRawElement(type: string | React.ComponentClass, props: ComponentProps<any>, children: any[]) {
        let isEmptyElement = (children || []).length == 0
        if (isEmptyElement) {
            let emtpy = this.designTimeEmptyElement(type, props)
            if (emtpy != null)
                children = [emtpy]
        }
        return React.createElement(type, props, ...children)
    }

    private designTimeEmptyElement(type: string | React.ComponentClass, props: ComponentProps<any>) {
        if (type == 'input' || type == 'img' || type == 'meta' || type == 'link')
            return null

        let typename = typeof type == 'string' ? type : type.name
        let text: string = this.designTimeText(typename, props)
        return text
    }

    private designTimeText(type: string, props: ComponentProps<any>) {
        let text: string = props.text
        if (text) {
            return text
        }

        text = text || props.name || type

        return text
    }
}


export interface ComponentAttribute {
    /** 表示组件为容器，可以添加组件 */
    container?: boolean,
    /** 表示组件可移动 */
    movable?: boolean,
    showHandler?: boolean,
    resize?: boolean,
}


