const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router
  .route('/')
  .get(reviewController.getAllreviews)
  .post(reviewController.createReview);

router
  .route('/:id')
  .get()
  .patch()
  .delete()

module.exports = router;
