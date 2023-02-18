const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  name: {
    type: {
      type: String,
      default: 'Point',
      enum: 'Point',
    },
    age: {
      type: Number,
      default: 18,
    },
  },
  name2: [{
    type: {
      type: String,
      default: 'Point',
      enum: 'Point',
    },
    age: {
      type: Number,
      default: 18,
    },
  }],
});




const Test = mongoose.model('Test', testSchema);

module.exports = Test;
