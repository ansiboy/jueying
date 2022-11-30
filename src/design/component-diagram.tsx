import { errors } from "../errors";
import { ComponentProps, ComponentStatus } from "maishu-jueying-core/out/types";
import { parseComponentData } from "maishu-jueying-core/out/parse-component-data"
import * as React from "react";
import { DesignerContext, DesignerContextValue, PageDesigner } from "./page-designer";
import { strings } from "../strings";
import { classNames } from "../style";
import { PageDataTravel } from "../page-data-travel";
import { DesignComponentContext, DesignComponentContextValue } from "../component/design-component-context";

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

    private static createComponent(type: any, props: any, children: any) {
        let p = props as ComponentProps
        if (!p.id) throw errors.argumentFieldNull("id", "props")

        return React.createElement(DesignerContext.Consumer, null, ((args: DesignerContextValue) => {
            if (!args) throw errors.designerContextArgumentNull()
            let componentData = PageDataTravel.findComponent(args.designer.pageData, p.id)//args.designer.pageData.children.filter(o => o.id == p.id)[0]
            if (!componentData)
                throw new Error(`Can not find component data by '${p.id}' in the page data.`)

            let componentConfig = args.designer.props.componentsConfig[componentData.type]
            if (!componentConfig)
                return React.createElement(type, props, children)

            let value: DesignComponentContextValue = {
                componentData, componentConfig
            }
            return React.createElement(DesignComponentContext.Provider, { value }, React.createElement(type, props, children))
        }) as any)
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
                            {parseComponentData(c, componentTypes, ComponentDiagram.createComponent)}
                        </li>

                    })}</>
                }}
            </DesignerContext.Consumer>
        </ul>
    }
}