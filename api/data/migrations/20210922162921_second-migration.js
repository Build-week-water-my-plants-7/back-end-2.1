
exports.up = async function(knex) {
    await knex.schema
        .table('plants', (plants) => {
            plants.integer('user_id')
                .unsigned()
                .notNullable()
                .references('user_id')
                .inTable('users')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
    await knex.schema 
        .table('users', (users) => {
            users.string('phoneNumber', 10)
                .notNullable()
        })
};

exports.down = async function(knex) {
    await knex.schema
        .table('users', (users) => {
            users.dropColumn('phoneNumber')
        })
    await knex.schema
        .table('plants', (plants) => {
            plants.dropColumn('user_id')
        })
};
