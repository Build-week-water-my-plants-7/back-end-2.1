const db = require('../data/db-config')


function findById(user_id) {
    return db("users").where({ user_id }).first()
  }

module.exports = {
    findById
}