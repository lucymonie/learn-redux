const path = require('path')

const config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js"],
    modules: [
        __dirname,
        path.resolve(__dirname, "./lib"),
        path.resolve(__dirname, "./node_modules")
    ]
  }
}

module.exports = config
