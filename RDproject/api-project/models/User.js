const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  Lastname: { type: String, required: true },
  // mobno: { type: String , required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // usertype:{type:Number,default:2,enum:[1,2],required:true},//1=>admin,2=>user//enum{1,2}
  // status:{type:String,default:'active',enum:[active,disable],required:true},
  //  status: {
  //   type: String,
  //   // default: "active",
  //   enum: ["active", "disable"],
  // required: true,
  // },
});

module.exports = mongoose.model("User", UserSchema); //file name 'User' should be same
