// * Inside `burger.js`, import `orm.js` into `burger.js`

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

var orm = require("../config/orm.js");

var burger = {
    //calls the orm to run SQL script to add a new burger to the database
    newBurger: function(burgerName){
        return new Promise(
        function (resolve, reject) { 
            orm.insertOne("burgers", "burger_name", burgerName).then(function(result){
                resolve(result);
            //if error with orm promise
            }).catch(function(error) {
                console.log("Failed!", error);
            });
        });
    },
    //calls orm to run SQL script to change devoured status for a burger
    devourBurger: function(burgerID){
        return new Promise(
        function(resolve, reject){
            orm.updateOne("burgers", "devoured", true, burgerID).then(function(result){
                resolve(result);
            //if error with orm promise
            }).catch(function(error) {
                console.log("Failed!", error);
            });
        });
    },
    //calls orm to run SQL script to grab all burgers
    allBurgers:function(){
        return new Promise(
        function (resolve, reject) { 
            orm.selectAll("burgers").then(function(result){
                resolve(result);
            //if error with orm promise
            }).catch(function(error) {
                console.log("Failed!", error);
            });
        });
    }
}

module.exports = burger;