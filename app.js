var express = require("express");
var socketio = require("socket.io");
var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var controller = require(__dirname + "/apps/controllers");
app.use(controller);

app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
app.use("/partical", express.static(__dirname + "/views/partical"));

var server = app.listen(3000, function () {
   console.log("server is running");
});
var io = socketio(server);
var socketcontroller = require("./apps/controllers/chatcontroller")(io);
