let webpack = require('webpack');

let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        app: [
            './src/js/index.js',
            './src/scss/main.scss'
        ]
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
            { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};