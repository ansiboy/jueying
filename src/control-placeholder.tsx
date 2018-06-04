/// <reference path="page-control.tsx"/>
/// <reference path="page-designer.tsx"/>

namespace pdesigner {
    export interface ControlPlaceholderState {
        controls: ElementData[]
    }
    export interface ControlPlaceholderProps extends ControlProps<ControlPlaceholder> {
        style?: React.CSSProperties,
        emptyText?: string,
        htmlTag?: string,
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

            $(element).sortable({
                axis: "y",
                connectWith: `.${Control.connectorElementClassName}`,
                receive(event, ui) {
                },
                update: (event, ui) => {
                    let element = event.target as HTMLElement;
                    if (ui.item && !ui.item[0].id) {    // 添加操作
                        console.assert(ui.item.length == 1);
                        let componentName = ui.item.attr('data-control-name');
                        console.assert(componentName);

                        let ctrl: ElementData = { type: componentName, props: { id: guid() } };
                        ui.item[0].setAttribute('id', ctrl.props.id);
                        //==================================================
                        // 将所有 id 子元素找出来，用于排序
                        let childIds = this.childrenIds(element);
                        //==================================================
                        // 需要 setTimout 才能删除
                        setTimeout(() => {
                            ui.item.remove();
                        })
                        //==================================================
                        this.designer.appendControl(element.id, ctrl, childIds);
                    }
                    else if (ui.item && ui.item[0].id) {    // 更新操作
                        console.assert(ui.item.length == 1);
                        let childIds = this.childrenIds(element);
                        if (childIds.indexOf(ui.item[0].id) >= 0) {
                            //==================================================
                            // 需要 setTimout
                            setTimeout(() => {
                                this.designer.moveControl(ui.item[0].id, element.id, childIds);
                            });
                            //==================================================
                        }
                    }
                },
                stop() {
                    // ===============================================
                    // jquery ui 取消操作，让 react 更新 dom
                    // https://stackoverflow.com/questions/29725136/jquery-ui-sortable-with-react-js-buggy
                    $(element).sortable('cancel');
                    // ===============================================
                }

            })
        }

        private childrenIds(element: HTMLElement) {
            let childIds = new Array<string>();
            for (let i = 0; i < element.children.length; i++) {
                if (!element.children.item(i).id)
                    continue;

                childIds.push(element.children.item(i).id);
            }
            return childIds;
        }

        componentDidMount() {
            if (this.designer) {
                this.sortableElement(this.element, this.designer);
            }
        }
        render(h?: any) {
            let { emptyText, htmlTag } = this.props;
            let emptyElement = <div className="empty">{emptyText || ''}</div>;
            htmlTag = htmlTag || 'div';
            let controls = this.props.children as JSX.Element[] || [];
            let self = this;
            return <DesignerContext.Consumer>
                {c =>
                    <PageViewContext.Consumer>
                        {context => {
                            self.designer = c.designer;
                            let props = Object.assign(Control.htmlDOMProps(this.props), {
                                className: `place-holder ${pdesigner.Control.connectorElementClassName}`,
                                style: this.props.style, ref: (e) => this.element = e || this.element
                            })
                            return h(htmlTag, props, controls.length == 0 ? emptyElement : controls);
                            // return <div {...Control.htmlDOMProps(this.props)} className={`place-holder ${Control.connectorElementClassName}`}
                            //     style={this.props.style}
                            //     ref={(e: HTMLElement) => this.element = e || this.element}>
                            //     {controls.length == 0 ? emptyElement : controls}
                            // </div>
                        }}
                    </PageViewContext.Consumer>
                }
            </DesignerContext.Consumer>
        }
    }
    Control.register(ControlPlaceholder);
}