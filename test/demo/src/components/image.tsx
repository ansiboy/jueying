import React, { ComponentProps, ImgHTMLAttributes } from "react";
import { Component } from "maishu-jueying/out";

export interface Props {
    id?: string
    url: string
}

interface State {
}

export default Component.register(class extends React.Component<Props, State> {

    static typeName = "Image";

    constructor(props: Props) {
        super(props)
    }

    render(): React.ReactNode {
        return <img id={this.props.id} src={this.props.url || "https://shop-image.gemwon.com/image/blank"} style={{ maxWidth: 200, maxHeight: 200 }} />
    }
});