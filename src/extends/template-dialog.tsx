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

    const PAGE_SIZE = 3;
    type LoadDocuments = (pageIndex: number, pageSize: number) => Promise<{ items: DocumentData[], count: number }>;

    export interface TemplateDialogProps {
    }

    export interface TemplateDialogState {
        templates: DocumentData[],
        templatesCount?: number,
        pageIndex: number,
        selectedTemplateIndex: number,
        fileName?: string,
        showFileNameInput: boolean,
    }

    export class TemplateDialog extends React.Component<TemplateDialogProps, TemplateDialogState> {
        private fetchTemplates: LoadDocuments;
        private callback: (template: DocumentData, fileName: string) => void;
        private currentPageIndex: number;
        private validator: dilu.FormValidator;

        constructor(props) {
            super(props);
            this.state = { templates: null, pageIndex: 0, selectedTemplateIndex: 0, showFileNameInput: true };
        }
        private selectTemplate(templateIndex: number) {
            this.setState({ selectedTemplateIndex: templateIndex })
        }
        private async confirm() {
            if (this.state.showFileNameInput) {
                let isValid = await this.validator.check();
                if (!isValid)
                    return Promise.reject();
            }

            if (this.callback) {
                let { templates, selectedTemplateIndex, fileName } = this.state;
                let template = templates[selectedTemplateIndex];
                this.callback(template, fileName);
                this.close();
            }
        }
        async loadTemplates(pageIndex: number) {
            console.assert(this.fetchTemplates != null);
            let tmps = await this.fetchTemplates(pageIndex, PAGE_SIZE);
            console.assert(tmps != null);
            console.assert(tmps.count > 0);
            this.setState({ templates: tmps.items, templatesCount: tmps.count });
            this.currentPageIndex = pageIndex;
        }
        componentDidMount() {
            this.validator = new dilu.FormValidator(dialog_element,
                { name: 'fileName', rules: [dilu.rules.required('请输入文件名')] }
            );
        }
        async showPage(pageIndex: number) {
            let result = await this.fetchTemplates(pageIndex, PAGE_SIZE);
            this.setState({ templates: result.items, templatesCount: result.count, pageIndex });
        }
        render() {

            let { pageIndex, templates, templatesCount, selectedTemplateIndex, fileName, showFileNameInput, } = this.state;

            let height = PageViewContainer.phone_height;
            let width = PageViewContainer.phone_width;
            let margin = 15;    // 间距
            let count = PAGE_SIZE;
            let dialog_content_width = width * count + margin * (count + 1);
            let pagingBar: JSX.Element;
            if (templatesCount != null) {
                let pagesCount = Math.ceil(templatesCount / PAGE_SIZE);
                let children = []
                for (let i = 0; i < pagesCount; i++) {
                    children.push(
                        <li key={i} className={i == pageIndex ? 'active' : null}>
                            <a href="javascript:" onClick={() => this.showPage(i)}>{i + 1}</a>
                        </li>
                    );
                }
                pagingBar = React.createElement("ul", { className: 'pagination', style: { margin: 0 } }, children);
            }
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
                                            <div key={i} style={{ width, height, float: i == 2 ? 'right' : 'left', margin: i == 1 ? '0 0 0 15px' : null }} //i == templates.length - 1 ? 'right' : 'left', margin: i == 1 ? '0 0 0 15px' : null 
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
                        {showFileNameInput ? <div className="form-group" style={{ marginBottom: 0 }}>
                            <label className="pull-left">文件名</label>
                            <div style={{ marginLeft: 100 }} >
                                <input name="fileName" className="form-control" value={fileName || ''}
                                    onChange={(e) => {
                                        fileName = (e.target as HTMLInputElement).value;
                                        this.setState({ fileName });
                                    }} />
                            </div>
                        </div> : null}
                    </div>
                    <div className="modal-footer">
                        <div className="pull-left">
                            {pagingBar}
                        </div>
                        <div className="pull-right">
                            <button className="btn btn-default"
                                onClick={() => this.close()}>取消</button>
                            <button className="btn btn-primary"
                                onClick={() => this.confirm()}>确定</button>
                        </div>
                    </div>
                </div>
            </div>
        }

        open(requiredFileName?: boolean) {
            requiredFileName == null ? true : requiredFileName;
            this.setState({
                pageIndex: 0, selectedTemplateIndex: 0, fileName: '',
                showFileNameInput: requiredFileName, templates: [],
            });
            this.currentPageIndex = null;
            ui.showDialog(dialog_element);
            this.loadTemplates(0);
        }

        close() {
            ui.hideDialog(dialog_element);
        }

        static show(args: {
            fetch: LoadDocuments,
            requiredFileName?: boolean,
            callback?: (tmp: DocumentData, fileName?: string) => void
        }) {

            let { fetch, callback, requiredFileName } = args;
            defaultInstance.callback = callback;
            defaultInstance.fetchTemplates = fetch;
            defaultInstance.open(requiredFileName);
        }
    }

    let dialog_element = document.createElement('div');
    dialog_element.className = `modal fade ${classNames.templateDialog}`;
    document.body.appendChild(dialog_element);
    let defaultInstance: TemplateDialog;
    ReactDOM.render(<TemplateDialog ref={(e) => defaultInstance = e || defaultInstance} />, dialog_element);

}