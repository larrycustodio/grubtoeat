const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Create ETP instance for CSS
const extractCSS = new ExtractTextPlugin({
    filename: '[name].min.css'
});

module.exports = {
    entry: {
        app: './src/app/index.js',
        vendors: './src/vendors/index.js',
    },
    devtool: 'source-map',
    resolve: {
        alias: { react: path.join(__dirname, 'node_modules', 'react') },
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/dist`
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /server/],
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [extractCSS]
};