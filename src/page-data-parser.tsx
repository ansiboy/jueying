import { errors } from "errors";
import { PageData, parseComponentData, componentTypes } from "maishu-jueying-core";
import * as React from "react";

interface Props {
    pageData: PageData
    children?: React.ReactNode
}

interface State {
    pageData: PageData
}

export let PageDataParserContext = React.createContext<{ pageData?: PageData }>({});

export default class PageDataParser extends React.Component<Props, State> {

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
        let children = pageData.children.filter(o => o.parentId == pageData.id || o.parentId == null);
        let childComponents = children.map(o => parseComponentData(o, pageData, componentTypes));
        return <PageDataParserContext.Provider value={{ pageData }}>
            {childComponents}
        </PageDataParserContext.Provider>
    }
}