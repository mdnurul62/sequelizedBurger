//require express
var express = require("express");

//set the express function equal to the app variable
var app = express();

//require the index.js file
var models = require("../models");
var db = require("../models/index.js");
var burgers = require("../models/burger.js");

//require the connection file
var connection = require("../config/config.json");

//export the routes to be accessed later
module.exports = function(app) {
	app.get("/", function(req, res) {
		res.redirect("/burgers");
	});

    //route to get the data and return an html page
    app.get("/", function(req, res) {
        models.burger.findAll({

        }).then(function(data) {
            res.render("burger/index");
        });
    });

    //A query which adds a new burger based on the userInput to the database
    app.post("/create", function(req, res) {
        models.burger.create({
        	burger_name: req.body.burger_name
        }).then(function() {
            res.redirect("/burgers");
        });

    });

    //a query that updates the burger devour value to true
    app.put("/burger/update/:id", function(req, res) {
        models.burger.update({
        	WHERE: {id: req.params.id}
        }).then(function() {

            res.redirect("/burgers");
        });
    });
    //to destroy/truncate
    app.delete("/burgers/delete", function(req, res) {
    	models.burger.truncate({
    		WHERE: {
    			id: req.params.id
    		}
    	}).then(function() {
    		res.redirect("/burgers");
    	})
    });
};