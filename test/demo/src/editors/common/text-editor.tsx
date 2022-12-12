import React from "react";
import { PropertyEditorProps } from "maishu-jueying/out"

interface State {
    value: string
}

export class TextEditor extends React.Component<PropertyEditorProps<string>, State> {
    constructor(props: PropertyEditorProps<string>) {
        super(props)

        this.state = { value: props.value }
    }

    render(): React.ReactNode {

        let { value } = this.state
        return <input value={value} onChange={e => {
            this.setState({ value: e.target.value })
            this.props.updateComponentProp(e.target.value)
        }} />
    }

}