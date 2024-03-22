import express from "express";
import { graphqlHTTP } from "express-graphql";
import MONGOOSE_CONNECTION from "./db/connection.js";
import Package from "./models/PackageModel.js";
import User from "./models/UserModel.js";
import Category from "./models/CategoryModel.js";

import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

const app = express();
const PORT = 5000;

const PackageType = new GraphQLObjectType({
  name: "Packages",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    // packageDetails: {
    //   type: new GraphQLList,
    // },
  }),
});
const UserType = new GraphQLObjectType({
  name: "Users",
  fields: () => ({
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  }),
});
const CategoryType = new GraphQLObjectType({
  name: "Category",
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    packages: {
      type: new GraphQLList(PackageType),
      description: "Vacation Packages",
      resolve: async () => {
        const packages = await Package.find({});
        return packages;
      },
    },
    users: {
      type: new GraphQLList(UserType),
      description: "User than can purchase packages",
      resolve: async () => {
        const users = await User.find({});
        return users;
      },
    },
    categories: {
      type: new GraphQLList(CategoryType),
      resolve: async () => {
        const categories = await Category.find({});
        return categories;
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: QueryType,
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log(`server listening on port ${PORT}`);
});
