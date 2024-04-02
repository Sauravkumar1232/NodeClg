let removeFile = new Promise((resolve, reject) => {
  const fs = require("fs");
  fs.unlink("example.txt", (error) => {
    if (error) {
      reject("error occured", error);
    } else {
      resolve("File Remove SuccessFully..");
    }
  });
});
removeFile
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
