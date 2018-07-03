const service = require('feathers-sequelize')

module.exports = class myService {
    constructor(db) {
        this.db = db
    }

    async find(params) {      
        return this.db.page.findAll()
    }

    async get(id, params) {        
        return this.db.page.findById(id)
    }

    async create(data, params) {        
        return this.db.page.create(data)
    }
    
    async patch(id, data, params) {                        
        return this.db.page.update(data,{
            where:{
                id
            }
        })
    }

    async remove(id, params) {
        return this.db.page.destroy({
            where:{id}
        })
    }
}