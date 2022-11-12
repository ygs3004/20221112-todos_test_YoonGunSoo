import styled from "styled-components";
import {
  AiOutlineCheckCircle,
  AiFillCheckCircle,
  AiFillDelete,
} from "react-icons/ai";
function TodoItem({ todo, onRemove, onToggle }) {
  const { id, text, done } = todo;
  return (
    <TodoItemBlock>
      <CheckBtn onClick={() => onToggle(id)}>
        {done ? <AiOutlineCheckCircle /> : <AiFillCheckCircle />}
      </CheckBtn>
      <TodoText done={done}>{text}</TodoText>
      <AiFillDelete onClick={() => onRemove(id)} />
    </TodoItemBlock>
  );
}

const TodoItemBlock = styled.li`
  display: flex;
  margin: 30px;
`;

const TodoText = styled.div`
  text-decoration: ${(props) => !props.done && "line-through"};
  opacity: ${(props) => !props.done && "0.3"};
  flex: 1;
  font-size: 1.5rem;
`;

const CheckBtn = styled.div`
  margin-right: 15px;
`;

export default TodoItem;
