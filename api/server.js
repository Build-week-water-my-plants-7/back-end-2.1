const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')
const loginRouter = require('./routers/login-router')
const registerRouter = require('./routers/register-router')
const addPlantRouter = require('./routers/addPlant-router')
const plantsRouter = require('./routers/plants-router')
const editUserRouter = require('./routers/editUser-router')
const getUserRouter = require('./routers/getUser-router')

function getAllUsers() { return db('users') }

async function insertUser(user) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
  // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
  return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/register', registerRouter)
server.use('/api/login', loginRouter)
server.use('/api/addplant', addPlantRouter)
server.use('/api/plants', plantsRouter)
server.use('/api/edituser', editUserRouter)
server.use('/api/getuser', getUserRouter)

server.get('/api/users', async (req, res) => {
  res.json(await getAllUsers())
})

server.post('/api/users', async (req, res) => {
  res.status(201).json(await insertUser(req.body))
})

server.get('/api', async (req, res) => {
  res.json({ message: 'Water My Plants API' })
})

server.use((err, req, res, next) => { //eslint-disable-line
  res.status( err.status || 500 ).json({
      errorStatus: err.status,
      message: err.message,
      sageAdvice: 'its a long way down to the final err message'
  })
})

module.exports = server
