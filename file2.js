const fs = require("fs");
fs.readFile("./log.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data, "data");
  }
});
