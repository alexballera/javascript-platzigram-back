'use strict'
import test from 'ava'
import uuid from 'uuid-base62'
import r from 'rethinkdb'
import Db from '../'
import fixtures from './fixtures'

const dbName = `platzigram_${uuid.v4()}`
const db = new Db({ db: dbName })

// Hooks
test.before('setup database', async t => {
  await db.connect()
  t.true(db.connected, 'shold be connected')
})

test.after('disconnect database', async t => {
  await db.disconnect()
  t.false(db.connected, 'shold be disconnected')
})

test.after.always('cleanup database', async t => {
  let conn = await r.connect({})
  await r.dbDrop(dbName).run(conn)
})

// TEST
test('save image', async t => {
  t.is(typeof db.saveImage, 'function', 'saveImage is a function')

  let image = fixtures.getImage()

  let created = await db.saveImage(image)
  t.is(created.description, image.description)
  t.is(created.url, image.url)
  t.is(created.likes, image.likes)
  t.is(created.liked, image.liked)
  t.deepEqual(created.tags, ['awesome', 'tags', 'platzi'])
  t.is(created.user_id, image.user_id)
  t.is(typeof created.id, 'string')
  t.is(created.public_id, uuid.encode(created.id))
  t.truthy(created.createdAt)
})

test('like image', async t => {
  t.is(typeof db.likeImage, 'function', 'likeImage is a function')

  let image = fixtures.getImage()
  let created = await db.saveImage(image)
  let result = await db.likeImage(created.public_id)

  t.true(result.liked)
  t.is(result.likes, image.likes + 1)
})
