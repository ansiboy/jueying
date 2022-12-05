import { Callback } from "maishu-toolkit/out/callback"
import { errors } from "../errors"

export class DataList<T> {

    private items: T[] = []

    added: Callback<{ sender: DataList<T>, element: T }> = new Callback()
    removed: Callback<{ sender: DataList<T>, element: T }> = new Callback()

    add(element: T) {
        if (!element)
            throw errors.argumentNull("element")

        this.items.push(element)
        this.added.fire({ sender: this, element })
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
        this.removed.fire({ sender: this, element })
    }

    each(callback: (element: T, index?: number) => void) {
        if (!callback) throw errors.argumentNull("element")

        for (let i = 0; i < this.items.length; i++)
            callback(this.items[i], i)
    }

    get count() {
        return this.items.length
    }
}