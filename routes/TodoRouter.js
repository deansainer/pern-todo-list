const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/TodoController");

router.get("/todos", TodoController.get_todos);
router.get("/todos/:id", TodoController.get_todo);
router.post("/todos", TodoController.create_todo);

module.exports = router;
