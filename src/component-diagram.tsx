import { errors } from "./errors";
import { PageDataParser } from "maishu-jueying-core";
import * as React from "react";
import { DesignerContext } from "page-designer";

interface Props {
    children?: React.ReactNode
}

interface State {
}

export default class ComponentDiagram extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        if (!props) throw errors.argumentNull("props");

        this.state = {};
    }

    render(): React.ReactNode {
        return <DesignerContext.Consumer>
            {args => {
                if (!args) throw errors.designerContextArgumentNull()
                let designer = args.designer
                return <PageDataParser pageData={designer.pageData} elementFactory={designer.elementFactory}
                    componentTypes={designer.componentTypes}>

                </PageDataParser>
            }}
        </DesignerContext.Consumer>
    }
}