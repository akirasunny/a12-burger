var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
 	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "h8btdjpwnn0wdg3j"
	});
};

connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected as id " + connection.threadId);
});

module.exports = connection;