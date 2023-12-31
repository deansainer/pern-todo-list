import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Todo from './Todo'
import classes from './TodoList.module.css'

const TodoList = (props) => {
    useEffect(() => {
      axios
      .get('http://localhost:3001/api/todos')
      .then(response => props.setTodos(response.data))
    }, [])



    return (
      <div className={classes.todo_list}>
        <div>
        {props.todos.map((todo) => (
          <Todo todo={todo} setTodos={props.setTodos}/>
        ))}
        </div>
      </div>
  )
}

export default TodoList