import * as React from "react";
import { DesignerContext, DesignerContextValue } from "../../designer";
import { errors } from "../../errors";
import { ComponentProps } from "../../runtime";
import { classNames } from "../../style";

export class DesignComponentPlaceHolder extends React.Component<ComponentProps> {

    private element: HTMLElement

    constructor(props: ComponentProps) {
        super(props);

    }

    private enableDrop(element: HTMLElement | null, args: DesignerContextValue) {
        if (!element || this.element)
            return;

        this.element = element;
        args.designer.componentPanels.each((componentPanel) => {
            componentPanel.appendDropTarget(this.element, args.designer, this.props.id)
        })

    }

    render() {
        return <DesignerContext.Consumer>
            {args => {
                if (!args) throw errors.contextArgumentNull()
                return <div className={classNames.componentPlaceHolder} ref={e => this.enableDrop(e, args)}>
                    {this.props.children}
                </div>
            }}
        </DesignerContext.Consumer>
    }
}


