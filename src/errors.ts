import { Errors as BaseErrors } from "maishu-toolkit/out/errors";

class Errors extends BaseErrors {
    placeHolderIdNull(): any {
        let msg = `Place holder property id cannt be null or empty.`
        return new Error(msg)
    }
    fileNotExists(fileName: string): any {
        return new Error(`File '${fileName}' is not exists.`);
    }
    argumentNull(argumentName: string) {
        return new Error(`Argument ${argumentName} is null or empty.`);
    }
    argumentRangeError(argumentName: string) {
        return new Error(`Argument ${argumentName} range error.`);
    }
    pageDataIsNull() {
        return new Error(`Page data is null.`);
    }
    toolbarRequiredKey() {
        return new Error(`Toolbar has not a key prop.`);
    }
    loadPluginFail(pluginId: string) {
        return new Error(`Load plugin '${pluginId}' fail.`);
    }
    idRequired() {
        return new Error(`Property id is required.`)
    }
    canntFindMasterPage(componentId: string) {
        return new Error(`Can not find master page for component container ${componentId}.`)
    }
    propCanntNull(componentName: string, property: string) {
        let msg = `${componentName} property ${property} cannt be null or empty.`
        return new Error(msg)
    }
    argumentFieldCanntNull(fieldName: string, argumentName: string) {
        let msg = `${fieldName} of argument ${argumentName} cannt be null or empty.`
        return new Error(msg)
    }
    contextArgumentNull() {
        let msg = `Context argument null.`
        let error = new Error(msg)
        error.name = errors.contextArgumentNull.name
        return error
    }
}

export let errors = new Errors();