const db = require('../data/db-config')

module.exports = {
    find,
    findByUserId,
    update,
    remove
}

function find() {
    return db('plants')
}

async function findByUserId(user_id) {
    const plants = await db('plants')
        .leftJoin('users','users.user_id','plants.user_id')
        .where('plants.user_id', user_id)
        .select(
            'users.user_id',
            'plants.plant_id',
            'plants.nickname',
            'plants.species',
            'plants.h2oFrequency',
            'plants.image'
        )
    return plants
}

async function update(plant_id, newPlantValues) {
    const [plantToEdit] = await db('plants').update(newPlantValues, '*').where({ plant_id })
    return plantToEdit
}

async function remove(plant_id) {
    const deleted = await db('plants').delete().where({ plant_id })
    return deleted
}
