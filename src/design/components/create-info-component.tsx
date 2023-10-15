import * as React from "react"
import { DesignComponent } from "../design-component"

export function createInfoComponent(text: string, typeName: string) {
    DesignComponent.register(class InfoComponent extends React.Component {
        static typeName = typeName;

        render() {
            return <div className="text-center" style={{ paddingTop: 20, paddingBottom: 20 }}>
                {text}
            </div>
        }
    })
}