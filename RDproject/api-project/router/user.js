const express = require("express");
const router = express.Router();
// router.use(express.json());
const usercontroller = require("../controllers/UserController");
router.post("/user/create", (req, res) => {
  usercontroller.createuser(req, res);
});
router.get("/user/list", (req, res) => {
  usercontroller.users(req, res);
});
router.delete("/user/delete/:id", (req, res) => {
  usercontroller.deleteUser(req, res);
});
router.get("/user/forEdit/:id", (req, res) => {
  usercontroller.getUserForEdit(req, res);
});
router.put("/user/edit/:id", (req, res) => {
  usercontroller.userEdit(req, res);
});
module.exports = router;
