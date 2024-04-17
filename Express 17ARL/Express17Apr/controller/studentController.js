const Student = require("../model/StudentSchema");
const studentCreate = async (req, res) => {
  console.log(req.body);
  let student = new Student(req.body);
  student = await student.save();

  res.end("<h1>Create Student</h1>");
};

const getStudents = async (req, res) => {
  try {
    let students = await Student.find({});
    console.log(students);
    res.send("Data fetched");
  } catch (err) {
    console.log(err);
  }
};
module.exports = { studentCreate, getStudents };
