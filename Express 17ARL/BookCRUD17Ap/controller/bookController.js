const Book = require("../model/bookSchema");

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
    // let book = req.body;
    // console.log(req.body);
    // let book = new Book(req.body);
    // book = await book.save();
    // let students = await Student.find({});
    // console.log(students);
    // res.send("Data fetched");
    let books = Book.find({});
    console.log(books);
    res.send("<h1>Books</h1>");
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  create,
  getAll,
};
