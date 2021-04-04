const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname,'src','index.js'),
    mode:'development',
    output:{
        filename:'index.bundle.js',
        path:path.join(__dirname,'build')
    },

    module:{
        rules:[
            {
                test:/\.js|\.jsx$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                },
                exclude:path.join(__dirname,"node_modules")
            },
            {
                test:/\.module\.css$/,
                use:[
                    "style-loader",
                    {
                        loader:"css-loader",
                        options:{
                            importLoaders:1,
                            modules:true
                        }
                    }
                ],
                include:/\.module\.css$/
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader",],
                exclude: /\.module\.css$/
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'src','index.html')
        })
    ],

    devServer:{
        contentBase:path.join(__dirname,'src'),
        port:8080
    }

}