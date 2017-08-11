//   * Import (require) `connection.js` into `orm.js`

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()` 
//      * `insertOne()` 
//      * `updateOne()` 

//    * Export the ORM object in `module.exports`.

var connection = require("./connection.js");
var mysql = require("mysql");

var orm = {
    //returns all of the burgers in the database
    selectAll: function(){
        return new Promise(
        function (resolve, reject) {
            var query = "SELECT * FROM burgers";
            connection.query(query, function(err, res) {
                resolve(res);
            });
        }); 
    },

    //adds a new burger to the database
    insertOne: function(newBurger){
        return new Promise(
        function (resolve, reject) {
            var query = "INSERT INTO burgers(burger_name) values (?)";
            connection.query(query, [newBurger], function(err, res) {
                resolve(res);
            });
        });
    },

    //changes the devoured status of a burger matching a passed ID
    updateOne: function(burgerID){
        return new Promise(
        function(resolve, reject){
            var query = "UPDATE burgers SET devoured = true WHERE id = ?";
            connection.query(query, [burgerID], function(err, res) {
                resolve(res);
            }); 
        });        
    },
}

module.exports = orm;