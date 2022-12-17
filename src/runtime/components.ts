import { ComponentPlaceHolder } from "./components/component-placeholder";
import { Page } from "./components/page";
import { ComponentTypes } from "./types";

export let componentTypes: ComponentTypes = {};
componentTypes[ComponentPlaceHolder.typeName] = ComponentPlaceHolder
componentTypes[Page.typeName] = Page