const knex = require("knex")(require("../knexfile"));

exports.getAll = (_req, res) => {
    knex('itinerary')
        .select(
            "itinerary_id",
            "user_id",
            "user_name",
            "user_icon",
            "city",
            "budget",
            "views",
            "likes",
            "ratings",
            "duration",
            "city_img",
            "description",
            "date",
            "trip_title"
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
            "city",
            "budget",
            "views",
            "likes",
            "ratings",
            "duration",
            "trip_title",
            "description",
            "date"

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

// get by each id
exports.getByItId = (req, res) => {
    knex('itinerary')
        .select(
            'itinerary.itinerary_id',
            'day_id',
            'day',
            knex.raw(`JSON_OBJECT('activity_id1', JSON_OBJECT('activity_id', activities.activity_id, 'activity_name', activities.activity_name, 'activity_type', activities.activity_type, 'cost', activities.cost, 'activity_description', activities.activity_description, 'activity_image', activities.activity_image), 'activity_id2', JSON_OBJECT('activity_id', activities2.activity_id, 'activity_name', activities2.activity_name, 'activity_type', activities2.activity_type, 'cost', activities2.cost, 'activity_description', activities2.activity_description, 'activity_image', activities2.activity_image), 'activity_id3', JSON_OBJECT('activity_id', activities3.activity_id, 'activity_name', activities3.activity_name, 'activity_type', activities3.activity_type, 'cost', activities3.cost, 'activity_description', activities3.activity_description, 'activity_image', activities3.activity_image), 'activity_id4', JSON_OBJECT('activity_id', activities4.activity_id, 'activity_name', activities4.activity_name, 'activity_type', activities4.activity_type, 'cost', activities4.cost, 'activity_description', activities4.activity_description, 'activity_image', activities4.activity_image), 'activity_id5', JSON_OBJECT('activity_id', activities5.activity_id, 'activity_name', activities5.activity_name, 'activity_type', activities5.activity_type, 'cost', activities5.cost, 'activity_description', activities5.activity_description, 'activity_image', activities5.activity_image)) AS activities`)
        )
        .innerJoin('day', 'itinerary.itinerary_id', 'day.itinerary_id')
        .leftJoin('activities', 'activities.activity_id', '=', 'day.activity_id1')
        .leftJoin('activities AS activities2', 'activities2.activity_id', '=', 'day.activity_id2')
        .leftJoin('activities AS activities3', 'activities3.activity_id', '=', 'day.activity_id3')
        .leftJoin('activities AS activities4', 'activities4.activity_id', '=', 'day.activity_id4')
        .leftJoin('activities AS activities5', 'activities5.activity_id', '=', 'day.activity_id5')
        .where('itinerary.itinerary_id', req.params.itineraryId)
        .groupBy('itinerary.itinerary_id', 'day_id', 'day', 'activities.activity_id', 'activities.activity_id', 'activities.activity_id', 'activities.activity_id', 'activities.activity_id', 'activities')
        .then(data => {
            if (!data.length) {
                return res.status(404).send(`This itinerary ${req.params.itineraryId} is not found`)
            }
            const formattedData = [];

            for (const item of data) {
                const activities = JSON.parse(item.activities);
                const activityArray = [];

                for (const activity in activities) {
                    activityArray.push(activities[activity]);
                }

                item.activities = activityArray;
                formattedData.push(item);
            }

            res.status(200).json(formattedData);
        })
        .catch(err => {
            res.status(404).send(`Error finding itinerary ${req.params.itineraryId} ${err}`)
        })
}
