const webpackConfig = require('../webpack.config')

module.exports = storybookBaseConfig => {
  // Replace the default .vue files config with ours
  storybookBaseConfig.module.rules[1].options = webpackConfig.module.rules[1].options

  return storybookBaseConfig
}
