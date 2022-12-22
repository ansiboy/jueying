import { errors } from "../errors"
import * as React from "react"
import { DesignerContext, DesignerContextValue, PageDesigner } from "../designer"
import { classNames } from "../style"
import { strings } from "../strings"
import type { ComponentsConfig } from "../components-config"
import { ComponentData } from "../runtime"
import { guid } from "maishu-toolkit/out/guid"
import $ from "jquery"
interface ComponentPanelProps {
    renderItem?: (typeName: string, compoenntConfig: ComponentsConfig[0]) => ReturnType<React.Component["render"]>
}

const DATA_TYPE = "data-type"

export let ComponentPanelContext = React.createContext<{ instance: ComponentPanel } | null>(null)
type CompoenntDataFactory = (typeName: string) => ComponentData

/** 组件面板 */
export class ComponentPanel extends React.Component<ComponentPanelProps> {

    private _element: HTMLElement
    private dropTargets: HTMLElement[] = []

    private static renderItem(typeName: string, componentConfig: ComponentsConfig[0]) {
        let displayName = componentConfig.displayName || typeName
        return <li key={typeName} ref={e => e ? e.setAttribute(DATA_TYPE, typeName) : null}>
            <i className={componentConfig.icon} />
            <div>
                {displayName}
            </div>
        </li>
    }

    get element() {
        return this._element
    }

    getComponentData(toolbarElement: HTMLElement, componentDataFactory: CompoenntDataFactory): ComponentData {
        if (!toolbarElement) throw errors.argumentNull("toolbarElement")

        let dataType = toolbarElement.getAttribute(DATA_TYPE)
        if (!dataType) throw new Error(`Argument toolbarElement is an invalid component panel element.`)

        let c: ComponentData = componentDataFactory(dataType)
        return c
    }

    private ref(e: HTMLElement | null, args: DesignerContextValue) {
        if (!e) return

        this._element = e
        let elements = args.designer.componentPanels.map(o => o.element)
        if (elements.indexOf(e) < 0) {
            args.designer.componentPanels.add(this)
        }
    }

    async appendDropTarget(element: HTMLElement, designer: PageDesigner, parentId: string, componentDataFactory: CompoenntDataFactory) {
        //==========================================
        // jquery-ui 不用用于 jest 测试
        if (typeof process != "undefined" && process.env["NODE_ENV"] == "test")
            return
        //==========================================

        if (!element) throw errors.argumentNull("element")
        if (this.dropTargets.indexOf(element) >= 0)
            return

        await import("../../lib/jquery-ui-1.13.2.custom/jquery-ui.min.js" as any)
        this.dropTargets.push(element)
        $(this.element.querySelectorAll("li")).draggable({
            connectToSortable: this.dropTargets,
            helper: "clone",
        })

        $([element]).sortable({
            dropOnEmpty: true,
            receive: (ev, ui) => {
                console.log("receive")

                let componentData = this.getComponentData(ui.helper[0], componentDataFactory);
                let childNodes = ui.helper.parent().children().toArray()
                let targetIndex: number | undefined
                for (let i = 0; i < childNodes.length; i++) {
                    if (childNodes[i] == ui.helper[0]) {
                        targetIndex = i
                        break
                    }
                }

                designer.appendComponent(componentData, parentId, targetIndex);
            }
        })


    }

    render(): React.ReactNode {
        return <ComponentPanelContext.Provider value={{ instance: this }}>
            <DesignerContext.Consumer>
                {args => {
                    if (!args) throw errors.contextArgumentNull()

                    let componentsConfig = args.designer.props.componentsConfig
                    let componentInfos = Object.keys(componentsConfig).filter(k => !componentsConfig[k].hidden)
                        .map(k => Object.assign({}, componentsConfig[k], { typeName: k }))

                    let renderItem = this.props.renderItem || ComponentPanel.renderItem
                    renderItem.bind(this)
                    return <ul className={classNames.componentPanel} ref={e => this.ref(e, args)}>
                        {componentInfos.length > 0 ? componentInfos.map(o => renderItem(o.typeName, o)) :
                            <li className={classNames.empty}>
                                {strings.emptyCompoenntPanel}
                            </li>}
                    </ul>
                }}
            </DesignerContext.Consumer>
        </ComponentPanelContext.Provider>
    }
}