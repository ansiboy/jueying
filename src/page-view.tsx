namespace pdesigner {
    export interface Props extends ControlProps<any> {
        style?: React.CSSProperties,
        className?: string,
    }

    export const PageViewContext = React.createContext({
        pageView: null as PageView
    })

    export interface ControlDescription {
        name: string;
        id: string;
        data?: any;
        selected?: boolean | 'disabled';
        children?: ControlDescription[],
    }

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
        private screenElement: HTMLElement;
        private selecteControl: ControlPair;

        private headerControlsCount: number = 0;
        private footerControlsCount: number = 0;
        private viewControlsCount: number = 0;
        private createdControlCount: number = 0;

        private footerElement: HTMLElement;
        private headerElement: HTMLElement;

        controls: (Control<any, any> & { controlId: string, controlName: string })[];

        element: HTMLElement;

        constructor(props) {
            super(props);
            this.state = {
            };
            this.controls = [];
        }

        persistentMembers: never[];

        static getInstanceByElement(element: HTMLElement): PageView {
            return (element as any).mobilePage;
        }

        /**
         * 创建控件
         * @param controlData 描述控件的数据
         * @param element 承载控件的 HTML 元素
         */
        async createControlInstance(controlData: ControlDescription, element: HTMLElement): Promise<ControlPair> {
            let { name, data, selected } = controlData;
            // let id = data.id;
            console.assert(data != null);
            let types = await PageView.getControlType(name);

            let props: ControlProps<any> = Object.assign({}, data);

            let control: Control<any, any> = await new Promise<Control<any, any>>((resolve, reject) => {
                let reactElement = React.createElement(types.Control, props,
                    { ref: (e) => resolve(e) });

                ReactDOM.render(
                    <PageViewContext.Provider value={{ pageView: this }}>
                        {reactElement}
                    </PageViewContext.Provider>, element);
            })

            element.className = `${name}-control`;
            // control.id = id;
            let result: ControlPair = { control, controlType: types.Control };
            return result;
        }

        /**
         * 获取控件在类型
         * @param controlName 控件的名称
         */
        static getControlType(controlName: string): Promise<{ Control: React.ComponentClass<any>, Props: { new() } }> {
            let arr = controlName.split(':');
            let fileName = arr[0];
            let name = arr[1] || 'default';
            let filePath = `${componentsDir}/${fileName}/control`;
            return new Promise((resolve, reject) => {
                requirejs([filePath], function (exports) {
                    resolve({ Control: exports[name], Props: exports.Props });
                })
            })
        }

        async componentDidMount() {
        }

        renderRuntimeControls(controls: ControlDescription[]) {
            controls = controls || [];
            return controls.map((o, i) =>
                <div id={o.id} key={o.id}
                    ref={async (e: HTMLElement) => {
                        if (!e) return;
                        var c = await this.createControlInstance(o, e);
                        var componet = Object.assign(c.control, { controlId: o.id, controlName: o.name });
                        this.controls.push(componet);
                        // if (this.props.controlCreated)
                        //     this.props.controlCreated(componet);
                    }} />
            );
        }


        merge(pageData: PageData, productTemplate: PageData) {
            console.assert(productTemplate != null);
            console.assert(pageData != null);
            pageData.controls = pageData.controls.filter(o => o.save != false);
            //===========================================================
            // 复制一份数据，不要在源数据上修改
            productTemplate = JSON.parse(JSON.stringify(productTemplate));
            // pageData = JSON.parse(JSON.stringify(pageData));
            //===========================================================
            // 模板里面的控件，不需要保存
            productTemplate.controls.forEach(o => o.save = false);

            for (let i = 0; i < pageData.controls.length; i++) {
                let sourceControl = pageData.controls[i];
                // let templateControlId = templateControlIds[sourceControl.controlName];
                let controlIndex: number;
                // if (templateControlId != null) {
                //     for (let i = 0; i < productTemplate.controls.length; i++) {
                //         if (productTemplate.controls[i].controlId == templateControlId) {
                //             controlIndex = i;
                //             break;
                //         }
                //     }
                // }

                let existsControl = productTemplate.controls.filter(o => o.id == sourceControl.id)[0];
                if (existsControl) {
                    continue;
                }

                if (controlIndex != null) {
                    let i = controlIndex;
                    productTemplate.controls[i] = sourceControl;
                }
                else {
                }
            }
            // productTemplate.controls = productTemplate.controls.filter(o => o.controlId != templateControlIds.other);
            pageData.controls = productTemplate.controls;
            //Object.assign(pageData, productTemplate);
            // return productTemplate;
        }

        render() {
            let children = React.Children.toArray(this.props.children) || [];
            // let { pageData, template } = this.props;
            let pageData = { controls: [] };
            // if (template) {
            //     this.merge(pageData, template);
            // }

            this.viewControlsCount = 0;
            this.viewControlsCount = pageData.controls.filter(o => o.position == 'view').length; //this.viewControlsCount + (pageData.view.controls || []).length;

            let pageView = this;
            return <div {...this.props}
                ref={(e: HTMLElement) => this.element = e || this.element}>
                <PageViewContext.Provider value={{ pageView }}>
                    {this.props.children}
                </PageViewContext.Provider>
            </div>;
        }
    }

    Control.register(PageView);

}

