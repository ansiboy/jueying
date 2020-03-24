export declare class Errors {
    static placeHolderIdNull(): any;
    static fileNotExists(fileName: string): any;
    static argumentNull(argumentName: string): Error;
    static argumentRangeError(argumentName: string): Error;
    static pageDataIsNull(): Error;
    static toolbarRequiredKey(): Error;
    static loadPluginFail(pluginId: string): Error;
    static idRequired(): Error;
    static canntFindMasterPage(componentId: string): Error;
    static propCanntNull(componentName: string, property: string): Error;
    static argumentFieldCanntNull(fieldName: string, argumentName: string): Error;
}
