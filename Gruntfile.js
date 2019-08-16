const webpackES6Config = require('./webpack.config.js');
let webpackES5Config = Object.assign({}, webpackES6Config)
webpackES5Config.entry = __dirname + "/out-es5/index.js"//已多次提及的唯一入口文件
webpackES5Config.output = Object.assign({}, webpackES5Config.output)
webpackES5Config.output.filename = "index.es5.js"

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    var config = {
        babel: {
            options: {
                sourceMap: true,
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            "chrome": "58",
                            "ie": "11"
                        }
                    }]
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'out',
                    src: ['**/*.js'],
                    dest: 'out-es5/'
                }]
            }
        },
        shell: {
            src: {
                command: 'tsc -p src',
                options: {
                    failOnError: false
                }
            }
        },
        webpack: {
            es6: webpackES6Config,
            es5: webpackES5Config,
        }
    }

    grunt.initConfig(config);

    grunt.registerTask('build', ['shell', 'babel', 'webpack']);
};

// module.exports = function (grunt) {

//     require('load-grunt-tasks')(grunt);

//     let pkg = grunt.file.readJSON('package.json');
//     let module_name = 'jueying'
//     let license = `
// /*!
//  * JUEYING v${pkg.version}
//  * https://github.com/ansiboy/jueying
//  *
//  * 可视化页面设计器
//  * 
//  * 作者: 寒烟
//  * 
//  * 个人博客：   http://www.cnblogs.com/ansiboy/
//  * GITHUB:     http://github.com/ansiboy
//  * QQ 讨论组：  119038574
//  * 
//  * Copyright (c) 2016-2018, mai.shu <ansiboy@163.com>
//  * Licensed under the MIT License.
//  *
//  */
// `

//     let module_js_banner = `
// ${license}
// (function(factory) { 
//     if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') { 
//         // [1] CommonJS/Node.js 
//         var target = module['exports'] || exports;
//         var result = factory(target, require);
//         Object.assign(target,result);
//     } else if (typeof define === 'function' && define['amd']) {
//         define(factory); 
//     } else { 
//         factory();
//     } 
// })(function() {
// `;
//     let module_js_footer =
//         `\n\window[\'${module_name}\'] = window[\'${module_name}\'] || ${module_name} \n\
//                             \n return ${module_name};\n\
//             });`

//     grunt.initConfig({
//         shell: {
//             stand: {
//                 command: 'tsc -p ./src',
//                 options: {
//                     failOnError: false
//                 }
//             }
//         },
//         babel: {
//             source: {
//                 options: {
//                     sourceMap: false,
//                     presets: ["es2015"],
//                 },
//                 files: [{
//                     src: [`dist/jueying.js`],
//                     dest: `dist/jueying.es5.js`
//                 }]
//             }
//         },
//         concat: {
//             options: {
//                 banner: module_js_banner,
//                 footer: module_js_footer,
//             },
//             jueying: {
//                 src: ['lib/jquery.event.drag-2.2.js', 'lib/jquery.event.drag.live-2.2.js',
//                     'lib/jquery.event.drop-2.2.js', 'lib/jquery.event.drop.live-2.2.js', 'out/jueying.js'],
//                 dest: 'dist/jueying.js'
//             }
//         },
//         connect: {
//             www: {
//                 options: (function () {
//                     let port = 26135
//                     return {
//                         // 服务器端口号
//                         port,
//                         // 服务器地址(可以使用主机名localhost，也能使用IP)
//                         // hostname: '192.168.1.7',
//                         hostname: '0.0.0.0',
//                         keepalive: true,
//                         // livereload: 17024,
//                         // 物理路径(默认为. 即根目录) 注：使用'.'或'..'为路径的时，可能会返回403 Forbidden. 此时将该值改为相对路径 如：/grunt/reloard。
//                         base: 'docs',
//                         open: { target: `http://localhost:${port}/demo` },
//                         // protocol: 'https'
//                     }
//                 })()
//             }
//         },
//         copy: {
//             dist: {
//                 files: [
//                     { expand: true, src: 'dist/*', dest: 'docs/' },
//                 ]
//             }
//         },
//         uglify: {
//             out: {
//                 options: {
//                     mangle: false,
//                     beautify: false,
//                 },
//                 files: [{
//                     src: 'dist/jueying.es5.js',
//                     dest: `dist/jueying.min.js`
//                 }]
//             }
//         },
//     })

//     let buildTask = ['shell', 'concat', 'babel', 'uglify', 'copy']
//     grunt.registerTask('build', buildTask);
    
// }