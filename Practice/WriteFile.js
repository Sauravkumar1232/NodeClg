let writeFile = new Promise((resolve, reject) => {
  const fs = require("fs");
  let data = "hallo world";
  fs.writeFile("./appendFile.js", data, (error) => {
    if (error) {
      reject("Not created");
    } else {
      resolve("File created");
    }
  });
});

writeFile
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error, "error");
  });
