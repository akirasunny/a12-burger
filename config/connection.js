var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else{
 	connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "hacktheplanet",
	database: "todoagain_db"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected as id " + connection.threadId);
});

module.exports = connection;