const knex = require("knex")(require("../knexfile"));
const { randomUUID } = require("crypto");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

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

exports.login = (req, res) => {
    const { username, password } = req.body;
    knex('users')
        .where({ user_name: username })
        .then(data => {
            if (!data.length) {
                res.send('this username was not found')
            }
            const pwCorrect = bcrypt.compareSync(password, data[0].password)
            if (!pwCorrect) return res.send('wrong password')

            const token = jwt.sign(
                { id: data[0].id, username: data[0].user_name },
                process.env.JWT_KEY
            )

            res.json({ token })

        })
        .catch(err => console.log(err))
}

exports.profile = (req, res) => {
    // // If there is no auth header provided
    if (!req.headers.authorization) return res.send("PLEASE LOGIN!")

    // // Parse the bearer token
    const authHeader = req.headers.authorization;
    const authToken = authHeader.split(" ")[1] // :`Bearer JWT`

    try {
        const decoded = jwt.verify(authToken, process.env.JWT_KEY);
        if (decoded) return res.send(decoded);
        knex('users')
            .where({ id: decoded.id })
            .then(res => {
                console.log(res)
            })
    } catch (error) {
        res.send(error)
    }
    // Verify the token
    if (req.decoded) res.json(req.decoded);

}