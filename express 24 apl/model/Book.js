const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BookSchema = new Schema({
  bookName: { type: String, required: true },
  bookInternalName: { type: String, required: true },
  bookCode: { type: String, required: true },
  author: { type: String, required: true },
  title: { type: String, required: true },
  ISVN_No: { type: Number, required: true },
  price: { type: Number, required: true },
  publishedDate: { type: Date, required: false },
  sampleCopy: { type: Boolean, required: true },
  isPurchasable: { type: Boolean, required: true },
});
module.exports = mongoose.model("Book", BookSchema);
