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
            sass: [
              { loader: 'vue-style-loader' },
              { loader: 'css-loader' },
              { loader: 'sass-loader?indentedSyntax' },
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: [
                    path.resolve(__dirname, 'common/styles/variables.sass'),
                    path.resolve(__dirname, 'common/styles/mixins.sass'),
                  ],
                },
              },
            ],
          },
        },
      },
    ],
  },
}
