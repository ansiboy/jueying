import { ComponentData } from "./models";
import { PageDesigner } from "./page-designer";
import * as React from "react";
import { EditorProps } from "./property-editor";
interface EditorPanelState {
    componentDatas: ComponentData[];
    designer?: PageDesigner;
}
export interface EditorPanelProps {
    className?: string;
    style?: React.CSSProperties;
    empty?: string | JSX.Element;
    customRender?: EditorProps["customRender"];
}
export declare class EditorPanel extends React.Component<EditorPanelProps, EditorPanelState> {
    element: HTMLElement;
    private editor;
    private _designer;
    private designerComponentChanged;
    constructor(props: EditorPanelProps);
    designer: PageDesigner;
    render(): JSX.Element;
}
export {};
