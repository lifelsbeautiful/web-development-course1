const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
        use: ['style-loader', 'css-loader'],
      }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'todo-app.css'
    }),
  ]
}
