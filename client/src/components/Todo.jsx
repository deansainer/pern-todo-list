import React from 'react'
import classes from './Todo.module.css'
import axios from 'axios';
import { useState } from 'react';


const Todo = (props) => {

  
  async function deleteTodo(todoId){
    await axios.delete(`http://localhost:3001/api/todos/${todoId}`)                 //deletes from server side
    props.setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId))   //deletes from client side
  }

  async function changeIsCompletedValue(todoId){
    await axios.put(`http://localhost:3001/api/todos/${todoId}`, {is_completed: !props.todo.is_completed})
    window.location='/'
  }


  return (
    <div className={props.todo.is_completed ? classes.completed_todo : classes.todo}>
      {props.todo.description}
      <div className={classes.actions}>
        <img src='https://cdn-icons-png.flaticon.com/128/3161/3161829.png?ga=GA1.1.1124197093.1701177500&semt=ais' alt='COMPLETED' onClick={() => changeIsCompletedValue(props.todo.id)} className={classes.action_button}></img>
        <img src='https://cdn-icons-png.flaticon.com/128/3405/3405244.png?ga=GA1.1.1124197093.1701177500&semt=ais' alt='DELETE' onClick={() => deleteTodo(props.todo.id)} className={classes.action_button}></img>
      </div>
    </div>
  )
}

export default Todo

