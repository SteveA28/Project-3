import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
  name: String,
});

export default mongoose.model("Categories", CategorySchema);
