import { ComponentData } from "./models";
import { PageDesigner } from "./page-designer";
import * as React from "react";
interface EditorPanelState {
    componentDatas: ComponentData[];
    designer?: PageDesigner;
}
interface EditorPanelProps {
    className?: string;
    style?: React.CSSProperties;
    empty?: string | JSX.Element;
}
export declare class EditorPanel extends React.Component<EditorPanelProps, EditorPanelState> {
    element: HTMLElement;
    private editor;
    private _designer;
    private designerComponentChanged;
    constructor(props: any);
    designer: PageDesigner;
    render(): JSX.Element;
}
export {};
