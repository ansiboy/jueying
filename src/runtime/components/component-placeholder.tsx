import * as React from "react";
import { childrenNodeToArray } from "../../utility";
import { ComponentProps } from "../types";

export interface Props extends ComponentProps {
    style?: React.CSSProperties;
    className?: string;
}

export default class Container extends React.Component<Props> {

    // static readonly typeName = defaultTypeNames.Container;

    constructor(props: ComponentProps) {
        super(props);
    }

    render() {
        let arr = childrenNodeToArray(this.props.children)
        return <ul className={this.props.className} style={this.props.style}>{arr.map(o => <li key={o.props.id}>{o}</li>)}</ul>
    }
}

