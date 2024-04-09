const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.end("<h1>Hello From Server</h1>");
});

app.get("/contact", (req, res) => {
  res.end("<h1>Hello From Server</h1>");
});
// app.get("*", (req, res) => {
//   res.end("<h1>Hello From All</h1>");
// });

app.get("/simpleIntrest/:principle/:rate/:time", (req, res) => {
  let principle = req.params.principle;
  let rate = req.params.rate;
  let time = req.params.time;
  console.log(principle, rate, time);

  console.log(rate, "rate");
  console.log(time, "time");

  res.end("<h1>Simple Intrest</h1>");
});

app.get("/area/:lenght/:width", (req, res) => {
  let lenght = req.params.lenght;
  let width = req.params.width;
  console.log(lenght, width);
  let area = lenght * width;
  res.end("<h1>Area of Triangle</h1>" + area);
});
app.listen(3000, () => {
  console.log("Server Started..");
});

// Route + all url => routing parameter
// : to make thme dynamic
// req.query => query paramter  start with &
// req.params=> routing parameter combine with route
