'use strict'

import test from 'ava'

test('Este test va a pasar', t => {
  t.pass()
})

test('Este test deberia fallar', t => {
  t.fail()
})

test('Este test debería soportar async/await', async t => {
  let p = Promise.resolve(42)
  let secret = await p
  t.is(secret, 42)
})
