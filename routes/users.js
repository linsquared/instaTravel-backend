const express = require("express");
const router = express.Router();

// adding controller & validation
const usersController = require('../controllers/usersController');
const usersValidation = require('../middleware/usersValidation')

// getting a itineraries based on city
router.get('/', usersController.getUsers)

// getting a single user
router.get('/:user', usersController.getByUser)

// signup a new user
router.post('/register', usersValidation, usersController.register)

module.exports = router;