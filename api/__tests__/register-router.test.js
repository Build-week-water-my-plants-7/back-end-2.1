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

  describe('[POST] /api/register', () =>{
      let res 
      beforeEach(async () =>{
          res = await request(server)
          .post('/api/register')
          .send({username: 'billy', password: '1234', phoneNumber: '1234567890'})
      })
      test('responds with a 201 created', async () =>{
          expect(res.status).toBe(201)
      })
      test('responds with a new user', async () =>{
          expect(res.body).toMatchObject({ username: 'billy'})
      })
      test('responds with a 422 on missing info', async () =>{
          const result = await request(server)
          .post('/api/register')
          .send({})
          expect(result.status).toBe(422)
      })
  }, 600)