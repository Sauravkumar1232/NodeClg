const jwt = require("jsonwebtoken");
const SignUp = require("../model/SignUp");
const registerAuth = (req, res, next) => {
  // console.log(req, "  req");
  const token = req.cookies.jwt;
  // const decodedToken = jwt_decode(token);
  console.log(decodedToken, "token");
  if (token) {
    jwt.verify(token, "secret", (error, result) => {
      if (error) {
        res.render("login");
      } else {
        next();
      }
    });
  } else {
    res.render("login");
  }
  //   console.log(token);
};

const isAdmin = async (req, res, next) => {
  const token = req.cookies.jwt;
  // if (!token) {
  //   return next(new ErrorHandler("User is not authenticated", 401));
  // }
  const decoded = jwt.verify(token, "secret");
  req.user = await SignUp.findById(decoded.id);
  if (req.user.email == "admin@yopmail.com") {
    next();
  } else {
    res.send("<h1>Not allowed</h1>");
  }
};
module.exports = {
  registerAuth,
  isAdmin,
};
