import * as React from "react";
import { ComponentProps } from "../types";
import { componentTypeNames } from "./component-type-names";

export class Page extends React.Component<ComponentProps> {

    static typeName = componentTypeNames.page;

    constructor(props: ComponentProps) {
        super(props);

    }

    render() {
        return <>
            {this.props.children}
        </>
    }
}

