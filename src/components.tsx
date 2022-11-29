import React = require("react")
import { strings } from "./strings"

export function createInfoComponent(text: string) {
    return class InfoComponent extends React.Component {
        render() {
            return <div className="text-center" style={{ paddingTop: 20, paddingBottom: 20 }}>
                {text}
            </div>
        }
    }
}

export function createLoadingComponent() {
    return class FakeComponent extends React.Component<any> {
        render() {
            return <div key={this.props.id} style={{ padding: "50px 0 50px 0", textAlign: "center" }}>
                {strings.componentLoading}
            </div>
        }
    }
}