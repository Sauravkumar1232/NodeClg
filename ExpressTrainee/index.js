console.log("Start");

const express = require("express");

const app = express();
// app.get("/", (req, res) => {
//   let name = req.query.name;
//   let password = req.query.password;
//   res.end("<h1>From Root</h1>" + name);
// });

app.get("/simpleIntrest/calculate", (req, res) => {
  let principle = req.query.principle;
  let rate = req.query.rate;

  let time = req.query.time;
  let result = (principle * rate * time) / 100;
  res.end("<h1>From Root</h1>" + result);
});
app.listen(3000, () => {
  console.log("Start Server 3000");
});
