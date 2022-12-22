import * as React from "react"
import { DesignerContext, PageDesigner } from "../../designer"
import { errors } from "../../errors"
import { childrenNodeToArray } from "../../utility"
import { Page } from "../../runtime/components"
import { classNames } from "../../style"

type Props = Page["props"]
export class DesignPage extends React.Component<Props> {

    private element: HTMLElement

    private ref(element: HTMLElement | null, designer: PageDesigner) {
        if (!element || this.element)
            return

        this.element = element
        designer.componentPanels.each(componentPanel => {
            componentPanel.appendDropTarget(element, designer, designer.pageData.id)
        })
    }

    render(): React.ReactNode {
        let children = childrenNodeToArray(this.props.children)
        return <DesignerContext.Consumer>
            {args => {
                if (!args) throw errors.contextArgumentNull()

                return <ul key={args.designer.pageData.id} className={classNames.page} ref={e => this.ref(e, args.designer)}>
                    {children.map(o => <li key={o.key} onClick={e => {
                        let id = o.key
                        if (typeof id == "string") {
                            e.preventDefault();
                            e.stopPropagation();

                            args.designer.selectComponent(id);
                        }

                    }}>
                        {o}
                    </li>)}
                </ul>
            }
            }
        </DesignerContext.Consumer >
    }
}