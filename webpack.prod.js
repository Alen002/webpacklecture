const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "production",
  
    output: {
        filename: "main.[contentHash].js",   //Hash included in the filename
        path: path.resolve(__dirname, "dist")
    }
};