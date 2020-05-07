const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge (common, {
    mode: "production",
  
    output: {
        filename: "main.[contentHash].js",   //Hash included in the filename
        path: path.resolve(__dirname, "dist")
    }
});