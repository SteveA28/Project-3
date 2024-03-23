// import { Category, Package, User } from "../../models/Index.js";
import Category from "../models/CategoryModel.js";
import Package from "../models/PackageModel.js";
import User from "../models/UserModel.js";
import { hash } from "bcrypt";
import MONGOOSE_CONNECTION from "../db/connection.js";

await Category.deleteMany();
const categories = await Category.insertMany([
  { name: "Family" },
  { name: "Group" },
  { name: "Individual" },
]);
console.log("category data successful");

await Package.deleteMany();
const packages = await Package.insertMany([
  {
    name: "Individual Basic Package",
    image: "individual-basic.jpeg",
    categoryId: categories[2]._id,
    price: 500,
    packageDetails: [
      "3-day 4-star Hotel accomodations, Commercial Flight Fees covered",
    ],
  },
  {
    name: "Individual Premium Package",
    image: "individual-premium.jpeg",
    categoryId: categories[2]._id,
    price: 750,
    packageDetails: [
      "5-day 5-star Hotel accomodations",
      "First Class Flight Fees covered",
      "All-inclusive first 3 days",
      "Free Wifi, Free Gym & Fitness",
    ],
  },
  {
    name: "Individual Platinum Package",
    image: "individual-platinum.jpeg",
    categoryId: categories[2]._id,
    price: 950,
    packageDetails: [
      "9-day 5-star Hotel accomodations",
      "First Class Flight Fees Covered",
      "All-inclusive all 9 days",
      "Free Wifi",
      "Free Car Rental provided",
    ],
  },
  {
    name: "Group Basic Package",
    image: "group-basic.jpeg",
    categoryId: categories[1]._id,
    price: 750,
    packageDetails: [
      "3-day 4-star Hotel accomodations, Commercial Flight Fees covered",
    ],
  },
  {
    name: "Group Premium Package",
    image: "group-premium.jpeg",
    categoryId: categories[1]._id,
    price: 900,
    packageDetails: [
      "5-day 5-star Hotel accomodations",
      "First Class Flight Fees covered",
      "All-inclusive first 3 days",
      "Free Wifi, Free Gym & Fitness",
    ],
  },
  {
    name: "Group Platinum Package",
    image: "group-platinum.jpeg",
    categoryId: categories[1]._id,
    price: 1100,
    packageDetails: [
      "9-day 5-star Hotel accomodations",
      "First Class Flight Fees Covered",
      "All-inclusive all 9 days",
      "Free Wifi",
      "Free Car Rental provided",
    ],
  },
  {
    name: "Family Basic Package",
    image: "family-basic.jpg",
    categoryId: categories[0]._id,
    price: 650,
    packageDetails: [
      "3-day 4-star Hotel accomodations, Commercial Flight Fees covered",
    ],
  },
  {
    name: "Family Premium Package",
    image: "family-premium.jpeg",
    categoryId: categories[0]._id,
    price: 850,
    packageDetails: [
      "5-day 5-star Hotel accomodations",
      "First Class Flight Fees covered",
      "All-inclusive first 3 days",
      "Free Wifi, Free Gym & Fitness",
    ],
  },
  {
    name: "Family Platinum Package",
    image: "family-platinum.jpeg",
    categoryId: categories[0]._id,
    price: 1100,
    packageDetails: [
      "9-day 5-star Hotel accomodations",
      "First Class Flight Fees Covered",
      "All-inclusive all 9 days",
      "Free Wifi",
      "Free Car Rental provided",
    ],
  },
]);

console.log("package data successful");

await User.deleteMany();

const users = await User.insertMany([
  {
    firstName: "John",
    lastName: "Doe",
    password: await hash("password123", 10),
  },
]);
console.log("user data successful");
