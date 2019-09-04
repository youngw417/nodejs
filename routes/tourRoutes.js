const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

router.param('id', tourController.checkID);
// Create a checkBody middleware
// Check if body contains the name and price property
// If not, send back 400 (badf Request)




router
  .route('/')
  .post(tourController.checkBody, tourController.createTour)
  .get(tourController.getAllTours);

router
  .route('/:id')
  .delete(tourController.deleteTour)
  .get(tourController.getTour)
  .patch(tourController.updateTour);

module.exports = router;