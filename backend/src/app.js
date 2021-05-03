const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
import jwt from "express-jwt";
import cookieParser from "cookie-parser";
import cors from "cors";
import "./mongoose-connect";
import schema from "./graphql";
const PORT = 4000;
const pathG = "/graphql";
const app = express();

const server = new ApolloServer({
  schema,
  playground: true,
  context: ({ req }) => ({ user: req.user }),
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(
  cors({
    origin: "https://loving-sammet-3f15fe.netlify.app/",
    credentials: true,
  })
);

app.use(
  pathG,
  jwt({
    secret: process.env.SECRET ?? "default-secret",
    algorithms: ["HS256"],
    getToken: (req) => {
      if (req?.cookies?.token) {
        return req?.cookies?.token;
      }
      if (req?.headers?.authorization?.split(" ")?.[0] === "Bearer") {
        return req?.headers?.authorization?.split(" ")?.[1];
      }
      if (req?.query?.token) {
        return req?.query?.token;
      }
      return null;
    },
    credentialsRequired: false,
  }),
  (err, req, res, next) => {
    res.status(200).json({
      errors: [
        {
          message: err.message,
        },
      ],
    });
  }
);

server.applyMiddleware({
  app,
  pathG,
  cors: { origin: "http://localhost:3000", credentials: true },
});

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
