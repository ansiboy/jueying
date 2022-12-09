import React, { ImgHTMLAttributes } from "react";

interface Props {
    id?: string
    url: string
}

interface State {
}

export default class Image extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
    }

    render(): React.ReactNode {
        return <img id={this.props.id} src={this.props.url || "https://shop-image.gemwon.com/image/blank"} style={{ maxWidth: 200, maxHeight: 200 }} />
    }
}