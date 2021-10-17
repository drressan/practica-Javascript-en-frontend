const HtmlWebpackPlugin = require("html-webpack-plugin");

const loaders = [
  {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: "babel-loader",
  },
];

const plugins = [
  new HtmlWebpackPlugin({
    title: "My Gaming directory =)",
    filename: "index.html",
    template: "index.html",
    chunks: ["index"],
  }),
  new HtmlWebpackPlugin({
    title: "My Gaming directory =)",
    filename: "detail.html",
    template: "detail.html",
    chunks: ["detail"],
  }),
];

module.exports = {
  context: __dirname + "/src",
  entry: {
    index: "./index.js",
    detail: "./detail.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    clean: true,
  },
  module: {
    rules: loaders,
  },
  plugins: plugins,
};
