const db = require('../data/db-config')

function update(user_id, changes) {
  return db('users')
    .where({ user_id })
    .update(changes, '*');
}
module.exports ={
    update
}