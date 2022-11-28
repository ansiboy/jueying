import React, { ImgHTMLAttributes } from "react";

interface Props {
    url: string
}

interface State {
    url: string
}

export default class Image extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = { url: props.url }
    }

    render(): React.ReactNode {
        let { url } = this.state
        return <img src={url} />
    }
}