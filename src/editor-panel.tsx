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
                if (!control.hasEditor) {
                    console.log(`Control ${control.constructor.name} has none editor.`);
                    return;
                }

                let editor = await Editor.create(control);
                this.setState({ editor });
            })
        }
        render() {
            return <DesignerContext.Consumer>
                {context => {
                    this.designer = context.designer;
                    return <div {...this.props} className="editor-panel panel panel-primary" ref={(e: HTMLElement) => this.element = e || this.element}>
                        <div className="panel-heading">控件属性</div>
                        <div className="panel-body">
                            {this.state.editor}
                        </div>
                    </div>
                }}
            </DesignerContext.Consumer>
        }
    }
}