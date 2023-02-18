const Review = require('../models/reviewModel');

exports.getAllreviews = async (req, res) => {
  const reviews = await Review.find();

  res.status(200).json({
    status: 'success',
    result: reviews.length,
    data: reviews,
  });
};

exports.createReview = async (req, res) => {
  const review = await Review.create(req.body);

  res.status(200).json({
    status: 'success',
    data: review,
  });
};
