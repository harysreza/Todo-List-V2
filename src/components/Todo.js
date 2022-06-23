import { TodoContainer } from "./styles/Todo.style";
import { BsCheck2Circle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { buttonEdit, buttonDelete } from "./styles/Variables";

const Todo = ({ todo, handleComplete, handleEdit, handleDelete }) => {
  return (
    <TodoContainer todo={todo}>
      <h3>{todo.text}</h3>
      <BsCheck2Circle onClick={() => handleComplete(todo.id)} />
      <AiOutlineEdit color={buttonEdit} onClick={() => handleEdit(todo.id)} />
      <MdDeleteOutline
        color={buttonDelete}
        onClick={() => handleDelete(todo.id)}
      />
    </TodoContainer>
  );
};

export default Todo;
