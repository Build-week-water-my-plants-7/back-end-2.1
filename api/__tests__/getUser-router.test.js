const request = require('supertest')
const server = require('../server')
const db = require('../data/db-config')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
  })
   
  afterAll(async () =>{
      await db.destroy()
  })

  describe('[GET] /api/getuser/:id', () =>{
      let res 
          beforeEach(async () =>{
          res = await request(server)
          .get('/api/getuser/1')
      })
      test('responds with a 200 OK', async() =>{
          expect(res.status).toBe(200)
      })
  })