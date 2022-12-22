import { errors } from "../errors"
import * as React from "react"
import { DesignerContext, DesignerContextValue, PageDesigner } from "../designer"
import { classNames } from "../style"
import { strings } from "../strings"
import type { ComponentsConfig } from "../components-config"
import { ComponentData } from "../runtime"
import { guid } from "maishu-toolkit/out/guid"
import Sortable from "sortablejs"

interface ComponentPanelProps {
    renderItem?: (typeName: string, compoenntConfig: ComponentsConfig[0]) => ReturnType<React.Component["render"]>
}

const DATA_TYPE = "data-type"

export let ComponentPanelContext = React.createContext<{ instance: ComponentPanel } | null>(null)

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
        let elements = args.designer.componentPanels.map(o => o.element)
        if (elements.indexOf(e) < 0) {
            args.designer.componentPanels.add(this)
        }
    }

    appendDropTarget(element: HTMLElement, designer: PageDesigner, parentId: string) {
        if (!element) throw errors.argumentNull("element")
        if (this.dropTargets.indexOf(element) >= 0)
            return

        this.dropTargets.push(element)

        let groupName = guid()
        new Sortable(this.element, {
            group: { name: groupName, pull: "clone", put: false },
            animation: 150,
            sort: false,
            onEnd: (ev) => {
                let componentData = this.getComponentData(ev.item);
                let childNodes = ev.item.parentElement == null ? [] : ev.item.parentElement.childNodes
                let targetIndex: number | undefined
                for (let i = 0; i < childNodes.length; i++) {
                    if (childNodes[i] == ev.item) {
                        targetIndex = i
                        childNodes[i].remove()
                        break
                    }
                }

                componentData.parentId = parentId
                designer.appendComponent(componentData, targetIndex);
            }
        });

        new Sortable(element, {
            group: groupName,
            animation: 150
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