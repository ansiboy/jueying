"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const errors_1 = require("./errors");
const propt_display_names_1 = require("./propt-display-names");
// type DesignerContextValue = { designer: ComponentDataHandler | null };
// export const DesignerContext = React.createContext<DesignerContextValue>({ designer: null });
exports.ComponentWrapperContext = React.createContext(null);
class Component {
    /**
     * 设置组件特性
     * @param typename 组件类型名称
     * @param attr 组件特性
     */
    static setAttribute(typename, attr) {
        Component.componentAttributes[typename] = attr;
    }
    /**
     * 获取组件特性
     * @param typename 组件类型名称
     */
    static getAttribute(type) {
        let typename = typeof type == 'string' ? type : type.name;
        let attr = Component.componentAttributes[typename];
        return Object.assign({ type }, Component.defaultComponentAttribute, attr || {});
    }
    static getPropEditors(componentData) {
        let componentType = componentData.type;
        let result = [];
        let propEditorInfo = this.componentPropEditors[componentType] || [];
        for (let i = 0; i < propEditorInfo.length; i++) {
            let propName = propEditorInfo[i].propName;
            let display = Component.componentPropEditorDisplay[`${componentType}.${propName}`];
            if (display != null && display(componentData) == false)
                continue;
            result.push(propEditorInfo[i]);
        }
        return result;
        // let classEditors = this.componentPropEditors[componentType] || []
        // Component.componentPropEditorDisplay[`${className}.${propName}`] = editorDisplay;
        // return classEditors
    }
    static getPropEditor(controlClassName, propName) {
        return this.getPropEditorByArray(controlClassName, propName);
    }
    /** 通过属性数组获取属性的编辑器 */
    static getPropEditorByArray(controlClassName, propNames) {
        let classEditors = this.componentPropEditors[controlClassName] || [];
        let editor = classEditors.filter(o => o.propName == propNames)[0];
        return editor;
    }
    static setPropEditor(componentTypeOrOptions, propName, editorType, group) {
        let componentType;
        let editorDisplay;
        if (typeof componentTypeOrOptions == "object") {
            let options = componentTypeOrOptions;
            componentType = options.componentType;
            propName = options.propName;
            editorType = options.editorType;
            group = options.group;
            editorDisplay = options.display;
            if (options.displayName != null) {
                propt_display_names_1.proptDisplayNames[propName] = options.displayName;
            }
        }
        else {
            componentType = componentTypeOrOptions;
        }
        group = group || '';
        // 属性可能为导航属性,例如 style.width
        let propNames = propName.split('.');
        let className = typeof componentType == 'string' ? componentType : componentType.prototype.typename || componentType.name;
        Component.componentPropEditorDisplay[`${className}.${propName}`] = editorDisplay;
        let classProps = Component.componentPropEditors[className] = Component.componentPropEditors[className] || [];
        for (let i = 0; i < classProps.length; i++) {
            let propName1 = classProps[i].propName; //classProps[i].propNames.join('.')
            let propName2 = propNames.join('.');
            if (propName1 == propName2) {
                classProps[i].editorType = editorType;
                return;
            }
        }
        classProps.push({ propName, editorType, group });
    }
    static createElement(componentData) {
        // return Component._createElement(componentData, { components: [], componentTypes: [] }, h);
        return exports.defaultComponentFactory(componentData);
    }
    static register(componentName, componentType, attr) {
        if (componentType == null && typeof componentName == 'function') {
            componentType = componentName;
            componentName = componentType.name;
            componentType['componentName'] = componentName;
        }
        if (!componentName)
            throw errors_1.Errors.argumentNull('componentName');
        if (!componentType)
            throw errors_1.Errors.argumentNull('componentType');
        Component.componentTypes[componentName] = componentType;
        if (attr)
            Component.setAttribute(componentName, attr);
    }
}
exports.Component = Component;
//==========================================
// 用于创建 React 的 React.Fragment 
Component.Fragment = "";
//==========================================
Component.defaultComponentAttribute = {
    container: false, movable: false, showHandler: false, resize: false
};
Component.componentAttributes = {
    'div': { container: true, movable: true, showHandler: true, resize: true },
    'img': { container: false, movable: true, resize: true },
    'label': { movable: true },
    'ul': { container: false, movable: true, showHandler: true, resize: false },
    'li': { container: true, movable: false, },
    'table': { container: false, movable: true, showHandler: true, resize: true },
    'thead': { container: false, movable: false },
    'tbody': { container: false, movable: false },
    'tfoot': { container: false, movable: false },
    'tr': { container: false, movable: false },
    'td': { container: true, movable: false },
};
Component.componentPropEditors = {};
Component.componentPropEditorDisplay = {};
// /**
//  * 将持久化的元素数据转换为 ReactElement
//  * @param componentData 元素数据
//  */
// private static _createElement(componentData: ComponentData, context: CreateElementContext, h?: ComponentFactory): React.ReactElement<any> | null {
//     if (!componentData) throw Errors.argumentNull('componentData')
//     h = h || defaultComponentFactory;
//     try {
//         let type: string | React.ComponentClass | React.ComponentType = componentData.type;
//         let componentName = componentData.type;
//         let controlType = Component.componentTypes[componentName];
//         if (controlType) {
//             type = controlType;
//         }
//         let children: (React.ReactElement<any> | string)[] = [];
//         for (let i = 0; i < componentData.children.length; i++) {
//             let child = componentData.children[i];
//             if (typeof child == "string")
//                 children.push(child);
//             else
//                 children.push(Component._createElement(child, context, h));
//         }
//         //componentData.children ? componentData.children.map(o => Component._createElement(o, context, h)) : [];
//         let props: ComponentProps<any> = componentData.props == null ? {} : Object.assign({}, componentData.props);//JSON.parse(JSON.stringify(componentData.props));
//         if (controlType != null && controlType["defaultProps"]) {
//             props = Object.assign({}, controlType["defaultProps"], props);
//         }
//         let result: JSX.Element
//         if (typeof type == 'string') {
//             if (props.text) {
//                 children.push(props.text)
//             }
//             //=========================================
//             // props.text 非 DOM 的 prop，并且已经使用完
//             // delete props.text
//             // if (h == React.createElement) {
//             //     delete props.attr
//             // }
//             //=========================================
//         }
//         let masterPage: MasterPage;
//         type = type == Component.Fragment ? React.Fragment : type
//         let ref = props.ref;
//         props.ref = function (e: any) {
//             if (typeof ref == "function")
//                 ref(e);
//             if (e instanceof MasterPage) {
//                 masterPage = e;
//                 for (let i = 0; i < context.componentTypes.length; i++) {
//                     let typeName = context.componentTypes[i];
//                     let childComponents = masterPage.childComponents[typeName] = masterPage.childComponents[typeName] || [];
//                     childComponents.push(context.components[i]);
//                 }
//             }
//             else if (e != null) {
//                 context.components.push(e);
//                 context.componentTypes.push(typeof type == "string" ? type : type.name);
//                 // masterPage.componentCreated.fire({ component: e, type: typeof type == "string" ? type : type.name });
//             }
//         };
//         result = h(componentData);
//         return result
//     }
//     catch (e) {
//         console.error(e);
//         return null;
//     }
// }
Component.componentTypes = {};
exports.defaultComponentFactory = (c) => {
    let children = (c.children || []).map(c => typeof c == "string" ? c : exports.defaultComponentFactory(c));
    let type = Component.componentTypes[c.type] || c.type;
    let e = React.createElement(type, c.props || {}, ...children);
    return e;
};
//# sourceMappingURL=component.js.map