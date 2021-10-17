const { merge } = require("webpack-merge");
const base = require("./webpack.base.js");
const path = require("path");

const loaders = [
  {
    test: /.s[ca]ss$/i,
    use: [
      // style-loader creates `style` nodes from JS strings
      "style-loader",
      // css-loader Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  },
];

module.exports = merge(base, {
  mode: "development",
  module: {
    rules: loaders,
  },
  devServer: {
      static: './src'
  }
});
