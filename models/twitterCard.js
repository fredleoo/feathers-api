'use strict';
module.exports = (sequelize, DataTypes) => {
  var twitter_card = sequelize.define('twitterCard', {
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    imageAlt: DataTypes.STRING,
    page_id: DataTypes.UUID,
    blog_id: DataTypes.UUID,
    post_id: DataTypes.UUID,
    site_id: DataTypes.UUID
  }, {
    underscored: true,
    underscoredAll: true
  });
  twitter_card.associate = function(models) {
    // associations can be defined here
  };
  return twitter_card;
};