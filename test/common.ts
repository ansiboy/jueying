import { TextDecoder, TextEncoder } from "util"
import { ComponentData, PageDesigner, Component } from "../src";
import { guid } from "maishu-toolkit/out/guid"
import { Props } from "../src/runtime/components/text";

let Text = Component.types[Component.typeNames.text];

export function designerUpdateFinish<P, S>(component: PageDesigner) {
    let render = component.render
    let p = new Promise(function (resolve, reject) {
        let timeoutId: number | null = null
        component.render = function () {
            let r = render.apply(component, [])

            if (timeoutId != null)
                window.clearTimeout(timeoutId)

            timeoutId = window.setTimeout(() => {
                resolve({})
            }, 1000)

            return r
        }
    })

    p.finally(() => {
        component.render = render
    })

    return p
}

export function text(text: string): ComponentData {
    let props: Props = { value: text }
    return { id: guid(), type: Component.typeNames.text, props, children: [] }
}

global["TextEncoder"] = TextEncoder as any
global["TextDecoder"] = TextDecoder as any

// export { JSDOM } from "jsdom"
let jsdom = require("jsdom")
export let JSDOM = jsdom.JSDOM as typeof import("jsdom").JSDOM;
