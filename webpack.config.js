const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        main: './React/src/index.js'
    },
    output: {
        path: path.join(__dirname, '/React/dist'),
        filename: 'bundle.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './React/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, '/React/dist'),
        port: 8080,
        hot: true,
        open: true
    }
}