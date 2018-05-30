const path = require('path')

const config = {
  entry: path.resolve(__dirname, 'app.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.jpe?g$/i,
      use: [
        'file-loader',
        'image-optimizer-webpack-loader',
      ],
    }],
  },
  mode: 'development',
}

module.exports = config
