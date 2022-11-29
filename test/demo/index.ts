import { ComponentsConfig } from "../../out"

export let typeNames = { image: "Image" }

export let componentsConfig: ComponentsConfig = {}

componentsConfig[typeNames.image] = {
    type: import("./components/image"),
    editor: import("./editors/image")
}