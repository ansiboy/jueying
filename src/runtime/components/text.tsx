import * as React from "react"

export interface Props {
    value: string
}

export default class Text extends React.Component<Props> {

    render(): React.ReactNode {
        return this.props.value
    }
}