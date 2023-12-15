const db = require("../db");

class TodoController {

  async get_todos(req, res) {
    const todos = await db.query("select * from todo;");
    res.json(todos.rows);
  }
  
  async get_todo(req, res) {
    const { id } = req.params;
    const todo = await db.query('select * from todo where id = $1', [id])
    res.json(todo.rows[0])
  }

  async create_todo(req, res) {
    const {description} = req.body;
    const todo = await db.query('insert into todo (description) values ($1)', [description])
    res.json(todo.rows[0])
  }

  async delete_todo(req, res){
    const {id} = req.params;
    const todo = await db.query('delete from todo where id=$1', [id])
    res.json(todo.rows[0])
  }

  async update_todo(req, res) {
    const {description, id} = req.body;
    const todo = await db.query('update todo set description=$1 where id=$2', [description, id])
    res.json(todo.rows[0])
  }

}

module.exports = new TodoController();
