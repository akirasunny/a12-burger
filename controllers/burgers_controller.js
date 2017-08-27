var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {
	burger.all(function(data) {
		res.render("index", {burgers: data});
	});
});

router.post("/", function(req, res) {
	burger.create(["burger_name"], [req.body.name], function() {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	var boolean = (req.body.boolean === "true");
	burger.update(["devoured"], [boolean], "id", parseInt(req.params.id), function() {
		res.redirect("/");
	});
});

router.delete("/:id", function(req, res) {
	burger.delete("id", req.params.id, function(data) {
		res.redirect("/");
	});
});

module.exports = router;