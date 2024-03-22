import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  password: {
    type: String,
    require: true,
    minlength: 8,
  },
  orders: [String],
});

export default new mongoose.model("Users", UsersSchema);
