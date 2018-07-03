const service = require('feathers-sequelize');

module.exports = (db) => {    
  return  service({
      Model: db.collection
    })
}