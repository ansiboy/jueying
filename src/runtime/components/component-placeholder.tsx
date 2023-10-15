import * as React from "react";
import { childrenNodeToArray } from "../../utility";
import { ComponentProps } from "../types";
import { Component } from "../component";

export interface Props extends ComponentProps {
    style?: React.CSSProperties;
    className?: string;
}

Component.register(class extends React.Component<Props> {

    static readonly typeName = Component.typeNames.placeHolder;

    constructor(props: ComponentProps) {
        super(props);
    }

    render() {
        let arr = childrenNodeToArray(this.props.children)
        return <ul className={this.props.className} style={this.props.style}>{arr.map(o => <li>{o}</li>)}</ul>
    }
})

