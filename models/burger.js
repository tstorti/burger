// * Inside `burger.js`, import `orm.js` into `burger.js`

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

var orm = require("../config/orm.js");

var burger = {
    newBurger: function(burgerName){
        orm.insertOne(burgerName);
    },
    devourBurger: function(burgerName){
        orm.updateOne(burgerName);
    },
    allBurgers:function(){
        return(orm.selectAll());
    }
}

module.exports = burger;