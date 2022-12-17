import { errors } from "../errors"
import * as React from "react"
import { DesignerContext, DesignerContextValue } from "../designer"
import { classNames } from "../style"
import { strings } from "../strings"
import type { ComponentsConfig } from "../components-config"
import { ComponentData } from "../runtime"
import { guid } from "maishu-toolkit"

interface ComponentPanelProps {
    renderItem?: (typeName: string, compoenntConfig: ComponentsConfig[0]) => ReturnType<React.Component["render"]>
}

const DATA_TYPE = "data-type"

export let ComponentPanelContext = React.createContext<{ instance: ComponentPanel } | null>(null)

/** 组件面板 */
export class ComponentPanel extends React.Component<ComponentPanelProps> {

    private _element: HTMLElement

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

    getComponentData(toolbarElement: HTMLElement): ComponentData {
        if (!toolbarElement) throw errors.argumentNull("toolbarElement")

        let dataType = toolbarElement.getAttribute(DATA_TYPE)
        if (!dataType) throw new Error(`Argument toolbarElement is an invalid component panel element.`)

        let c: ComponentData = {
            id: guid(), type: dataType, props: {}, children: []
        }
        return c
    }

    private ref(e: HTMLElement | null, args: DesignerContextValue) {
        if (!e) return

        this._element = e
        let elements = args.designer.componentPanelElements.map(o => o.element)
        if (elements.indexOf(e) < 0) {
            args.designer.componentPanelElements.add({ element: e, instance: this })
        }
    }


    render(): React.ReactNode {
        return <ComponentPanelContext.Provider value={{ instance: this }}>
            <DesignerContext.Consumer>
                {args => {
                    if (!args) throw errors.contextArgumentNull()

                    let componentsConfig = args.designer.props.componentsConfig
                    let componentInfos = Object.keys(componentsConfig).map(k => Object.assign({}, componentsConfig[k], { typeName: k }))
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