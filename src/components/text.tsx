import React = require("react");
import { Component } from "../component";
import { ComponentTypes } from "./common";

export interface TextProps {
    text: string
}

export class Text extends React.Component<TextProps> {
    render() {
        return <span>{this.props.text}</span>
    }
}

Component.register(ComponentTypes.Text, Text);