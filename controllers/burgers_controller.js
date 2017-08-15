// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

var express = require("express");
var burger = require("../models/burger.js");

// Routes
var router = {
    //landing page for app - render all burgers, handlebars index template will categorize based on devoured state
    index: function(app){
        app.get("/", function(req, res) {
            burger.allBurgers().then(function(result){
                res.render("index", {
                    "burgers": result,
                });
            //if error with burger promise
            }).catch(function(error) {
                console.log("Failed!", error);
            });
        });
    },

    //runs post script to add a new burger to the database
    add: function(app){
        app.post("/add",function(req,res){
            burger.newBurger(req.body.name).then(function(result){
                res.send({result: 'redirect', url:'/'});
            //if error with burger promise
            }).catch(function(error) {
                console.log("Failed!", error);
            });
        });
    },
    devour: function(app){
        app.post("/devour",function(req,res){
            burger.devourBurger(req.body.id).then(function(result){
                res.send({result: 'redirect', url:'/'});
            //if error with burger promise
            }).catch(function(error) {
                console.log("Failed!", error);
            });
        });
    }
};

module.exports = router;

