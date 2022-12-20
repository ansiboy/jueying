import * as React from "react"

interface Props {
    value: string
}

export class Text extends React.Component<Props> {
    render(): React.ReactNode {
        return this.props.value
    }
}