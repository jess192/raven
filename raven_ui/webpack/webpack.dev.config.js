const { merge } = require('webpack-merge');

const COMMON_CONFIG = require('./webpack.common.config.js');

const DEV_CONFIG = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
};

module.exports = merge([COMMON_CONFIG, DEV_CONFIG]);
