/// <reference path="comon.tsx"/>

namespace jueying.extentions {
    // let pd = jueying;

    class PageViewContainer extends React.Component<{}, {}>{
        private static phone_screen_width = 320;
        private static phone_screen_height = 568;
        private static scale = 0.6;

        static phone_height = PageViewContainer.phone_screen_height * PageViewContainer.scale;
        static phone_width = PageViewContainer.phone_screen_width * PageViewContainer.scale;

        render() {
            let { phone_screen_width, phone_screen_height, scale } = PageViewContainer;
            let transform = `translateX(-${phone_screen_width * (1 - scale) / 2}px) translateY(-${phone_screen_height * (1 - scale) / 2}px) scale(${scale})`;
            let style = { width: phone_screen_width, height: phone_screen_height, minWidth: 'unset', transform };
            return <div style={style}>
                {this.props.children}
            </div>
        }
    }

    export interface TemplateDialogProps {
    }
    export interface TemplateDialogState {
        templates: PageDocument[],
        pageIndex: number,
        selectedTemplateIndex: number,
        fileName?: string,
    }
    export class TemplateDialog extends React.Component<TemplateDialogProps, TemplateDialogState> {
        private fetchTemplates: () => Promise<PageDocument[]>;
        private callback: (template: PageDocument, fileName: string) => void;
        private currentPageIndex: number;
        private validator: dilu.FormValidator;

        constructor(props) {
            super(props);
            this.state = { templates: null, pageIndex: 0, selectedTemplateIndex: 0 };
        }
        private selectTemplate(templateIndex: number) {
            this.setState({ selectedTemplateIndex: templateIndex })
        }
        private async confirm() {
            let isValid = await this.validator.check();
            if (!isValid)
                return Promise.reject();

            if (this.callback) {
                let { templates, selectedTemplateIndex, fileName } = this.state;
                let template = templates[selectedTemplateIndex];
                this.callback(template, fileName);
                this.close();
            }
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
        componentDidMount() {
            this.validator = new dilu.FormValidator(dialog_element,
                { name: 'fileName', rules: [dilu.rules.required('请输入文件名')] }
            );
        }
        render() {

            let { pageIndex, templates, selectedTemplateIndex, fileName } = this.state;
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

            return <div className="modal-dialog">
                <div className="modal-content" style={{ width: dialog_content_width }}>
                    <div className="modal-header">
                        <button type="button" className="close" onClick={() => ui.hideDialog(dialog_element)}>
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
                                            <div key={i} style={{ width, height, float: i == templates.length - 1 ? 'right' : 'left', margin: i == 1 ? '0 0 0 15px' : null }} //i == templates.length - 1 ? 'right' : 'left', margin: i == 1 ? '0 0 0 15px' : null 
                                                onClick={() => this.selectTemplate(i)}
                                                className={i == selectedTemplateIndex ? classNames.templateSelected : null}>
                                                <PageViewContainer>
                                                    {ControlFactory.create(o.pageData)}
                                                    <div className="name">
                                                        <span>{o.name}</span>
                                                    </div>
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
                                <input name="fileName" className="form-control" value={fileName || ''}
                                    onChange={(e) => {
                                        fileName = (e.target as HTMLInputElement).value;
                                        this.setState({ fileName });
                                    }} />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-default"
                            onClick={() => this.close()}>取消</button>
                        <button className="btn btn-primary"
                            onClick={() => this.confirm()}>确定</button>
                    </div>
                </div>
            </div>
        }

        open() {
            this.setState({ pageIndex: 0, selectedTemplateIndex: 0, fileName: '' });
            ui.showDialog(dialog_element);
        }

        close() {
            ui.hideDialog(dialog_element);
        }

        static show(fetchTemplates: () => Promise<PageDocument[]>,
            callback: (tmp: PageDocument, fileName?: string) => void) {
            defaultInstance.callback = callback;
            defaultInstance.fetchTemplates = fetchTemplates;
            defaultInstance.open();
        }
    }

    let dialog_element = document.createElement('div');
    dialog_element.className = `modal fade ${classNames.templateDialog}`;
    document.body.appendChild(dialog_element);
    let defaultInstance: TemplateDialog;
    ReactDOM.render(<TemplateDialog ref={(e) => defaultInstance = e || defaultInstance} />, dialog_element);

}