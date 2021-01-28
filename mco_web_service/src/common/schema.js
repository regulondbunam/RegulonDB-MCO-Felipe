const { mergeTypes } = require("merge-graphql-schemas");
const { gql } = require("apollo-server-express");
const fs = require("fs");
//Leyendo el schema de GraphQL
const ontologySchema = gql`
  ${fs.readFileSync("./src/mcoService/ontology/ontologySchema.gql").toString()}
  ${fs.readFileSync("./src/mcoService/terms/termsSchema.gql").toString()}
`;
//${fs.readFileSync("./src/mcoService/ht_collections/htCollectionsSchema.gql").toString()}

//exportando el objeto que contiene los schemas fusionados
const typeDefs = mergeTypes([ontologySchema], { all: true });

module.exports = typeDefs;
