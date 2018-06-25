namespace jueying {
    export class Errors {
        static fileNotExists(fileName: string): any {
            return new Error(`File '${fileName}' is not exists.`);
        }
        static argumentNull(argumentName: string) {
            return new Error(`Argument ${argumentName} is null or empty.`);
        }
        static pageDataIsNull() {
            return new Error(`Page data is null.`);
        }
    }
}