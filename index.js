
/**
 * This is a simple description.
 *
 * @api public
 */

module.exports = function mixin (to, from) {
  Object.keys(from).map(key => {
    var value = from[key]
    if (typeof value === 'object') value = mixin(typeof to[key] === 'object' ? to[key] : {}, value)
    to[key] = value
  })
  return to
}
