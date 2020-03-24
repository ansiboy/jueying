import { ComponentData } from "./models";
import * as React from "react";
import { PropertyEditor, EditorProps } from "./property-editor";
import { classNames } from "./style";
import { ComponentDataHandler } from "./component-data-handler";

interface EditorPanelState {
    componentDatas: ComponentData[];
    // designer?: PageDesigner,
}

export interface EditorPanelProps {
    className?: string;
    style?: React.CSSProperties;
    empty?: string | JSX.Element;
    customRender?: EditorProps["customRender"];
    designer: ComponentDataHandler;
}

export class EditorPanel extends React.Component<EditorPanelProps, EditorPanelState> {
    element: HTMLElement;
    private editor: PropertyEditor;
    private _designer: ComponentDataHandler;

    // private designerComponentChanged: (args: any) => void

    constructor(props: EditorPanelProps) {
        super(props);
        this.state = { componentDatas: [] };
        // this.designerComponentChanged = () => {
        //     console.assert(this.designer != null)
        //     this.setState({ designer: this.designer })
        // }
    }

    get designer() {
        return this._designer;
    }
    // set designer(value) {

    //     if (this._designer) {
    //         this._designer.componentRemoved.remove(this.designerComponentChanged)
    //         this._designer.componentAppend.remove(this.designerComponentChanged)
    //         this._designer.componentUpdated.remove(this.designerComponentChanged)
    //         this._designer.componentSelected.remove(this.designerComponentChanged)
    //     }

    //     if (value) {
    //         value.componentRemoved.add(this.designerComponentChanged)
    //         value.componentAppend.add(this.designerComponentChanged)
    //         value.componentUpdated.add(this.designerComponentChanged)
    //         value.componentSelected.add(this.designerComponentChanged)
    //     }

    //     this._designer = value;
    //     this.setState({ designer: value });
    // }

    render() {
        let { empty } = this.props;
        empty = empty || <div className="empty">暂无可用的属性</div>;
        let { designer } = this.props;
        return <div className={`${classNames.editorPanel} ${this.props.className || ""}`}
            ref={(e: HTMLElement) => this.element = e || this.element}>
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

            <PropertyEditor designer={designer} ref={e => this.editor = e || this.editor} empty={empty}
                customRender={this.props.customRender} />
        </div>
    }
}