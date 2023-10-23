import * as React from "react"
import { DesignerContext, PageDesigner } from "../../designer"
import { errors } from "../../errors"
import { childrenNodeToArray, PageDataHelper as PageDataTravel } from "../../utility"
import { classNames } from "../../style"
import { ComponentData, ComponentStatus } from "../../runtime"
import { DesignComponent } from "../design-component"
import type { Props } from "../../runtime/components/page";
import { defaultTypeNames } from "../../runtime/default-types"

const DATA_ID = "data-id"


export default class DesignPage extends React.Component<Props> {

    private element: HTMLElement;
    static typeName = defaultTypeNames.Page;

    private ref(element: HTMLElement | null, designer: PageDesigner) {
        if (!element || this.element)
            return

        this.element = element
        designer.componentPanels.each(componentPanel => {
            componentPanel.appendDropTarget(element, designer, designer.pageData.id,
                (arg: string | HTMLElement) => {
                    if (typeof arg == "string") {
                        let c: ComponentData = {
                            id: PageDataTravel.generateId(designer.pageData, arg), type: arg, props: {}, children: []
                        }
                        return c;
                    }

                    let element: HTMLElement = arg
                    let dataId = element.getAttribute(DATA_ID)
                    if (!dataId)
                        throw new Error(`Invalid element`)

                    let c = PageDataTravel.findComponent(designer.pageData, dataId) as ComponentData
                    return c
                })
        })
    }

    render(): React.ReactNode {
        let children = childrenNodeToArray(this.props.children)
        return <DesignerContext.Consumer>
            {args => {
                if (!args) throw errors.contextArgumentNull()

                let p = this.props;
                let className = p.className || "";
                return <ul key={args.designer.pageData.id} className={`${classNames.designPage} ${className}`}
                    style={p.style}
                    ref={e => this.ref(e, args.designer)}>
                    {children.map(o => {
                        console.assert(o.key != null, "key is null");
                        let componentData = PageDataTravel.findComponent(args.designer.pageData, o.key as string) as ComponentData;
                        console.assert(componentData != null, `component data ${o.key} is not exists.`)
                        let status = componentData.status || ComponentStatus.default;
                        let isSelected = (status & ComponentStatus.selected) == ComponentStatus.selected;
                        return <li key={o.key} className={isSelected ? classNames.selected : undefined}
                            onClick={e => {
                                let id = o.key
                                if (typeof id == "string") {
                                    e.preventDefault();
                                    e.stopPropagation();

                                    args.designer.selectComponent(id);
                                }
                            }}
                            ref={e => {
                                if (!e) return
                                e.setAttribute(DATA_ID, o.key as string)
                            }}
                        >
                            {o}
                        </li>
                    })}
                </ul>
            }}
        </DesignerContext.Consumer >
    }
}

