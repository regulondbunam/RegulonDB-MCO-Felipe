const HTCollectionsController = require("./htCollectionsController");
//Resolver
const HTCollectionsResolvers = {
  Query: {
    getAllHTCollections: () => HTCollectionsController.getHTCollections(),
    getHTCollectionByName: (_, { HTCollectionName }) =>
      HTCollectionsController.getHTCollectionByName(HTCollectionName),
    getHTCollectionByID: (_, { HTCollectionID }) =>
      HTCollectionsController.getHTCollectionByID(HTCollectionID),
  },
};
module.exports = HTCollectionsResolvers;
