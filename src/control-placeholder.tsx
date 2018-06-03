/// <reference path="page-control.tsx"/>
/// <reference path="page-designer.tsx"/>

namespace pdesigner {
    export interface ControlPlaceholderState {
        controls: ControlDescription[]
    }
    export interface ControlPlaceholderProps extends ControlProps<ControlPlaceholder> {
        style?: React.CSSProperties,
        emptyText?: string,
    }
    export class ControlPlaceholder extends Control<ControlPlaceholderProps, ControlPlaceholderState> {
        private designer: PageDesigner;
        private controls: (Control<any, any> & { id: string, name: string })[];

        element: HTMLElement;

        constructor(props) {
            super(props)

            this.state = { controls: [] };
            this.hasEditor = false;
        }

        get persistentMembers() {
            return [];
        }

        private sortableElement(element: HTMLElement, designer: PageDesigner) {
            type UI = { item: JQuery, placeholder: JQuery, helper: JQuery };
            let controls = this.state.controls;

            let ctrl: ControlDescription = null;
            let childIds: string[];
            $(element).sortable({
                axis: "y",
                change: () => {
                },
                receive: (event: Event, ui: UI) => {

                    let componentName = ui.item.attr('data-control-name');
                    ctrl = { id: guid(), name: componentName, data: {} };
                    ui.helper[0].setAttribute('id', ctrl.id);

                    childIds = new Array<string>();
                    for (let i = 0; i < element.children.length; i++) {
                        if (!element.children.item(i).id)
                            continue;

                        childIds.push(element.children.item(i).id);
                    }

                    let helper = ui.helper[0] as HTMLElement;
                    helper.removeAttribute('style');
                    ui.helper.remove();
                },
                update: (event, ui) => {
                    if (ctrl) {
                        this.designer.appendControl(this.id, ctrl, childIds);
                        ctrl = null;
                    }
                    else {
                        let childIds = new Array<string>();
                        for (let i = 0; i < element.children.length; i++)
                            childIds.push(element.children.item(i).id);

                        this.designer.sortChildren(this.id, childIds);
                    }
                }
            })
        }

        componentDidMount() {
            if (this.designer) {
                this.sortableElement(this.element, this.designer);
            }
        }
        render(h?: any) {
            let { emptyText } = this.props;
            let emptyElement = <div className="empty">{emptyText || ''}</div>;
            let controls = this.props.children as JSX.Element[] || [];
            let self = this;
            return <DesignerContext.Consumer>
                {c =>
                    <PageViewContext.Consumer>
                        {context => {
                            self.designer = c.designer;
                            return <div {...this.htmlProps()} className={`place-holder ${ComponentToolbar.connectorElementClassName}`}
                                style={this.props.style}
                                ref={(e: HTMLElement) => this.element = e || this.element}>
                                {controls.length == 0 ? emptyElement : controls}
                            </div>
                        }}
                    </PageViewContext.Consumer>
                }
            </DesignerContext.Consumer>
        }
    }
    Control.register(ControlPlaceholder);
}