namespace pdesigner {

    let customEditors: { [key: string]: React.ComponentClass<any> } = {}

    export interface EditorProps extends React.Props<Editor<any, any>> {
        control: Control<any, any>,
        // elementPage: chitu.Page
    }

    export abstract class Editor<P extends EditorProps, S> extends React.Component<P, S>{

        private designer: PageDesigner;
        private originalRender: () => React.ReactNode;
        private controlType: React.ComponentClass<any>;

        validate: () => Promise<boolean>;

        abstract element: HTMLElement;

        constructor(props) {
            super(props);
            console.assert(this.props.control.state != null);
            this.state = this.props.control.props as any;

            this.originalRender = this.render;
            this.render = () => {

                return <DesignerContext.Consumer>
                    {context => {
                        this.designer = context.designer;
                        return this.originalRender ? this.originalRender() : null;
                    }}
                </DesignerContext.Consumer>
            }
        }

        setState<K extends keyof S>(
            state: (Pick<S, K> | S),
            callback?: () => void
        ): void {

            console.assert(state != null);
            if (this.designer) {
                this.designer.updateControlProps(this.props.control.id, state);
            }
            return super.setState(state, callback);
        }

        static async create(control: Control<any, any>) {
            let controlName = control.constructor.name;
            let name = controlName.endsWith('Control') ?
                controlName.substr(0, controlName.length - 'Control'.length) :
                controlName;
            let editorPath = `${componentsDir}/${name}/editor`;
            //TODO: 缓存 editorType
            let editorType = await new Promise<React.ComponentClass>((resolve, reject) => {
                requirejs([editorPath],
                    (exports2) => {

                        let editor: React.ComponentClass = exports2['default'];
                        if (editor == null)
                            throw new Error(`Default export of file '${editorPath}' is null.`)

                        resolve(editor);
                    },
                    (err) => reject(err)
                )
            })

            let editorProps: EditorProps = { control, key: control.id };
            let editorElement = React.createElement(editorType, editorProps);

            return editorElement;
        }

    }
}