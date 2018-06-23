namespace jueying.extentions {
    export interface DocumentStorage {
        list(): Promise<string[]>;
        load(name: string): Promise<ElementData>;
        save(name: string, pageData: ElementData): Promise<any>;
        remove(name: string): Promise<any>;
    }

    export class LocalDocumentStorage implements DocumentStorage {
        private static prefix = 'pdc_';
        async list(): Promise<string[]> {
            // throw new Error("Method not implemented.");
            let items = new Array<string>();
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (!key.startsWith(LocalDocumentStorage.prefix)) {
                    continue;
                }

                key = key.substr(LocalDocumentStorage.prefix.length)
                items.push(key);
            }

            return items;
        }
        async load(name: string) {
            let key = `${LocalDocumentStorage.prefix}${name}`;
            let text = localStorage.getItem(name);
            if (text == null)
                return null;

            return JSON.parse(text);
        }
        async save(name: string, pageData: ElementData) {
            let key = `${LocalDocumentStorage.prefix}${name}`;
            let value = JSON.stringify(pageData);
            localStorage.setItem(key, value);
        }
        async remove(name: string): Promise<any> {
            let key = `${LocalDocumentStorage.prefix}${name}`;
            localStorage.removeItem(key);
        }

    }
}