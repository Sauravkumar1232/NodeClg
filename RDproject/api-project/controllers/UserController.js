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
const users = async (req, res) => {
  let user = await User.find({});

  // console.log(user);
  res.status(200).send({
    success: true,
    message: "User Fetched....",
    data: user,
  });
};

const deleteUser = async (req, res) => {
  try {
    let id = req.params._userId;
    console.log(id);

    let user = await User.deleteOne({ _id: id });
    res.status(200).send({
      success: true,
      message: "Deleted Success..",
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      success: true,
      message: "Error ",
      error,
    });
  }
};
module.exports = {
  createuser,
  users,
  deleteUser,
};
