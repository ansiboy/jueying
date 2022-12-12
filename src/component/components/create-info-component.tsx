import * as React from "react"

export function createInfoComponent(text: string) {
    return class InfoComponent extends React.Component {
        render() {
            return <div className="text-center" style={{ paddingTop: 20, paddingBottom: 20 }}>
                {text}
            </div>
        }
    }
}