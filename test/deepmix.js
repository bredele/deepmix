
/**
 * Test dependencies.
 */

const test = require('tape')
const mixin = require('..')


test('copy new properties from an object to an other', assert => {
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

test('override existing properties', assert => {
  assert.plan(1)
  assert.deepEqual(mixin({
    foo: 'bar'
  }, {
    foo: 'boop'
  }), {
    foo: 'boop'
  })
})
