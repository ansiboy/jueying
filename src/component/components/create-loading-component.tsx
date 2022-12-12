
import * as React from "react"
import { strings } from "../../strings"

export function createLoadingComponent() {
    return class FakeComponent extends React.Component<any> {
        render() {
            return <div key={this.props.id} style={{ padding: "50px 0 50px 0", textAlign: "center" }}>
                {strings.componentLoading}
            </div>
        }
    }
}