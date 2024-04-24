const jwt = require("jsonwebtoken");
const registerAuth = (req, res, next) => {
  console.log(req, "  req");
  const token = req.cookies.jwt;
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
module.exports = registerAuth;
