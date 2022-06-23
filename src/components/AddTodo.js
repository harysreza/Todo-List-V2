import {
  Form,
  FormControl,
  FormInput,
  InputButton,
} from "./styles/AddTodo.style";
import { RiAddCircleLine } from "react-icons/ri";
import { useEffect } from "react";

const AddTodo = ({ input, setInput, editTodo, setEditTodo, handleSubmit }) => {
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <FormInput
          type="text"
          placeholder="Add a Todo..."
          maxLength="40"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <InputButton type="submit">
          <RiAddCircleLine />
        </InputButton>
      </FormControl>
    </Form>
  );
};

export default AddTodo;
