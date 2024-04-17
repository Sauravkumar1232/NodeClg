const express = require("express");
const connect = require("./connection");
const path = require("path");
const viewRoute = require("./views/router/studentRouter");
const app = express();
app.use(viewRoute);
app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is started");
  }
});
connect();
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
