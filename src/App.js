import { useState } from "react";

import Header from "./components/Header";
import Todos from "./components/Todos";

import { Container } from "./components/styles/Container.style";
import AddTodo from "./components/AddTodo";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editTodo) {
      if (!input) {
        return;
      }
      const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
      setTodos([...todos, { id, text: input }]);
      setInput("");
    } else {
      updateTodo(editTodo.id, input);
    }
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const handleEdit = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const updateTodo = (id, input) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { id, text: input } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <Header title="Todo List App" />
      <AddTodo
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        handleSubmit={handleSubmit}
      />
      <Todos
        todos={todos}
        handleComplete={handleComplete}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </Container>
  );
}

export default App;
