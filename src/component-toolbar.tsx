// import { DesignerContext } from './component'
// import { ComponentDefine, ComponentData } from './models';
// import * as React from 'react';
// import { PageDesigner } from './page-designer';
// import { constants } from './comon';
// import { classNames } from './style';

module jueying {
    interface ComponentToolbarProps extends React.Props<ComponentPanel> {
        // componets: ComponentDefine[],
        style?: React.CSSProperties,
        className?: string,
    }
    interface ComponentToolbarState {
        componets: ComponentDefine[],
    }
    export class ComponentPanel extends React.Component<ComponentToolbarProps, ComponentToolbarState> {
        designer: PageDesigner;
        private toolbarElement: HTMLElement;

        constructor(props) {
            super(props)
            this.state = { componets: [] }
        }

        private componentDraggable(toolItemElement: HTMLElement, componentData: ComponentData) {
            console.assert(toolItemElement != null)
            toolItemElement.draggable = true
            toolItemElement.addEventListener('dragstart', function (ev) {
                componentData.props = componentData.props || {}
                ev.dataTransfer.setData(constants.componentData, JSON.stringify(componentData))
                ev.dataTransfer.setData('mousePosition', JSON.stringify({ x: ev.offsetX, y: ev.offsetY }))
            })
        }

        setComponets(componets: ComponentDefine[]) {
            this.setState({ componets })
        }

        static getComponentData(dataTransfer: DataTransfer): ComponentData {
            var str = dataTransfer.getData(constants.componentData)
            if (!str)
                return

            return JSON.parse(str)
        }

        /** 获取光标在图标内的位置 */
        static mouseInnerPosition(dataTransfer: DataTransfer): { x: number, y: number } {
            let str = dataTransfer.getData('mousePosition')
            if (!str)
                return

            return JSON.parse(str)
        }

        render() {
            let props: ComponentToolbarProps = Object.assign({}, this.props);
            let componets = this.state.componets || [];
            return <DesignerContext.Consumer>
                {context => {
                    this.designer = context.designer;
                    return <div {...props as any} className={`${classNames.componentPanel} panel panel-primary`}>
                        <div className="panel-heading">工具栏</div>
                        <div className="panel-body">
                            <ul ref={(e: HTMLElement) => this.toolbarElement = this.toolbarElement || e}>
                                {componets.map((c, i) => {
                                    let props = { key: i };
                                    return <li {...props}>
                                        <div className="btn-link">
                                            <i className={c.icon} style={{ fontSize: 44, color: 'black' }}
                                                ref={e => {
                                                    if (!e) return

                                                    let ctrl = c.componentData
                                                    this.componentDraggable(e, ctrl)
                                                }} />
                                        </div>
                                        <div>
                                            {c.displayName}
                                        </div>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                }}
            </DesignerContext.Consumer>
        }
    }
}