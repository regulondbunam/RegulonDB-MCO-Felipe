const mongoose = require("mongoose");
const HTCollectionsModel = mongoose.Schema({
  _id: { type: String },
  name: { type: String },
  description: { type: String },
  schemaVersion: { type: Number },
});
module.exports = mongoose.model("HT_Collections", HTCollectionsModel);
