const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
import "./mongoose-connect";
import schema from "./graphql";
const PORT = 4000;

const app = express();

const server = new ApolloServer({
  schema,
  // introspection: true,
  playground: true,
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
