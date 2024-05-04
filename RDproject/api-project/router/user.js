const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/UserController");
router.post("/user/create", (req, res) => {
  usercontroller.createuser(req, res);
});
router.get("/user/list", (req, res) => {
  usercontroller.users(req, res);
});
module.exports = router;
