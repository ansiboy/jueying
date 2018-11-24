const webpack = require('webpack');

module.exports = {
    entry: __dirname + "/src/index.tsx", //已多次提及的唯一入口文件
    mode: 'development',//development production
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: __dirname + "/dist",
        filename: "jueying.js",
        libraryTarget: "umd"
    },
    plugins: [
        new webpack.BannerPlugin(`*******************************************************************************

Copyright (C) mai.shu All rights reserved.

JUEYING: HTML 页面设计器

作者: 寒烟

个人博客：   http://www.cnblogs.com/ansiboy/
GITHUB:     http://github.com/ansiboy
QQ 讨论组：  119038574

********************************************************************************/`)
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }

};

