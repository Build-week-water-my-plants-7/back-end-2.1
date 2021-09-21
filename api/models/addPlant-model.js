const db = require('../data/db-config')

function findById(plant_id) {
    return db("plants").where({ plant_id }).first();
}

async function createPlant(plant) {
    const [plant_id] = await db("plants").insert(plant, "plant_id");
    return findById(plant_id);
  }

module.exports = {
    findById,
    createPlant
}