const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const precss = require("precss");

module.exports = {
  devtool: "source-map",
  entry: ["./index"],
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "ji-wysiwyg-editor.js",
    library: "jiWysiwygWditor",
    libraryTarget: "umd"
  },
  externals: {
    react: "react",
    "react-dom": "react-dom"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new ExtractTextPlugin("ji-wysiwyg-editor.css")
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      { test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json"]
  }
};
