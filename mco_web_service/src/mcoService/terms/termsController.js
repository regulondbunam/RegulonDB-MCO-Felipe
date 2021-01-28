const TermsModel = require("./termsModel");

class TermsController {
  static async getAllTerms() {
    try {
      const Terms = await TermsModel.find({});
      return Terms;
    } catch (error) {
      return error;
    }
  }
  static async getTermByName(termName) {
    try {
      const Terms = await TermsModel.find({ name: termName });
      return Terms;
    } catch (error) {
      return error;
    }
  }
  static async getTermByID(termID) {
    try {
      const Term = await TermsModel.findOne({ _id: termID });
      return Term;
    } catch (error) {
      return error;
    }
  }
  static async getTermChildren(termID) {
    try {
      const children = [];
      const Term = await TermsModel.findOne({ _id: termID });
      const childrenIDs = Term.superClassOf;
      for (const child of childrenIDs) {
        children.push(await TermsModel.findOne({ _id: child }));
      }
      return children;
    } catch (error) {
      return error;
    }
  }
  static async getTermParents(termID) {
    try {
      const Term = await TermsModel.findOne({ _id: termID });
      const parents = Term.subClassOf;
      return parents;
    } catch (error) {
      return error;
    }
  }
  static async getTermsByText(texto) {
    try {
      TermsModel.syncIndexes();
      const Term = await TermsModel.find({ $text: { $search: texto } });
      return Term;
    } catch (error) {
      return error;
    }
  }
}
module.exports = TermsController;
