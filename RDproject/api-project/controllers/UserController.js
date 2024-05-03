const User = require("../models/User");

const createuser = (req, res) => {
  console.log(req.body);
  res.send({ message: "data received " });
  console.log(createuser);
};
module.exports = {
  createuser,
};
