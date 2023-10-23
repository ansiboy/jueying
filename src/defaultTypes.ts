import { defaultComponentTypes } from "./runtime/default-types";
import { defaultTypes as defaultDesignTypes } from "./design/default-types";
import { DefaultTypes } from "./runtime/types";

let defaultTypeNames: { [k in keyof DefaultTypes]: string } = {} as any;
Object.keys(defaultComponentTypes).forEach(key => {
    (defaultTypeNames as any)[key] = key;
})
export let defaultTypes = {
    design: defaultDesignTypes,
    runtime: defaultComponentTypes,
    names: defaultTypeNames,
}

