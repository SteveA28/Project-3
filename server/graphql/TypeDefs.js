import MONGOOSE_CONNECTION from "../db/connection.js";
import Package from "../models/PackageModel.js";
import User from "../models/UserModel.js";
import Category from "../models/CategoryModel.js";
import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
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

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Mutations",
  fields: () => ({
    findPackage: {
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

export { PackageType, UserType, CategoryType, QueryType, MutationType };
