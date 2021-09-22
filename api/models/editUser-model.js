const db = require('../data/db-config')

function update() {
    return db('users')
      .select('user_id', 'username', 'password')
      .update('username', 'password')
  }

module.exports ={
    update
}