import * as React from "react";
import { ComponentDefine, ComponentData } from "./models";
import { constants } from "./components/index";
import { classNames } from "./style";
import { ComponentDataHandler } from "./component-data-handler";

interface ComponentProps extends React.Props<ComponentPanel> {
    // componets: ComponentDefine[],
    style?: React.CSSProperties,
    className?: string,
    empty?: string | JSX.Element,
    designer: ComponentDataHandler,
}
interface ComponentToolbarState {
    componets: ComponentDefine[],
}
export class ComponentPanel extends React.Component<ComponentProps, ComponentToolbarState> {
    designer: ComponentDataHandler;
    static componentIndexName = "data-component-index";
    private toolbarElement: HTMLElement;

    constructor(props: ComponentProps) {
        super(props)
        this.state = { componets: [] }
        this.designer = this.props.designer;
    }

    get element() {
        return this.toolbarElement;
    }

    private componentDraggable(toolItemElement: HTMLElement, componentData: ComponentData) {
        console.assert(toolItemElement != null)
        toolItemElement.draggable = true
        toolItemElement.addEventListener('dragstart', function (ev) {
            if (ev.dataTransfer == null)
                return;

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
        console.assert(str != null);
        return JSON.parse(str)
    }

    /** 获取光标在图标内的位置 */
    static mouseInnerPosition(dataTransfer: DataTransfer): { x: number, y: number } {
        let str = dataTransfer.getData('mousePosition');
        console.assert(str != null);

        return JSON.parse(str) as any;
    }

    render() {
        let empty = this.props.empty || <div className="empty">暂无可用组件</div>
        let props: ComponentProps = Object.assign({}, this.props);
        let componets = this.state.componets || [];

        return <ul {...props as any} className={`${classNames.componentPanel} ${this.props.className || ""}`}
            ref={(e: HTMLElement) => this.toolbarElement = this.toolbarElement || e}>
            {componets.length == 0 ? empty : componets.map((c, i) => {
                let props = { key: i };
                props[ComponentPanel.componentIndexName] = `${i}`;
                return <li {...props} className={classNames.componentIcon}>
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
    }
}