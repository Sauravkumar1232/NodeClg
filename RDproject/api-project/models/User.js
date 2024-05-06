const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: { type: String, required: false },
  Lastname: { type: String, required: false },
  // mobno: { type: String , required: false },
  email: { type: String, required: false },
  password: { type: String, required: false },
  // usertype:{type:Number,default:2,enum:[1,2],required:false},//1=>admin,2=>user//enum{1,2}
  // status:{type:String,default:'active',enum:[active,disable],required:false},
  //  status: {
  //   type: String,
  //   // default: "active",
  //   enum: ["active", "disable"],
  // required: false,
  // },
});

module.exports = mongoose.model("User", UserSchema); //file name 'User' should be same
