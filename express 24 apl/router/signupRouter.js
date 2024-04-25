const express = require("express");
const router = express.Router();
const Controller = require("../controller/SignUPController");
router.use(express.urlencoded({ extended: false }));
const cookieParser = require("cookie-parser");
router.use(cookieParser());
const auth = require("../middleware/auth");
// const auth = require("../middleware/auth.js");

router.get("/signUp", (req, res) => {
  res.render("SignUp");
});

router.post("/user/signUp", (req, res) => {
  Controller.signUp(req, res);
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/user/login", (req, res) => {
  Controller.login(req, res);
});

router.get("/users", (req, res) => {
  Controller.getUsers(req, res);
});

router.get("/user/edit/show/:_id", (req, res) => {
  Controller.getUserForEdit(req, res);
});

router.get("/user/delete/:_id", auth.isAdmin, (req, res) => {
  Controller.deleteUser(req, res);
});
router.post("/user/update/:_id", auth.isAdmin, (req, res) => {
  Controller.updateUser(req, res);
});
module.exports = router;
