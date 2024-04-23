const express = require("express");
const connect = require("./connection.js");
const app = express();
const path = require("path");
const route = require("./router/userRoute.js");

connect();
// app.use((req, res, next) => {
//   console.log("Hello from midddle ware");
//   next();
// });
// app.get("/", (req, res) => {
//   res.end("Hello from server");
// });
app.use(route);
app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log("server is running");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
