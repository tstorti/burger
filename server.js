// Dependencies
var express = require("express");

// Create an instance of the express app.
var app = express();

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
