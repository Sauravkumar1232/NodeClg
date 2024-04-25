const SignUp = require("../model/SignUp");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const salt = 10;
  try {
    // let user = req.body;
    let isRegistered = await SignUp.findOne({ email: req.body.email });
    // console.log(isRegistered);
    if (isRegistered) {
      return res.send("<h1>Already registered</h1>");
    }
    let user = new SignUp(req.body);
    if (req.body.email === "admin@yopmail.com") {
      user.userType = 1;
    }
    user.password = bcrypt.hashSync(req.body.password, salt);
    // console.log(req.body);
    user = user.save();
    res.send("<h1> Saved</h1>");
  } catch {
    res.send("<h1>Not Saved</h1>");
  }
};

const login = async (req, res) => {
  try {
    let user = await SignUp.findOne({ email: req.body.email });
    console.log(user);
    if (!user) {
      return res.send("<h1>Not Found </h1>");
    }
    let flag = bcrypt.compareSync(req.body.password, user.password);
    if (flag) {
      let token = jwt.sign(
        { id: user._id, userType: user.userType },
        "secret",
        { expiresIn: 60 * 60 }
      );
      res.cookie("jwt", token);
      if (user.userType == 1 || user.userType == 2) {
        let users = await SignUp.find({});
        res.render("AdminHome", {
          user: user,
          users: users,
        });
      }
    } else {
      return res.send("<h1>Wrong password </h1>");
    }
    // if (user.userType == 1) {
    //   return res.render("AdminHome");
    // }
  } catch {
    res.send("<h1>Incorrect passqord or email....</h1>");
  }
};

const getUsers = async (req, res) => {
  let users = await SignUp.find({});
  res.render("AdminHome", {
    users: users,
  });
  // console.log(users);
  // res.end("Users");
};
const getUserForEdit = async (req, res) => {
  let id = req.params._id;

  console.log(id);
  let user = await SignUp.findById({ _id: id });
  res.render("UserDetailsEdit", {
    user: user,
  });
};

const deleteUser = async (req, res) => {
  let id = req.params._id;
  await SignUp.deleteOne({ _id: id });
  getUsers(req, res);
};

const updateUser = async (req, res) => {
  try {
    let id = req.params._id;
    let user = await SignUp.findOne({ _id: id });
    // user.rollNo = req.body.rollNo;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.phone = req.body.phone;
    user.email = req.body.email;
    await user.save();
    // let users = await SignUp.find({});
    getUsers(req, res);
    // res.end("fghjkl");
  } catch (err) {}
};

module.exports = {
  signUp,
  login,
  getUsers,
  getUserForEdit,
  deleteUser,
  updateUser,
};
