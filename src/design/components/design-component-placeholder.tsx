import { guid } from "maishu-toolkit/out/guid";
import * as React from "react";
import { DesignComponentContext, PageDesigner } from "../../designer";
import { errors } from "../../errors";
import { ComponentData, ComponentProps } from "../../runtime";
import { strings } from "../../strings";
import { classNames } from "../../style";
import { PageDataTravel } from "../../utility";
import { parseDesigntimeComponentData } from "../parse-design-component-data";

const CONTAINER_ID = "container_id"
const DATA_ID = "data-id"
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
                (arg: string | HTMLElement) => {
                    if (typeof arg == "string") {
                        let componentType = arg
                        return DesignComponentPlaceHolder.createComponentData(componentType, this.props.id)
                    }

                    let element: HTMLElement = arg;
                    let dataId = element.getAttribute(DATA_ID) as string;
                    console.assert(dataId != null)
                    let c = PageDataTravel.findComponent(designer.pageData, dataId) as ComponentData
                    c.props[CONTAINER_ID] = this.props.id
                    return c
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

    render() {
        return <DesignComponentContext.Consumer>
            {args => {
                if (!args) throw errors.contextArgumentNull()

                let childComponentDatas = args.componentData.children.filter(o => o.props[CONTAINER_ID] == this.props.id)
                return <ul className={classNames.designComponentPlaceHolder}
                    ref={e => this.enableDrop(e, args.designer, args.componentData.id)}>
                    {childComponentDatas.length > 0 ? childComponentDatas.map(c => <li key={c.id}
                        ref={e => {
                            if (!e) return
                            e.setAttribute(DATA_ID, c.id)
                        }}
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


