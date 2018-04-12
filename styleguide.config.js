const webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = {
  components: 'packages/*/src/**/*.vue',
  webpackConfig: {
    module: {
      rules: webpackConfig.module.rules,
    },
  },
  showCode: true,
  showUsage: true,
  navigation: true,
}
