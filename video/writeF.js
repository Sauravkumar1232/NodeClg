let fs = require("fs/promises");
function writeF() {
  let data = "New write fole";
  fs.writeFile("./newFileCreate.txt", data)
    .then(() => {
      console.log("File creted");
    })
    .catch(() => {
      console.log("error");
    });
}
writeF();
