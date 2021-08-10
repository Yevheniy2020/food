'use strict';

let path = require('path');

module.exports = {
    mode: 'development', //режим
    entry: './src/js/script.js', //главный файл
    output: { //файл в итоге 
        filename: 'bundle.js', //название его
        path: __dirname + '/src/js' //где находиться
    },
    watch: true, //отсежуем изменения 

    devtool: "source-map", //

    module: {}
};