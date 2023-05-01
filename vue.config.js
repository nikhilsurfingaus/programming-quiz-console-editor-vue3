const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

// webpack.config.js
const MonacoEditorPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    transpileDependencies: true,
    configureWebpack: {
        plugins: [
            new MonacoEditorPlugin({
                languages: ['javascript', 'css', 'html', 'typescript'],
            }),
        ],
    },
};

module.exports = {
    // other configuration options...
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.jdoodle.com',
                changeOrigin: true,
                secure: false,
            },
        },
    },
};