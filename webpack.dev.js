onst path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "development",
    /* devtool: "none", */
    entry: "./src/index.js",
    output: {
        filename: "main.[contentHash].js",   //Hash included in the filename
        path: path.resolve(__dirname, "dist")
    },

    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              "style-loader", //Thirs - Inject styles into DOM
              "css-loader", // Second - Turns css into js
              "sass-loader" // First - Turns sass into css
            ]
          },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
      template: "./src/template.html",
    })],
};