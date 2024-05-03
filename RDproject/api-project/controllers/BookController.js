const Book = require("../models/BookSchema");

const bookCreate = (req, res) => {
  let book = new Book(req.body);
  book.save();
  console.log(req.body);
  res.end("Created...");
};

module.exports = {
  bookCreate,
};
