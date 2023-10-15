import { errors } from "../errors";
import * as React from "react";
import { DesignerContext, PageDesigner } from "../designer";
import { DesignComponent } from "./design-component";

interface Props {
    children?: React.ReactNode
}

interface State {
}

export class ComponentDiagram extends React.Component<Props, State> {

    private _element: HTMLElement

    constructor(props: Props) {
        super(props);
        if (!props) throw errors.argumentNull("props");

        this.state = {};
    }

    selectComponent(designer: PageDesigner, componentId?: string) {
        if (!componentId) {
            designer.selectComponent([]);
            return;
        }

        designer.selectComponent(componentId);
    }


    get element() {
        return this._element
    }

    render(): React.ReactNode {
        return <DesignerContext.Consumer>
            {args => {
                if (!args) throw errors.contextArgumentNull()
                let designer = args.designer
                let componentTypes = args.designer.componentTypes

                //return parsePageData(designer.pageData, componentTypes, DesignComponent.createElement)
                return DesignComponent.parse(designer.pageData, componentTypes);
            }}
        </DesignerContext.Consumer>

    }
}