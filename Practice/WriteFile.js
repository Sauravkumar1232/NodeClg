// let writeFile = new Promise();
const fs = require("fs/Promise");
// let data = "hallo world";
// //   fs.writeFile("./appendFile.js", data, (error) => {
// //     if (error) {
// //       reject("Not created");
// //     } else {
// //       resolve("File created");
// //     }
// //   });
// // });
// fs.writeFile(
//   "./appendFile.js",
//   data,
//   error
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// );
// //  => {
// // if (error) {
// //   reject("Not created");
// // } else {
// //   resolve("File created");
// // }
// // });
// // });

// // writeFile
// //   .then((result) => {
// //     console.log(result);
// //   })
// //   .catch((error) => {
// //     console.log(error, "error");
// //   });

function writefile() {
  let cotent = "fghjk";
  fs.writefile("./text.txt", cotent)
    .then(() => {
      console.loga("File Created");
    })
    .catch((error) => console.log(error));

  if (data) {
    console.log("written");
  } else {
    console.log(error);
  }
}
writefile();
