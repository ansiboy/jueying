import { Component } from "react";
import { TextDecoder, TextEncoder } from "util"

export function componentUpdateFinish<P, S>(component: Component<P, S>) {
    return new Promise(function (resolve, reject) {
        let render = component.render
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
}

global["TextEncoder"] = TextEncoder as any
global["TextDecoder"] = TextDecoder as any

// export { JSDOM } from "jsdom"
let jsdom = require("jsdom")
export let JSDOM = jsdom.JSDOM as import("jsdom").JSDOM;