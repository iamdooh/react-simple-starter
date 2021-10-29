const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./config/webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
  const commonConfig = merge(common, {
    plugins: [
      new Dotenv({
        path: path.resolve(
          __dirname,
          `config/${env.ENVIRONMENT ? `.env.${env.ENVIRONMENT}` : '.env'}`
        ),
        defaults: path.resolve(__dirname, 'config/.env'),
      }),
    ],
  });

  const envConfig = require(`./config/webpack.${
    env.WEBPACK_SERVE ? 'dev' : 'prod'
  }.js`);

  return merge(commonConfig, envConfig);
};
