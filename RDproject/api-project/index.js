const express = require("express");
const app = express();
const connect = require("./connection");
const userRouter = require("./router/user");
const bookRouter = require("./router/bookRouter");

const cors = require("cors");
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(bookRouter);

app.listen(3000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server is running at 3000");
  }
});

connect();
