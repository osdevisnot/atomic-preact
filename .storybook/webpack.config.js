const baseConfig = require('../webpack.config');

module.exports = config => {
  config.resolve.extensions.push('.tsx');
  config.resolve.alias = Object.assign({}, baseConfig.resolve.alias, config.resolve.alias);
  config.resolve.modules = baseConfig.resolve.modules;
  config.module.loaders = baseConfig.module.loaders;
  return config;
};
