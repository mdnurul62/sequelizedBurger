
//Import models
var db = require("../models");
var path = require("path");

module.exports = function(app) {
  
  app.get("/", function(req, res) {
    // Finding all-added burgers in the db
    db.Burgers.findAll({}).then(function(burgersInDb) {
      res.render("index", {burgers: burgersInDb});
      //res.json(burgersInDb);
    });
  });

  app.get("/api/burgers", function(req, res) {
    // GET arbitrarily any buger by id
    db.Burgers.findAll({}).then(function(foundAllBurgers) {
      res.json(foundAllBurgers);
    });
  });

  app.get("/api/burgers/:id", function(req, res) {
    // GET arbitrarily any buger by id
    db.Burgers.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(foundBurger) {
      res.json(foundBurger);
    });
  });

  app.post("/api/create", function(req, res) {
    //npm package body-parser to access Burger model properties.
    db.Burgers.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devour
    }).then(function(createdBurger) {
      res.redirect("/");
    });
  });


  app.post("/api/update", function(req, res) {
    console.log("the id is: "+ req.body.burger_id[0]);
    db.Burgers.update({
      devoured: true
      },
      {
        where: {
          id: req.body.burger_id
        }
      }).then(function(updatedResult) {
        res.redirect("/");
      });
  });
};