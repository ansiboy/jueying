import { guid } from "maishu-toolkit/out/guid";
import * as React from "react";
import { DesignComponentContext, PageDesigner } from "../../designer";
import { errors } from "../../errors";
import { ComponentData, ComponentProps } from "../../runtime";
import { strings } from "../../strings";
import { classNames } from "../../style";
import { parseDesigntimeComponentData } from "../parse-design-component-data";

const CONTAINER_ID = "container_id"
export class DesignComponentPlaceHolder extends React.Component<ComponentProps> {

    private element: HTMLElement

    constructor(props: ComponentProps) {
        super(props);

    }

    private enableDrop(element: HTMLElement | null, designer: PageDesigner, componentId: string) {
        if (!element || this.element)
            return;

        this.element = element;
        designer.componentPanels.each((componentPanel) => {
            componentPanel.appendDropTarget(this.element, designer, componentId,
                (componentType: string) => {
                    return DesignComponentPlaceHolder.createComponentData(componentType, this.props.id)
                })
        })
    }

    static createComponentData(componentType: string, containerId: string) {
        let props: any = {};
        props[CONTAINER_ID] = containerId;
        let c: ComponentData = {
            id: guid(), type: componentType, props, children: []
        }
        return c;
    }

    // static getDerivedStateFromProps(props: ComponentProps, state: any) {
    //     debugger

    //     return {}
    // }

    render() {
        return <DesignComponentContext.Consumer>
            {args => {
                if (!args) throw errors.contextArgumentNull()

                let childComponentDatas = args.componentData.children.filter(o => o.props[CONTAINER_ID] == this.props.id)
                return <ul className={classNames.designComponentPlaceHolder}
                    ref={e => this.enableDrop(e, args.designer, args.componentData.id)}>
                    {childComponentDatas.length > 0 ? childComponentDatas.map(c => <li key={c.id}
                        onClick={e => {
                            e.preventDefault()
                            e.stopPropagation()
                            args.designer.selectComponent(c.id)
                        }}>
                        {parseDesigntimeComponentData(c, args.componentTypes)}
                    </li>) : <li className={classNames.empty}>{strings.emptyDiagram}</li>}
                </ul>
            }}
        </DesignComponentContext.Consumer>
    }
}


