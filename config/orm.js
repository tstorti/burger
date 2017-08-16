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
    selectAll: function(tableName){
        return new Promise(
        function (resolve, reject) {
            var query = "SELECT * FROM ??";
            connection.query(query, [tableName], function(err, res) {
                if (err) {
                    reject(err);
                }
                resolve(res);


            });
        }); 
    },

    //adds a new burger to the database
    insertOne: function(tableName, colName, itemName){
        return new Promise(
        function (resolve, reject) {
            var query = "INSERT INTO ?? (??) values (?)";
            connection.query(query, [tableName, colName, itemName], function(err, res) {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    },

    //changes the devoured status of a burger matching a passed ID
    updateOne: function(tableName, colName, newVal, itemID){
        return new Promise(
        function(resolve, reject){
            var query = "UPDATE ?? SET ?? = ? WHERE id = ?";
            connection.query(query, [tableName, colName, newVal, itemID], function(err, res) {
                if (err) {
                    reject(err);
                }
                resolve(res);
            }); 
        });        
    },
}

module.exports = orm;