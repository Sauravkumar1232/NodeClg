const express = require("express");
const app = express();
app.get("/avg", (req, res) => {
  let hindi = parseInt(req.query.hindi);
  let english = parseInt(req.query.english);
  let total = hindi + english;
  let avg = total / 2;
  res.end("<h1>Average</h1>" + avg);
});
app.listen(3000, () => {
  console.log("Server Is Started at 3000");
});
