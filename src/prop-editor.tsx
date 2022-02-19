import * as React from "react";
import { ComponentData } from "maishu-jueying-core";

export interface PropEditorConstructor {
    new(props: PropEditorProps<any>): any;
}
export interface PropEditorProps<T> {
    value: T,
    updateComponentProp: (value: T) => void,

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
