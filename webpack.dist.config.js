const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: 'production',
    entry:{
        init: path.resolve(__dirname, 'dev/js/init.js')

    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'js/[name].js',
        publicPath:'../../dist/'
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
                        presets:['env', 'react', 'stage-2']
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