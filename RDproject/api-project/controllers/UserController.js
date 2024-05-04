const User = require("../models/User");

const createuser = async (req, res) => {
  console.log(req.body);
  let user = new User(req.body);
  await user.save();
  res.status(200).send({
    success: true,
    message: "User created....",
    data: user,
  });
  console.log((err) => {
    res.status(200).send({
      success: false,
      message: "Error....",
    });
  });
};
const users = (req, res) => {
  let users = User.find({});
  console.log(users);
};
module.exports = {
  createuser,
};
