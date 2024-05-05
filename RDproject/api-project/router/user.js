const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/UserController");
router.post("/user/create", (req, res) => {
  usercontroller.createuser(req, res);
});
router.get("/user/list", (req, res) => {
  usercontroller.users(req, res);
});
router.delete("/user/delete/:userId", (req, res) => {
  usercontroller.deleteUser(req, res);
});
module.exports = router;
