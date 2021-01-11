import * as React from "react";
import { ComponentData } from "maishu-jueying-core";

export interface PropEditorConstructor {
    new(props: PropEditorProps<any>): any;
}
export interface PropEditorProps<T> {
    value: T | null,
    updateComponentProp: (value: T | null) => void,

    /** 该编辑器所编辑的控件 */
    editComponents: ComponentData[],
}
export interface PropEditorState<T> {
    // value: T
}
export abstract class PropEditor<T, S = PropEditorState<T>> extends React.Component<PropEditorProps<T>, S> {
    constructor(props: PropEditorProps<T>) {
        super(props)

    }

    static dropdown<T extends DropDownValue>(items: Promise<DropDownItem[]>, valueType: "string" | "number"): React.ComponentClass
    static dropdown<T extends string | number>(items: T[]): React.ComponentClass
    static dropdown(items: { [value: string]: string }): React.ComponentClass
    static dropdown(items: any, valueType?: "string" | "number"): React.ComponentClass {
        return dropdown(items, valueType)
    }

    static textInput(): React.ComponentClass<any, any> {
        return TextInput
    }
}

export class TextInput extends PropEditor<string, PropEditorState<string>> {
    render() {
        let { value } = this.props
        return <input className='form-control' value={value as any || ''}
            onChange={e => {
                // this.setState({ value: e.target.value })
                this.props.updateComponentProp(e.target.value)
            }} />
    }
}
type DropDownValue = string | number;
export type DropDownItem = { text: string, value: DropDownValue }
function dropdown<T extends DropDownValue>(items: Promise<DropDownItem[]>, valueType?: "string" | "number"): React.ComponentClass<any, any>
function dropdown<T extends DropDownValue>(items: DropDownItem[], valueType?: "string" | "number"): React.ComponentClass<any, any>
function dropdown<T extends DropDownValue>(items: T[]): React.ComponentClass<any, any>
function dropdown(items: { [value: string]: string }): React.ComponentClass<any, any>
function dropdown(items: any, valueType?: "string" | "number"): React.ComponentClass<any, any> {

    let itemsPromise: Promise<DropDownItem[]>;
    let textValues: DropDownItem[] = [];
    if (valueType == null && Array.isArray(items)) {
        valueType = items.length > 0 && typeof items[0] == "number" ? "number" : "string";
        for (let i = 0; i < items.length; i++) {
            textValues[i] = { text: items[i], value: items[i] };
        }
    }
    else if (valueType == null) {
        valueType = "string";
        let propNames = Object.getOwnPropertyNames(items);
        for (let i = 0; i < propNames.length; i++) {
            textValues[i] = { text: items[propNames[i]], value: propNames[i] };
        }
    }
    else if (Array.isArray(items)) {
        textValues = items;
    }
    else {
        itemsPromise = items;
    }

    class Dropdown extends PropEditor<DropDownValue, { items?: DropDownItem[] }>{
        constructor(props: Dropdown["props"]) {
            super(props);

            this.state = {};
        }
        async componentDidMount() {
            if (itemsPromise) {
                let items = await itemsPromise;
                this.setState({ items })
            }
        }
        render() {
            let { items } = this.state;
            let { value } = this.props;
            items = items || textValues;

            return <select className='form-control' value={value == null ? "" : value}
                onChange={e => {
                    let textValue = e.target.value;
                    if (valueType == "number") {
                        let integerRegex = /^\d+$/;
                        let floatRegex = /^[+-]?\d+(\.\d+)?$/
                        if (integerRegex.test(textValue))
                            value = parseInt(textValue);
                        else if (floatRegex.test(textValue))
                            value = parseFloat(textValue);
                        else
                            value = null;
                    }
                    else {
                        value = textValue;
                    }

                    this.props.updateComponentProp(value)
                }}>
                {items.map(o => <option key={o.value} value={o.value}>{o.text}</option>)}
            </select >
        }
    }

    return Dropdown;

}
