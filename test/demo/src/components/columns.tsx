import * as React from "react"
import { ComponentPlaceHolder } from "maishu-jueying/out/runtime"
import "./columns.scss"

interface Props {
    firstContainerid: string
    secondContainerId: string
    children?: React.ReactNode
}
export default class Columns extends React.Component<Props> {
    render(): React.ReactNode {
        return <div>
            <div>多列</div>
            <div className="columns">
                <ComponentPlaceHolder id={this.props.firstContainerid}>
                    {this.props.children}
                </ComponentPlaceHolder>
                <ComponentPlaceHolder id={this.props.secondContainerId}>
                    {this.props.children}
                </ComponentPlaceHolder>
            </div>
        </div>
    }
}