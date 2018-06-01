requirejs.config({
    shim: {
        'application': {
            deps: ['pdesigner']
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
        'css': 'lib/css',
        'chitu': 'lib/chitu',
        'jquery': 'lib/jquery-2.1.3',
        'jquery-ui': 'lib/jquery-ui',
        'react': 'lib/react.development',
        'react-dom': 'lib/react-dom.development',
        'pdesigner': '../out/pdesigner',
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
