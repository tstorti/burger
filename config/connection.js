//    * Inside the `connection.js` file, setup the code to connect Node to MySQL.
//    * Export the connection.

var mysql = require("mysql");

var connection = {
    local: mysql.createConnection({
        host: "localhost",
        port: 3306,

        // Your username
        user: "root",

        // Your password
        password: "enter password",
        database: "burgers_db"
    })
};

module.exports = connection;

