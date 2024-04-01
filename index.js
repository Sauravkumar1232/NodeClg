// function (module,exports,require,__dirname,__filename){}

// console.log("nde js project ");
// a = "as";
// console.log(a);
// console.log(__dirname);
// console.log(__filename);
// console.log(module);

// const fs = require("fs");
const maths = require("./maths");

const maths1 = require("./Helper/common");

const sum = maths.add(53, 5);
console.log("Sum", sum);
const sub = maths.sub(5, 5);
console.log("Sub ", sub);
console.log(maths);

console.log("--------------------------------------");

const area = require("./area");
const triangle = area.areaOfTri(5, 5);
console.log("triangle=> ", triangle);

const circle = area.circle(1);
console.log("Circle =>", circle);

const ractangle = area.ractangle(5, 5);
console.log("Ractangle +>", ractangle);

const multi = maths1.multi(5, 5);
console.log(multi);
