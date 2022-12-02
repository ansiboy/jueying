import { errors } from "../errors";
import { ComponentStatus } from "maishu-jueying-core/out/types";
import * as React from "react";
import { DesignerContext, DesignerContextValue, PageDesigner } from "./page-designer";
import { strings } from "../strings";
import { classNames } from "../style";
import Sortable from "sortablejs";
import { guid } from "maishu-toolkit/out/guid";
import { parseDesigntimeComponentData } from "./parse-component-data";

interface Props {
    children?: React.ReactNode
}

interface State {
}

export class ComponentDiagram extends React.Component<Props, State> {

    private _element: HTMLElement
    private designer: PageDesigner

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

    componentDidMount(): void {

        let connect = (panelElement: HTMLElement) => {
            let groupName = guid()
            new Sortable(panelElement, {
                group: { name: groupName, pull: "clone", put: false },
                animation: 150,
                sort: false,
            });

            new Sortable(this.element, {
                group: groupName,
                animation: 150
            })
        }

        this.designer.componentPanelElements.each(e => connect(e))
        this.designer.componentPanelElements.added.add(args => connect(args.element))
    }

    render(): React.ReactNode {
        return <DesignerContext.Consumer>
            {args => {
                if (!args) throw errors.designerContextArgumentNull()
                let designer = args.designer
                this.designer = designer

                let componentDatas = designer.pageData.children || []
                if (componentDatas.length == 0)
                    return <ul ref={e => this.ref(e, args)}>
                        <li>
                            {strings.emptyCompoenntPanel}
                        </li>
                    </ul>

                let componentTypes = args.designer.componentTypes
                return <ul className={classNames.componentDiagram} ref={e => this.ref(e, args)}>{
                    componentDatas.map(c => {
                        let status = c.status || ComponentStatus.default;
                        let selected = (status & ComponentStatus.selected) == ComponentStatus.selected
                        return <li key={c.id} className={selected ? classNames.selected : ""}
                            onClick={e => {
                                e.preventDefault();
                                e.stopPropagation();
                                this.selectComponent(args.designer, c.id);
                            }}>
                            {parseDesigntimeComponentData(c, componentTypes)}
                        </li>

                    })}
                </ul>
            }}
        </DesignerContext.Consumer>

    }
}