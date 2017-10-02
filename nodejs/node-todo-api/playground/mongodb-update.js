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
    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({completed: true}, {
        $set: {
            completed: false
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })
    // db.close()
})