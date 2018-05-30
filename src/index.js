const optimizer = require('image-optimizer-core')

function OptimizerLoader(content) {
  return optimizer(content)
    .toBuffer(buf => buf)
}

module.exports = OptimizerLoader
module.exports.raw = true
