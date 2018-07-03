'use strict';
module.exports = (sequelize, DataTypes) => {
  var page = sequelize.define('page', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,            
      allowNull: false
    },
    title: DataTypes.STRING,
    uri: DataTypes.STRING,
    layout: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    publishDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    group: DataTypes.STRING,
    type: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    indexTemplate: DataTypes.STRING,
    slug: DataTypes.STRING,
    entryTemplate: DataTypes.STRING,
    archived: DataTypes.BOOLEAN,    
  }, {
    underscored: true,
    underscoredAll: true
  });
  page.associate = function(models) {        
    page.hasOne(models.twitterCard);
    page.hasOne(models.openGraph, {as: 'opengraph'});
    page.hasOne(models.pageInjection, {as: 'codeInjection'});
    page.belongsTo(models.collection);
  };
  
  return page;
};