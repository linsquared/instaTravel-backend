const express = require("express");
const router = express.Router();

// adding controller
const usersController = require('../controllers/usersController');

// getting a itineraries based on city
router.get('/', usersController.getUsers)

// getting a single user
router.get('/:user', usersController.getByUser)

module.exports = router;