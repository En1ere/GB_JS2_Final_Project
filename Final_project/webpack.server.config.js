const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        server: path.resolve(__dirname, 'src', 'server', 'server.js'),
    },
    output: {
        path: path.resolve(__dirname, 'bundle', 'server'),
        publicPath: "/",
        filename: "[name].js"
    },
    target: "node",
    
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/server/db", to: "db/[name][ext]" },
            ],
        }
        ),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src', 'public', 'img'), to: "../public/img/[name][ext]" },
            ],
        }
        ),
    ]
};