const request = require('supertest')
const server = require('../server')
const db = require('../data/db-config')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

afterAll(async () => {
  await db.destroy()
})

it('sanity check', () => {
  expect(true).not.toBe(false)
})

describe('server.js', () => {
  it('is the correct testing environment', async () => {
    expect(process.env.NODE_ENV).toBe('testing')
  })
})

describe('[GET] /api/users', () =>{
  let res 
  beforeEach(async () =>{
    res = await request(server).get('/api/users')
  })
  test('responds with a 200 OK', async() =>{
    expect(res.status).toBe(200)
  })
})

describe('[GET] /api', () =>{
  let res 
  beforeEach(async () =>{
    res = await request(server).get('/api')
  })
  test('responds with message', async() =>{
    expect(res.body.message).toBe('Water My Plants API')
  })
})
