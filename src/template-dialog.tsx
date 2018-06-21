/// <reference path="comon.tsx"/>

namespace pdesigner {
    // let scale = 0.8
    class PageViewContainer extends React.Component<{}, {}>{
        private static phone_screen_width = 320;
        private static phone_screen_height = 568;
        private static scale = 0.6;

        static phone_height = PageViewContainer.phone_screen_height * PageViewContainer.scale;
        static phone_width = PageViewContainer.phone_screen_width * PageViewContainer.scale;

        render() {
            let { phone_screen_width, phone_screen_height } = PageViewContainer;
            let transform = `translateX(-${phone_screen_width * 0.2}px) translateY(-${phone_screen_height * 0.2}px) scale(0.6)`;// `scale(0.6)`; //
            let style = { width: phone_screen_width, height: phone_screen_height, minWidth: 'unset', transform };
            return <div style={style}>
                {this.props.children}
            </div>
        }
    }

    export interface TemplateDialogProps {
    }
    export interface TemplateDialogState {
        templates: ElementData[],
        pageIndex: number,
        selectedTemplateIndex: number,
    }
    export class TemplateDialog extends React.Component<TemplateDialogProps, TemplateDialogState> {
        element: HTMLElement;
        private fetchTemplates: () => Promise<ElementData[]>;
        private callback: (template: ElementData) => void;
        currentPageIndex: number;
        static loadingElement = <div className={classNames.emptyTemplates}>数据正在加载中...</div>
        constructor(props) {
            super(props);
            this.state = { templates: null, pageIndex: 0, selectedTemplateIndex: 0 };
        }
        private selectTemplate(templateIndex: number) {
            // if (this.callback) {
            //     this.callback(template);
            //     this.close();
            // }
            this.setState({ selectedTemplateIndex: templateIndex })
        }
        async loadTemplates(pageIndex: number) {
            if (!this.fetchTemplates)
                return;

            if (this.currentPageIndex == pageIndex)
                return;

            let tmps = await this.fetchTemplates();
            this.setState({ templates: tmps });
            this.currentPageIndex = pageIndex;
        }
        render() {

            let { pageIndex, templates, selectedTemplateIndex } = this.state;
            this.loadTemplates(pageIndex);

            let height = PageViewContainer.phone_height;
            let width = PageViewContainer.phone_width;
            let style: React.CSSProperties = {
                float: 'left', height, width,
            };

            let margin = 15;    // 间距
            let count = 3;
            let dialog_header_height = 50;
            let dialog_footer_height = 70;
            let dialog_content_width = width * count + margin * (count + 1);
            // let dialog_content_height = height + dialog_header_height + dialog_footer_height + margin * 2;

            return <div className="modal fade" ref={(e) => this.element = e || this.element}>
                <div className="modal-dialog">
                    <div className="modal-content" style={{ width: dialog_content_width }}>
                        <div className="modal-header">
                            <button type="button" className="close" onClick={() => ui.hideDialog(this.element)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 className="modal-title">选择模板</h4>
                        </div>
                        <div className="modal-body clearfix">
                            <div className="form-group">
                                {templates == null ?
                                    <div className={classNames.loadingTemplates}>数据正在加载中</div> :
                                    templates.length == 0 ?
                                        <div className={classNames.emptyTemplates}>暂无模版数据</div> :
                                        <React.Fragment>
                                            {templates.map((o, i) =>
                                                <div key={i} style={{ width, height, float: i == templates.length - 1 ? 'right' : 'left', margin: i == 1 ? '0 0 0 15px' : null }}
                                                    onClick={() => this.selectTemplate(i)}
                                                    className={i == selectedTemplateIndex ? classNames.templateSelected : null}>
                                                    <PageViewContainer>
                                                        {ControlFactory.create(o)}
                                                        <h3 style={{ marginTop: -36, height: 36, textAlign: 'center' }}>空白模版</h3>
                                                    </PageViewContainer>
                                                </div>
                                            )}
                                            <div className="clearfix"></div>
                                        </React.Fragment>
                                }
                            </div>
                            <div className="form-group" style={{ marginBottom: 0 }}>
                                <label className="pull-left">文件名</label>
                                <div style={{ marginLeft: 100 }} >
                                    <input className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-default"
                                onClick={() => this.close()}>取消</button>
                            <button className="btn btn-primary">确定</button>
                        </div>
                    </div>
                </div>
            </div >
        }

        open() {
            this.setState({ pageIndex: 0 });
            ui.showDialog(this.element);
        }

        close() {
            ui.hideDialog(this.element);
        }

        static show(fetchTemplates: () => Promise<ElementData[]>, callback: (tmp: ElementData) => void) {
            defaultInstance.callback = callback;
            defaultInstance.fetchTemplates = fetchTemplates;
            defaultInstance.open();
        }
    }

    let element = document.createElement('div');
    document.body.appendChild(element);
    let defaultInstance: TemplateDialog;
    ReactDOM.render(<TemplateDialog ref={(e) => defaultInstance = e || defaultInstance} />, element);

}