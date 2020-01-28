"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const component_wrapper_1 = require("./component-wrapper");
const errors_1 = require("./errors");
const common_1 = require("./common");
exports.ComponentWrapperContext = React.createContext(null);
function component(args) {
    return function (constructor) {
        // if (PageDesigner) {
        Component.setAttribute(constructor.name, args);
        // }
        Component.register(constructor.name, constructor);
        return constructor;
    };
}
exports.component = component;
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
        return Object.assign({ type }, component_wrapper_1.defaultComponentAttribute, attr || {});
    }
    static getPropEditors(componentData) {
        let componentType = typeof componentData == "string" ? "string" : componentData.type;
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
                common_1.proptDisplayNames[propName] = options.displayName;
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
    static getComponentType(componentName) {
        let componentType = Component.componentTypes[componentName];
        return componentType;
    }
}
//==========================================
// 用于创建 React 的 React.Fragment 
Component.Fragment = "";
//==========================================
// private static defaultComponentAttribute: ComponentAttribute = {
//     container: false, movable: false, showHandler: false, resize: false
// }
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
Component.componentTypes = {};
exports.Component = Component;
//# sourceMappingURL=component.js.map