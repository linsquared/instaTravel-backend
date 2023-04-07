const knex = require("knex")(require("../knexfile"));

exports.getAll = (_req, res) => {
    knex('itinerary')
        .select(
            "itinerary_id",
            "user_id",
            "city",
            "budget",
            "views",
            "likes",
            "ratings",
            "duration",
            "city_img"
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

        // modify result with search with space in between
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
            res.status(404).send(`Error finding ${req.params.city} ${err}`)
        })
}

// get a single itinerary by itinerary id
exports.getByItId = (req, res) => {
    knex('itinerary')
        .select(
            'itinerary.itinerary_id',
            'city',
            'budget',
            'likes',
            'ratings',
            'duration',
            'city_img',
            'trip_title',
            'date',
            'description',
            'day_id',
            'day',
            'activity_id',
            'activity_name',
            'activity_type',
            'cost',
            'activity_description',
            'activity_image'
        )
        .innerJoin('day', 'itinerary.itinerary_id', 'day.itinerary_id')
        .innerJoin('activities', function () {
            this.on('day.activity_id1', '=', 'activities.activity_id')
                .orOn('day.activity_id2', '=', 'activities.activity_id')
                .orOn('day.activity_id3', '=', 'activities.activity_id')
                .orOn('day.activity_id4', '=', 'activities.activity_id')
                .orOn('day.activity_id5', '=', 'activities.activity_id')
                .orOn('day.activity_id6', '=', 'activities.activity_id')
                .orOn('day.activity_id7', '=', 'activities.activity_id')
                .orOn('day.activity_id8', '=', 'activities.activity_id')
                .orOn('day.activity_id9', '=', 'activities.activity_id')
                .orOn('day.activity_id10', '=', 'activities.activity_id')
        })
        .where({ 'itinerary.itinerary_id': req.params.itineraryId })

        .then(data => {
            if (!data.length) {
                return res
                    .status(404)
                    .send(`This itinerary ${req.params.itineraryId} is not found`)
            }
            res.status(200).json(data)
        })

        .catch(err => {
            res.status(404).send(`Error finding itinerary ${req.params.itineraryId} ${err}`)
        })
}
