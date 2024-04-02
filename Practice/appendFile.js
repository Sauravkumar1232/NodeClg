let appendFile = new Promise((resolve, reject) => {
  let fs = require("fs");
  const data = "Appended File/...";
  fs.appendFile("removeFile.txt", data, (error, data) => {
    if (error) {
      reject("error occured", error);
    } else {
      resolve("file appended..", data);
    }
  });
});
appendFile
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));
