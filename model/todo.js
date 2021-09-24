const mongoose = require('mongoose')

// Create Schema For The Todo Data
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    required: true
  }
})

// Create Model To Wrap Around The Schema 
// & Communicate With Mongodb Atlas
const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo