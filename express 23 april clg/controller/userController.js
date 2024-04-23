const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const saltRound = 10;
const signUp = async (req, res) => {
  try {
    let isEmail = User.findOne({ email: req.body.email });
    console.log(req.body.email, isEmail);
    if (!isEmail) {
      return res.send("<h1>Already registered</h1>");
    }
    let user = new User(req.body);
    user.password = bcrypt.hashSync(req.body.password, saltRound);
    user = await user.save();
    res.send("<h1>Saved</h1>");
  } catch (err) {}
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) {
      return res.send("<h1>No user found....</h1>");
    }
    user.password = bcrypt.hashSync(req.body.password, saltRound);
    // console.log('db pass',user. )
    let flag = bcrypt.compareSync(req.body.password, user.password);
    if (flag) {
      res.send("<h1>Logged in succes....</h1>");
    }
  } catch (err) {
    res.send("<h1>Incorrect passqord or email....</h1>");
  }
};

module.exports = {
  signUp,
  login,
};
