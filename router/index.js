const express = require("express")
const router = express.Router()
const todoController = require("../controller")

router.get("/todos", todoController.get_todos)
router.post("/add-todo", todoController.add_todo)
router.put("/update-todos", todoController.update_todos)
router.delete("/delete-todos", todoController.delete_todos)
router.delete("/delete-todo", todoController.delete_todo)

module.exports = router