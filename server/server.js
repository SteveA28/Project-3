import express from "express";
import cors from "cors";

import { graphqlHTTP } from "express-graphql";

import { GraphQLSchema } from "graphql";

import { MutationType, QueryType } from "./graphql/TypeDefs.js";

const app = express();
const PORT = 3000;

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log(`server listening on port ${PORT}`);
});
