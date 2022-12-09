import { ComponentsConfig } from "../../../out"
export let typeNames = { image: "Image", button: "Button", div: "div" }

export let componentsConfig: ComponentsConfig = {}

componentsConfig[typeNames.image] = {
    type: import("./components/image"),
    editor: import("./editors/image"),
    displayName: "图片",
    icon: "glyphicon glyphicon-picture"
}

componentsConfig[typeNames.button] = {
    type: import("./components/button"),
    editor: import("./editors/button"),
    displayName: "按钮",
    icon: "glyphicon glyphicon-tag"
}

componentsConfig[typeNames.div] = {
    editor: import("./editors/div"),
    icon: "glyphicon glyphicon-tag"


}