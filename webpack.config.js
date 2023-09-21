const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackInjectPreload = require('@principalstudio/html-webpack-inject-preload');

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      favicon: 'src/assets/img/favicon.svg',
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackInjectPreload({
      files: [
        {
          match: /.*\.woff2$/,
          attributes: { as: 'font', type: 'font/woff2', crossorigin: true },
        },
        {
          match: /.*\.woff$/,
          attributes: { as: 'font', type: 'font/woff', crossorigin: true },
        },
        {
          match: /.*\.webp$/,
          attributes: { as: 'image' },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
