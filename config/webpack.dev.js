const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /(node_modules)/,
      },
      {
        test: /\.ts(x?)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-refresh/babel'],
          },
        },
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    port: 4000,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
};
