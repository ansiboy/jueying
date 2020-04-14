import { ComponentData } from "./models";
import * as React from "react";
import { PropertyEditor, EditorProps } from "./property-editor";
import { classNames } from "./style";
import { ComponentDataHandler } from "./component-data-handler";

interface EditorPanelState {
    componentDatas: ComponentData[];
}

export interface EditorPanelProps {
    className?: string;
    style?: React.CSSProperties;
    empty?: string | JSX.Element;
    customRender?: EditorProps["customRender"];
}

export class EditorPanel extends React.Component<EditorPanelProps, EditorPanelState> {
    element: HTMLElement;
    private editor: PropertyEditor;
    private _designer: ComponentDataHandler;

    constructor(props: EditorPanelProps) {
        super(props);
        this.state = { componentDatas: [] };
    }

    get designer() {
        return this._designer;
    }
  
    render() {
        let { empty } = this.props;
        empty = empty || <div className="empty">暂无可用的属性</div>;
        return <div className={`${classNames.editorPanel} ${this.props.className || ""}`}
            ref={(e: any) => this.element = e || this.element}>
            <PropertyEditor ref={e => this.editor = e || this.editor} empty={empty}
                customRender={this.props.customRender} />
        </div>
    }
}