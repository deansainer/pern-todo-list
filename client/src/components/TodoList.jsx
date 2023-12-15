import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Todo from './Todo'
import classes from './TodoList.module.css'

const TodoList = () => {
  const [todos, setTodos] = useState([])
    useEffect(() => {
      axios
      .get('http://localhost:3001/api/todos')
      .then(response => setTodos(response.data))
    }, [])

    return (
      <div className={classes.todo_list}>
        <div>
        {todos.map((todo) => (
          <Todo id={todo.id} description={todo.description}/>
        ))}
        </div>
      </div>
  )
}

export default TodoList