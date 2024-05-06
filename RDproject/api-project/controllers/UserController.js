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
    let id = req.params.id;
    console.log(id, "user id");

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

const getUserForEdit = async (req, res) => {
  try {
    let id = req.params.id;

    let user = await User.findById({ _id: id });
    res.status(200).send({
      success: true,
      message: "User Fetched...",
      data: user,
    });
  } catch (err) {
    res.status(500).send({
      success: true,
      message: "Error ",
      err,
    });
  }
};

const userEdit = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id, "id");
    console.log(req.body);
    const { firstname, Lastname, email, password } = req.body;
    let user = await User.findById({ _id: id });
    console.log(user, "user for update");

    user.firstname = firstname;
    user.Lastname = Lastname;
    user.email = email;
    user.password = password;

    await user.save();
    res.status(200).send({
      success: true,
      message: "User Updated...",
      // data: user,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Error ",
      err,
    });
  }
};

module.exports = {
  createuser,
  users,
  deleteUser,
  getUserForEdit,
  userEdit,
};
