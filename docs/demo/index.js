requirejs.config({
    shim: {
        'application': {
            deps: ['pdesigner']
        },
        bootstrap: {
            deps: ['jquery']
        },
        'jquery-ui': {
            exports: 'window["$"]',
            deps: [
                'jquery',
                'css!lib/jquery-ui-1.10.0.custom'
            ]
        },
        'pdesigner': {
            exports: 'pdesigner',
            deps: ['chitu']
        }
    },
    paths: {
        css: 'lib/css',
        less: 'lib/require-less-0.1.5/less',
        lessc: 'lib/require-less-0.1.5/lessc',
        normalize: 'lib/require-less-0.1.5/normalize',
        bootstrap: 'lib/bootstrap',
        'chitu': 'lib/chitu',
        'jquery': 'lib/jquery-2.1.3',
        'jquery-ui': 'lib/jquery-ui',
        'react': 'lib/react.development',
        'react-dom': 'lib/react-dom.development',
        'pdesigner': 'lib/pdesigner',
    }
});
requirejs(['react', 'react-dom', 'jquery', 'jquery-ui'], function (react, reactDom) {
    window['React'] = react;
    window['ReactDOM'] = reactDom;
    window['h'] = react.createElement;
    // requirejs(['components/test/control'], function (control) {
    // window['TestControl'] = control;
    requirejs(['pdesigner', 'application'], function () {
    });
    // })
});
//# sourceMappingURL=index.js.map