'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

module.exports = function (dbname) {  
  var db        = {};
  var sequelize = new Sequelize(dbname, config.username, config.password, config);
  
  fs
    .readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      var modelFn = require(path.join(__dirname, file))
      var model = modelFn(sequelize, Sequelize)

      db[model.name] = model
    });
  
  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
     db[modelName].associate(db);
    }
  });
  
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return db
};