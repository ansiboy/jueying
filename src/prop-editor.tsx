namespace jueying {

    export interface PropEditorConstructor {
        new(props: PropEditorProps<any>)
    }
    export interface PropEditorProps<T> {
        value: T,
        onChange: (value: T) => void
    }
    export interface PropEditorState<T> {
        value: T
    }
    export abstract class PropEditor<S extends PropEditorState<T>, T> extends React.Component<PropEditorProps<T>, S> {
        constructor(props: PropEditorProps<T>) {
            super(props)

            this.state = { value: props.value } as PropEditorState<T> as any
        }

        componentWillReceiveProps(props: PropEditorProps<T>) {
            this.setState({ value: props.value } as any)
        }
    }

    export class TextInput extends PropEditor<PropEditorState<string>, string> {
        render() {
            let { value } = this.state
            return <input className='form-control' value={value as any || ''}
                onChange={e => {
                    this.setState({ value: e.target.value })
                    this.props.onChange(e.target.value)
                }} />
        }
    }

    export function dropdown(items: { [value: string]: string } | string[], emptyText?: string) {
        return class Dropdown extends PropEditor<{ value: string }, string>{
            render() {
                let { value } = this.state
                if (Array.isArray(items)) {
                    let tmp = items
                    items = {}
                    for (let i = 0; i < tmp.length; i++) {
                        items[tmp[i]] = tmp[i]
                    }
                }

                return <select className='form-control' value={value as any || ''}
                    onChange={e => {
                        value = e.target.value
                        this.setState({ value })
                        this.props.onChange(value)
                    }}>
                    {emptyText ? <option value="">{emptyText}</option> : null}
                    {Object.getOwnPropertyNames(items).map(o =>
                        <option key={o} value={o}>{items[o]}</option>
                    )}
                </select>
            }
        }

    }

}