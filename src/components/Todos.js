import Todo from "./Todo";

const Todos = ({
  todos,
  setEditTodo,
  handleComplete,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="todo-app">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleComplete={handleComplete}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Todos;
