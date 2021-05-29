const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: './src/todo-app.js'
  },
  output: {
    filename: 'todo-app.min.js',
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [[MiniCssExtractPlugin.loader, 'css-loader'],
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                [
                  "postcss-preset-env",
                ]
              ]
            }
          }
        }]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: { compact: true },
        exclude: '/node_modules/'
      }

    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './build/todo-app.min.css'
    }),
  ],
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: new HtmlWebpackPlugin({ template: 'index.html' }),

}
