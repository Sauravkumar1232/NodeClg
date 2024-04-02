// const fs = require("fs");
// fs.readFile("./log.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data, "data");
//   }
// });
const fs = require("fs");
async function file() {
  try {
    await fs.readFile("./log.txt", "utf-8", (error, data) => {
      if (error) {
        console.log(error);
      } else {
        let content = "RD College";
        console.log(data, "data of");
        let docFile = fs.writeFile("/log.doc", content, (error) => {
          console.log(docFile, "converted to doc");
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
}
file();

//=================================================================================================
const data = "dfghjkldfghjkl sdfghjkl";
fs.appendFile("./log3.txt", data, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data, "data");
  }
});

//===========================================

fs.mkdir("video", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("directory created");
  }
});
