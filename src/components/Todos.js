import Todo from "./Todo";

const Todos = ({ todos, handleComplete, handleEdit, handleDelete }) => {
  return (
    <div>
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
