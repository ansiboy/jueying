import * as React from "react"

export function createInfoComponent(text: string, typeName: string) {
    return class InfoComponent extends React.Component {
        static typeName = typeName;

        render() {
            return <div className="text-center" style={{ paddingTop: 20, paddingBottom: 20 }}>
                {text}
            </div>
        }
    }
}