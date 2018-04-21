const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  offering: { type: String, required: true },
  category: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String, required: true },
  phone: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Resource = mongoose.model("Resource",  resourceSchema);

module.exports = Resource;
