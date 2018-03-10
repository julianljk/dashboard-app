const path = require('path'); 

const config = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, "build"), 
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/, 
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        modules: ["node_modules"], 
        extensions: ['.js', '.jsx' ]
    }, 
    watch: true
}   

module.exports = config;
