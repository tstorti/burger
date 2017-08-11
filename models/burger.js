// * Inside `burger.js`, import `orm.js` into `burger.js`

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

var orm = require("../config/orm.js");


var burger = {
    //calls the orm to run SQL script to add a new burger to the database
    newBurger: function(burgerName){
        return new Promise(
        function (resolve, reject) { 
            orm.insertOne(burgerName).then(function(result){
                   resolve(result);
            });
        });
    },
    //calls orm to run SQL script to change devoured status for a burger
    devourBurger: function(burgerID){
        return new Promise(
        function(resolve, reject){
            orm.updateOne(burgerID).then(function(result){
                resolve(result);
            });
        });
    },
    //calls orm to run SQL script to grab all burgers
    allBurgers:function(){
        return new Promise(
        function (resolve, reject) { 
            orm.selectAll().then(function(result){
                resolve(result);
            });
        });
    }
}

module.exports = burger;