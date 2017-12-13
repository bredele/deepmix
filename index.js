
/**
 * This is a simple description.
 *
 * @api public
 */

module.exports = function (to, from) {
  Object.keys(from).map(key => {
    to[key] = from[key]
  })
  return to
}
