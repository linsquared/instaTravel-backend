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

// get by each itinerary id
exports.getByItId = (req, res) => {
    knex('day')
        .select(
            'day.day_id',
            'day.day',
            knex.raw(`JSON_OBJECT('activity_id', activities.activity_id, 'activity_name', activities.activity_name, 'activity_type', activities.activity_type, 'cost', activities.cost, 'activity_description', activities.activity_description, 'activity_image', activities.activity_image) AS activity`)
        )
        .leftJoin('activities', 'activities.activity_id', '=', 'day.activity_id')
        .where('day.itinerary_id', req.params.itineraryId)
        .orderBy('day.day_id')
        .then(data => {
            if (!data.length) {
                return res.status(404).send(`No day data found for itinerary ${req.params.itineraryId}`)
            }
            const formattedData = [];

            let prevDayId = null;
            let prevDay = null;
            let activities = [];

            for (const item of data) {
                if (item.day_id !== prevDayId) {
                    if (prevDayId !== null) {
                        formattedData.push({
                            day_id: prevDayId,
                            day: prevDay,
                            activity: activities
                        });
                    }
                    activities = [];
                }
                prevDayId = item.day_id;
                prevDay = item.day;

                if (item.activity) {
                    activities.push(JSON.parse(item.activity));
                }
            }
            formattedData.push({
                day_id: prevDayId,
                day: prevDay,
                activity: activities
            });

            res.status(200).json(formattedData);
        })
        .catch(err => {
            res.status(404).send(`Error finding day data for itinerary ${req.params.itineraryId} ${err}`)
        })
}

