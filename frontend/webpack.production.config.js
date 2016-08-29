var path = require('path');

// var node_modules = path.resolve(__dirname, 'node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react-with-addons.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require("webpack");

console.log(' process.env.NODE_ENV> ', process.env.NODE_ENV);
module.exports = {
    context: __dirname +  "/src",
    entry: [ path.resolve(__dirname, 'src/main')],
    resolve: {
        root: path.resolve(__dirname, 'src'),
        // alias: {
        //   'react': pathToReact
        // },
        extensions: ['', '.js', '.jsx', '.styl']
    },

    // externals: {
    //   "react": "React",
    //   "react/addons": "React"
    // },

    output: {
        path: path.resolve(__dirname, 'dist'),
       publicPath : 'http://localhost:7000/',
        filename: 'app.[hash].js'
    },
    devtool: 'source-map',
   // modulesDirectories: ['node_modules', 'web_modules', 'bower_components'],
    module: {
        loaders: [
            {
              test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
              loader: 'babel' // The module to load. "babel" is short for "babel-loader"
              ,
      exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/, // Only .css files
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader') // Run both loaders
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract("stylus", "css-loader!stylus-loader")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract([ "css-loader!sass-loader"])
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.woff(\d+)?$/,
                loader: 'url-loader?mimetype=application/font-woff'
            },
            {
//                 loader: 'file-loader?name=images/[name].[ext]'

                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=images/[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]

            },
            { test: /\.ttf$/,    loader: "file-loader" }
        // {
        //     test: /\.styl$/,
        //     loader: 'style-loader!css-loader!stylus-loader'
        // },
        // {
        //     test: /\.woff(\d+)?$/,
        //     loader: 'url-loader?mimetype=application/font-woff'
        // },

        //   { test: /\.ttf$/,    loader: "file-loader" },
        //   { test: /\.eot$/,    loader: "file-loader" },
        //   { test: /\.svg$/,    loader: "file-loader" }
        ]
        //, noParse: [pathToReact]
    },
    plugins: [
        new ExtractTextPlugin("app.[hash].css",{
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            production: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|hu/)
    ]
    // , devServer: {
    //   proxy: {
    //     '*': 'http://localhost:8000'
    //   }
   // }
};
