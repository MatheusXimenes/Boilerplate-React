'use strict';

const path = require ('path');
const webpack = require('webpack');

/// Config Webpack
module.exports = {

    /// To Help Debug
    devtool: 'source-map',

    /// Config Bundle Creation 
    entry: [

        /// Hot Loader
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        
        /// Starter Path
        path.join(__dirname, 'src', 'index'),
    ],

    /// Bundle Creation Dir
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/' //To DevServer use only
    },

    plugins: [
        ///  HotLoader
        new webpack.HotModuleReplacementPlugin()
    ],

    /// Config Babel
    /// What file gona use to compile bundle file
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel'
        }]
    }

};