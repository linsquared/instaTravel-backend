const express = require("express");
const router = express.Router();

// adding controller
const itinerariesController = require('../controllers/itinerariesController');

// getting all itineraries
router.get('/', itinerariesController.getAll)

// getting itineraries based on city
router.get('/:city', itinerariesController.getByCity)

// getting an itinerary based on the id
router.get('/id/:itineraryId', itinerariesController.getByItId)


module.exports = router;