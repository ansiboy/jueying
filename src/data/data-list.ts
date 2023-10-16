import { Callback } from "maishu-toolkit/out/callback"
import { errors } from "../errors"

export class DataList<T> {

    private items: T[] = []

    added: Callback<{ sender: DataList<T>, dataItem: T }> = new Callback()
    removed: Callback<{ sender: DataList<T>, dataItem: T }> = new Callback()

    add(element: T) {
        if (!element)
            throw errors.argumentNull("element")

        this.items.push(element)
        this.added.fire({ sender: this, dataItem: element })
    }

    contains(element: T) {
        if (!element)
            throw errors.argumentNull("element")

        return this.items.indexOf(element) >= 0
    }

    remove(element: T) {
        if (!element)
            throw errors.argumentNull("element")

        this.items = this.items.filter(o => o != element)
        this.removed.fire({ sender: this, dataItem: element })
    }

    each(callback: (element: T, index?: number) => void) {
        if (!callback) throw errors.argumentNull("callback")

        for (let i = 0; i < this.items.length; i++)
            callback(this.items[i], i)
    }

    get count() {
        return this.items.length
    }

    map<S>(callback: (dataItem: T) => S) {
        return this.items.map(o => callback(o))
    }
}