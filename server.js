var express = require("express");
var ejs = require("ejs");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	/*var highscore = {
		name: "Steve Miller",
		score: 50
	};*/
	res.render("game");
});

app.listen(4000, function(){
	console.log("Parmar's project server running at port 4000");
});