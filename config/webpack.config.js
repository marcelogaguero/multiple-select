var webpack = require('webpack'),
    path = require('path'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env){

  var config = {
    entry: path.resolve(__dirname, "../index.js"),
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "multi.min.js"
    },
    plugins: [
      new UglifyJSPlugin({})
    ]
  };

  if ( env && typeof env.prod !== 'undefined' ){
    config.devtool = "inline-source-map";
  }

  console.log(config);

  return config;
};