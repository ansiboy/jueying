
namespace jueying.extentions {
    export class DocumentHandler {
        private static instances: { [key: string]: DocumentHandler } = {};
        private storage: DocumentStorage;
        private doc: PageDocument;
        private originalPageData: ElementData;

        constructor(doc: PageDocument, storage: DocumentStorage) {
            this.storage = storage;
            this.doc = doc;
            this.originalPageData = JSON.parse(JSON.stringify(this.doc.pageData));
        }

        save() {
            this.originalPageData = JSON.parse(JSON.stringify(this.doc.pageData));
            return this.storage.save(this.doc.name, this.originalPageData);
        }

        get isChanged() {
            let equals = isEquals(this.originalPageData, this.doc.pageData);
            return !equals;
        }

        private static getHandler(doc: PageDocument) {
            let instance = this.instances[doc.name];
            if (instance == null) {
                instance = new DocumentHandler(doc, new LocalDocumentStorage());
                this.instances[doc.name] = instance;
            }
            return instance;
        }

        static save(doc: PageDocument) {
            if (!doc) throw Errors.argumentNull('doc');

            let handler = this.getHandler(doc);
            handler.save();
        }

        static isChanged(doc: PageDocument) {
            if (!doc) throw Errors.argumentNull('doc');
            
            let handler = this.getHandler(doc);
            return handler.isChanged;
        }
    }


}