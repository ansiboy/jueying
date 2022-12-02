import { ComponentsConfig } from "../../../out"
export let typeNames = { image: "Image", button: "Button" }

export let componentsConfig: ComponentsConfig = {}

componentsConfig[typeNames.image] = {
    type: import("./components/image"),
    editor: import("./editors/image")
}

componentsConfig[typeNames.button] = {
    type: import("./components/button"),
    editor: import("./editors/button"),
}