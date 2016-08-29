const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

const config = require('./src/config.json');
const { port } = config;

module.exports = {
    context: `${__dirname}/src`,
    entry: './main',
    resolve: {
        root: path.resolve(__dirname, 'src'),
        extensions: ['', '.js', '.jsx', '.styl'],
    },
    output: {
        publicPath: `http://localhost:${port}/`,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
            },
            {
                test: /\.css$/,
                loader: 'style!css',
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader',
            },
            {
                test: /\.woff(\d+)?$/,
                loader: 'url-loader?mimetype=application/font-woff',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
                ],
            },
            {
                test: /\.ttf$/,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|hu/),
    ],
    devServer: {
        historyApiFallback: true,
        port,
        proxy: {
            '/api': {
                target: config.proxy,
                secure: false,
            },
        },
    },
};

