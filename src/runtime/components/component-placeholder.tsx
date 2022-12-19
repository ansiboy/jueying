import * as React from "react";
import { ComponentProps } from "../types";

export class ComponentPlaceHolder extends React.Component<ComponentProps> {

    constructor(props: ComponentProps) {
        super(props);
    }

    render() {
        return <>{this.props.children}</>
    }
}

