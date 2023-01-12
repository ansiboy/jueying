import * as React from "react";
import { errors } from "../errors";
import { EditPanelContext, PropertyEditor } from "./editor-panel-context";
import { ErrorBoundary } from "../utility";
import { classNames } from "../style";

interface EditorGroupProps {
    // editors: React.ReactElement<any>[]
    groupName?: string,
    renderItem?: (propertyEditor: PropertyEditor) => React.ReactNode;
}

// export type PropertyEditor = {
//     /** 用于对编辑器进行分组，方便查看各个属性 */
//     group: string,
//     /** 属性名称 */
//     prop: string,
//     /** 属性显示名称 */
//     displayName: string,
//     /** 属性编辑器 */
//     editor: React.ReactElement<any>,
// };

export class EditorGroup extends React.Component<EditorGroupProps> {

    private renderItem: (propertyEditor: PropertyEditor) => React.ReactNode;

    constructor(props: EditorGroupProps) {
        super(props)

        this.renderItem = (o) => {
            return <div key={o.proppertyName} className={classNames.propertyEditor}>
                <label className={classNames.propertyEditorLabel}>{o.displayName}</label>
                <div className={classNames.propertyEditorControl}>
                    <ErrorBoundary>
                        {o.editor}
                    </ErrorBoundary>
                </div>
            </div>
        }
    }

    render(): React.ReactNode {
        let renderItem = this.props.renderItem || this.renderItem;
        return <EditPanelContext.Consumer>
            {args => {
                if (!args) throw errors.contextArgumentNull()

                let propertyEditor = this.props.groupName ? args.editors.filter(o => o.group == this.props.groupName) : args.editors
                return <>
                    {propertyEditor.map(o => renderItem(o))}
                </>
            }}
        </EditPanelContext.Consumer>
    }
}