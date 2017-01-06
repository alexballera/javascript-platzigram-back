'use strict'
import test from 'ava'
import utils from '../lib/utils'

test('Extrayendo hashtags del texto', t => {
  let tags = utils.extractTags('a #picture whit ##tags #AweSOme #Ava #Platzi y #100')
  t.deepEqual(tags, [
    'picture',
    'tags',
    'awesome',
    'Ava',
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
