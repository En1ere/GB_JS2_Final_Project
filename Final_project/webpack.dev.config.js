const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: ["@babel/polyfill", "./src/public/main.js"]
    },
    output: {
        path: path.resolve(__dirname, 'bundle', 'public'),
        publicPath: "/",
        filename: "js/[name].js"
    },
    target: 'web',
    devtool: "eval-cheap-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                loader: "html-loader"

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'public', 'index.html'),
        }),
        new HtmlWebpackPlugin({
            filename: 'catalog_men.html',
            template: path.resolve(__dirname, 'src', 'public', 'catalog_men.html'),
        }),
        new HtmlWebpackPlugin({
            filename: 'checkout.html',
            template: path.resolve(__dirname, 'src', 'public', 'checkout.html'),
        }),
        new HtmlWebpackPlugin({
            filename: 'product_page.html',
            template: path.resolve(__dirname, 'src', 'public', 'product_page.html'),
        }),
        new HtmlWebpackPlugin({
            filename: 'shopping_cart.html',
            template: path.resolve(__dirname, 'src', 'public', 'shopping_cart.html'),
        }),

    ]
};