const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const rateLimit = require("express-rate-limit");
const typeDefs = require("./common/schema");
const resolvers = require("./common/resolvers");
const connectDB = require("./dbConnection");

//ConnectDb
connectDB();
//Server
// Defining GraphQL server
const server = new ApolloServer({
  playground: true,
  typeDefs,
  resolvers,
});

// Create an instance of express to be used with ApolloServer
const app = express();

// set up the ApolloServer with an express middleware
const apiLimiter = rateLimit({
  windowMs: 60000,
  max: 1000,
  message: {
    message: "Too many requests",
    statusCode: "429",
  },
});
app.use(apiLimiter);

// Apply Cors and Express instance to ApolloServer
server.applyMiddleware({
  app,
  cors: {
    origin: "*",
  },
});

// when server start
server_port = process.env.SERVER_PORT;
const servExpress = app.listen(server_port, () =>
  console.log(
    `Server is available in http://localhost:${servExpress.address().port}${
      server.graphqlPath
    }`
  )
);
