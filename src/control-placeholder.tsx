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

                    // let children = element.children;
                    // let controlIndex = previousControlId ? controls.map((o, i) => ({ id: o.id, index: i }))
                    //     .filter(o => o.id == previousControlId)
                    //     .map(o => o.index)[0] + 1 : 0;

                    let ctrl = { name: componentName, id: guid(), data: {} };
                    // if (controlIndex == controls.length)
                    //     controls.push(ctrl);
                    // else
                    //     controls.splice(controlIndex, 0, ctrl);

                    // this.setState(this.state);
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

        renderControls(controls: ControlDescription[], pageView: PageView) {
            console.assert(pageView);
            return <DesignerContext.Consumer>
                {context => context.designer != null ?
                    this.renderDesigntimeControls(controls, pageView) :
                    this.renderRuntimeControls(controls, pageView)
                }
            </DesignerContext.Consumer>
        }

        renderDesigntimeControls(controls: ControlDescription[], pageView: PageView) {
            controls = controls || [];

            return <DesignerContext.Consumer>
                {context => {
                    return controls.map((o, i) =>
                        <div id={o.id} key={o.id}
                            ref={async (e: HTMLElement) => {
                                if (!e) return;

                                var c = await this.createControlInstance(o, e, pageView);
                                var componet = Object.assign(c.control, { id: o.id, name: o.name });
                                this.controls.push(componet);
                                if (o.selected != 'disabled') {
                                    e.onclick = (event) => {
                                        controls.filter(o => o.selected == true).forEach(o => o.selected = false);
                                        // this.props.designTime.controlSelected(c.control, c.controlType);
                                        if (context.designer.controlSelected) {
                                            debugger;
                                            // context.controlSelected.fire(this, c.control, c.controlType);
                                        }
                                        event.preventDefault();
                                    }
                                }

                                // if (o.selected == true) {
                                //     this.selecteControl = c;
                                // }

                                // if (this.props.controlCreated)
                                //     this.props.controlCreated(componet);

                            }} />
                    )
                }}
            </DesignerContext.Consumer>
        }

        renderRuntimeControls(controls: ControlDescription[], pageView: PageView) {
            return controls.map((o, i) =>
                <div id={o.id} key={o.id}
                    ref={async (e: HTMLElement) => {
                        if (!e) return;
                        var c = await this.createControlInstance(o, e, pageView);
                        var componet = Object.assign(c.control, { id: o.id, name: o.name });
                        this.controls.push(componet);
                        // if (this.props.controlCreated)
                        //     this.props.controlCreated(componet);
                    }} />
            );
        }

        /**
         * 创建控件
         * @param controlData 描述控件的数据
         * @param element 承载控件的 HTML 元素
         */
        async createControlInstance(controlData: ControlDescription, element: HTMLElement, pageView: PageView): Promise<ControlPair> {
            let { id, name, data } = controlData;
            let types = await PageView.getControlType(name);

            let props: ControlProps<any> = Object.assign({}, data || {});
            // props.mobilePage = this;

            let control: Control<any, any> = await new Promise<Control<any, any>>((resolve, reject) => {
                try {
                    let reactElement = React.createElement(types.Control, props,
                        { ref: (e) => resolve(e) });
                    ReactDOM.render(
                        <PageViewContext.Provider value={{ pageView }}>
                            {reactElement}
                        </PageViewContext.Provider>
                        , element);
                }
                catch (e) {
                    reject(e);
                }
            })
            element.className = `${name}-control`;
            // control.id = id;
            let result: ControlPair = { control, controlType: types.Control };
            return result;
        }


        componentDidMount() {
            if (this.designer) {
                debugger;
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