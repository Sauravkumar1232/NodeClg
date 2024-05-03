const express = require("express");
const router = express.Router();
const bookController = require("../controllers/BookController");

router.post("/book/create", (req, res) => {
  bookController.bookCreate(req, res);
});

module.exports = router;
