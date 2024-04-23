const express = require("express");
const route = express.Router();
route.get("/getAll", (req, res) => {
  res.end("Student is fetching");
});

route.get("/ ", (req, res) => {
  res.end("Student is attendence");
});

route.get("/fees", (req, res) => {
  res.end("Student is fess");
});

route.get("/report", (req, res) => {
  res.end("Student is report");
});

module.exports = route;
