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

        get state(): S {
            return this._state;
        }

        /**
         * 重写 set state， 在第一次赋值，将控件中 state 的持久化成员赋值过来。 
         */
        set state(value: S) {

            value = value || {} as S;
            if (this._state != null) {
                this._state = value;
                return;
            }

            var state = {} as any;
            let keys = this.props.control.persistentMembers || [];
            let controlState = this.props.control.state;
            for (let i = 0; i < keys.length; i++) {
                var prop = controlState[keys[i]];
                if (prop !== undefined)
                    state[keys[i]] = prop;
            }

            this._state = Object.assign(value, state);;
        }

        // get elementPage() {
        //     return this.props.elementPage;
        // }

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


        static path(controlName: string) {
            return `${componentsDir}/${controlName}/editor`;
        }

        protected loadEditorCSS() {
            var typeName = this.constructor.name;
            typeName = typeName.replace('Editor', '');
            typeName = typeName[0].toLowerCase() + typeName.substr(1);

            requirejs([`less!${componentsDir}/${typeName}/editor`]);
        }

        bindInputElement(e: HTMLInputElement | HTMLSelectElement, fieldName: keyof S);
        bindInputElement<T>(e: HTMLInputElement | HTMLSelectElement, obj: T, fieldName?: keyof T, fieldType?: 'number' | 'string')
        bindInputElement<T>(e: HTMLInputElement | HTMLSelectElement, obj: any, fieldName?: string, fieldType?: 'number' | 'string') {
            if (!e) return;

            if (typeof obj == 'string') {
                fieldName = obj;
                obj = this.state;
            }

            e.value = `${obj[fieldName] || ''}`;
            e.onchange = () => {
                if (fieldType == 'number') {
                    obj[fieldName] = Number.parseFloat(e.value);
                }
                else {
                    obj[fieldName] = e.value as any
                }
                this.setState(this.state);
            }
        }

        bindCheckElement(e: HTMLInputElement | HTMLSelectElement, fieldName: keyof S, fieldType: 'number' | 'string' | 'boolean');
        bindCheckElement<T>(e: HTMLInputElement | HTMLSelectElement, obj: T, fieldName: keyof T, fieldType: 'number' | 'string' | 'boolean')
        bindCheckElement(e: HTMLInputElement, obj: any, fieldName: string, fieldType?: 'number' | 'string' | 'boolean') {
            if (!e) return;

            if (arguments.length == 3) {
                fieldName = arguments[1];
                fieldType = arguments[2];
                obj = this.state;
            }

            let parseValue = (text: string) => {
                let value: any;
                if (fieldType == 'number') {
                    value = text.indexOf('.') > 0 ? Number.parseFloat(text) : Number.parseInt(text);
                }
                else if (fieldType == 'boolean') {
                    value = text == 'false' ? false : text == 'true' ? true : null;
                }
                else {
                    value = text;
                }
                return value;
            }

            let sourceValue = obj[fieldName];
            let targetValue = parseValue(e.value);
            e.checked = sourceValue == targetValue;
            e.onchange = () => {
                let value = parseValue(e.value);
                obj[fieldName] = value;
                this.setState(this.state);
            }
        }

        static register(controlTypeName: string, editorType: React.ComponentClass<any>) {
            customEditors[controlTypeName] = editorType;
        }

        static createEditorElement(control: Control<any, any>) {
            let controlTypeName = control.constructor.name;
            let editorType = customEditors[controlTypeName];
            if (editorType == null)
                return null;

            // if (!Editor.isRegister(controlTypeName)) {
            // await this.designer.registerEditor(controlTypeName);
            // }

            debugger;

            let props: EditorProps = { control, key: control.id };
            return React.createElement(editorType, props);
        }

        static isRegister(controlTypeName: string) {
            return customEditors[controlTypeName] != null;
        }

    }
}