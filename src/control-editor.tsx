namespace jueying {

    export interface EditorProps extends React.Props<Editor<any, any>> {
        control: Control<any, any>,
    }

    export abstract class Editor<P extends EditorProps, S> extends React.Component<P, S>{

        private originalRender: () => React.ReactNode;
        private controlType: React.ComponentClass<any>;

        validate: () => Promise<boolean>;

        private _element: HTMLElement;

        constructor(props) {
            super(props);

            console.assert(this.props.control.props != null);
            let controlProps = Object.assign({}, this.props.control.props);
            delete (controlProps as any).children;

            this.state = JSON.parse(JSON.stringify(controlProps));

            this.originalRender = this.render;
            this.render = () => {
                return this.originalRender ? this.originalRender() : null;
            }
        }

        get designer() {
            return this.props.control.designer;
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
    }
}