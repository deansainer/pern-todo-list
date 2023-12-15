const db = require("../db");

class TodoController {

  async get_todos(req, res) {
    const todos = await db.query("select * from todo;");
    res.json(todos.rows);
  }

  async get_todo(req, res) {
    const { id } = req.params;
    const todo = await db.query('select * from todo where id = $1', [id])
  }

  async create_todo(req, res) {
    const {description} = req.body;
    const todo = await db.query('insert into todo (description) values ($1)', [description])
    res.json(todo.rows[0])
  }

}

module.exports = new TodoController();
