'use strict';

let path = require('path');

module.exports = {
    mode: 'development', //режим
    entry: './js/script.js', //главный файл
    output: { //файл в итоге 
        filename: 'bundle.js', //название его
        path: __dirname + '/js' //где находиться
    },


    watch: true, //отсежуем изменения 

    devtool: "source-map", //

    module: { //какие модули 
        rules: [{
            test: /\.m?js$/,    
            exclude: /(node_modules|bower_components)/, //исключаем такие файлы
            use: {
                loader: 'babel-loader', //технология для связки babel + webpack
                //скачать ->  npm i --save-dev babel-loader
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            debug: true,
                            corejs: 3, //уберает не нужный код при переводе 
                            //скачать ->  npm i --save-dev core-js
                            useBuiltIns: "usage"
                        }]
                    ]
                }
            }
        }]
    }
};