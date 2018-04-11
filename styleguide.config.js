const webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = {
  showCode: true,
  showUsage: true,
  navigation: true,
  webpackConfig: {
    module: {
      rules: webpackConfig.module.rules,
    },
  },
}
