import * as React from "react"
import { ComponentPlaceHolder } from "maishu-jueying/src/runtime/index"
import "./columns.scss"

export interface Props {
    firstContainerid?: string
    secondContainerId?: string
    thirdContainerId?: string
    children?: React.ReactNode
}
export default class Columns extends React.Component<Props> {
    render(): React.ReactNode {
        return <div>
            <div>多列</div>
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
}