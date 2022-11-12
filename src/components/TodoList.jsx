import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </TodoListBlock>
  );
}

const TodoListBlock = styled.div`
  width: 70%;
  font-size: 1.5rem;

  flex: 1;
`;

export default TodoList;
