import { Component } from "react";

export function componentUpdateFinish<P, S>(component: Component<P, S>) {

    return new Promise(function (resolve, reject) {
        let componentDidUpdate = component.componentDidUpdate
        let timeoutId: number | null = null
        component.componentDidUpdate = function (prevProps: P, prevState: S, snapshot?: any) {
            if (componentDidUpdate) {
                componentDidUpdate.apply(component, [prevProps, prevState, snapshot])
            }

            if (timeoutId != null)
                window.clearTimeout(timeoutId)

            timeoutId = window.setTimeout(() => {
                resolve({})
            }, 1000)

            // resolve({})
        }
    })
}