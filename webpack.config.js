const path = require("path");


module.exports = {
    mode: "development",
    /* devtool: "none", */
    entry: "./src/index.js",
    output: {
        filename: "main.js",
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



};