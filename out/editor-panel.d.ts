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
    static getDerivedStateFromProps(props: EditorPanel): Partial<EditorPanelState>;
    private getComponentData;
    designer: PageDesigner;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
