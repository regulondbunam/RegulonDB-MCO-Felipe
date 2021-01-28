const mongoose = require("mongoose");
const TermsModel = mongoose
  .Schema({
    _id: { type: String },
    createdBy: {
      text: {
        type: String,
      },
      creationDate: {
        type: String,
      },
    },
    definition: {
      text: {
        type: String,
      },
      creationDate: {
        type: String,
      },
    },
    description: { type: String },
    hasDbXRef: { type: [String] },
    hasOboNameSpace: { type: String },
    hasRelatedSynonyms: { type: [String] },
    iri: { type: String },
    name: { type: String },
    oboId: { type: String },
    ontologies_id: { type: String },
    subClassOf: { type: [String] },
    superClassOf: { type: [String] },
    synonyms: { type: [String] },
    schemaVersion: { type: Number },
  })
  .index({
    name: "text",
  });
module.exports = mongoose.model("Terms", TermsModel);
