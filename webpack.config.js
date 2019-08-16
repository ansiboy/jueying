const webpack = require('webpack');
let pkg = require("./package.json");
let license = `
 ${pkg.name} v${pkg.version}
 https://github.com/ansiboy/jueying
 
 Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 Licensed under the MIT License.
`;
module.exports = {
    entry: __dirname + "/out/index.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist",//打包后的文件存放的地方
        filename: "index.js",//打包后输出文件的文件名
        libraryTarget: 'amd'
    },
    mode: 'development',
    devtool: 'source-map',
    externals: ['react', 'react-dom'],
    plugins: [
        new webpack.BannerPlugin(license),
    ],
}

// const webpack = require('webpack');

// module.exports = {
//     entry: __dirname + "/src/index.tsx", //已多次提及的唯一入口文件
//     mode: 'development',//development production
//     externals: {
//         'react': 'React',
//         'react-dom': 'ReactDOM'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/
//             }
//         ]
//     },
//     output: {
//         path: __dirname + "/dist",
//         filename: "jueying.js",
//         libraryTarget: "umd"
//     },
//     plugins: [
//         new webpack.BannerPlugin(`*******************************************************************************

// Copyright (C) mai.shu All rights reserved.

// JUEYING: HTML 页面设计器

// 作者: 寒烟

// 个人博客：   http://www.cnblogs.com/ansiboy/
// GITHUB:     http://github.com/ansiboy
// QQ 讨论组：  119038574

// ********************************************************************************/`)
//     ],
//     resolve: {
//         extensions: ['.tsx', '.ts', '.js']
//     }

// };

