import React, { useState } from "react";
import { PropEditorProps, Component } from "../../../out"
import type Image from "../components/image"

export function TextEditor(props: PropEditorProps<string>) {
    let [value, setValue] = useState(props.value)

    return <input value={value} onChange={e => {
        setValue(e.target.value)
        props.updateComponentProp(e.target.value)
    }} />
}

let URL: keyof Image["props"] = "url"
Component.setPropEditor({
    componentType: "Image",
    editorType: TextEditor,
    propName: URL
})

