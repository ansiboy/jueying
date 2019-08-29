import * as React from "react";
import { ComponentData } from "./models";
export interface PropEditorConstructor {
    new (props: PropEditorProps<any>): any;
}
export interface PropEditorProps<T> {
    value: T;
    updateComponentProp: (value: T) => void;
    /** 该编辑器所编辑的控件 */
    editComponents: ComponentData[];
}
export interface PropEditorState<T> {
}
export declare abstract class PropEditor<S, T> extends React.Component<PropEditorProps<T>, S> {
    constructor(props: PropEditorProps<T>);
    static dropdown<T extends DropDownValue>(items: Promise<DropDownItem[]>, valueType: "string" | "number"): React.ComponentClass;
    static dropdown<T extends string | number>(items: T[]): React.ComponentClass;
    static dropdown(items: {
        [value: string]: string;
    }): React.ComponentClass;
    static textInput(): React.ComponentClass;
}
export declare class TextInput extends PropEditor<PropEditorState<string>, string> {
    render(): JSX.Element;
}
declare type DropDownValue = string | number;
export declare type DropDownItem = {
    text: string;
    value: DropDownValue;
};
export {};
