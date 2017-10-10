var webpack = require('webpack'),
    path = require('path'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "../index.js"),
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname,"../dist"),
    filename: "multi.min.js"
  },
  plugins:[
    new UglifyJSPlugin({})
  ]
};