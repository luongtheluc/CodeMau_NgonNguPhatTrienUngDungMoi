var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var Student = require("./../model/student");
var StudentService = require("../../services/studentService");
const verifyToken = require("../../Utils/VerifyToken");



router.get("/", function (req, res) {
    res.render("student-list");
});

router.get("/student-list", verifyToken, async function (req, res) {
    var studentService = new StudentService();
    var student = await studentService.getStudentList();
    res.json(student);
});
router.get("/get-student", verifyToken, async function (req, res) {
    var studentService = new StudentService();
    var student = await studentService.getStudent(req.query.id);
    res.json(student);
});

router.post("/insert-student", verifyToken, async function (req, res) {
    var studentService = new StudentService();
    var stu = new Student();
    stu.Name = req.body.Name;
    console.log(stu)
    var result = await studentService.insertStudent(stu);
    res.json({ result, status: true, message: "" });
});

router.post("/update-student", verifyToken, async function (req, res) {
    var studentService = new StudentService();
    var stu = new Student();
    stu._id = new ObjectId(req.body.id);
    stu.Name = req.body.Name;
    console.log(stu)
    await studentService.updateStudent(stu);
    res.json({ status: true, message: "update thanh cong" });
});
router.delete("/delete-student", verifyToken, async function (req, res) {
    var studentService = new StudentService();
    await studentService.deleteStudent(req.query.id);
    res.json({ status: true, message: "" });
});
module.exports = router;
