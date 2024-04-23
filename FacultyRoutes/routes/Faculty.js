const express = require("express");
const routes = express.Router();
routes.get("/getAll", (req, res) => {
  console.log("All Faculty..");
  res.end("All Faculty");
});
module.exports = routes;
