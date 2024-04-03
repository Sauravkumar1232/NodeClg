const fs = require("fs/promises");
function readFile() {
  try {
    fs.readFile("./removeFile.txt", "utf-8")
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.log(err);
  }
}
readFile();
