'use strict'
import test from 'ava'
import utils from '../lib/utils'

test('Extrayendo hashtags del texto', t => {
  let tags = utils.extractTags('a ##picture whit #tags #AweSOme #Ava #Platzi y #100')
  t.deepEqual(tags, [
    'picture',
    'tags',
    'awesome',
    'ava',
    'platzi',
    '100'
  ])

  tags = utils.extractTags('a picture with no tags')
  t.deepEqual(tags, [])

  tags = utils.extractTags()
  t.deepEqual(tags, [])

  tags = utils.extractTags(null)
  t.deepEqual(tags, [])
})

test('encrypt password', t => {
  let password = 'foo123'
  let encrypted = '02b353bf5358995bc7d193ed1ce9c2eaec2b694b21d2f96232c9d6a0832121d1'

  let result = utils.encrypt(password)
  t.is(result, encrypted)
})
