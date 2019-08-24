import * as React from "react";
export interface PropEditorConstructor {
    new (props: PropEditorProps<any>): any;
}
interface PropEditorProps<T> {
    value: T;
    onChange: (value: T) => void;
}
interface PropEditorState<T> {
    value: T;
}
export declare abstract class PropEditor<S extends PropEditorState<T>, T> extends React.Component<PropEditorProps<T>, S> {
    constructor(props: PropEditorProps<T>);
    static getDerivedStateFromProps(props: PropEditorProps<any>, state: any): Partial<PropEditorProps<any>>;
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
