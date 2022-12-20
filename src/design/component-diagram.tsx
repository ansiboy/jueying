import { errors } from "../errors";
import { ComponentStatus } from "../runtime";
import * as React from "react";
import { DesignerContext, DesignerContextValue, PageDesigner } from "../designer";
import { strings } from "../strings";
import { classNames } from "../style";
import Sortable from "sortablejs";
import { guid } from "maishu-toolkit/out/guid";
import { parseDesigntimeComponentData } from "./parse-design-component-data";
import { ComponentPanel } from "./component-panel";

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

        let connect = (componentPanelElement: HTMLElement, componentPanel: ComponentPanel) => {
            let groupName = guid()
            new Sortable(componentPanelElement, {
                group: { name: groupName, pull: "clone", put: false },
                animation: 150,
                sort: false,
                onEnd: (ev) => {
                    let componentData = componentPanel.getComponentData(ev.item);
                    let childNodes = ev.item.parentElement == null ? [] : ev.item.parentElement.childNodes
                    let targetIndex: number | undefined
                    for (let i = 0; i < childNodes.length; i++) {
                        if (childNodes[i] == ev.item) {
                            targetIndex = i
                            childNodes[i].remove()
                            break
                        }
                    }
                    this.designer.appendComponent(componentData, targetIndex);
                }
            });

            new Sortable(this.element, {
                group: groupName,
                animation: 150
            })
        }

        this.designer.componentPanelElements.each(e => connect(e.element, e.instance))
        this.designer.componentPanelElements.added.add(args => connect(args.dataItem.element, args.dataItem.instance))
    }

    render(): React.ReactNode {
        return <DesignerContext.Consumer>
            {args => {
                if (!args) throw errors.contextArgumentNull()
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
                        if (typeof c == "string")
                            throw new Error(`string is not supported`)

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