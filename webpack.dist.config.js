const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry:{
        init: path.resolve(__dirname, 'dev/js/init.js')

    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'js/[name].js',
        publicPath: path.resolve(__dirname, 'dist')+"/"
    },
    module:{
        rules:[
            {
                test:/\.(jpg|png|gif|woff|eot|ttf|svg|)$/,
                use:{
                    loader:'url-loader',
                    options: { 
                        limit: 10000, // Convert images < 10kb to base64 strings
                        name: 'fonts/[hash]-[name].[ext]'
                    } 
                }

            },
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true,
                            }
                        }
                    ]
                })

            },
            {
                test: /\.(js|jsx$)/,
                exclude: /(node_modules)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015', 'react', 'stage-2']
                    }
                }
            }

        ]
    },
    plugins:[
        new ExtractTextPlugin('css/styles.css'),
        new cleanWebpackPlugin(['dist'],{root: __dirname})

    ]
}