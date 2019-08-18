define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Errors {
        static placeHolderIdNull() {
            let msg = `Place holder property id cannt be null or empty.`;
            return new Error(msg);
        }
        static fileNotExists(fileName) {
            return new Error(`File '${fileName}' is not exists.`);
        }
        static argumentNull(argumentName) {
            return new Error(`Argument ${argumentName} is null or empty.`);
        }
        static pageDataIsNull() {
            return new Error(`Page data is null.`);
        }
        static toolbarRequiredKey() {
            return new Error(`Toolbar has not a key prop.`);
        }
        static loadPluginFail(pluginId) {
            return new Error(`Load plugin '${pluginId}' fail.`);
        }
        static idRequired() {
            return new Error(`Property id is required.`);
        }
        static canntFindHost(componentId) {
            return new Error(`Can not find host element for component container ${componentId}.`);
        }
        static propCanntNull(componentName, property) {
            let msg = `${componentName} property ${property} cannt be null or empty.`;
            return new Error(msg);
        }
        static argumentFieldCanntNull(fieldName, argumentName) {
            let msg = `${fieldName} of argument ${argumentName} cannt be null or empty.`;
            return new Error(msg);
        }
    }
    exports.Errors = Errors;
});
//# sourceMappingURL=errors.js.map