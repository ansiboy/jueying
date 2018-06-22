namespace jueying {
    export class Errors {
        static argumentNull(argumentName: string) {
            return new Error(`Argument ${argumentName} is null or empty.`);
        }
        static pageDataIsNull() {
            return new Error(`Page data is null.`);
        }
    }
}