var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp',{ useMongoClient: true, promiseLibrary: global.Promise })

module.exports = {mongoose}