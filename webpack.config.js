const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:{
        init: path.resolve(__dirname, 'dev/js/init.js')

    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'js/[name].js',
        publicPath: './dist/'
    },
    module:{
        rules:[
            {
                test:/\.(jpg|png|gif|woff|eot|ttf|svg|)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:5000000
                    }
                }

            },
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })

            }

        ]
    },
    plugins:[
        new ExtractTextPlugin('css/styles.css')
    ]
}