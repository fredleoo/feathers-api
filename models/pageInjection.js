'use strict';
module.exports = (sequelize, DataTypes) => {
  var page_injections = sequelize.define('pageInjection', {
    head: DataTypes.TEXT,
    header: DataTypes.TEXT,
    footer: DataTypes.TEXT,
    page_id: DataTypes.UUID
  }, {
    underscored: true,
    underscoredAll: true
  });
  page_injections.associate = function(models) {
    // associations can be defined here
  };
  return page_injections;
};