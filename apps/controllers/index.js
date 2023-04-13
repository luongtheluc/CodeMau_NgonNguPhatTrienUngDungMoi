var express = require("express");
var router = express.Router();
router.use("/authenticate", require(__dirname + "/authenticatecontroller"));

// router.use("/home", require(__dirname + "/homecontroller"));
router.use("/product", require(__dirname + "/productcontroller"));
router.use("/student", require(__dirname + "/studentController"));

// router.get("/", function(req,res){
//     res.json({"message": "this is index page"});
// });
router.get("/", function (req, res) {
    res.render("index");
});
router.get("/chat", function (req, res) {
    res.render("chat");
});

router.get("/product", function (req, res) {
    res.render("product");
});

router.get("/about", function (req, res) {
    res.render("about");
});

router.get("/services", function (req, res) {
    res.render("services");
});

router.get("/contact", function (req, res) {
    res.render("contact");
});

module.exports = router;
