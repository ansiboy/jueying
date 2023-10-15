import React from "react";
import { Component } from "maishu-jueying/out";

export interface Props {
    id?: string
    clickedText: string
    text: string
    isDesigntime?: boolean
}

interface State {
    text: string
}

export default class Button extends React.Component<Props, State> {

    static typeName = Button.constructor.name;


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

        return <button id={this.props.id} onClick={this.props.isDesigntime ? undefined : e => {
            alert("click")
            this.setState({ text: this.props.clickedText })
        }}>{text}</button>
    }
}

Component.register(Button);
