const mongoose = require("mongoose");

const beersModel = new mongoose.Schema({
  name: { type: String, required: true },
  tagline: { type: String, maxLength: 50 },
  attentuation_level: { type: Number, min: 0, max: 100 },
  image_url: { type: String, default: "https://images.punkapi.com/v2/keg.png" },
  contributed_by: { type: String },
  is_alcoholic: { type: Boolean, default: true },
});

const Beer = mongoose.model("Beer",beersModel);
module.exports = Beer;
