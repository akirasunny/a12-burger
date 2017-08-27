var orm = require("../config/orm");
var express = require("express");
var router = express.Router();

var burger = {
	all: function(callback) {
		orm.selecttrue("burgers", function(res) {
			callback(res);
		});
	},
	create: function(col, val, callback) {
		orm.insert("burgers", col, val, function(res) {
			callback(res);
		});
	},
	update: function(col, val, condcol, cond, callback) {
		orm.update("burgers", col, val, condcol, cond, function(res) {
			callback(res);
		});
	},
	delete: function(condcol, cond, callback) {
		orm.delete("burgers", condcol, cond, function(res) {
			callback(res);
		});
	}
};

module.exports = burger;