const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required"],
      min: 6,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      min: 6,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      min: 6,
    },
    role: {
      type: String,
      enum: ["admin", "member"],
      default: "member",
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("User", UserSchema);
