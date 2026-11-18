import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true, // removes white spaces around the username
      minlength: 1,
      maxlength: 30,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true } // createdAt and updatedAt
);

// Before saving any password, hash it
userSchema.pre("save", async function (next) {
  // don't hash again if the password was not modified
  if (!this.isModified("password")) return next();

  // 10 salt rounds
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare passwords
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);
