define(["require", "exports", "react", "./common", "./component", "./style"], function (require, exports, React, common_1, component_1, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ComponentPanel extends React.Component {
        constructor(props) {
            super(props);
            this.state = { componets: [] };
        }
        get element() {
            return this.toolbarElement;
        }
        componentDraggable(toolItemElement, componentData) {
            console.assert(toolItemElement != null);
            toolItemElement.draggable = true;
            toolItemElement.addEventListener('dragstart', function (ev) {
                componentData.props = componentData.props || {};
                ev.dataTransfer.setData(common_1.constants.componentData, JSON.stringify(componentData));
                ev.dataTransfer.setData('mousePosition', JSON.stringify({ x: ev.offsetX, y: ev.offsetY }));
            });
        }
        setComponets(componets) {
            this.setState({ componets });
        }
        static getComponentData(dataTransfer) {
            var str = dataTransfer.getData(common_1.constants.componentData);
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
            return React.createElement(component_1.DesignerContext.Consumer, null, context => {
                this.designer = context.designer;
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
                // return <div {...props as any} className={`${classNames.componentPanel} panel panel-primary`}>
                //     <div className="panel-heading">工具栏</div>
                //     <div className="panel-body">
                //     </div>
                // </div>
            });
        }
    }
    ComponentPanel.componentIndexName = "data-component-index";
    exports.ComponentPanel = ComponentPanel;
});
//# sourceMappingURL=component-panel.js.map