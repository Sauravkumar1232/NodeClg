const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/noderd-apl23", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected....");
  } catch (err) {
    console.log("error while connection ....");
  }
};
module.exports = connect;
