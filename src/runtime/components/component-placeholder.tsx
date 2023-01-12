import * as React from "react";
import { childrenNodeToArray } from "../../utility";
import { ComponentProps } from "../types";
import { componentTypeNames } from "./component-type-names";

interface Props extends ComponentProps {
    style?: React.CSSProperties;
    className?: string;
}

export class ComponentPlaceHolder extends React.Component<Props> {

    static typeName = componentTypeNames.placeHolder;

    constructor(props: ComponentProps) {
        super(props);
    }

    render() {
        let arr = childrenNodeToArray(this.props.children)
        return <ul className={this.props.className} style={this.props.style}>{arr.map(o => <li>{o}</li>)}</ul>
    }
}

