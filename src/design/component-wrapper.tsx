import { errors } from "../errors"
import { ComponentData } from "../runtime"
import * as React from "react"
import { DesignerContext, PageDesigner } from "../designer"
import { DesignBehavior } from "./design-behavior"
import { classNames } from "../style"
import { childrenNodeToArray } from "../utility"
interface Props {
    children?: React.ReactNode
    componentData: ComponentData
    designer: PageDesigner
    designBehavior: DesignBehavior
}

export class ComponentWrapper extends React.Component<Props> {

    ref(element: HTMLElement | null) {
        if (!element) return

        let isContainer = (this.props.designBehavior & DesignBehavior.isContainer) == DesignBehavior.isContainer;
        // if (isContainer) {
        //     this.props.designer.componentPanels.each(componentPanel => {
        //         componentPanel.appendDropTarget(element, this.props.designer, this.props.componentData.id)
        //     })
        // }
    }

    render(): React.ReactNode {

        let isContainer = (this.props.designBehavior & DesignBehavior.isContainer) == DesignBehavior.isContainer;
        if (isContainer) {
            let children = childrenNodeToArray(this.props.children)
            return <ul component-type={this.props.componentData.type} className={classNames.componentWrapper} ref={e => this.ref(e)}>
                {children.map((c) => {
                    return <li onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}>{c}</li>
                })}
            </ul>
        }
        return <div component-type={this.props.componentData.type} className={classNames.componentWrapper} ref={e => this.ref(e)}>
            {this.props.children}
        </div>
    }
}