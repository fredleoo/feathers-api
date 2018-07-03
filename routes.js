const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
const socketio = require('@feathersjs/socketio')

const models = require('./models')

const db = models('bt_panmedia_everest')

var normalizedPath = require("path").join(__dirname, "services")

var services = {}

require("fs").readdirSync(normalizedPath).forEach(function(file) {  
  var name = file.substr(0, file.length - 3)
  services[name] = require("./services/" + file)
})

// Create an Express compatible Feathers application instance.
const app = express(feathers())
// Turn on JSON parser for REST services
app.use(express.json())
// Turn on URL-encoded parser for REST services
app.use(express.urlencoded({ extended: true }))
// Enable REST services
app.configure(express.rest())
// Enable Socket.io services
app.configure(socketio())
app.use(express.errorHandler())


/*
* routes
*/
app.use('/pages', new services.page(db))
app.use('/collections', services.collection(db))


// Start the server
const port = 3031
app.listen(port, () => {
  console.log(`Feathers server listening on port ${port}`)
})