const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const path = require("path")

const PORT = 3000
const isProd = process.env.NODE_ENV === "production"

const postcss = {
  loader: "postcss-loader",
  options: {
    plugins() {
      return [ autoprefixer({ browsers: "last 3 versions" }) ]
    }
  }
}

const css = isProd
  ? ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader", postcss, "sass-loader"],
    publicPath: ""
  })
  : ["style-loader", "css-loader", "sass-loader"]

module.exports = {
  entry: './src/index.js',
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
        exclude: /node_modules/,
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(s+(a|c)ss)$/,
        use: css
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        use: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.(md)$/i,
        use: 'file-loader?name=markdown/[name].[ext]'
      },
      {
        test: /\.(webm|mp4)$/i,
        use: 'file-loader?name=video/[name].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats: "errors-only",
    open: false,
    overlay: true,
    port: PORT,
    hot: true,
    // quiet: true,
    clientLogLevel: "error",
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Axel Fuhrmann',
      favicon: './src/images/favicon.png',
      minify: {
        collapseWhitespace: true
      },
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Axel Fuhrmann',
      favicon: './src/images/favicon.png',
      minify: {
        collapseWhitespace: true
      },
      template: './src/index.html',
      filename: '404.html'
    }),
    new ExtractTextPlugin({
      filename: 'main.css',
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
