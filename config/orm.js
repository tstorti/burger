//   * Import (require) `connection.js` into `orm.js`

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()` 
//      * `insertOne()` 
//      * `updateOne()` 

//    * Export the ORM object in `module.exports`.

var connection = require("./connection.js").local;
var mysql = require("mysql");

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id "+connection.threadId);
});

var orm = {
    selectAll: function(){
        var query = "SELECT * FROM burgers";
        connection.query(query, function(err, res) {
            console.log(res);
        }); 
    },
    insertOne: function(newBurger){
        var query = "INSERT INTO burgers(burger_name) values (?)";
        connection.query(query, [newBurger], function(err, res) {
        }); 
    },
    updateOne: function(burgerID){
        var query = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(query, [burgerID], function(err, res) {
        }); 
    },
}

module.exports = orm;