namespace pdesigner {
    export interface EditorPanelState {
        editor: React.ReactElement<any>,
        // editors: { [key: string]: React.ReactElement<any> },
    }

    export interface EditorPanelProps {
        className?: string;
        style?: React.CSSProperties;
    }

    export class EditorPanel extends React.Component<EditorPanelProps, EditorPanelState> {
        private designer: PageDesigner;
        private element: HTMLElement;

        constructor(props) {
            super(props);
            this.state = { editor: null };
        }
        componentDidMount() {
            this.designer.controlSelected.add(async (designer, control) => {

                // let controlTypeName = control.constructor.name;

                // let editors = this.state.editors;
                // let editor = editors[control.id];
                // if (!editor) {
                let editor = await designer.createEditorElement(control);
                //     if (editor)
                //         editors[control.id] = editor;
                // }

                this.setState({ editor });
            })
        }
        render() {
            // let editors = [];
            // for (let key in this.state.editors) {
            //     let editor = this.state.editors[key];
            //     console.assert(editor != null);

            //     editors.push(editor);
            // }

            return <DesignerContext.Consumer>
                {context => {
                    this.designer = context.designer;
                    return <div {...this.props} ref={(e: HTMLElement) => this.element = e || this.element}>
                        {this.state.editor}
                    </div>
                }}
            </DesignerContext.Consumer>
        }
    }
}