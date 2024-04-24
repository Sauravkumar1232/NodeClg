const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRound = 10;
const signUp = async (req, res) => {
  try {
    const { email } = req.body;
    let isEmail = await User.findOne({ email: req.body.email });
    console.log(req.body.email, isEmail);
    if (isEmail) {
      res.send("<h1>Already registered</h1>");
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
      let token = jwt.sign({ id: user._id }, "secret", { expiresIn: 60 });
      console.log(token);
      res.cookie("jwt", token).send("<h1>Logged in succes....</h1>");
    }
  } catch (err) {
    res.send("<h1>Incorrect passqord or email....</h1>");
  }
};

module.exports = {
  signUp,
  login,
};
