import { ComponentsConfig } from "../../out"

export let componentsConfig: ComponentsConfig = {
    "Image": {
        type: import("./components/image"),
        editor: import("./editors/image")
    }
}