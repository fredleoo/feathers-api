'use strict';
module.exports = (sequelize, DataTypes) => {
  var collection = sequelize.define('collection', {
    name: DataTypes.STRING,
    handle: DataTypes.STRING,
    archived: DataTypes.BOOLEAN,
    primaryKey: DataTypes.STRING
  }, {
    underscored: true,
    underscoredAll: true
  });
  collection.associate = function(models) {
    // associations can be defined here
  };
  return collection;
};