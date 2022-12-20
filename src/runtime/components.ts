import { ComponentPlaceHolder } from "./components/component-placeholder";
import { componentTypeNames } from "./components/component-type-names";
import { Page } from "./components/page";
import { ComponentTypes } from "./types";
import { Text } from "./components/text";

export let componentTypes: ComponentTypes = {};
componentTypes[componentTypeNames.placeHolder] = ComponentPlaceHolder;
componentTypes[componentTypeNames.page] = Page;
componentTypes[componentTypeNames.text] = Text;