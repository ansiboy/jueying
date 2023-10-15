import React from "react";
import Button, { Props } from "../components/button";
import { DesignComponent } from "maishu-jueying/out";



export default DesignComponent.register(class extends React.Component<Props> {

    static typeName = "Button";

    render(): React.ReactNode {
        return <Button {...this.props} isDesigntime={true} />
    }
}
)