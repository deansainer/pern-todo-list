import React, { useState } from "react";
import classes from './TodoInput.module.css'
import axios from 'axios'

const TodoInput = (props) => {
  const [description, setDescription] = useState('')
  
  async function onSubmitForm(event) {
    event.preventDefault()
    try{
      if (description){
        axios.post('http://localhost:3001/api/todos', {description: description, isCompleted: false}, {  // same as: 'description' : description
        headers: { 'Content-Type': 'application/json' },
        })
        window.location = '/'
      }
    }catch(error){
      console.error(error)
      }
  }

  return (
    <div className={classes.todo_form}>
        <form onSubmit={onSubmitForm}>
          <input className={classes.form_input} value={description} onChange={(event) => setDescription(event.target.value)} type="text" placeholder="Finish my housework" id="todo"></input>
          <button className={classes.form_btn} type="submit">Add</button>
        </form>
    </div>
  );
};

export default TodoInput;
