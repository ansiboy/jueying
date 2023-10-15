import React from "react";
import { DesignComponent } from "../../../../src";
import Button, { Props } from "../components/button";

let _h = (global as any).h;
(global as any).h = DesignComponent.createElement;

export default class extends React.Component<Props> {
    render(): React.ReactNode {
        return <Button {...this.props} isDesigntime={true} />
    }
}

(global as any).h = _h;