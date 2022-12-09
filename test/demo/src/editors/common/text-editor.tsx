import React from "react";
import { PropEditorProps, PropEditorState } from "maishu-jueying/out"

export class TextEditor extends React.Component<PropEditorProps<string>, PropEditorState<string>> {
    constructor(props: PropEditorProps<string>) {
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