import * as React from "react"
import "./columns.scss"
import { Component } from "maishu-jueying/out"

export interface Props {
    firstContainerid?: string
    secondContainerId?: string
    thirdContainerId?: string
    children?: React.ReactNode
}

let ComponentPlaceHolder = Component.types[Component.typeNames.container];
export default Component.register(class extends React.Component<Props> {

    static typeName = "Columns";

    render(): React.ReactNode {
        return <div>
            <div>多列1</div>
            <div className="columns">

                {this.props.firstContainerid ? <ComponentPlaceHolder id={this.props.firstContainerid}>
                    {this.props.children}
                </ComponentPlaceHolder> : null}
                {this.props.secondContainerId ? <ComponentPlaceHolder id={this.props.secondContainerId}>
                    {this.props.children}
                </ComponentPlaceHolder> : null}
                {this.props.thirdContainerId ? <ComponentPlaceHolder id={this.props.thirdContainerId}>
                    {this.props.children}
                </ComponentPlaceHolder> : null}
            </div>
        </div>
    }
})