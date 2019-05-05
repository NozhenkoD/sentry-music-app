const path = require('path');
const webpack = require('webpack');
const SentryCliPlugin = require('@sentry/webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },

      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader', 'eslint-loader'],
      // },
    ],
  },
  devtool: 'source-map',
  watchOptions: {
    aggregateTimeout: 100,
    poll: true,
  },
  plugins: [
    new SentryCliPlugin({
      include: '.',
      ignoreFile: '.sentrycliignore',
      ignore: ['node_modules', 'webpack.config.js'],
      configFile: 'sentry.properties',
      dryRun: true,
      release: 'foo',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
  },
  resolve: {
    alias: {
      Constants: path.resolve(__dirname, 'src/constants'),
      ActionTypes: path.resolve(__dirname, 'src/constants/actionTypes'),
      Containers: path.resolve(__dirname, 'src/containers'),
      Store: path.resolve(__dirname, 'src/store'),
      Actions: path.resolve(__dirname, 'src/store/actions'),
      Middlewares: path.resolve(__dirname, 'src/store/middlewares'),
      Reducers: path.resolve(__dirname, 'src/store/reducers'),
      Utils: path.resolve(__dirname, 'src/utils'),
    },
  },
};
