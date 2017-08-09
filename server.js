// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

// Create an instance of the express app.
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Specify the port.
var port = 3000;

//always shows main layout, route will determine what gets rendered inside of {{{body}}}
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
app.get("/", function(req, res) {

});



// Initiate the listener.
app.listen(port);
