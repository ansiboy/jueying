import { errors } from "./errors";
import * as React from "react";
import { ComponentTypes, ElementFactory, PageData } from "./types";
import { parsePageData } from "./parse-component-data";

interface Props {
    pageData: PageData
    children?: React.ReactNode
    elementFactory: ElementFactory
    componentTypes: ComponentTypes
}

interface State {
    pageData: PageData
    componentTypes: ComponentTypes
}

export let PageDataParserContext = React.createContext<
    { pageData: PageData, elementFactory: ElementFactory, componentTypes: ComponentTypes }>(null as any);

export class PageDataParser extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        if (!props) throw errors.argumentNull("props");
        if (!props.pageData) throw errors.argumentFieldNull("pageData", "props");
        if (!props.elementFactory) throw errors.argumentFieldNull("elementFactory", "props");

        this.state = { pageData: props.pageData, componentTypes: props.componentTypes };
    }

    static getDerivedStateFromProps(props: Props, state: State): Partial<State> {
        return { pageData: props.pageData, componentTypes: props.componentTypes };
    }

    render(): React.ReactNode {
        let { pageData } = this.state;
        let { elementFactory, componentTypes } = this.props;
        // let children = (pageData.children || []).filter(o => typeof o == "string" || !o.parentId);
        // let childComponents = children.map(o => {
        //     if (typeof o == "string")
        //         return o

        //     return parseComponentData(o, componentTypes, elementFactory);
        // });

        // let pageType = componentTypes[pageData.type]
        // if (!pageType)
        //     throw new Error(`Component type '${pageData.type}' is not exists.`)

        // let pageElement = React.createElement(pageType, pageData.props, childComponents)
        let pageElement = parsePageData(pageData, componentTypes, elementFactory)
        return <PageDataParserContext.Provider value={{ pageData, elementFactory, componentTypes }}>
            {pageElement}
        </PageDataParserContext.Provider>
    }
}