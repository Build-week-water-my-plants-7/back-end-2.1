exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.timestamps(false, true)
    })
    .createTable('plants', (plants) =>{
      plants.increments('plant_id')
      plants.string('nickname', 200).notNullable()
      plants.string('species', 200).notNullable()
      plants.integer('h2oFrequency')
      plants.binary('image', 255)
    })
}

exports.down = async (knex) => {
  await knex.schema
  .dropTableIfExists('plants')
  .dropTableIfExists('users')
}
