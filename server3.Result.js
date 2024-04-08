const url = require("url");
const http = require("http");
myServer = http.createServer((req, res) => {
  let myUrl = url.parse(req.url, true);

  if (myUrl.pathname == "/result/marks") {
    let hindi = parseInt(myUrl.query.hindi);
    let maths = parseInt(myUrl.query.maths);

    console.log(hindi, maths);
    let total = hindi + maths;
    let avg = total / 2;
    console.log("AVG", avg);
    res.end("<h1>Simple intrest</h1>" + avg);
  }
});
myServer.listen(3000, () => {
  console.log("Server Start on 3000");
});
