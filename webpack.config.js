var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        //app1: 'webpack/hot/dev-server',
        app2: path.resolve(__dirname, 'entry.jsx'),
        vendor: ['react', 'react-dom']
    },
    plugins: [
        new webpack.optimizes.CommonsChunkPlugin('vendor',  'vendor.js'),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,  // remove all comments
            },
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("bundle.css"),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
    resolve: {
        alias: {
            'react': pathToReact
        }
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader','css!sass?sourceMap')},
        ]
    }
}