
namespace jueying.extentions {
    export class PageDocument {
        private static instances: { [key: string]: PageDocument } = {};
        private storage: DocumentStorage;
        private _pageData: ElementData;
        private originalPageData: ElementData;
        private fileName: string;

        constructor(fileName, storage: DocumentStorage, pageData: ElementData, isNew?: boolean) {
            this.storage = storage;
            this._pageData = pageData;

            isNew = isNew == null ? false : isNew;
            if (isNew)
                this.originalPageData = { type: 'PageView', props: {} };
            else
                this.originalPageData = JSON.parse(JSON.stringify(pageData));

            this.fileName = fileName;
        }

        save() {
            this.originalPageData = JSON.parse(JSON.stringify(this._pageData));
            return this.storage.save(this.fileName, this.originalPageData);
        }

        get isChanged() {
            let equals = isEquals(this.originalPageData, this._pageData);
            return !equals;
        }

        get name() {
            return this.fileName;
        }

        get pageData() {
            return this._pageData;
        }

        // private static getHandler(doc: DocumentData) {
        //     let instance = this.instances[doc.name];
        //     if (instance == null) {
        //         instance = new PageDocument(doc, new LocalDocumentStorage());
        //         this.instances[doc.name] = instance;
        //     }
        //     return instance;
        // }

        // static save(doc: DocumentData) {
        //     if (!doc) throw Errors.argumentNull('doc');

        //     let handler = this.getHandler(doc);
        //     handler.save();
        // }

        // static isChanged(doc: DocumentData) {
        //     if (!doc) throw Errors.argumentNull('doc');

        //     let handler = this.getHandler(doc);
        //     return handler.isChanged;
        // }

        static async load(fileName: string) {
            let storage = new LocalDocumentStorage()
            let data = await storage.load(fileName);
            if (data == null) {
                throw Errors.fileNotExists(fileName);
            }

            return new PageDocument(fileName, storage, data);
        }

        static new(fileName: string, init: ElementData) {
            let storage = new LocalDocumentStorage()
            return new PageDocument(fileName, storage, init, true);
        }

    }


}