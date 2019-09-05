const path = require('path');
const htmlWebpack = require('html-webpack-plugin');

module.exports = {
    // 4 core concepts to keep in mind, entry point, the output, loaders and plugins

    // entry is where it starts the bundle
    entry: ['babel-polyfill','./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'), //needs to be an absolute path'
        filename: 'js/bundle.js' // kinda the standard name
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new htmlWebpack({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    // a way to specify the loaders
    module: {
        rules: [
            {
              // for each of the loaders you need the test property, a regular expression
              test: /\.js$/,
              exclude: /node_modules/, // so it doesn't change modules library
              // the babel package to use
              use: {
                  loader: 'babel-loader'
              }
            }
        ]
    }
};