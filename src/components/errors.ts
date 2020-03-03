export class Errors {
    static propCanntNull(componentName: string, property: string) {
        let msg = `${componentName} property ${property} cannt be null or empty.`
        return new Error(msg)
    }
    static placeHolderIdNull(): Error {
        let msg = `Place holder property id cannt be null or empty.`
        return new Error(msg)
    }
    static canntFindMasterPage(componentId: string) {
        return new Error(`Can not find master page for component container ${componentId}.`)
    }
}