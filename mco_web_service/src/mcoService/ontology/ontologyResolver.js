const OntologyController = require("./ontologyController");
//Resolver
const ontologyResolvers = {
  Query: {
    getOntologies: () => OntologyController.getOntologies(),
    getOntologyById: (_, { ontoCode }) =>
      OntologyController.getOntologyById(ontoCode),
  },
};
module.exports = ontologyResolvers;
