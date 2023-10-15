import { TextDecoder, TextEncoder } from "util"
import { ComponentData,Component } from "maishu-jueying/out/runtime";
import { Text } from "maishu-jueying/out/runtime/components"
import { guid } from "maishu-toolkit/out/guid"

export function text(text: string): ComponentData {
    let props: Text["props"] = { value: text }
    return { id: guid(), type: Component.typeNames.text, props, children: [] }
}
