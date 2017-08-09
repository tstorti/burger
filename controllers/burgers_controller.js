// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

var express = require("express");
var burger = require("../models/burger.js");

// Routes
var router = {
    index: function(app){
        app.get("/", function(req, res) {
            res.render("index", {
                "text": "hello world",
                "burgers": burger.allBurgers(),
            });
        });
    },
};

module.exports = router;

