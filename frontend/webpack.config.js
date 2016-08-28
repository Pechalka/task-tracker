 var path = require('path');

// var node_modules = path.resolve(__dirname, 'node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react-with-addons.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require("webpack");


const port = 5000;

const config = require('./src/config.json');

module.exports = {
    context: __dirname +  "/src",
    entry: { 
        javascript: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/main')],
        html: './index.html'
},
    resolve: {
        root: path.resolve(__dirname, 'src'),
        // alias: {
        //   'react': pathToReact
        // },
        extensions: ['', '.js', '.jsx', '.styl'],
    },
    port: port,
//

    // externals: {
    //   "react": "React",
    //   "react/addons": "React"
    // },

    //  resolve: {
    //     alias: {
    //         "react": __dirname + '/node_modules/react',
    //         "react/addons": __dirname + '/node_modules/react/addons',
    //     }
    // }
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath : 'http://localhost:' + port + '/',
        filename: 'bundle.js',
    },
   // modulesDirectories: ['node_modules', 'web_modules', 'bower_components'],
    module: {
        loaders: [
            {
              test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
                    exclude: /(node_modules|bower_components)/,
              loader: 'babel' // The module to load. "babel" is short for "babel-loader"
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader',
            },
            {
                test: /\.woff(\d+)?$/,
                loader: 'url-loader?mimetype=application/font-woff'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.html$/, loader: 'file?name=[name].[ext]' },
        // {
        //     test: /\.styl$/,
        //     loader: 'style-loader!css-loader!stylus-loader'
        // },
        // {
        //     test: /\.woff(\d+)?$/,
        //     loader: 'url-loader?mimetype=application/font-woff'
        // },


        //   { test: /\.eot$/,    loader: "file-loader" },
            // { test: /\.svg$/,    loader: "file-loader" },
            // { test: /\.jpg$/,    loader: "file-loader" }

        ]
        //, noParse: [pathToReact]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './index.html',
        //     production: false,
        //     inject: false,
        //     port: port,
        // }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|hu/)
    ],
    devServer: {
            colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

        port: port,
      proxy: {
        '/api': {
            target: config.proxy,
            secure: false,
        }
      }
    }
};
