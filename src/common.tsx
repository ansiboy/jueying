import { ComponentData } from "jueying-core";
import { ComponentTypes } from "./components";


export let proptDisplayNames: { [prop: string]: string } = {
}


export { guid, Callback } from "maishu-toolkit";

export function translateComponentDataChildren(children: ComponentData["children"]): ComponentData[] {
    if (children == null || children.length == 0)
        return [];

    let r: ComponentData[] = [];

    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        if (typeof child == "string") {
            child = { type: ComponentTypes.Text, props: { text: child } };
            r.push(child);
        }
        else {
            r.push(children[i] as ComponentData);
        }
    }

    return r;
}

