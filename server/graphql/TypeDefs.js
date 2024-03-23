import MONGOOSE_CONNECTION from "../db/connection.js";
import Package from "../models/PackageModel.js";
import User from "../models/UserModel.js";
import Category from "../models/CategoryModel.js";
import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLString,
} from "graphql";

const PackageType = new GraphQLObjectType({
  name: "Packages",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    image: { type: new GraphQLNonNull(GraphQLString) },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    // categoryId: { type: GraphQLID },
    category: {
      type: CategoryType,
      resolve: async (parent, args) => {
        const categories = await Category.findOne({ _id: parent.categoryId });
        return categories;
      },
    },
    packageDetails: {
      type: new GraphQLList(GraphQLString),
    },
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
    id: {type:GraphQLID}
  }),
});

// MUTATIONS
const MutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Mutations",
  fields: () => ({
    getPackage: {
      type: PackageType,
      description: "Get Single Package",
      args: {
        id: { type: GraphQLID },
      },
      resolve: async (_, args) => {
        const singlePackage = await Package.findOne({ _id: args.id });
        return singlePackage;
      },
    },
    getUser: {
      type: UserType,
      description: "Get Single User",
      args: {
        id: { type: GraphQLID },
      },
      resolve: async (_, args) => {
        const user = await User.findOne({ _id: args.id });
        return user;
      },
    },
    // getCategory:{}
  }),
});

// QUERIES
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

export { PackageType, UserType, CategoryType, QueryType, MutationType };
