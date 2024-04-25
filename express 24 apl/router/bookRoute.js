const express = require("express");
const bookController = require("../controller/BookController");
const auth = require("../middleware/auth");
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.post("/create", (req, res) => {
  bookController.create(req, res);
});
router.get("/getBooks", (req, res) => {
  bookController.getAll(req, res);
});
router.get("/bookView", (req, res) => {
  res.render("BookView");
});

router.get("/book/delete/:_id", auth.isAdmin, (req, res) => {
  bookController.deleteBook(req, res);
});
module.exports = router;
