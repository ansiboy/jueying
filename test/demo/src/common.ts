import { TextDecoder, TextEncoder } from "util"
import { ComponentData, componentTypeNames } from "maishu-jueying/out/runtime";
import { Text } from "maishu-jueying/out/runtime/components"
import { guid } from "maishu-toolkit/out/guid"

export function text(text: string): ComponentData {
    let props: Text["props"] = { value: text }
    return { id: guid(), type: componentTypeNames.text, props, children: [] }
}