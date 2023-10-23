import * as React from "react";
import { ComponentProps } from "../types";

export interface Props extends ComponentProps {
    className?: string;
    style?: React.CSSProperties,
    // dataSource?: any[]
}

export default class Page extends React.Component<Props> {

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

