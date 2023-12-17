import React from 'react'
import classes from './Todo.module.css'
import axios from 'axios';

const Todo = (props) => {
  async function deleteTodo(todoId){
    await axios.delete(`http://localhost:3001/api/todos/${todoId}`)
    props.setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId))
  }

  return (
    <div className={classes.todo}>
      {props.description}
      <button onClick={() => deleteTodo(props.id)} className={classes.delete_button}>Delete</button>
    </div>
  )
}

export default Todo
