const express = require("express");
const app = express();
const path = require("path");
const signUproute = require("./router/signupRouter");
const bookRoute = require("./router/bookRoute.js");
const connect = require("./connection.js");
connect();
app.use(signUproute);
app.use(bookRoute);
app.listen(3000, () => {
  console.log("Server started at 3000...");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
