const express = require("express");
const app = express();
const bookRouter = require("./router/bookRouter");
const path = require("path");

const connect = require("./dataBase/connection");
app.use(express.json()); // will convert string into obj
app.use(bookRouter);
app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started at 3000");
  }
});
connect();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
