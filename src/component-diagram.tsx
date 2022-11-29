import { errors } from "./errors";
import { ComponentStatus } from "maishu-jueying-core/out/types";
import { parseComponentData } from "maishu-jueying-core/out/parse-component-data"
import * as React from "react";
import { DesignerContext, PageDesigner } from "./page-designer";
import { strings } from "./strings";
import { classNames } from "./style";

interface Props {
    children?: React.ReactNode
}

interface State {
}

export class ComponentDiagram extends React.Component<Props, State> {

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

    render(): React.ReactNode {
        return <ul>
            <DesignerContext.Consumer>
                {args => {
                    if (!args) throw errors.designerContextArgumentNull()
                    let designer = args.designer

                    let componentDatas = designer.pageData.children || []
                    if (componentDatas.length == 0)
                        return <li>
                            {strings.emptyCompoenntPanel}
                        </li>
                    let componentTypes = args.designer.componentTypes
                    return <>{componentDatas.map(c => {

                        let status = c.status || ComponentStatus.default;
                        let selected = (status & ComponentStatus.selected) == ComponentStatus.selected
                        return <li key={c.id} className={selected ? classNames.selected : ""}
                            onClick={e => {
                                e.preventDefault();
                                e.stopPropagation();
                                this.selectComponent(args.designer, c.id);
                            }}>
                            {parseComponentData(c, componentTypes, args.designer.elementFactory)}
                        </li>

                    })}</>
                }}
            </DesignerContext.Consumer>
        </ul>
    }
}