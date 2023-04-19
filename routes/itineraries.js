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

// posting an itinerary
router.post("/", itinerariesController.post);

// posting activity/activities
router.post('/activity', itinerariesController.postAct)

// posting a day
router.post('/activity/day', itinerariesController.postDay)

module.exports = router;