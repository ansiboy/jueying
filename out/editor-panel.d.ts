import { ComponentData } from "./models";
import * as React from "react";
import { EditorProps } from "./property-editor";
import { ComponentDataHandler } from "./component-data-handler";
interface EditorPanelState {
    componentDatas: ComponentData[];
}
export interface EditorPanelProps {
    className?: string;
    style?: React.CSSProperties;
    empty?: string | JSX.Element;
    customRender?: EditorProps["customRender"];
    designer: ComponentDataHandler;
}
export declare class EditorPanel extends React.Component<EditorPanelProps, EditorPanelState> {
    element: HTMLElement;
    private editor;
    private _designer;
    constructor(props: EditorPanelProps);
    get designer(): ComponentDataHandler;
    render(): JSX.Element;
}
export {};
