const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: Number, default: 2, enum: [1, 2], required: true },
  status: {
    type: String,
    // default: "active",
    enum: ["active", "disable"],
    required: true,
  },
});

module.exports = mongoose.model("SignUp", SignUpSchema);
