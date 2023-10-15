import * as React from "react";
import { DesignComponentContext, PageDesigner } from "../../designer";
import { errors } from "../../errors";
import type { ComponentData, ComponentProps, PageData } from "../../runtime";
import { strings } from "../../strings";
import { classNames } from "../../style";
import { PageDataTravel } from "../../utility";
import { DesignComponent } from "../design-component";
import type { Props } from "../../runtime/components/component-placeholder";

const CONTAINER_ID = "container_id";
const DATA_ID = "data-id";

DesignComponent.register(class extends React.Component<Props> {

    static typeName = DesignComponent.typeNames.placeHolder;

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
                        return this.createComponentData(designer.pageData, componentType, this.props.id)
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

    private createComponentData(pageData: PageData, componentType: string, containerId: string) {
        let props: any = {};
        props[CONTAINER_ID] = containerId;

        let id = PageDataTravel.generateId(pageData, componentType)
        let c: ComponentData = {
            id, type: componentType, props, children: []
        }
        return c;
    }

    render() {
        return <DesignComponentContext.Consumer>
            {args => {
                if (!args) throw errors.contextArgumentNull()

                let childComponentDatas = args.componentData.children.filter(o => o.props[CONTAINER_ID] == this.props.id);
                let className = this.props.className || "";
                return <ul style={this.props.style} className={`${classNames.designComponentPlaceHolder} ${className}`}
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
                        {DesignComponent.parse(c, args.componentTypes)}
                    </li>) : <li className={classNames.empty}>{strings.emptyDiagram}</li>}
                </ul>
            }}
        </DesignComponentContext.Consumer>
    }
});

