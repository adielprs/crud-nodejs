var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_nodejs"
});

if(!db) 
{
    console.log("Database not connected");
}

module.exports = db;