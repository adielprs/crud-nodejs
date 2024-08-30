const db = require("./db_config");

const sql = `UPDATE customers
           SET address='bandung'
           WHERE id=1`;

db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
});