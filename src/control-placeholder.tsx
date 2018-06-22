/// <reference path="page-control.tsx"/>
/// <reference path="page-designer.tsx"/>
/// <reference path="control-factory.tsx"/>
/// <reference path="editor-factory.tsx"/>

namespace jueying {
    export interface ControlPlaceholderState {
        controls: ElementData[]
    }
    export interface ControlPlaceholderProps extends ControlProps<ControlPlaceholder> {
        style?: React.CSSProperties,
        emptyText?: string,
        htmlTag?: string,
        // layout?: 'flowing' | 'free'
    }
    export class ControlPlaceholder extends Control<ControlPlaceholderProps, ControlPlaceholderState> {
        private controls: (Control<any, any> & { id: string, name: string })[];

        static defaultProps = {
            className: `place-holder ${Control.connectorElementClassName}`,
            layout: 'flowing'
        };
        pageView: PageView;

        constructor(props) {
            super(props)

            this.state = { controls: [] };
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

        private droppableElement(element: HTMLElement, designer: PageDesigner) {
            type UI = { item: JQuery, placeholder: JQuery, helper: JQuery };
            let controls = this.state.controls;
            $(element).droppable({
                activate: function (event, ui) {
                    ui.helper.css({
                        'position': 'absolute',
                        'z-index': 1000,
                    });
                },
                drop: (event, ui) => {
                    let element = event.target as HTMLElement;
                    console.assert(ui.draggable != null);
                    if (ui.draggable.attr(Control.controlTypeName)) {    // 添加操作 //&& !ui.draggable[0].id
                        console.assert(ui.draggable.length == 1);
                        let componentName = ui.draggable.attr('data-control-name');
                        console.assert(componentName);

                        let baseRect = this.element.getClientRects()[0]
                        let iconRect = ui.helper[0].getClientRects()[0];
                        if (!iconRect)
                            return;

                        let left = iconRect.left - baseRect.left;
                        let top = iconRect.top - baseRect.top;
                        let ctrl: ElementData = {
                            type: componentName,
                            props: {
                                id: guid(),
                                style: {
                                    position: 'absolute',
                                    left,
                                    top,
                                }
                            }
                        };
                        this.designer.appendControl(element.id, ctrl);
                        $(`#${ctrl.props.id}`).draggable();
                    }
                    else {
                        let ctrlId = ui.draggable.attr('id');
                        let pos = ui.draggable.position();
                        this.designer.setControlPosition(ctrlId, pos.left, pos.top)
                        this.designer.selectControlById(ctrlId);
                    }
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
                if (this.pageView.layout == 'flowing') {
                    this.sortableElement(this.element, this.designer);
                }
                else {
                    this.droppableElement(this.element, this.designer);
                    this.designer.controlSelected.add((ctrl) => {
                        if ($(ctrl.element).parents(`#${this.element.id}`).length) {
                            console.assert(ctrl.id, 'control id is null or empty.');
                            $(ctrl.element).draggable();
                        }
                    })
                }
            }
        }
        render(h?: any) {
            let { emptyText, htmlTag } = this.props;
            let emptyElement = <div className="empty">{emptyText || ''}</div>;
            htmlTag = htmlTag || 'div';
            let controls = this.props.children as JSX.Element[] || [];
            let self = this;

            return <PageViewContext.Consumer>
                {c => {
                    this.pageView = c.pageView;
                    return this.Element(htmlTag,
                        <React.Fragment>
                            {controls.length == 0 ? emptyElement : controls}
                        </React.Fragment>
                    );
                }}
            </PageViewContext.Consumer>
        }
    }
    ControlFactory.register(ControlPlaceholder);

    export interface ControlPlaceholderEditorState extends Partial<ControlPlaceholderProps> {

    }
    export class ControlPlaceholderEditor extends Editor<EditorProps, ControlPlaceholderEditorState> {
        render() {
            let { name } = this.state;
            let props = {};
            return this.Element(<React.Fragment>
                <div className="form-group">
                    <label>名称</label>
                    <div className="control">
                        <input className="form-control" value={name || ''}
                            onChange={(e) => {
                                name = (e.target as HTMLInputElement).value;
                                this.setState({ name });
                            }} />
                    </div>
                </div>
            </React.Fragment>)
        }
    }

    EditorFactory.register('ControlPlaceholder', ControlPlaceholderEditor);
}