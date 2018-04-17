const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: path.resolve(process.cwd(), 'src/index.js'),
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            sass: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax'],
          },
        },
      },
    ],
  },
}
