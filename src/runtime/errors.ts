import { Errors } from "maishu-toolkit/out/errors";
import { PageDataParser } from "../runtime/page-data-parser";

class MyErrors extends Errors {
    pathFieldRequired(name: string) {
        let msg = `Path field of '${name}' component config can not be null or empty.`;
        return new Error(msg);
    }
    canntFindModule(name: string, path: string) {
        let msg = `Can not find component '${name}' in the module, module path is: '${path}'.`;
        return new Error(msg);
    }
    componentTypeNotExists(name: string) {
        let msg = `Component '${name}' not exists.`;
        return new Error(msg);
    }
    argumentNull(name: string) {
        let msg = `Argument '${name}' can not be null or empty.`;
        return new Error(msg);
    }
    propsFileNull(fieldName: string) {
        let msg = `Field '${fieldName}' of props is null.`;
        let error = new Error(msg);
        let name: keyof MyErrors = "propsFileNull";
        error.name = name;
        return error;
    }
    nullPageDataParserArguments() {
        let obj = { PageDataParser };
        let typeName: keyof typeof obj = "PageDataParser";
        let msg = `PageDataParser arguments is null. Is this component child of ${typeName}?`;
        let error = new Error(msg);
        let name: keyof MyErrors = "nullPageDataParserArguments";
        error.name = name;
        return error;
    }
}

export let errors = new MyErrors();
