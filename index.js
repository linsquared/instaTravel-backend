const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;

// using cors and json middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'))

// listening
app.listen(PORT || 8000, () => {
    console.log("are YOU listening?");
});
