const { merge } = require("webpack-merge");
const base = require("./webpack.base.js");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const loaders = [
  {
    test: /.s[ca]ss$/i,
    use: [
      // style-loader creates `style` nodes from JS strings
      // extracts the css to a css file
      MiniCssExtractPlugin.loader,
      // css-loader Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  },
];

const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
    chunkFilename: "[id].[contenthash].css",
  }),
];

module.exports = merge(base, {
  mode: "production",
  module: {
    rules: loaders,
  },
  plugins: plugins,
  optimization: {
    splitChunks: {
      maxSize: 102400,
    },
  },
});
