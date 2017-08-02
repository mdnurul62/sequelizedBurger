

// reference standard lib sequelize
var Sequelize = require("sequelize");
// references our connection to the DB.
// var connection = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      len: [1]
    }
    }, {timestamps:  true
    
  });
  return Burgers;
};