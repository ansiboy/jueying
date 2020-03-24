"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const components_1 = require("./components");
const style_1 = require("./style");
class ComponentPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { componets: [] };
        this.designer = this.props.designer;
    }
    get element() {
        return this.toolbarElement;
    }
    componentDraggable(toolItemElement, componentData) {
        console.assert(toolItemElement != null);
        toolItemElement.draggable = true;
        toolItemElement.addEventListener('dragstart', function (ev) {
            componentData.props = componentData.props || {};
            ev.dataTransfer.setData(components_1.constants.componentData, JSON.stringify(componentData));
            ev.dataTransfer.setData('mousePosition', JSON.stringify({ x: ev.offsetX, y: ev.offsetY }));
        });
    }
    setComponets(componets) {
        this.setState({ componets });
    }
    static getComponentData(dataTransfer) {
        var str = dataTransfer.getData(components_1.constants.componentData);
        if (!str)
            return;
        return JSON.parse(str);
    }
    /** 获取光标在图标内的位置 */
    static mouseInnerPosition(dataTransfer) {
        let str = dataTransfer.getData('mousePosition');
        if (!str)
            return;
        return JSON.parse(str);
    }
    render() {
        let empty = this.props.empty || React.createElement("div", { className: "empty" }, "\u6682\u65E0\u53EF\u7528\u7EC4\u4EF6");
        let props = Object.assign({}, this.props);
        let componets = this.state.componets || [];
        return React.createElement("ul", Object.assign({}, props, { className: `${style_1.classNames.componentPanel} ${this.props.className || ""}`, ref: (e) => this.toolbarElement = this.toolbarElement || e }), componets.length == 0 ? empty : componets.map((c, i) => {
            let props = { key: i };
            props[ComponentPanel.componentIndexName] = `${i}`;
            return React.createElement("li", Object.assign({}, props, { className: style_1.classNames.componentIcon }),
                React.createElement("div", { className: "btn-link" },
                    React.createElement("i", { className: c.icon, style: { fontSize: 44, color: 'black' }, ref: e => {
                            if (!e)
                                return;
                            let ctrl = c.componentData;
                            this.componentDraggable(e, ctrl);
                        } })),
                React.createElement("div", null, c.displayName));
        }));
    }
}
exports.ComponentPanel = ComponentPanel;
ComponentPanel.componentIndexName = "data-component-index";
//# sourceMappingURL=component-panel.js.map