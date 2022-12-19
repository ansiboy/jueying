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

    private EMPTY_TEXT = "NO NAME"

    constructor(props: Props) {
        super(props)

        this.state = { text: props.text }
    }

    static getDerivedStateFromProps(props: any): Partial<State> {
        return { text: props.text }
    }

    render(): React.ReactNode {
        let { text } = this.state
        text = text || this.EMPTY_TEXT

        return <button id={this.props.id} onClick={e => {
            alert("click")
            this.setState({ text: this.props.clickedText })
        }}>{text}</button>
    }
}