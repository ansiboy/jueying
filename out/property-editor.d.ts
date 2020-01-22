import React = require("react");
import { PageDesigner } from "./page-designer";
import { ComponentData } from "./models";
export interface EditorProps extends React.Props<PropertyEditor> {
    designer: PageDesigner;
    empty: string | JSX.Element;
    customRender?: (editComponents: ComponentData[], items: PropertyEditorInfo[]) => JSX.Element;
}
interface EditorState {
    designer: PageDesigner | null;
}
export interface PropertyEditorInfo {
    group: string;
    prop: string;
    displayName: string;
    editor: React.ReactElement<any>;
}
export declare class PropertyEditor extends React.Component<EditorProps, EditorState> {
    private _element;
    constructor(props: EditorProps);
    static getDerivedStateFromProps(props: EditorProps, state: EditorState): Partial<EditorState>;
    private getEditors;
    private propValue;
    render(): JSX.Element;
    readonly element: HTMLElement;
}
export {};
