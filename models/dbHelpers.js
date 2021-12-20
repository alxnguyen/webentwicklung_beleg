const db = require("../dbConfig");

module.exports = {
    addTrip,
    find,
    findTripById,
    deleteTrip,
    updateTrip
}

async function addTrip(trip) {
    const [id] = await db("trips").insert(trip);

    return id;
}

function find() {
    return db("trips");
}

function findTripById(id) {
    return db("trips")
    .where({id: id})
    .first();
}

function deleteTrip(id) {
    return db("trips")
    .where({id})
    .del();
}

function updateTrip(id, changes) {
    return db("trips")
        .where({id})
        .update(changes)
        .then(() => {
            return findTripById(id);
        });
}