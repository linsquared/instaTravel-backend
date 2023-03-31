const express = require("express");
const router = express.Router();

// adding controller
const itinerariesController = require('../controllers/itinerariesController');

// getting all itineraries
router.get('/', itinerariesController.getAll)

// getting a itineraries based on city
router.get('/:city', itinerariesController.getByCity)


module.exports = router;