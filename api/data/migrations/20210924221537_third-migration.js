
exports.up = async function(knex) {
    await knex.schema
        .table('plants', (plants) => {
            plants.dropColumn('image')
        })
    await knex.schema
        .table('plants', (plants) => {
            plants.string('image', 350)
        })
};

exports.down = async function(knex) {
    await knex.schema
        .table('plants', (plants) => {
            plants.dropColumn('image')
        })
    await knex.schema
        .table('plants', (plants) => {
            plants.binary('image', 255)
        })
};
