var express = require('express')
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

var app = express()

//middleware
app.use(bodyParser.json())

app.post('/todos',(req,res) => {
  var todo = new Todo({
    text: req.body.text
  })
  todo.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send(e)
  })
})

app.get('/todos',(req,res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  },(e) => {
    res.status(400).send(e)
  })
})


app.listen(3000, () => {
  console.log('listening on port 3000')
})

module.exports = {app}



// user = new User({
//   email: 'new@new'
// })

// user.save()

// var newTodo = new Todo({
//     text: 'cook dinner'
// })

// newTodo.save().then((doc) => {
//   console.log('saved doc ',doc)
// }, (e) => {
//   console.log(e)
// })

// moreTodo = new Todo({
//   text: "goto work again",
//   completed: false,
//   completedAt: 123
// })

// moreTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc,undefined,2))
// },(e) => {
//   console.log(e)
// })