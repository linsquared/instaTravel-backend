const express = require("express");
const router = express.Router();

// adding controller & middleware
const usersController = require('../controllers/usersController');
const usersValidation = require('../middleware/usersValidation');
const authorize = require('../middleware/authorize')

// getting a itineraries based on city
router.get('/', usersController.getUsers)

// getting a single user
router.get('/:user', usersController.getByUser)

// signup a new user
router.post('/register', usersValidation, usersController.register)

// login a user
router.post('/login', usersController.login)

// user profile
router.get('/current/profile', authorize, usersController.profile)

// user put to add user icon
router.put('/:userId', usersController.put)

module.exports = router;