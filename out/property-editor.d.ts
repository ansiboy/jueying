import React = require("react");
import { ComponentData } from "./models";
import { ComponentDataHandler } from "./component-data-handler";
export interface EditorProps extends React.Props<PropertyEditor> {
    designer: ComponentDataHandler;
    empty: string | JSX.Element;
    customRender?: (editComponents: ComponentData[], items: PropertyEditorInfo[]) => JSX.Element;
}
interface EditorState {
    groupedEditors: GroupedEditor[];
}
export interface PropertyEditorInfo {
    group: string;
    prop: string;
    displayName: string;
    editor: React.ReactElement<any>;
}
declare type GroupedEditor = {
    group: string;
    prop: string;
    editor: React.ReactElement<any>;
};
export declare class PropertyEditor extends React.Component<EditorProps, EditorState> {
    private _element;
    constructor(props: EditorProps);
    private getEditors;
    private propValue;
    render(): JSX.Element;
    get element(): HTMLElement;
}
export declare class ErrorBoundary extends React.Component<{}, {
    error?: Error;
}> {
    constructor(props: any);
    componentDidCatch(error: any, info: any): void;
    render(): {};
}
export {};
