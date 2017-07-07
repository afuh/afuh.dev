const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require("path");

const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins() { return [autoprefixer({ browsers: 'last 3 versions' })]; }
  }
};

const isProd = process.env.NODE_ENV === "production";
const cssDev = ['style-loader', 'css-loader', postcss, 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: ['css-loader', postcss, 'sass-loader'],
                publicPath: '/dist'
              });


module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(s+(a|c)ss|css)$/,
        use: isProd ? cssProd : cssDev
      },
      {
        test: /\.(jpe?g|png|gif|svg|mp4|gif|webm|md)$/i,
        use: 'file-loader?name=images/[hash:6].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats: "errors-only",
    open: false,
    overlay: true,
    port: 3000,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Portfolio',
        minify: {
            collapseWhitespace: true
        },
        hash: true,
        template: './src/index.html',
        filename: isProd ? '200.html' : 'index.html'
        // filename: 'index.html'
      }),
      new ExtractTextPlugin({
         filename: 'main.css',
         disable: !isProd,
         allChunks: true
       }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
  ]
};
