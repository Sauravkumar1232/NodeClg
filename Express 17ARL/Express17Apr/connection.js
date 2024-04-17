const mongoose = require("mongoose");

const connect = async () => {
  try {
    let connect = await mongoose.connect(
      "mongodb://localhost:27017/noderd-17-Apl",
      {
        useNewurlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connected");
  } catch (error) {
    console.log("server is not connected to data base");
  }
};
module.exports = connect;
