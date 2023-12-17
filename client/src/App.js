import Todo from "./pages/Todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <Todo todos={todos} setTodos={setTodos}/>
        <TodoInput todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
