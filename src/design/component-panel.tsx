import { errors } from "../errors"
import * as React from "react"
import { DesignerContext, DesignerContextValue, PageDesigner } from "../designer"
import { classNames } from "../style"
import { strings } from "../strings"
import type { ComponentsConfig } from "../components-config"
import { ComponentData } from "../runtime"
import Sortable from "sortablejs"
import { PageDataTravel } from "../utility"
interface ComponentPanelProps {
    renderItem?: (typeName: string, compoenntConfig: ComponentsConfig[0]) => ReturnType<React.Component["render"]>
}

const GROUP = "shared"
const DATA_TYPE = "data-type"
export let ComponentPanelContext = React.createContext<{ instance: ComponentPanel } | null>(null)
type CompoenntDataFactory = (typeName: string | HTMLElement) => ComponentData

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

    getComponentData(ui: Sortable.SortableEvent, componentDataFactory: CompoenntDataFactory): ComponentData {
        if (!ui) throw errors.argumentNull("ui")

        if (!ui.item) {
            throw new Error("Not supported.")
        }

        let dataType = ui.item.getAttribute(DATA_TYPE)
        let c: ComponentData = dataType ? componentDataFactory(dataType) : componentDataFactory(ui.item)
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

    componentDidMount(): void {
        new Sortable(this.element, {
            group: {
                name: GROUP,
                pull: "clone",
                put: false,
            },
            animation: 150,
            sort: false,
        })
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

        this.dropTargets.push(element)

        new Sortable(element, {
            group: {
                name: GROUP,
            },
            animation: 150,
            onAdd: (evt) => {
                evt.preventDefault()
                evt.stopPropagation()

                let componentData = this.getComponentData(evt, componentDataFactory);
                let targetIndex: number | undefined
                let parentElement = evt.item.parentElement as HTMLElement
                for (let i = 0; i < parentElement.children.length; i++) {
                    if (parentElement.children[i] == evt.item) {
                        targetIndex = i
                        break
                    }
                }

                designer.removeComponentIfExists(componentData.id)
                designer.appendComponent(componentData, parentId, targetIndex)
            },
            onSort(event) {
                if (event.item.getAttribute(DATA_TYPE))
                    return

                let componentData = componentDataFactory(event.item)
                console.assert(componentData != null, "componentData is null")
                // debugger
                let r = PageDataTravel.findComponentAndParent(designer.pageData, componentData.id)
                let parent = r.parent as ComponentData
                // parent.children.splice(event.oldIndex || 0, 1)
                // parent.children.splice(event.newIndex || 0, 0, componentData)
                designer.moveComponent(componentData.id, parent.id, event.newIndex)
            },
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
                            <li className={classNames.empty} >
                                {strings.emptyCompoenntPanel}
                            </li>
                        }
                    </ul>
                }}
            </DesignerContext.Consumer>
        </ComponentPanelContext.Provider >
    }
}