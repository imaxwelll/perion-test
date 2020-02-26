const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './css/style.css',
        }),
        new CopyWebpackPlugin([
            {from: './src/fonts', to: './fonts'},
            {from: './src/img', to: './img'},
            {from: './src/video', to: './video'}
        ]),

    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                'css-hot-loader',
                "style-loader",
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
                ]
            },
            {
                test: /\.(svg|png|gif|jpg)$/i,
                exclude: /fonts/,
                loader: 'file-loader',
                options: {
                name: '[name].[ext]',
                outputPath: path.resolve(__dirname, 'dist') + '/img'
                }
           }, 
           {
                test: /\.(otf|eot|ttf|woff|woff2)$/,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                        outputPath: path.resolve(__dirname, 'dist') + '/fonts'
                      }
                    }
                ]
           }

        ]
    }
};
