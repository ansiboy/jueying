import * as React from "react"
import { Component } from "../component"

export interface Props {
    value: string
}

Component.register(class extends React.Component<Props> {

    static typeName = Component.typeNames.text;

    render(): React.ReactNode {
        return this.props.value
    }
})