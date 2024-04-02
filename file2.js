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
        console.log(data, "data");
      }
    });
  } catch (error) {
    console.log(error);
  }
}
file();
