namespace pdesigner {
    export interface EditorPanelState {
        activeControlId: string,
        editors: { [key: string]: React.ReactElement<any> },
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
            this.state = { activeControlId: '', editors: {} };
        }
        componentDidMount() {
            this.designer.controlSelected.add(async (designer, control) => {

                let controlTypeName = control.constructor.name;

                let editors = this.state.editors;
                let editor = editors[control.id];
                if (!editor) {
                    editor = await designer.createEditorElement(control);
                    if (editor)
                        editors[control.id] = editor;
                }

                this.setState({ activeControlId: control.id });
            })
        }
        render() {
            let editors = [];
            for (let key in this.state.editors) {
                let editor = this.state.editors[key];
                console.assert(editor != null);

                editors.push(editor);
            }
            let { className, style } = this.props;
            debugger;
            return <DesignerContext.Consumer>
                {context => {
                    this.designer = context.designer;
                    return <div {...{ className, style }} ref={(e: HTMLElement) => this.element = e || this.element}>
                        {editors}
                    </div>
                }}
            </DesignerContext.Consumer>
        }
    }
}