//  hanfle by call back
// const fs = require("fs");
// let data = "Hello world";
// fs.writeFile("./log.txt", data, (error) => {
//   if (error) {
//     console.log(error, "err");
//   } else {
//     console.log("File created");
//   }
// });

// handle by async await
const fs = require("fs/promises");
let data = "Hello world";
async function file() {
  try {
    let content = "hellow world";
    let data = await fs.writeFile("./log1.xls", content);
    if (data) {
      console.log("written");
    }
  } catch (error) {
    console.log(error);
  }
}
file();
