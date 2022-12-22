import { ComponentTypes } from "../../runtime";
import { componentTypeNames } from "../../runtime";
import { DesignComponentPlaceHolder } from "./design-component-placeholder";
import { DesignPage } from "./design-page";

export let designComponentTypes: ComponentTypes = {};
designComponentTypes[componentTypeNames.page] = DesignPage;
designComponentTypes[componentTypeNames.placeHolder] = DesignComponentPlaceHolder;