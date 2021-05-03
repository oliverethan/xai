var express = require('express');
var app = express();

// set port
var port = process.env.PORT || 8080

app.set('view engine', 'jade'); 

app.use(express.static(__dirname + "/public"));

// routes

app.get("/", function(req, res) {
	res.render("facenet_combine");
})

app.get("/neuron", function(req, res) {
        res.render("neuroncombiner");
})

app.get("/dictionary", function(req, res) {
        res.render("dictionary");
})


app.get("/lime", function(req, res) {
        res.render("lime_jade");
})

app.get("/elephant", function(req, res) {
        res.render("elephant");
})

app.get("/faces", function(req, res) {
        res.render("facenet_combine");
})

app.listen(port, function() {
	console.log("app running");
})