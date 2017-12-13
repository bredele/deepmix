
/**
 * Test dependencies.
 */

const test = require('tape')
const mixin = require('..')


test('this is an example', assert => {
  assert.plan(1)
  assert.deepEqual(mixin({
    foo: 'bar'
  }, {
    beep: 'boop'
  }), {
    foo: 'bar',
    beep: 'boop'
  })
})
