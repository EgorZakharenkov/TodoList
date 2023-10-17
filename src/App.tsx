import React from "react";
import "./App.css";

import { TodoList } from "./components/TodoList/TodoList";
import { CreateTask } from "./components/CreateTask/CreateTask";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Todo List</h1>
      <CreateTask />
      <TodoList />
    </div>
  );
}

export default App;
