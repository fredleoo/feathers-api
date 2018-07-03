'use strict';
module.exports = (sequelize, DataTypes) => {
  var open_graph = sequelize.define('openGraph', {
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    pixelId: DataTypes.STRING,
    page_id: DataTypes.UUID,
    blog_id: DataTypes.UUID,
    post_id: DataTypes.UUID,
    site_id: DataTypes.UUID
  }, {
    underscored: true,
    underscoredAll: true
  });
  open_graph.associate = function(models) {
    // associations can be defined here
  };
  return open_graph;
};