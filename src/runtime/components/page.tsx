import * as React from "react";
import { ComponentProps } from "../types";
import { componentTypeNames } from "./component-type-names";

interface Props extends ComponentProps {
    className?: string;
    style?: React.CSSProperties,
}

export class Page extends React.Component<Props> {

    static typeName = componentTypeNames.page;

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

