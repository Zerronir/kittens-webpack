const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        vendor: [
            './src/js/application.js',
            './src/js/jquery-2.1.0.min.js',
            './src/js/modernizr-2.5.2.min.js'
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: './src/js/jquery-2.1.0.min.js'
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './src/index.html'
        }),
    ],
    module:{
        rules:[
            {
                test:/\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
                exclude: '/node_modules/'
            },
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, './dist/'),
    },
    externals: {
        jquery: 'jQuery'
    }
};