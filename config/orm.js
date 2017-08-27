var connection = require("./connection");

function createobj(col, val) {
	var obj = {};
	if (col.length === val.length) {
		for (i = 0; i < col.length; i++) {
			obj[col[i]] = val[i];
		};
	};
	return obj;
};

var orm = {
	selecttrue: function(table, callback) {
		connection.query("SELECT * FROM ??", [table], function(err, res) {
			if (err) throw err;
			callback(res);
		});
	},
	insert: function(table, col, val, callback) {
		var dataobj = createobj(col, val);
		connection.query("INSERT INTO ?? SET ?", [table, dataobj], function(err, res) {
			if (err) throw err;
			callback(res);
		});
	},
	update: function(table, col, val, condcol, cond, callback) {
		var dataobj = createobj(col, val);
		connection.query("UPDATE ?? SET ? WHERE ?? = ?", [table, dataobj, condcol, cond], function(err, res) {
			if (err) throw err;
			callback(res);
		});
	},
	delete: function(table, condcal, cond, callback) {
		connection.query("DELETE FROM ?? WHERE ?? = ?", [table, condcal, cond], function(err, res) {
			if (err) throw err;
			callback(res);
		})
	}
};

module.exports = orm;

// test case

// var a = createobj(["name", "date"], ["Akira", "Aug 27"]);
// console.log(a);