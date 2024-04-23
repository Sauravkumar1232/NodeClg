const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");
// router.use(express.json());

router.use(express.urlencoded({ extended: false }));
router.get("/", (req, res) => {
  res.render("login");
});
router.get("/signUp", (req, res) => res.render("signUp"));

router.post("/user/signUp", (req, res) => {
  UserController.signUp(req, res);
});

router.post("/user/login", (req, res) => {
  UserController.login(req, res);
});
module.exports = router;
