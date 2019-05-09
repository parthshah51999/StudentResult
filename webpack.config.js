const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = () => {
  return {
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [
   new HtmlWebpackPlugin({
     template: './src/index.template.html',
   }),
  ],
    resolve: {
      extensions: ['.js', '.css'],
    },
    module: {
      rules: [
        {
          test: [/\.js$/],
          exclude: /node_modules/,
          loaders: ['babel-loader'],
        },

      ],
    },
  };
};