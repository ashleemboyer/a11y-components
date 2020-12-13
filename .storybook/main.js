const custom = require('../webpack.config.js');

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: (config) => {
    return {
      ...config,
      node: {
        child_process: 'empty',
        fs: 'empty',
      },
      module: { ...config.module, rules: custom.module.rules },
    };
  },
};
