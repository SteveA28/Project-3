import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_DATABASE =
  process.env.MONGO_URI ||
  "mongodb+srv://Rilwan410:Nawlir41001@cluster0.frzazvm.mongodb.net/";

try {
  await mongoose.connect(MONGO_DATABASE, { dbName: "Project3" });
  console.log("Successfully connected to Project 3 Database");
} catch (e) {
  console.log(e);
}

export default mongoose.connection;
