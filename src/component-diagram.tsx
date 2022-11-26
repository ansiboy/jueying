import { errors } from "./errors";
import { PageData } from "maishu-jueying-core";
import * as React from "react";
import PageDataParser from "page-data-parser";

interface Props {
    pageData: PageData,
    children?: React.ReactNode
}

interface State {
    pageData: PageData
}

export default class ComponentDiagram extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        if (!props) throw errors.argumentNull("props");
        if (!props.pageData) throw errors.argumentFieldNull("pageData", "props");

        this.state = { pageData: props.pageData };
    }

    static getDerivedStateFromProps(props: Props, state: State): Partial<State> {
        return { pageData: props.pageData };
    }

    render(): React.ReactNode {
        let { pageData } = this.state;

        return <PageDataParser pageData={pageData}>
            
        </PageDataParser>
    }
}