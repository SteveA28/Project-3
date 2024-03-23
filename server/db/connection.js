import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

try {
  await mongoose.connect(process.env.MONGO_URI, { dbName: "Project3" });
  console.log("Successfully connected to Project 3 Database");
} catch (e) {
  console.log(e);
}

export default mongoose.connection;
