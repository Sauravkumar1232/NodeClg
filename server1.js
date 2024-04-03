let fs = require("fs");
const http = require("http"); // build in module like fs
let myServer = http.createServer((req, res) => {
  console.log("request added");
  var d = new Date();
  let data = "\n" + d;
  fs.appendFile("./logFile.txt", data, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(req, "File appended");
    }
  });

  res.end("<h1 >Hello form server</h1>");
});
PORT = 4545;
myServer.listen(PORT, (error) => {
  // server activate on port 3000 machine pr chalne wali ek address where a service is running
  if (error) {
    console.log(error);
  } else {
    console.log("Server is listen on port ......", PORT);
  }
});
