const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const COMMON_CONFIG = require('./webpack.common.config.js');

const PROD_CONFIG = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};

module.exports = merge([COMMON_CONFIG, PROD_CONFIG]);
