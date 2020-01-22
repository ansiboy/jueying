"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const property_editor_1 = require("./property-editor");
const style_1 = require("./style");
class EditorPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { componentDatas: [], designer: null };
        this.designerComponentChanged = () => {
            console.assert(this.designer != null);
            this.setState({ designer: this.designer });
        };
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
        this.setState({ designer: value });
    }
    render() {
        let { empty } = this.props;
        empty = empty || React.createElement("div", { className: "empty" }, "\u6682\u65E0\u53EF\u7528\u7684\u5C5E\u6027");
        let { designer } = this.state;
        return React.createElement("div", { className: `${style_1.classNames.editorPanel} ${this.props.className || ""}`, ref: (e) => this.element = e || this.element },
            React.createElement(property_editor_1.PropertyEditor, { designer: designer, ref: e => this.editor = e || this.editor, empty: empty, customRender: this.props.customRender }));
    }
}
exports.EditorPanel = EditorPanel;
//# sourceMappingURL=editor-panel.js.map