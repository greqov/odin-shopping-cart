const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    watchFiles: ['./src/**/*.html'],
    // open: {
    //   app: {
    //     name: 'chromium',
    //   },
    // },
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'Template',
      template: './src/index.html',
      favicon: './src/favicon.ico',
    }),
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
