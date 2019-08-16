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
    designer?: PageDesigner;
}
export declare class EditorPanel extends React.Component<EditorPanelProps, EditorPanelState> {
    element: HTMLElement;
    private editor;
    private _designer;
    private designerComponentChanged;
    constructor(props: any);
    componentWillReceiveProps(props: EditorPanelProps): void;
    private getComponentData;
    designer: PageDesigner;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
