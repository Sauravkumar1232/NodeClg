const express = require("express");
const route = express.Router();
route.get("/get/studets", (req, res) => {
  res.end("Student is fetching");
});

module.exports = route;
