const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://projects-api.herokuapp.com',
            changeOrigin: true,
        }),

        '/images',
        createProxyMiddleware({
            target: 'https://projects-api.herokuapp.com',
            changeOrigin: true,
        })
        );
    };