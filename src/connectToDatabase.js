'use strict'

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connection.on('connected', function() {
  console.log('\n\nConnected to mongodb://localhost:27017/test \n\n') // eslint-disable-line
})

module.exports = () => mongoose.connect('mongodb://localhost:27017/test', { useMongoClient: true })
