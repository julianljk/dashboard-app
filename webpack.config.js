const path = require('path');

const config = {
    entry: path.resolve(__dirname, 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, path.resolve(__dirname,'cacheManager.js')],
                use: {
                    loader: 'eslint-loader', //pipes the code through our .eslintrc config
                },
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')], //resolve imports/requires to the local node_modules directory
        extensions: ['.js', '.jsx'], //resolve file names without file extentions to one of the following file extensions
    },
    devtool: 'cheap-module-eval-source-map',
};

module.exports = config;
