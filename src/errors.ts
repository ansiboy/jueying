namespace pdesigner {
    export class Errors {
        static argumentNull(argumentName: string) {
            return new Error(`Argument ${argumentName} is null or empty.`);
        }
    }
}