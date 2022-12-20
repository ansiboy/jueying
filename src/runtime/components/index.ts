import { ComponentTypes } from "../types";
import { ComponentPlaceHolder } from "./component-placeholder";
import { componentTypeNames } from "./component-type-names";
import { Page } from "./page";
import { Text } from "./text";

export { ComponentPlaceHolder } from "./component-placeholder"
export { Page } from "./page"
export { Text } from "./text"
export { componentTypeNames } from "./component-type-names"

export let componentTypes: ComponentTypes = {};
componentTypes[componentTypeNames.placeHolder] = ComponentPlaceHolder;
componentTypes[componentTypeNames.page] = Page;
componentTypes[componentTypeNames.text] = Text;