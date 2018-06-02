
namespace pdesigner {
    export interface ControlToolbarProps extends React.Props<ControlToolbar> {
        componets: ComponentDefine[],
        style?: React.CSSProperties,
        className?: string,
    }
    export interface ControlToolbarState {

    }
    export class ControlToolbar extends React.Component<ControlToolbarProps, ControlToolbarState> {
        designer: PageDesigner;
        private toolbarElement: HTMLElement;

        static connectorElementClassName = 'control-container';

        componentDidMount() {
            this.draggable($(`.${ControlToolbar.connectorElementClassName}`));
            this.designer.controlComponentDidMount.add((sender, control) => {
                console.assert(control.element != null);
                this.draggable($(control.element));
            })
        }

        draggable(selector: JQuery) {
            $(this.toolbarElement).find('li').draggable({
                connectToSortable: $(`section, .${ControlToolbar.connectorElementClassName}`),
                helper: "clone",
                revert: "invalid"
            })

            // this.props.componets.forEach(o => this.designer.addComponentDefine(o));
        }

        render() {
            let props = this.props;
            let componets = this.props.componets;
            return <DesignerContext.Consumer>
                {context => {
                    this.designer = context.designer;
                    return <ul {...this.props}
                        ref={(e: HTMLElement) => this.toolbarElement = this.toolbarElement || e}>
                        {componets.map((c, i) => <li key={i} data-control-name={c.name}>
                            <div className="btn-link">
                                <i className={c.icon} style={{ fontSize: 44, color: 'black' }} />
                            </div>
                            <div>
                                {c.displayName}
                            </div>
                        </li>)}
                    </ul>
                }}
            </DesignerContext.Consumer>
        }
    }
}