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
            "followers",
            "email"
        )
        .then(data => {
            res.status(200).json(data)
        })
        .catch((err) => res.status(400).send(`Error retrieving user info ${err}`));
}

// get a single user by username search
exports.getByUser = (req, res) => {
    knex('users')
        .select(
            "user_id",
            "user_name",
            "user_icon",
            "author",
            "itinerary_count",
            "followers",
            "email"
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

// register
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

// login
exports.login = (req, res) => {
    const { username, password } = req.body;
    console.log("pass", password);
    knex('users')
        .where({ user_name: username })
        .then(data => {
            if (!data.length) {
                return res.status(404).send('This username was not found');
            }
            const pwCorrect = bcrypt.compareSync(password, data[0].password)


            if (!pwCorrect) {

                return res.status(401).send('Wrong password')
            }

            const token = jwt.sign(
                { id: data[0].id, username: data[0].user_name },
                process.env.JWT_KEY
            )

            res.json({ token })

        })
        .catch(err => console.log(err))
}

// getting user profile
exports.profile = (req, res) => {
    // If there is no auth header provided
    if (!req.headers.authorization) return res.send("PLEASE LOGIN!");

    // Parse the bearer token
    const authHeader = req.headers.authorization;
    const authToken = authHeader.split(" ")[1]; // Bearer JWT

    try {
        const decoded = jwt.verify(authToken, process.env.JWT_KEY);
        const username = decoded.username;

        // Fetch data from users and itinerary tables
        knex('users')
            // .leftJoin('itinerary', 'users.user_name', 'itinerary.user_name')
            .where('users.user_name', username)
            // .select('users.*', 'itinerary.*')
            .select('*')
            .then(data => {
                return res.send(data)
            })


    } catch (error) {
        res.send(error)
    }
}

// update user icon image
exports.put = (req, res) => {
    const user_id = req.params.userId;
    const body = req.body
    const user_icon = Object.keys(body)[0]

    knex('users')
        .where('user_id', user_id)
        .update({ user_icon })
        .then((data => {
            if (data == 0) {
                return res
                    .status(404)
                    .send(`user with id ${user_id} is not found`);
            }
            knex('users')
                .where('user_id', user_id)
                .select('user_id', 'user_icon')
                .then(data => {
                    res.status(200).json(data[0])
                });
        }))
        .catch(err => {
            res.status(400).send(`Error updating user ${req.params.user_id} profile image `)
        })
}