const knex = require("knex")(require("../knexfile"));

exports.getAll = (_req, res) => {
    knex('itinerary')
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
        .catch((err) => res.status(400).send(`Error retrieving itinerary ${err}`));
}

// get by city search
exports.getByCity = (req, res) => {
    knex('itinerary')
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
            "duration",
            "trip_title"
        )

        .where('city', 'like', '%' + req.params.city + '%')
        .then(data => {
            if (!data.length) {
                return res
                    .status(404)
                    .send(`This city ${req.params.city} is not found`)
            }
            res.status(200).json(data)
        })

        .catch(err => {
            res.status(404).send(`Error retrieving user ${req.params.user} ${err}`)
        })
}

// modify result with search with space in between