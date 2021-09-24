const Todo = require("../model/todo")
const mongoose = require("mongoose")

const get_todos = async (req, res) => {
  try {
    const todos = await Todo.find()
    res.status(200).send(todos)
  } catch (err) {
    res.status(500).send({ err: "Something went wrong when fetching the todos..."}) 
  } 
}

const add_todo = async (req, res) => {
  try {
    const todo = req.body
    const todoObj = new Todo(todo)

    const result = await todoObj.save()
    res.status(201).send(result)
  } catch (err) {
    res.status(500).send({ err: "Something went wrong when adding the todo..."}) 
  }
}

const update_todos = async (req, res) => {  
  try {
    const { id, todo } = req.body
    const isCompleted = !todo[0].isCompleted
    const objID = mongoose.Types.ObjectId(id)

    await Todo.collection.updateOne({ _id: objID }, { $set: { isCompleted } })
    const updatedTodos = await Todo.find()
    res.status(200).send(updatedTodos)
  } catch (err) {
    res.status(500).send({ err: "Something went wrong when updating the todos..."})
  }
}

const delete_todos = async (req, res) => {
  try {
    await Todo.collection.deleteMany({ isCompleted: true })
    const updatedTodos = await Todo.find()
    
    res.status(200).send(updatedTodos)
  } catch (err) {
    res.status(500).send({ err: "Something went wrong when clearing the completed todos..."})
  }
}

const delete_todo = async (req, res) => {
  try {
    const { id } = req.body
    const objID = mongoose.Types.ObjectId(id)
      
    await Todo.collection.deleteOne({ _id: objID })
    const updatedTodos = await Todo.find()

    res.status(200).send(updatedTodos)
  } catch (err) {
    res.status(500).send({ err: "Something went wrong when deleting the todo..."})
  }
}

module.exports = {
  get_todos,
  add_todo,
  update_todos,
  delete_todos,
  delete_todo
}