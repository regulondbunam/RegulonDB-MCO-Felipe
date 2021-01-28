const mongoose = require("mongoose");
const OntologyModel = mongoose.Schema({
  _id: { type: String, required: true },
  ontologyCode: { type: String, required: false },
  contributors: { type: [String], required: true },
  description: { type: String, required: true },
  iri: { type: String, required: true },
  name: { type: String, required: true },
  note: { type: String, required: true },
  versionIri: { type: Number, required: true },
  schemaVersion: { type: Number, required: true },
});

module.exports = mongoose.model("Ontologies", OntologyModel);
