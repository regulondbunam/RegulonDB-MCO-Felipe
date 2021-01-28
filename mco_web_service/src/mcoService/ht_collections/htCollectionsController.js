//TODO: modify the class

const HTCollectionsModel = require("./htCollectionsModel");
class HTCollectionsController {
  static async getHTCollections() {
    try {
      const HTCollections = await HTCollectionsModel.find();
      console.log(HTCollections);
      return HTCollections;
    } catch (error) {
      return error;
    }
  }
  static async getHTCollectionByName(HTCollectionName) {
    try {
      const HTCollection = await HTCollectionsModel.findOne({
        name: HTCollectionName,
      });
      return HTCollection;
    } catch (error) {
      return error;
    }
  }
  static async getHTCollectionByID(HTCollectionID) {
    try {
      const HTCollection = await HTCollectionsModel.findOne({
        _id: HTCollectionID,
      });
      return HTCollection;
    } catch (error) {
      return error;
    }
  }
}
module.exports = HTCollectionsController;
