const knex = require("knex")(require("../knexfile"));
const { randomUUID } = require("crypto")
const bcrypt = require('bcryptjs')

// get all users
exports.getUsers = (_req, res) => {
    knex('users')
        .select
        (
            "user_id",
            "user_name",
            "user_icon",
            "author",
            "itinerary_count",
            "followers"
        )
        .then(data => {
            res.status(200).json(data)
        })
        .catch((err) => res.status(400).send(`Error retrieving user info ${err}`));
}

// get a single user by search resutl
exports.getByUser = (req, res) => {
    knex('users')
        .select(
            "user_id",
            "user_name",
            "user_icon",
            "author",
            "itinerary_count",
            "followers"
        )

        .where(function () {
            this.where('author', 'like', '%' + req.params.user + '%')
                .orWhere('user_name', 'like', '%' + req.params.user + '%')
        })
        .then(data => {
            if (!data.length) {
                return res
                    .status(404)
                    .send(`This user ${req.params.user} is not found`)
            }
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).send(`Error retrieving user ${req.params.user} ${err}`)
        })
}

exports.register = (req, res) => {
    const encryptPw = bcrypt.hashSync(req.body.password)
    const newUser = {
        user_id: randomUUID(),
        ...req.body,
        password: encryptPw
    }

    knex('users')
        .insert(newUser)
        .then(data => {
            res.status(200).json(newUser)
        })
        .catch((err) => res.status(400).send(`Error with your signup ${err}`));
}