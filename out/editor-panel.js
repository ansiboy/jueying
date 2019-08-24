define(["require", "exports", "react", "./property-editor", "./style"], function (require, exports, React, property_editor_1, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class EditorPanel extends React.Component {
        constructor(props) {
            super(props);
            this.state = { componentDatas: [] };
            this.designerComponentChanged = () => {
                console.assert(this.designer != null);
                this.setState({ designer: this.designer });
            };
        }
        // componentWillReceiveProps(props: EditorPanelProps) {
        //     this.setState({})
        // }
        static getDerivedStateFromProps(props) {
            return {};
        }
        getComponentData(designer) {
            let componentDatas = [];
            let stack = new Array();
            stack.push(designer.pageData);
            while (stack.length > 0) {
                let item = stack.pop();
                componentDatas.push(item);
                let children = item.children || [];
                for (let i = 0; i < children.length; i++) {
                    stack.push(children[i]);
                }
            }
            return componentDatas;
        }
        get designer() {
            return this._designer;
        }
        set designer(value) {
            if (this._designer) {
                this._designer.componentRemoved.remove(this.designerComponentChanged);
                this._designer.componentAppend.remove(this.designerComponentChanged);
                this._designer.componentUpdated.remove(this.designerComponentChanged);
                this._designer.componentSelected.remove(this.designerComponentChanged);
            }
            if (value) {
                value.componentRemoved.add(this.designerComponentChanged);
                value.componentAppend.add(this.designerComponentChanged);
                value.componentUpdated.add(this.designerComponentChanged);
                value.componentSelected.add(this.designerComponentChanged);
            }
            this._designer = value;
        }
        // private designerComponentChanged(sender, ) {
        // }
        componentDidMount() {
        }
        render() {
            let { empty } = this.props;
            empty = empty || React.createElement("div", { className: "empty" }, "\u6682\u65E0\u53EF\u7528\u7684\u5C5E\u6027");
            let componentDatas = [];
            let selectedComponentIds = [];
            let designer = this.designer;
            if (designer) {
                componentDatas = this.getComponentData(designer);
                selectedComponentIds = designer.selectedComponentIds || [];
            }
            return React.createElement("div", { className: `${style_1.classNames.editorPanel} ${this.props.className || ""}`, ref: (e) => this.element = e || this.element },
                React.createElement(property_editor_1.PropertyEditor, { designer: designer, ref: e => this.editor = e || this.editor, empty: empty }));
        }
    }
    exports.EditorPanel = EditorPanel;
});
//# sourceMappingURL=editor-panel.js.map