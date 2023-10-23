import Text from "../runtime/components/text";
import { DefaultTypes } from "../runtime/types";
import DesignContainer from "./components/design-component-placeholder";
import DesignPage from "./components/design-page";

export let defaultTypes: DefaultTypes = {
    Page: DesignPage,
    Container: DesignContainer,
    Text: Text
}