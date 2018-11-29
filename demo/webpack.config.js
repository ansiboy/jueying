const webpack = require('webpack');

module.exports = {
    entry: __dirname + "/index.tsx", //已多次提及的唯一入口文件
    mode: 'development',
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
        filename: "index.js",
        libraryTarget: "umd"
    },
    resolve: {
        alias: {
            "React": "react",
            "ReactDOM": "react-dom",
        },
        extensions: ['.tsx', '.ts', '.js']
    }

}