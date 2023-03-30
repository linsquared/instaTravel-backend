const knex = require("knex")(require("../knexfile"));

exports.getAll = (_req, res) => {
    knex('itineraries')
        .select(
            "itinerary_id",
            "user_name",
            "user_icon",
            "author",
            "city",
            "budget",
            "views",
            "likes",
            "ratings",
            "duration"
        )
        .then(data => {
            res.status(200).json(data)
        })
        .catch((err) => res.status(400).send(`Error retrieving warehouses ${err}`));

}