const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');



const DB = process.env.DATABASE.replace(
  '<PASSWORD>', 
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
  .then(con => {
    console.log('DB connection successful');
});

const touorSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A tour must have a name'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    require: [true, 'A tour must have a price']
  }
});

const tour = mongoose.model('Tour', touorSchema);
const tour1 = mongoose.model('Tour1', touorSchema);



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});