import React from "react";

export interface Props {
    text: string
}

export default function TextBox(props: Props) {
    // render(): React.ReactNode {
    return <input placeholder={props.text} />
    // }
}