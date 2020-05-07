const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "development",
 
    output: {
        filename: "main.js",  
        path: path.resolve(__dirname, "dist")
    }
};