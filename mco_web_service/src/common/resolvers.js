const { mergeResolvers } = require("merge-graphql-schemas");
/** import each Resolver file */
const ontologyResolvers = require("../mcoService/ontology/ontologyResolver");
//const htCollectionResolvers = require("../mcoService/ht_collections/htCollectionsResolver");
const termsResolvers = require("../mcoService/terms/termsResolver");

/** merges all resolver file and exports them to index */
const resolvers = mergeResolvers([
  ontologyResolvers,
  //htCollectionResolvers,
  termsResolvers,
]);
module.exports = resolvers;
