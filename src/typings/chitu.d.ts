declare namespace chitu {
    class PageMaster {
        pageCreated: Callback1<this, Page>;
        pageLoad: Callback2<this, Page, any>;
        protected pageType: PageConstructor;
        protected pageDisplayType: PageDisplayConstructor;
        private cachePages;
        private page_stack;
        private container;
        nodes: {
            [key: string]: PageNode;
        };
        error: Callback2<this, Error, Page>;
        constructor(nodes: {
            [key: string]: PageNode;
        }, container: HTMLElement);
        private wrapAction(action);
        private on_pageCreated(page);
        readonly currentPage: Page;
        private getPage(node, allowCache, values?);
        protected createPage(pageName: string, values: any): Page;
        private allowCache(pageName);
        protected createPageElement(pageName: string): HTMLElement;
        showPage(node: PageNode, args?: any): any;
        showPage(node: PageNode, focusNotCache?: boolean, args?: any): any;
        private pushPage(page);
        private findSiteMapNode(pageName);
        closeCurrentPage(): void;
        setPageNode(name: string, action: string | Action): PageNode;
    }
}
declare namespace chitu {
    type Action = ((page: Page) => void);
    type SiteMapChildren<T extends PageNode> = {
        [key: string]: T;
    };
    interface PageNode {
        action: Action | string;
        name?: string;
        cache?: boolean;
    }
    interface SiteMap<T extends PageNode> {
        nodes: {
            [key: string]: T;
        };
    }
    class Application extends PageMaster {
        private static skipStateName;
        private _runned;
        constructor(siteMap: SiteMap<PageNode>);
        parseUrl(url: string): {
            pageName: string;
            values: PageData;
        };
        createUrl(pageName: string, values?: {
            [key: string]: string;
        }): string;
        protected hashchange(): void;
        run(): void;
        private showPageByUrl(url);
        setLocationHash(url: string): void;
        redirect(node: PageNode, args?: any): Page;
        redirect(node: PageNode, focusNotCache?: boolean, args?: any): any;
        back(): void;
    }
}
declare class Errors {
    static pageNodeNotExists(pageName: string): Error;
    static actionCanntNull(pageName: string): Error;
    static argumentNull(paramName: string): Error;
    static modelFileExpecteFunction(script: any): Error;
    static paramTypeError(paramName: string, expectedType: string): Error;
    static paramError(msg: string): Error;
    static pathPairRequireView(index: any): Error;
    static notImplemented(name: any): Error;
    static routeExists(name: any): Error;
    static noneRouteMatched(url: any): Error;
    static emptyStack(): Error;
    static canntParseUrl(url: string): Error;
    static canntParseRouteString(routeString: string): Error;
    static routeDataRequireController(): Error;
    static routeDataRequireAction(): Error;
    static viewCanntNull(): Error;
    static createPageFail(pageName: string): Error;
    static actionTypeError(pageName: string): Error;
    static canntFindAction(pageName: any): Error;
    static exportsCanntNull(pageName: string): Error;
    static scrollerElementNotExists(): Error;
    static resourceExists(resourceName: string, pageName: string): Error;
    static siteMapRootCanntNull(): Error;
    static duplicateSiteMapNode(name: string): Error;
}
declare namespace chitu {
    interface AppError extends Error {
        processed: boolean;
    }
}
declare namespace chitu {
    class Callback {
        private funcs;
        constructor();
        add(func: (...args: Array<any>) => any): void;
        remove(func: (...args: Array<any>) => any): void;
        fire(...args: Array<any>): void;
    }
    interface Callback1<S, A> extends Callback {
        add(func: (sender: S, arg: A) => any): any;
        remove(func: (sender: S, arg: A) => any): any;
        fire(sender: S, arg: A): any;
    }
    interface Callback2<S, A, A1> extends Callback {
        add(func: (sender: S, arg: A, arg1: A1) => any): any;
        remove(func: (sender: S, arg: A, arg1: A1) => any): any;
        fire(sender: S, arg: A, arg1: A1): any;
    }
    function Callbacks<S, A, A1>(): Callback2<S, A, A1>;
    function Callbacks<S, A>(): Callback1<S, A>;
    type ValueChangedCallback<T> = (args: T, sender: any) => void;
    class ValueStore<T> {
        private items;
        private _value;
        constructor(value?: T);
        add(func: ValueChangedCallback<T>, sender?: any): ValueChangedCallback<T>;
        remove(func: ValueChangedCallback<T>): void;
        fire(value: T): void;
        value: T;
    }
    function loadjs(path: any): Promise<any>;
}
declare namespace chitu {
    type PageData = {
        [key: string]: any;
    };
    interface PageDisplayConstructor {
        new(app: PageMaster): PageDisplayer;
    }
    interface PageDisplayer {
        show(targetPage: Page, currentPage: chitu.Page): Promise<any>;
        hide(targetPage: Page, currentPage: chitu.Page): Promise<any>;
    }
    interface PageParams {
        app: PageMaster;
        action: Action;
        element: HTMLElement;
        displayer: PageDisplayer;
        name: string;
        data: PageData;
    }
    class Page {
        private animationTime;
        private num;
        private _element;
        protected _app: chitu.Application;
        private _displayer;
        private _action;
        private _name;
        static tagName: string;
        data: PageData;
        load: Callback1<this, PageData>;
        loadComplete: Callback1<this, PageData>;
        showing: Callback1<this, PageData>;
        shown: Callback1<this, PageData>;
        hiding: Callback1<this, PageData>;
        hidden: Callback1<this, PageData>;
        closing: Callback1<this, PageData>;
        closed: Callback1<this, PageData>;
        constructor(params: PageParams);
        on_load(): any;
        private on_loadComplete();
        private on_showing();
        private on_shown();
        private on_hiding();
        private on_hidden();
        private on_closing();
        private on_closed();
        show(): Promise<any>;
        hide(currentPage: chitu.Page): Promise<any>;
        close(): Promise<any>;
        createService<T extends Service>(type?: ServiceConstructor<T>): T;
        readonly element: HTMLElement;
        readonly name: string;
        private loadPageAction();
        reload(): Promise<void>;
    }
}
interface PageActionConstructor {
    new(page: chitu.Page): any;
}
interface PageConstructor {
    new(args: chitu.PageParams): chitu.Page;
}
declare class PageDisplayerImplement implements chitu.PageDisplayer {
    show(page: chitu.Page, previous: chitu.Page): Promise<void>;
    hide(page: chitu.Page, previous: chitu.Page): Promise<void>;
}
interface ServiceError extends Error {
    method?: string;
}
declare function ajax<T>(url: string, options: RequestInit): Promise<T>;
declare function callAjax<T>(url: string, options: RequestInit, service: chitu.Service, error: chitu.Callback1<chitu.Service, Error>): Promise<T>;
declare namespace chitu {
    interface ServiceConstructor<T> {
        new(): T;
    }
    type AjaxOptions = {
        data?: Object;
        headers?: {
            [key: string]: string;
        };
        method?: string;
    };
    class Service {
        error: Callback1<Service, Error>;
        static settings: {
            ajaxTimeout: number;
        };
        ajax<T>(url: string, options?: AjaxOptions): Promise<T>;
    }
}
declare namespace chitu {
}

declare module "maishu-chitu" {
    export = chitu;
}

declare module "chitu" {
    export = chitu;
}

