# Image Optimizer Webpack loader

This Webpackloader is for my [image-optimizer-core](https://github.com/datsteves/image-optimizer-core)
package. It reduces your JPEG's to a minimum (to even 80%-90% savings)

## Install

please have a look at the instruction of [node-opencv](https://github.com/peterbraden/node-opencv) to install opencv on your machine.

```bash
# if you havent then please install
$ yarn add --dev file-loader

$ yarn add --dev image-optimizer-webpack-loader
```

## Usage
```javascript
// webpack.config.js
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
}

module.exports = config
```