const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  rollNo: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  fatherName: { type: String, required: true },
  address: { type: String, required: true },
});
module.exports = mongoose.model("Student", BookSchema);
