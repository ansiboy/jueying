namespace pdesigner {

    let customEditors: { [key: string]: React.ComponentClass<any> } = {}

    export interface EditorProps extends React.Props<Editor<any, any>> {
        control: Control<any, any>,
        // elementPage: chitu.Page
    }

    export abstract class Editor<P extends EditorProps, S> extends React.Component<P, S>{

        private controlType: React.ComponentClass<any>;
        private _state: S;

        validate: () => Promise<boolean>;

        abstract element: HTMLElement;

        constructor(props) {
            super(props);
            console.assert(this.props.control.state != null);
        }

        componentDidUpdate() {
            let control = this.props.control;
            console.assert(control != null);
            let controlState = control.state;
            let keys = control.persistentMembers;
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                controlState[key] = this.state[key];
            }
            control.setState(controlState);
        }

        static register(controlTypeName: string, editorType: React.ComponentClass<any>) {
            customEditors[controlTypeName] = editorType;
        }

        static isRegister(controlTypeName: string) {
            return customEditors[controlTypeName] != null;
        }

    }
}