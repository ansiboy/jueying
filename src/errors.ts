export class Errors {
    static placeHolderIdNull(): any {
        let msg = `Place holder property id cannt be null or empty.`
        return new Error(msg)
    }
    static fileNotExists(fileName: string): any {
        return new Error(`File '${fileName}' is not exists.`);
    }
    static argumentNull(argumentName: string) {
        return new Error(`Argument ${argumentName} is null or empty.`);
    }
    static argumentRangeError(argumentName: string){
        return new Error(`Argument ${argumentName} range error.`);
    }
    static pageDataIsNull() {
        return new Error(`Page data is null.`);
    }
    static toolbarRequiredKey() {
        return new Error(`Toolbar has not a key prop.`);
    }
    static loadPluginFail(pluginId: string) {
        return new Error(`Load plugin '${pluginId}' fail.`);
    }
    static idRequired() {
        return new Error(`Property id is required.`)
    }
    static canntFindMasterPage(componentId: string) {
        return new Error(`Can not find master page for component container ${componentId}.`)
    }
    static propCanntNull(componentName: string, property: string) {
        let msg = `${componentName} property ${property} cannt be null or empty.`
        return new Error(msg)
    }
    static argumentFieldCanntNull(fieldName: string, argumentName: string) {
        let msg = `${fieldName} of argument ${argumentName} cannt be null or empty.`
        return new Error(msg)
    }
}