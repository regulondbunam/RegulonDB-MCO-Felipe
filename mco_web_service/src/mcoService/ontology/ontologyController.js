const OntologyModel = require("./ontologyModel");
class OntologyController {
  static async getOntologies() {
    try {
      const ontology = await OntologyModel.find({});
      return ontology;
    } catch (error) {
      return error;
    }
  }
  static async getOntologyById(ontoCode) {
    try {
      const ontology = await OntologyModel.findOne({ ontologyCode: ontoCode });
      return ontology;
    } catch (error) {
      return error;
    }
  }
}
module.exports = OntologyController;
