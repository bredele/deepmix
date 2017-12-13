
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

test('override existing string property', assert => {
  assert.plan(1)
  assert.deepEqual(mixin({
    foo: 'bar'
  }, {
    foo: 'boop'
  }), {
    foo: 'boop'
  })
})

test('override existing object property', assert => {
  assert.plan(1)
  assert.deepEqual(mixin({
    foo: {
      bar: 'beep'
    }
  }, {
    foo: 'boop'
  }), {
    foo: 'boop'
  })
})

test('copy properties recursively', assert => {
  assert.plan(1)
  assert.deepEqual(mixin({
    foo: {
      bar: 'beep'
    }
  }, {
    foo: {
      beep: 'boop'
    }
  }), {
    foo: {
      bar: 'beep',
      beep: 'boop'
    }
  })
})

test('copy properties recursively even when origin key is not an object', assert => {
  assert.plan(1)
  assert.deepEqual(mixin({
    foo: {
      bar: 'beep'
    }
  }, {
    foo: {
      bar: {
        hello: 'world'
      }
    }
  }), {
    foo: {
      bar: {
        hello: 'world'
      }
    }
  })
})

test('copy properties recursively when mix and match of strings and objects', assert => {
  assert.plan(1)
  assert.deepEqual(mixin({
    foo: {
      bar: {
        beep: 'boop',
        boop: {
          hello: 'world'
        }
      }
    }
  }, {
    foo: {
      bar: {
        beep: {
          john: 'doe'
        },
        boop: 'smith'
      }
    }
  }), {
    foo: {
      bar: {
        beep: {
          john: 'doe'
        },
        boop: 'smith'
      }
    }
  })
})
