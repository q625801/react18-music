const {resolve}  = require("path")
module.exports = {
    devServer: {
        host:'0.0.0.0',
        port:8889,
        https:false,
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                pathRewrite: {
                '^/api': ''
                },
            },
        },
    },
    webpack: {
        alias: {
            "@": resolve(__dirname, "src"),
            "components": resolve(__dirname, "src/components"),
            "assets": resolve(__dirname, "src/assets"),
            "pages": resolve(__dirname, "src/pages"),
            "api": resolve(__dirname, "src/api"),
            "utils": resolve(__dirname, "src/utils"),
        }
    }
};