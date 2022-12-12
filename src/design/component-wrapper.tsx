import { errors } from "../errors"
import { ComponentData } from "../component"
import * as React from "react"
import { DesignerContext } from "../designer"

interface Props {
    children?: React.ReactNode
    componentData: ComponentData
}

export class ComponentWrapper extends React.Component<Props> {
    render(): React.ReactNode {
        let props = this.props
        return <DesignerContext.Consumer>
            {args => {
                if (!args) throw errors.contextArgumentNull()

                return <div onClick={e => {
                    args.designer.selectComponent(props.componentData.id)
                }}>
                    {this.props.children}
                </div>
            }}
        </DesignerContext.Consumer>
    }
}