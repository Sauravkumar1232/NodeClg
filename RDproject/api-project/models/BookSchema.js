const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookName: { type: String, required: true },
  authorName: { type: String, required: true },
  price: { type: Number, required: true },
  label: { type: String, required: true },
});

module.exports = mongoose.model("Book", bookSchema);
