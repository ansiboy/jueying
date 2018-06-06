namespace pdesigner {

    export interface EditorProps extends React.Props<Editor<any, any>> {
        control: Control<any, any>,
    }

    export abstract class Editor<P extends EditorProps, S> extends React.Component<P, S>{

        private designer: PageDesigner;
        private originalRender: () => React.ReactNode;
        private controlType: React.ComponentClass<any>;

        validate: () => Promise<boolean>;

        private _element: HTMLElement;

        constructor(props) {
            super(props);

            console.assert(this.props.control.props != null);
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

        get element() {
            return this._element;
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

        Element(...children: JSX.Element[]) {
            return React.createElement('div', {
                ref: (e) => {
                    this._element = e || this._element
                }
            }, ...children);
        }

        // static register(controlTypeName, editorType: React.ComponentClass<any> | string) {
        //     customEditorTypes[controlTypeName] = editorType;
        // }

        // static async create(control: Control<any, any>) {
        //     if (control == null)
        //         throw Errors.argumentNull('control');

        //     let componentName = control.componentName;

        //     let editorType = customEditorTypes[componentName];
        //     if (!editorType) {
        //         throw new Error(`${componentName} editor type is not exists.`)
        //     }

        //     if (typeof editorType == 'string') {
        //         editorType = await new Promise<React.ComponentClass>((resolve, reject) => {
        //             let editorPath = editorType as string;
        //             requirejs([editorPath],
        //                 (exports2) => {
        //                     let editor: React.ComponentClass = exports2['default'];
        //                     if (editor == null)
        //                         throw new Error(`Default export of file '${editorPath}' is null.`)

        //                     resolve(editor);
        //                 },
        //                 (err) => reject(err)
        //             )
        //         })
        //         customEditorTypes[componentName] = editorType;
        //     }

        //     let editorProps: EditorProps = { control, key: control.id };
        //     let editorElement = React.createElement(editorType, editorProps);

        //     return editorElement;
        // }

    }
}