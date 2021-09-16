import React, {useState, useEffect} from 'react';

//projects components
import Header from './components/Header';
import Form from './components/Form';
import TodosList from './components/TodosList';

function App() {

  //using state hook
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  //using useEffect hook
  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <Header/>
      </div>
      <div>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div>
        <TodosList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
      </div>
    </div>
  );
}

export default App;
