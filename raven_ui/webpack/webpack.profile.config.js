const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const COMMON_CONFIG = require('./webpack.common.config.js');
const PROD_CONFIG = require('./webpack.prod.config.js');

const PROFILE_CONFIG = {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
};

module.exports = merge([COMMON_CONFIG, PROD_CONFIG, PROFILE_CONFIG]);
