const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/script.js",
  plugins: [
    new HtmlWebpackPlugin({
      header: "Simple Interest Rate Calculator",
      template: "./src/index.html",
      favicon: "./src/images/favicon.ico",
    }),
  ],
  output: {
    clean: true,
    libraryTarget: 'window'
  },
  module: {
    rules: [
      {
        test: /\.(css)$/i,
        type: "asset/resource",
        generator: {
          filename: "[name][ext]",
        },
      },
    ],
  },
};