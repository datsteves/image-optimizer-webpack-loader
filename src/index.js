const optimizer = require('image-optimizer-core')

function OptimizerLoader(content) {
  return optimizer(content)
    .toBuffer(buf => buf)
  console.log('something that doesnt work?)
}

module.exports = OptimizerLoader
module.exports.raw = true
