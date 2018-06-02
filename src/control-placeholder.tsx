/// <reference path="page-control.tsx"/>
/// <reference path="page-designer.tsx"/>

namespace pdesigner {
    export interface ControlPlaceholderState {
        controls: ControlDescription[]
    }
    export interface ControlPlaceholderProps extends ControlProps<ControlPlaceholder> {
        style?: React.CSSProperties,
        emptyElement?: JSX.Element,
    }
    export class ControlPlaceholder extends Control<ControlPlaceholderProps, ControlPlaceholderState> {
        private designer: PageDesigner;
        private controls: (Control<any, any> & { id: string, name: string })[];

        element: HTMLElement;

        constructor(props) {
            super(props)

            this.state = { controls: [] };
        }

        get hasEditor() { return false }

        get persistentMembers() {
            return [];
        }

        private sortableElement(element: HTMLElement, designer: PageDesigner) {
            type UI = { item: JQuery, placeholder: JQuery, helper: JQuery };
            let controls = this.state.controls;
            let previousControlId: string = null;
            $(element).sortable({
                axis: "y",
                change: () => {
                    for (let i = 0; i < element.children.length; i++) {
                        if (!element.children.item(i).id) {
                            let previewElement = element.children.item(i - 1);
                            previousControlId = previewElement ? previewElement.id : null;
                            break;
                        }
                    }
                },
                receive: (event: Event, ui: UI) => {
                    let helper = ui.helper[0] as HTMLElement;
                    helper.removeAttribute('style');
                    let componentName = ui.item.attr('data-control-name');
                    let target = ui.item.attr('data-target');
                    console.assert(componentName != null);
                    ui.helper.remove();

                    let ctrl = { name: componentName, id: guid(), data: {} };
                    this.designer.appendControl(this.id, ctrl, previousControlId);
                },
                update: (event, ui) => {
                    let view_controls = [];
                    let footer_controls = [];
                    //===================================================
                    // 排序 view controls
                    // for (let i = 0; i < element.children.length; i++) {
                    //     let child = element.children[i] as HTMLElement;
                    //     let control = controls.filter(o => o.id == child.id)[0];
                    //     console.assert(control != null);
                    //     view_controls[i] = control;
                    // }
                    //===================================================
                    // for (let i = 0; i < this.footerElement.children.length; i++) {
                    //     let child = this.footerElement.children[i] as HTMLElement;
                    //     let control = pageData.controls.filter(o => o.controlId == child.id && o.position == 'footer')[0];
                    //     footer_controls[i] = control;
                    // }
                    // //===================================================
                    // let header_controls = pageData.controls.filter(o => o.position == 'header');
                    // pageData.controls = [...header_controls, ...footer_controls, ...view_controls];
                }
            })
        }

        componentDidMount() {
            if (this.designer) {
                this.sortableElement(this.element, this.designer);
            }
        }
        render(h?: any) {
            let { emptyElement } = this.props;
            emptyElement = emptyElement || <div></div>;
            let controls = this.props.children as JSX.Element[] || [];
            let self = this;
            return <DesignerContext.Consumer>
                {c =>
                    <PageViewContext.Consumer>
                        {context => {
                            self.designer = c.designer;
                            return <div className={`place-holder ${ControlToolbar.connectorElementClassName}`}
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