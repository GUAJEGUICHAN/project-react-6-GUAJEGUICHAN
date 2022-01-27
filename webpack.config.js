// webpack needs to be explicitly required
const webpack = require('webpack')
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  mode: 'none',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  devServer: {
    port: 9000,
    // historyApiFallback: false,
    historyApiFallback: { index: "/", disableDotRule: true },
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: 'index.html',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
