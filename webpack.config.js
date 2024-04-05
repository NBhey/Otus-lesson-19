const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        assetModuleFilename: path.join('images', '[name].[contenthash][ext]')
    },
    module:{
        rules: [
            {
                test:/\.html$/,
                use:"html-loader",
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type:'asset/resource',
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: "index.html", // откуда брать шаблон
        })
    ]
}