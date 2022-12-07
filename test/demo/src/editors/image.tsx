import React, { useState } from "react";
import { PropEditorProps, Component, PropEditorState, ComponentPropertyEditors } from "maishu-jueying/out"
import type Image from "../components/image"

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

let editors: ComponentPropertyEditors<Image> = {
    url: { editor: TextEditor, displayName: "链接" }
}

export default editors



let URL: keyof Image["props"] = "url"
Component.setPropEditor({
    componentType: "Image",
    editorType: TextEditor,
    propName: URL
})

