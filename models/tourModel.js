const mongoose = require('mongoose');

const touorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.9
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  }
});

const Tour = mongoose.model('Tour', touorSchema);

module.exports = Tour;