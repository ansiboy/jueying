import { errors } from "../errors";
import * as React from "react";
import { DesignerContext, DesignerContextValue, PageDesigner } from "../designer";
import { parsePageData } from "../runtime";
import { createDesigntimeComponent } from "./parse-design-component-data";

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

    private ref(e: HTMLElement | null, args: DesignerContextValue) {
        if (!e) return

        this._element = e
        if (!args.designer.componentDiagramElements.contains(e)) {
            args.designer.componentDiagramElements.add(e)
        }
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

                return parsePageData(designer.pageData, componentTypes, createDesigntimeComponent)
            }}
        </DesignerContext.Consumer>

    }
}