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
        'pdesigner': location.port == `80` ? 'lib/pdesigner' : '../../out/pdesigner',
    }
});
requirejs(['react', 'react-dom', 'jquery', 'jquery-ui'], function (react, reactDom) {
    window['React'] = react;
    window['ReactDOM'] = reactDom;
    window['h'] = react.createElement;
    requirejs(['pdesigner', 'application'], function () {
    });
});
//# sourceMappingURL=index.js.map