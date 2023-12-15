import Todo from "./pages/Todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Todo/>
        <TodoInput/>
        <TodoList/>
    </div>
  );
}

export default App;
