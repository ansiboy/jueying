import * as React from "react";

export interface PropEditorConstructor {
    new(props: PropEditorProps<any>)
}
interface PropEditorProps<T> {
    value: T,
    onChange: (value: T) => void
}
interface PropEditorState<T> {
    value: T
}
export abstract class PropEditor<S extends PropEditorState<T>, T> extends React.Component<PropEditorProps<T>, S> {
    constructor(props: PropEditorProps<T>) {
        super(props)

        this.state = { value: props.value } as PropEditorState<T> as any
    }

    // componentWillReceiveProps(props: PropEditorProps<T>) {
    //     this.setState({ value: props.value } as any)
    // }

    static getDerivedStateFromProps(props: PropEditorProps<any>, state: any) {
        return { value: props.value } as Partial<PropEditorProps<any>>;
    }

    static dropdown<T extends DropDownValue>(items: Promise<DropDownItem[]>, valueType: "string" | "number"): React.ComponentClass
    static dropdown<T extends string | number>(items: T[]): React.ComponentClass
    static dropdown(items: { [value: string]: string }): React.ComponentClass
    static dropdown(items: any, valueType?: "string" | "number"): React.ComponentClass {
        return dropdown(items, valueType)
    }

    static textInput(): React.ComponentClass {
        return TextInput
    }
}

export class TextInput extends PropEditor<PropEditorState<string>, string> {
    render() {
        let { value } = this.state
        return <input className='form-control' value={value as any || ''}
            onChange={e => {
                this.setState({ value: e.target.value })
                this.props.onChange(e.target.value)
            }} />
    }
}
type DropDownValue = string | number;
export type DropDownItem = { text: string, value: DropDownValue }
function dropdown<T extends DropDownValue>(items: Promise<DropDownItem[]>, valueType: "string" | "number")
function dropdown<T extends DropDownValue>(items: DropDownItem[], valueType: "string" | "number")
function dropdown<T extends DropDownValue>(items: T[])
function dropdown(items: { [value: string]: string })
function dropdown(items: any, valueType?: "string" | "number") {

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

    class Dropdown extends PropEditor<{ value: DropDownValue, items?: DropDownItem[] }, DropDownValue>{
        constructor(props) {
            super(props);
        }
        async componentDidMount() {
            if (itemsPromise) {
                let items = await itemsPromise;
                this.setState({ items })
            }
        }
        render() {
            let { value, items } = this.state;
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

                    this.setState({ value })
                    this.props.onChange(value)
                }}>
                {items.map(o => <option key={o.value} value={o.value}>{o.text}</option>)}
            </select >
        }
    }

    return Dropdown;

}
