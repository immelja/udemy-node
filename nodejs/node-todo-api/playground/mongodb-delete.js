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
    //deleteMAny
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //   console.log(result)
    // })
    //deleteOne
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
      console.log(result)
    })
    // db.close()
})