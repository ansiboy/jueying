// import { classNames } from "./style";
// import * as React from "react";
// import { ComponentEditor } from "./component-editor";
// import { ComponentData } from "./models";
// import { PageDesigner } from "./page-designer";

module jueying {
    interface EditorPanelState {
        componentDatas: ComponentData[];
        designer?: PageDesigner,
    }

    interface EditorPanelProps {
        className?: string;
        style?: React.CSSProperties;
        empty?: string | JSX.Element;
        designer?: PageDesigner
    }

    export class EditorPanel extends React.Component<EditorPanelProps, EditorPanelState> {
        element: HTMLElement;
        private editor: PropertyEditor;
        private _designer: PageDesigner;

        private designerComponentChanged: (args: any) => void

        constructor(props) {
            super(props);
            this.state = { componentDatas: [] };
            this.designerComponentChanged = () => {
                console.assert(this.designer != null)
                this.setState({ designer: this.designer })
            }
        }

        componentWillReceiveProps(props: EditorPanelProps) {
            this.setState({ designer: props.designer })
        }

        private getComponentData(designer: PageDesigner) {
            let componentDatas = []
            let stack = new Array<ComponentData>()
            stack.push(designer.pageData)
            while (stack.length > 0) {
                let item = stack.pop()
                componentDatas.push(item)
                let children = item.children || []
                for (let i = 0; i < children.length; i++) {
                    stack.push(children[i])
                }
            }
            return componentDatas
        }
        get designer() {
            return this._designer;
        }
        set designer(value) {

            if (this._designer) {
                this._designer.componentRemoved.remove(this.designerComponentChanged)
                this._designer.componentAppend.remove(this.designerComponentChanged)
                this._designer.componentUpdated.remove(this.designerComponentChanged)
                this._designer.componentSelected.remove(this.designerComponentChanged)
            }

            if (value) {
                value.componentRemoved.add(this.designerComponentChanged)
                value.componentAppend.add(this.designerComponentChanged)
                value.componentUpdated.add(this.designerComponentChanged)
                value.componentSelected.add(this.designerComponentChanged)
            }

            this._designer = value
        }

        // private designerComponentChanged(sender, ) {

        // }

        componentDidMount() {

        }
        render() {
            let { empty } = this.props;
            empty = empty || <div className="empty">暂无可用的属性</div>;

            let componentDatas: ComponentData[] = []
            let selectedComponentIds = []
            let designer = this.state.designer
            if (designer) {
                componentDatas = this.getComponentData(designer)
                selectedComponentIds = designer.selectedComponentIds || []
            }

            return <div className={classNames.editorPanel} ref={(e: HTMLElement) => this.element = e || this.element}>
                {/* <select className="form-control"
                    ref={e => {
                        if (!e) return
                        e.value = selectedComponentIds.length == 1 ? selectedComponentIds[0] : ''
                        e.onchange = () => {
                            if (designer && e.value)
                                designer.selectComponent(e.value)
                        }
                    }}>
                    {componentDatas.map(o =>
                        <option key={o.props.id} id={o.props.id} value={o.props.id}>{o.props.name}</option>
                    )}
                </select> */}

                <PropertyEditor designer={designer} ref={e => this.editor = e || this.editor} empty={empty} />
            </div>
        }
    }
}