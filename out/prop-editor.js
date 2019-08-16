"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class PropEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: props.value };
    }
    componentWillReceiveProps(props) {
        this.setState({ value: props.value });
    }
    static dropdown(items) {
        return dropdown(items);
    }
    static textInput() {
        return TextInput;
    }
}
exports.PropEditor = PropEditor;
class TextInput extends PropEditor {
    render() {
        let { value } = this.state;
        return React.createElement("input", { className: 'form-control', value: value || '', onChange: e => {
                this.setState({ value: e.target.value });
                this.props.onChange(e.target.value);
            } });
    }
}
exports.TextInput = TextInput;
function dropdown(items) {
    return class Dropdown extends PropEditor {
        render() {
            let { value } = this.state;
            value = value || '';
            if (Array.isArray(items)) {
                let tmp = items;
                items = {};
                for (let i = 0; i < tmp.length; i++) {
                    items[tmp[i]] = tmp[i];
                }
            }
            return React.createElement("select", { className: 'form-control', value: value, onChange: e => {
                    value = e.target.value;
                    this.setState({ value });
                    this.props.onChange(value);
                } }, Object.getOwnPropertyNames(items).map(o => React.createElement("option", { key: o, value: o }, items[o])));
        }
    };
}
//# sourceMappingURL=prop-editor.js.map