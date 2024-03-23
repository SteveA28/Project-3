import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

try {
  await mongoose.connect(
    process.env.MONGO_URI ||
      "mongodb+srv://Rilwan410:Nawlir41001@cluster0.frzazvm.mongodb.net/",
    { dbName: "Project3" }
  );
  console.log("Successfully connected to Project 3 Database");
} catch (e) {
  console.log(e);
}

export default mongoose.connection;
