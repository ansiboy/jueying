namespace pdesigner {
    export interface Props extends ControlProps<any> {
        id?: string,
        style?: React.CSSProperties,
        className?: string,
    }

    export const PageViewContext = React.createContext({ pageView: null })



    export type ControlPair = { control: Control<any, any>, controlType: React.ComponentClass<any> }
    export type State = {
    };

    export function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    /**
     * 移动端页面，将 PageData 渲染为移动端页面。
     */
    export class PageView extends Control<Props, State>{

        private _hasEditor: boolean;

        element: HTMLElement;

        constructor(props) {
            super(props);
        }

        get hasEditor() {
            return this._hasEditor;
        }
        set hasEditor(value: boolean) {
            this._hasEditor = value;
        }


        render(h?) {
            let children = React.Children.toArray(this.props.children) || [];
            let pageData = { controls: [] };

            let pageView = this;
            return <div {...Control.htmlDOMProps(this.props)}
                ref={(e: HTMLElement) => this.element = e || this.element}>
                <PageViewContext.Provider value={{ pageView }}>
                    {this.props.children}
                </PageViewContext.Provider>
            </div>;
        }
    }

    ControlFactory.register(PageView);
}

