namespace jueying.extentions {
    export interface DocumentStorage {
        list(): Promise<PageDocument[]>;
        load(name: string): Promise<PageDocument>;
        save(name: string, doc: PageDocument): Promise<any>;
        remove(name: string): Promise<any>;
    }

    export class LocalDocumentStorage implements DocumentStorage {
        private static prefix = 'pdc';
        async list(): Promise<PageDocument[]> {
            // throw new Error("Method not implemented.");
            let items = new Array<PageDocument>();
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (!key.startsWith(LocalDocumentStorage.prefix)) {
                    continue;
                }

                let text = localStorage.getItem(key);
                items.push(JSON.parse(text));
            }

            return items;
        }
        async load(name: string) {
            let key = `${LocalDocumentStorage.prefix}_${name}`;
            let text = localStorage.getItem(name);
            if (text == null)
                return null;

            return JSON.parse(text);
        }
        async save(name: string, doc: PageDocument) {
            let key = `${LocalDocumentStorage.prefix}_${name}`;
            let value = JSON.stringify(doc);
            localStorage.setItem(key, value);
        }
        async remove(name: string): Promise<any> {
            let key = `${LocalDocumentStorage.prefix}_${name}`;
            localStorage.removeItem(key);
        }

    }
}