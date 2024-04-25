const Book = require("../model/Book");

// const bodyParser = require("body-parser");
const create = async (req, res) => {
  try {
    // let book = req.body;
    console.log(req.body);
    let book = new Book(req.body);
    book = await book.save();

    res.end("<h1>Create book</h1>");
  } catch (err) {
    console.log(err);
  }
  // res.send("Book Add");
};
const getAll = async (req, res) => {
  try {
    let books = await Book.find({});
    console.log(books);
    res.render("AllBookDetails", {
      books: books,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteBook = async (req, res) => {
  let id = req.params._id;
  await Book.deleteOne({ _id: id });
  getAll(req, res);
};
module.exports = {
  create,
  getAll,
  deleteBook,
};
