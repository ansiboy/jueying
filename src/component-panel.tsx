import { errors } from "./errors"
import * as React from "react"
import { DesignerContext } from "./page-designer"
import { classNames } from "./style"
import { strings } from "./strings"
import { ComponentsConfig } from "components-config"

interface ComponentPanelProps {
    renderItem?: (typeName: string, compoenntConfig: ComponentsConfig[0]) => ReturnType<React.Component["render"]>
}

/** 组件面板 */
export class ComponentPanel extends React.Component<ComponentPanelProps> {

    private element: HTMLElement

    private static renderItem(typeName: string, componentConfig: ComponentsConfig[0]) {
        let displayName = componentConfig.displayName || typeName
        return <div>
            <i className={componentConfig.icon} />
            <div>
                {displayName}
            </div>
        </div>
    }

    render(): React.ReactNode {
        return <DesignerContext.Consumer>
            {args => {
                if (!args) throw errors.designerContextArgumentNull

                let componentsConfig = args.designer.props.componentsConfig
                let componentInfos = Object.keys(componentsConfig).map(k => Object.assign({}, componentsConfig[k], { typeName: k }))
                if (componentInfos.length == 0) {
                    return <div className={classNames.empty}>
                        {strings.emptyCompoenntPanel}
                    </div>
                }

                let renderItem = this.props.renderItem || ComponentPanel.renderItem
                renderItem.bind(this)
                return <ul className={classNames.componentPanel} ref={e => this.element = e || this.element}>
                    {componentInfos.map(o => renderItem(o.typeName, o))}
                </ul>
            }}
        </DesignerContext.Consumer>
    }
}