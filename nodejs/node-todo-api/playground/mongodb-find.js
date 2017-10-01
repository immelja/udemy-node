// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectId } = require('mongodb')

var obj = new ObjectId()
console.log(obj)
console.log(obj.getTimestamp())

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err)
    }
    console.log('connected')
    db.collection('Todos').find({completed: false}).toArray().then((docs) => {
      console.log('Todos')
      console.log(JSON.stringify(docs, undefined, 2))
    },(err) => {
      console.log(err)
    })
    // db.close()
})