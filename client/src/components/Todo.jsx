import React from 'react'
import classes from './Todo.module.css'
import axios from 'axios';

const Todo = (props) => {
  const {id, description} = props;

  async function deleteTodo(){
    try{
      await axios.delete(`http://localhost:3001/api/todos/${id}`)
      .then(response => console.log(response.status))
    } catch(error){
      console.error(error);
    }
  }
  return (
    <div className={classes.todo}>
      {description}
      <button onClick={deleteTodo} className={classes.delete_button}>Delete</button>
    </div>
  )
}

export default Todo
