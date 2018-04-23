var path = require('path')
require.main.require = function (name) {
  // navigate to main directory
  var newPath = path.join(__dirname, '../src/', name)
  return require(newPath)
}
