let readFileNew = new Promise((resolve, reject) => {
  const fs = require("fs");
  fs.readFile("./example.txt", "utf-8", (error, data) => {
    if (error) {
      reject("error occured", error);
    } else {
      resolve("File ready to read => ", data);
    }
  });
});

readFileNew
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error, "error");
  });
// console.log(readFileNew);
