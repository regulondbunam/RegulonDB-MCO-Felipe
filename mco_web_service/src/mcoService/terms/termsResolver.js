const TermsController = require("./termsController");
//Resolver
const TermsResolvers = {
  Query: {
    getAllTerms: () => TermsController.getAllTerms(),
    getTermByName: (_, { termName }) => TermsController.getTermByName(termName),
    getTermByID: (_, { termID }) => TermsController.getTermByID(termID),
    getTermChildren: (_, { termID }) => TermsController.getTermChildren(termID),
    getTermParents: (_, { termID }) => TermsController.getTermParents(termID),
    getTermsByText: (_, { texto }) => TermsController.getTermsByText(texto),
  },
};
module.exports = TermsResolvers;
