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
    // db.collection('Todos').insertOne({
    //   text: 'something',
    //   completed: false
    // }, (err,result) => {
    //     if (err) throw err
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })
    // db.collection('Users').insertOne({
    //     name: 'hemla',
    //     age: 38,
    //     location: 'melbourne'
    // }, (err, result) => {
    //     if (err) throw err
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    //     console.log(result.ops[0]._id.getTimestamp())
    // })
    db.close()
})