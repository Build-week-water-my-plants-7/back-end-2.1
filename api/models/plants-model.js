const db = require('../data/db-config')

module.exports = {
    find,
    findByUserId
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
            'plants.nickname',
            'plants.species',
            'plants.h2oFrequency',
            'plants.image'
        )
    return plants
}