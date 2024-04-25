const mongoose = require("mongoose");
const connect = () => {
  let connection = mongoose
    .connect("mongodb://localhost:27017/noderd-24-apl", {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    })
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err));
};

module.exports = connect;
