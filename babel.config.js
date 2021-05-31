module.exports = (api) => {
  api.cache.forever();

  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = ['macros'];

  return { ignore: [/\.stories\.(js|jsx)$/], presets, plugins };
};
