const express = require("express");
const app = express();
const connect = require("./connection");
const router = require("./router/user");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(cors());
connect();
app.use(router);
app.listen(3000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server is running at 3000");
  }
});
