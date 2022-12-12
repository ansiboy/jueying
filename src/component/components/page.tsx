import * as React from "react";
import { ComponentProps } from "../types";
import { PageDataParserContext } from "../../runtime/page-data-parser";
import { errors } from "../errors";
import { parseComponentData } from "../../runtime/parse-component-data";

export class Page extends React.Component<ComponentProps> {

    static typeName = "Page";

    constructor(props: ComponentProps) {
        super(props);

    }

    render() {
        return <PageDataParserContext.Consumer>
            {args => {
                if (!args)
                    throw errors.nullPageDataParserArguments();

                let children = args.pageData.children.filter(o => o.parentId && o.parentId == this.props.id);
                let childComponents = children.map(c => parseComponentData(c, args.componentTypes, args.elementFactory));
                return childComponents;
            }}
        </PageDataParserContext.Consumer>
    }
}

