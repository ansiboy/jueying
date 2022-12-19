import { guid } from "maishu-toolkit/out/guid";
import * as React from "react";
import Sortable from "sortablejs";
import { DesignerContext } from "../../designer";
import { errors } from "../../errors";
import { ComponentProps } from "../../runtime";
import { classNames } from "../../style";

export class DesignComponentPlaceHolder extends React.Component<ComponentProps> {

    private element: HTMLElement

    constructor(props: ComponentProps) {
        super(props);

    }

    enableDrop(element: HTMLElement | undefined) {
        if (!element || this.element) return

        this.element = element
        
        let groupName = guid()
    
    }

    render() {
        return <DesignerContext.Consumer>
            {args => {
                if (!args) throw errors.contextArgumentNull()
                // args.designer.componentPanelElements
                return <div className={classNames.componentPlaceHolder}>

                </div>
            }}
        </DesignerContext.Consumer>
    }
}


