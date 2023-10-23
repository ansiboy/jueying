import Container from "./components/component-placeholder";
import Page from "./components/page";
import Text from "./components/text";
import { DefaultTypes } from "./types";

export let defaultComponentTypes: DefaultTypes = {
    Page: Page,
    Container: Container,
    Text: Text
}

export let defaultTypeNames: { [k in keyof DefaultTypes]: string } = {} as any;
Object.keys(defaultComponentTypes).forEach(key => {
    (defaultTypeNames as any)[key] = key;
})