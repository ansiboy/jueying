module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ["@babel/preset-react", { pragma: "h" }],
        '@babel/preset-typescript',
    ],
};