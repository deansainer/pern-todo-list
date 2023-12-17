const db = require("../db");

class TodoController {

  async get_todos(req, res) {
    try {
      const todos = await db.query("select * from todo;");
      res.json(todos.rows);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }
  
  async get_todo(req, res) {
    try {
      const { id } = req.params;
      const todo = await db.query('select * from todo where id = $1', [id]);
      res.json(todo.rows[0]);
    } catch (error) {
      console.error("Error fetching todo:", error);
    }
  }

  async create_todo(req, res) {
    try {
      const { description } = req.body;
      const todo = await db.query('insert into todo (description) values ($1) returning *', [description]);
      res.json(todo.rows[0]);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  }

  async delete_todo(req, res) {
    try {
      const { id } = req.params;
      const todo = await db.query('delete from todo where id=$1 returning *', [id]);
      res.json(todo.rows[0]);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }

  async update_todo(req, res) {
    try {
      const { description, id } = req.body;
      const todo = await db.query('update todo set description=$1 where id=$2 returning *', [description, id]);
      res.json(todo.rows[0]);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }

}

module.exports = new TodoController();
