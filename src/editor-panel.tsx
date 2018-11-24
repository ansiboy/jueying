namespace jueying {
    export interface EditorPanelState {
        componentDatas: ComponentData[];
        designer?: PageDesigner,
    }

    export interface EditorPanelProps {
        className?: string;
        style?: React.CSSProperties;
        emptyText?: string
        designer?: PageDesigner
    }

    export class EditorPanel extends React.Component<EditorPanelProps, EditorPanelState> {
        element: HTMLElement;
        private editor: ComponentEditor;

        constructor(props) {
            super(props);
            this.state = { componentDatas: [] };
        }

        componentWillReceiveProps(props: EditorPanelProps) {
            this.setState({ designer: props.designer })
        }

        private getComponentData(designer: PageDesigner) {
            let componentDatas = []
            let stack = new Array<ComponentData>()
            stack.push(designer.pageData)
            while (stack.length > 0) {
                let item = stack.pop()
                componentDatas.push(item)
                let children = item.children || []
                for (let i = 0; i < children.length; i++) {
                    stack.push(children[i])
                }
            }
            return componentDatas
        }
        componentDidMount() {

            // let paneHeight = function () {
            //     return document.body.clientHeight - 86
            // }

            // let panel = jsPanel.create({
            //     position: {
            //         my: 'right-top',
            //         at: 'right-top',
            //         offsetY: 48
            //     },
            //     boxShadow: 0,
            //     theme: 'bootstrap-primary',
            //     panelSize: `300 ${paneHeight()}`,
            //     headerTitle: '<h4>属性</h4>',
            //     headerControls: {
            //         close: 'remove', maximize: 'remove', smallifyrev: 'remove',
            //         smallify: 'remove'
            //     },
            //     // minimizeTo: '#panel-headers',
            //     // content: this.element
            //     // container: this.statusBar.element
            // })


            // let setPos = function () {
            //     let height = paneHeight();
            //     panel.resize(`300 ${height}`)
            //     panel.reposition('right-top 0 48');
            // }
            // window.addEventListener('resize', () => {
            //     setTimeout(() => {
            //         setPos()
            //     }, 100)
            // })
            // setPos()
        }
        render() {
            let { emptyText } = this.props;
            emptyText = emptyText || '';

            let componentDatas: ComponentData[] = []
            let selectedComponentIds = []
            let designer = this.state.designer
            if (designer) {
                componentDatas = this.getComponentData(designer)
                selectedComponentIds = designer.selectedComponentIds || []
            }

            // return <div className="editor-panel panel panel-primary" ref={(e: HTMLElement) => this.element = e || this.element}>
            //     <div className="panel-heading">属性</div>
            //     <div className="panel-body">
            //         <div className="form-group">
            // <select className="form-control"
            //     ref={e => {
            //         if (!e) return
            //         e.value = selectedComponentIds.length == 1 ? selectedComponentIds[0] : ''
            //         e.onchange = () => {
            //             if (designer && e.value)
            //                 designer.selectComponent(e.value)
            //         }
            //     }}>
            //     {componentDatas.map(o =>
            //         <option key={o.props.id} id={o.props.id} value={o.props.id}>{o.props.name}</option>
            //     )}
            // </select>
            //         </div>
            //         <ComponentEditor designer={designer} ref={e => this.editor = e || this.editor} />
            //     </div>

            // </div>
            return <div className={classNames.editorPanel} ref={(e: HTMLElement) => this.element = e || this.element}>
                <select className="form-control"
                    ref={e => {
                        if (!e) return
                        e.value = selectedComponentIds.length == 1 ? selectedComponentIds[0] : ''
                        e.onchange = () => {
                            if (designer && e.value)
                                designer.selectComponent(e.value)
                        }
                    }}>
                    {componentDatas.map(o =>
                        <option key={o.props.id} id={o.props.id} value={o.props.id}>{o.props.name}</option>
                    )}
                </select>
                <ComponentEditor designer={designer} ref={e => this.editor = e || this.editor} />
            </div>
        }
    }
}