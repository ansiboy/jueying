import * as React from "react";
import { ComponentProps } from "../types";
import { Component } from "../component";

export interface Props extends ComponentProps {
    className?: string;
    style?: React.CSSProperties,
}

Component.register(class extends React.Component<Props> {

    static typeName = Component.typeNames.page;

    constructor(props: ComponentProps) {
        super(props);

    }

    render() {
        let p = this.props;
        return <div className={p.className} style={p.style}>
            {this.props.children}
        </div>
    }
}
)
