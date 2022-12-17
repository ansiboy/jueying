import React from "react";
import { PropertyEditorProps } from "maishu-jueying/out"

interface State {
    value: string
}

export class TextEditor extends React.Component<PropertyEditorProps<string>, State> {

    static inputClassName = "text-editor-input"

    constructor(props: PropertyEditorProps<string>) {
        super(props)

        this.state = { value: props.value }
    }

    static getDerivedStateFromProps(props: TextEditor["props"], state: TextEditor["state"]): Partial<TextEditor["state"]> {
        return { value: props.value }
    }

    render(): React.ReactNode {

        let { value } = this.state
        value = value || ""
        return <input className={TextEditor.inputClassName} value={value} onChange={e => {
            this.setState({ value: e.target.value })
            this.props.updateComponentProp(e.target.value)
        }} />
    }

}