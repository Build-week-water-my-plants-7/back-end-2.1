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


  describe('[PUT] /api/edituser/:id', () =>{
      let res 
      beforeEach(async () =>{
          res = await request(server)
          .put('/api/edituser/:id')
          .send({})
      })
      test('responds with a 500 if no user ', async () =>{
          expect(res.status).toBe(500)
      })
  })
