const db = require("./db_config");

const sql = `INSERT INTO customers (name, address) 
VALUES ('dihka', 'lombok')`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});