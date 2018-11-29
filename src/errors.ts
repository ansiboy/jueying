module jueying {
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
        static canntFindHost(componentId: string) {
            return new Error(`Can not find host element for component container ${componentId}.`)
        }
    }
}