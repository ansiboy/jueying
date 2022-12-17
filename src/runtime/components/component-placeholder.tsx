import * as React from "react";
import { ComponentProps } from "../types";
import { componentTypeNames } from "./component-type-names";

export class ComponentPlaceHolder extends React.Component<ComponentProps> {

    static typeName = componentTypeNames.placeHolder;

    constructor(props: ComponentProps) {
        super(props);

    }

    render() {
        return <>{this.props.children}</>
    }
}

