namespace jueying {

    let customEditorTypes: { [key: string]: React.ComponentClass<any> | string } = {}

    export class EditorFactory {

        static register(controlTypeName, editorType: React.ComponentClass<any> | string) {
            customEditorTypes[controlTypeName] = editorType;
        }

        static async create(control: Control<any, any>) {
            if (control == null)
                throw Errors.argumentNull('control');

            let componentName = control.componentName;

            let editorType = customEditorTypes[componentName];
            if (!editorType) {
                throw new Error(`${componentName} editor type is not exists.`)
            }

            if (typeof editorType == 'string') {
                editorType = await new Promise<React.ComponentClass>((resolve, reject) => {
                    let editorPath = editorType as string;
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
                customEditorTypes[componentName] = editorType;
            }

            let editorProps: EditorProps = { control, key: control.id };
            let editorElement = React.createElement(editorType, editorProps);

            return editorElement;
        }

        static hasEditor(controlTypeName) {
            return customEditorTypes[controlTypeName] != null;
        }

    }
}