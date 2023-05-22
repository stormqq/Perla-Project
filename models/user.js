import mongoose, { model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

export default mongoose.models.User || mongoose.model("User", userSchema);