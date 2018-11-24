module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    let pkg = grunt.file.readJSON('package.json');
    let module_name = 'jueying'
    let license = `
/*!
 * JUEYING v${pkg.version}
 * https://github.com/ansiboy/jueying
 *
 * 可视化页面设计器
 * 
 * 作者: 寒烟
 * 
 * 个人博客：   http://www.cnblogs.com/ansiboy/
 * GITHUB:     http://github.com/ansiboy
 * QQ 讨论组：  119038574
 * 
 * Copyright (c) 2016-2018, mai.shu <ansiboy@163.com>
 * Licensed under the MIT License.
 *
 */
`

    let module_js_banner = `
${license}
(function(factory) { 
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') { 
        // [1] CommonJS/Node.js 
        var target = module['exports'] || exports;
        var result = factory(target, require);
        Object.assign(target,result);
    } else if (typeof define === 'function' && define['amd']) {
        define(factory); 
    } else { 
        factory();
    } 
})(function() {
`;
    let module_js_footer =
        `\n\window[\'${module_name}\'] = window[\'${module_name}\'] || ${module_name} \n\
                            \n return ${module_name};\n\
            });`

    grunt.initConfig({
        shell: {
            stand: {
                command: 'tsc -p ./src',
                options: {
                    failOnError: false
                }
            }
        },
        babel: {
            source: {
                options: {
                    sourceMap: false,
                    presets: ["es2015"],
                },
                files: [{
                    src: [`dist/jueying.js`],
                    dest: `dist/jueying.es5.js`
                }]
            }
        },
        concat: {
            options: {
                banner: module_js_banner,
                footer: module_js_footer,
            },
            jueying: {
                src: ['lib/jquery.event.drag-2.2.js', 'lib/jquery.event.drag.live-2.2.js',
                    'lib/jquery.event.drop-2.2.js', 'lib/jquery.event.drop.live-2.2.js', 'out/jueying.js'],
                dest: 'dist/jueying.js'
            }
        },
        uglify: {
            out: {
                options: {
                    mangle: false,
                    beautify: false,
                },
                files: [{
                    src: 'dist/jueying.es5.js',
                    dest: `dist/jueying.min.js`
                }]
            }
        },
    })

    grunt.registerTask('default', ['shell', 'concat', 'babel', 'uglify']);
}