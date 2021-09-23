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

  describe('[POST] /api/addplant', () =>{
      let res 
      beforeEach(async () =>{
          res = await request(server)
          .post('/api/addplant')
          .send({})
      })
      test('responds with a 422 if no info given', async () =>{
          expect(res.status).toBe(422)
      })
  })