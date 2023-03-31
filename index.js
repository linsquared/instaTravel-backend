const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;

// adding routes
const itinerariesRoutes = require('./routes/itineraries')
const usersRoutes = require('./routes/users')

// using cors and json middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'))

// basic routing
app.use('/itineraries', itinerariesRoutes)
app.use('/users', usersRoutes)

// listening
app.listen(PORT || 8000, () => {
    console.log("are YOU listening?");
});
