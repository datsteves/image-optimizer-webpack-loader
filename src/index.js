const optimizer = require('image-optimizer-core')

// really simple right? :D
function OptimizerLoader(content) {
  console.log(content.length)
  return optimizer(content)
    .toBuffer(buf => buf)
}

module.exports = OptimizerLoader
module.exports.raw = true
