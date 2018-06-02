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
                let editor = await Editor.create(control);
                this.setState({ editor });
            })
        }
        render() {
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