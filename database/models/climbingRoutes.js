const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  route_id: { type: Number, index: true, required: true },
  route_name: String,
  route_type: String,
  grade: String,
  rating: Number,
  description: String,
  location: String,
  photos: [
    {
      url: String,
    },
  ],
});

const routeListSchema = new mongoose.Schema({
  route_id: { type: Number, index: true, required: true },
  route_name: String,
  route_type: String,
  grade: String,
  rating: Number,
  results: [routeSchema],
});

const Routes = mongoose.mongoose.model('Routes', routeListSchema);

module.exports = Routes;
