const mongoose = require('mongoose');//for connection only
const connect = async() => {
    try {
        let connection = await mongoose.connect(`mongodb://localhost:27017/noderd-2-may`, {useNewUrlParser: true,});
        console.log("Data base connected...");
    } catch(error) {
        console.log(error)
    }
}
module.exports = connect;