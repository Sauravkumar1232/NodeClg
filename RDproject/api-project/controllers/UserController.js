const User = require("../models/User");

const createuser = async (req, res) => {
  console.log(req.body);
  let user = new User(req.body);
  await user.save();
  res.send({ message: "data received " });
  console.log(createuser);
};
module.exports = {
  createuser,
};
