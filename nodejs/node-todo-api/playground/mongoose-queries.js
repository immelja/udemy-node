const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')

var id = '59d3d29ec21121fd5149bb19'

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos)
})

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo)
})

Todo.findById(id).then((todo) => {
    console.log('TodoById', todo)
})