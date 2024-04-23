const express = require("express");
const Faculty = require("./routes/Faculty");
const app = express();
app.use(Faculty);

app.listen(3000, () => {
  console.log("Server Start....");
});
