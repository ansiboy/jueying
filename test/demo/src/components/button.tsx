import React from "react";

interface Props {
    id?: string
    clickedText: string
    text: string
}

interface State {
    text: string
}

export default class Button extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = { text: props.text }
    }
    render(): React.ReactNode {
        let { text } = this.state
        return <button id={this.props.id} onClick={e => {
            this.setState({ text: this.props.clickedText })
        }}>{text}</button>
    }
}