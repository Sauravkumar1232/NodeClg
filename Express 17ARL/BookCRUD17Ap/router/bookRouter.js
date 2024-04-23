const express = require("express");
const bookController = require("../controller/bookController");
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.post("/create", (req, res) => {
  bookController.create(req, res);
});
router.get("/getAll", (req, res) => {
  bookController.getAll(req, res);
});
router.get("/bookView", (req, res) => {
  res.render("bookView");
});
module.exports = router;
